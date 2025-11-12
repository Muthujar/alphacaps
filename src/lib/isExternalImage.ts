export const isExternalImage = (src?: string) =>
  typeof src === "string" && /^https?:\/\//i.test(src);

