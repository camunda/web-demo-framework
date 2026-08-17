# Seed image attributions — plate-recognition example

These car photos seed the in-browser vision demo (epic #67). Every image is
under a reusable licence (CC0 or CC BY-SA) and is attributed below. They are
publicly-licensed photos already published on Wikimedia Commons / Flickr in a
public context, used here illustratively to demonstrate reading a number plate
from a photo — no private or "all rights reserved" images are used.

The machine-readable manifest lives in [`images.json`](./images.json); the
`groundTruthPlate` for each image (asserted by the falsifiability eval) is the
exact plate text visible in the photo.

| id | plate (region) | author | licence | source |
|----|----------------|--------|---------|--------|
| `uk-mk70-orj` | `MK70 ORJ` (UK, current) | Harvey Bold | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) | [Commons](https://commons.wikimedia.org/wiki/File:UK_Number_Plate_MK70_ORJ_(MK_-_Manchester)_-_70_Plate_(1st_September_2020_-_28th_February_2021)_-_VW_Golf_(CarShop).jpg) |
| `uk-ni-ijz-8992` | `IJZ 8992` (UK, Northern Ireland) | Harvey Bold | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) | [Commons](https://commons.wikimedia.org/wiki/File:UK_(Northern_Ireland)_Number_Plate_IJZ_8992_(JZ_-_Down_(NI)_)_-_Dateless_Plate_-_Ford_Fiesta_(Woolston_Car_Centre).jpg) |
| `uk-d651-rnb` | `D651 RNB` (UK, prefix) | Harvey Bold | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) | [Commons](https://commons.wikimedia.org/wiki/File:UK_Number_Plate_D651_RNB_(NB_-_Manchester)_-_D_Reg_(1st_August_1986_-_31st_July_1987)_-_Ford_Capri_(The_Quick_Group).jpg) |
| `de-bmw-mini` | `MS WL 545` (Germany, EU) | Dietmar Rabich | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | [Commons](https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Dernekamp,_BMW_Mini_--_2018_--_1545-51.jpg) |
| `us-hyundai-genesis` | `GWAN EUM` (US, California) | Scarlet Sappho | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) | [Commons](https://commons.wikimedia.org/wiki/File:Hyundai_Genesis_3.8_(US)_(9004912958).jpg) |

## Full attributions

- **`uk-mk70-orj`** — Harvey Bold, *"UK Number Plate MK70 ORJ (MK - Manchester) - 70 Plate"*.
  Wikimedia Commons. Dedicated to the public domain under **CC0 1.0**.
- **`uk-ni-ijz-8992`** — Harvey Bold, *"UK (Northern Ireland) Number Plate IJZ 8992 (JZ - Down (NI)) - Dateless Plate"*.
  Wikimedia Commons. Dedicated to the public domain under **CC0 1.0**.
- **`uk-d651-rnb`** — Harvey Bold, *"UK Number Plate D651 RNB (NB - Manchester) - D Reg"*.
  Wikimedia Commons. Dedicated to the public domain under **CC0 1.0**.
- **`de-bmw-mini`** — Dietmar Rabich / Wikimedia Commons / *"Dülmen, Dernekamp, BMW Mini -- 2018 -- 1545-51"* / **CC BY-SA 4.0**.
- **`us-hyundai-genesis`** — Scarlet Sappho, *"Hyundai Genesis 3.8 (US)"*.
  Wikimedia Commons (originally Flickr). **CC BY-SA 2.0**.

Images were downscaled and re-encoded as JPEG for bundle weight; a `*.thumb.jpg`
thumbnail accompanies each full-size photo. No other modifications were made.
Under the ShareAlike terms, these derivative (resized) copies remain under the
same licence as their source.
