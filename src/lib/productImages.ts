import { assetPath } from "./assetPath";

/** Local bundled images — reliable for dev, build, and GitHub Pages */
export const productImages = {
  "aurapods-pro-x": assetPath("/images/products/aurapods-pro-x.svg"),
  "novawatch-ultra": assetPath("/images/products/novawatch-ultra.svg"),
  "pulseband-elite": assetPath("/images/products/pulseband-elite.svg"),
  "zenboard-mechanical": assetPath("/images/products/zenboard-mechanical.svg"),
  "glidemouse-pro": assetPath("/images/products/glidemouse-pro.svg"),
  "lumahub-smart-home": assetPath("/images/products/lumahub-smart-home.svg"),
  "snapcharge-mag-dock": assetPath("/images/products/snapcharge-mag-dock.svg"),
  "echoframe-ar-lite": assetPath("/images/products/echoframe-ar-lite.svg"),
} as const;

export const categoryImages = {
  "smart-watches": assetPath("/images/categories/smart-watches.svg"),
  headphones: assetPath("/images/categories/headphones.svg"),
  gaming: assetPath("/images/categories/gaming.svg"),
  keyboards: assetPath("/images/categories/keyboards.svg"),
  "smart-home": assetPath("/images/categories/smart-home.svg"),
  mobile: assetPath("/images/categories/mobile.svg"),
} as const;

export const avatarImages = {
  sarah: assetPath("/images/avatars/sarah.svg"),
  james: assetPath("/images/avatars/james.svg"),
  emily: assetPath("/images/avatars/emily.svg"),
  marcus: assetPath("/images/avatars/marcus.svg"),
} as const;
