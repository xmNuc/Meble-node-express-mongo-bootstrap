export function kitchen() {
  return [
    { src: '/uploads/photos/kitchen/k1 [re].jpg', thumb: '', subHtml: '' },
    { src: '/uploads/photos/kitchen/k2 [re].jpg', thumb: '', subHtml: '' },
  ];
}
export function stairs() {
  return [
    { src: '/uploads/photos/stairs/DSC00042 [re]', thumb: '', subHtml: '' },
    { src: '/uploads/photos/stairs/DSC00045 [re]', thumb: '', subHtml: '' },
  ];
}
export function all() {
  return map(kitchen(), stairs());
}
