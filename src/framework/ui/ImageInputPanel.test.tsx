import { act, cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ImageInputPanel } from "./ImageInputPanel";
import type { RunImage } from "../imageInput";

afterEach(cleanup);

const IMAGE_INPUT = {
  label: "Pick a car photo",
  seedImages: [
    { id: "uk-mk70-orj", file: "images/a.jpg", thumb: "images/a.thumb.jpg", label: "UK MK70 ORJ" },
    { id: "de-bmw-mini", file: "images/b.jpg", thumb: "images/b.thumb.jpg", label: "DE MS WL 545" },
  ],
};

describe("ImageInputPanel (contract B start affordance)", () => {
  it("renders the seed gallery and an image upload control", () => {
    render(
      <ImageInputPanel imageInput={IMAGE_INPUT} value={null} onSelect={() => {}} />,
    );
    expect(screen.getByText("Pick a car photo")).toBeInTheDocument();
    const gallery = screen.getByRole("group", { name: "Seed photos" });
    expect(within(gallery).getAllByRole("button")).toHaveLength(2);
    const upload = screen.getByLabelText("Or upload your own photo") as HTMLInputElement;
    expect(upload).toBeTruthy();
    expect(upload.getAttribute("accept")).toBe("image/*");
  });

  it("picking a seed thumbnail reports { imageId, pixels }", () => {
    const onSelect = vi.fn<(image: RunImage | null) => void>();
    render(
      <ImageInputPanel imageInput={IMAGE_INPUT} value={null} onSelect={onSelect} />,
    );
    fireEvent.click(within(screen.getByRole("group", { name: "Seed photos" })).getAllByRole("button")[1]);
    expect(onSelect).toHaveBeenCalledWith({
      imageId: "de-bmw-mini",
      pixels: "images/b.jpg",
    });
  });

  it("uploading a photo reports { imageName, pixels } as the original File", async () => {
    const onSelect = vi.fn<(image: RunImage | null) => void>();
    render(
      <ImageInputPanel imageInput={IMAGE_INPUT} value={null} onSelect={onSelect} />,
    );
    const file = new File(["binarydata"], "my-car.png", { type: "image/png" });
    const upload = screen.getByLabelText("Or upload your own photo") as HTMLInputElement;
    await act(async () => {
      fireEvent.change(upload, { target: { files: [file] } });
    });
    await waitFor(() => expect(onSelect).toHaveBeenCalled());
    const arg = onSelect.mock.calls.at(-1)![0]!;
    expect(arg.imageName).toBe("my-car.png");
    // The pixels are the original File (a Blob) — not a base64 data URL copy —
    // so a live brain reads the bytes directly. VisionImage accepts a Blob.
    expect(arg.pixels).toBe(file);
  });
});
