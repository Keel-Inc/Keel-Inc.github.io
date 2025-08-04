/**
 * Creates image props with alt and title set to the same description
 * to avoid duplication when both attributes should be identical
 */
export function createImageProps(description: string) {
  return {
    alt: description,
    title: description
  };
}
