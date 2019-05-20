export function getFileExtention(image) {
  let name = image.split('/');
  return {
    name: name[0],
    ext: name[1],
  }
}