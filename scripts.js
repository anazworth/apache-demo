let current = 1;

function nextImage() {
  let image = document.getElementById('curry-image');
  // current = current + 1 unless current == 3
  current = current === 3 ? 1 : current + 1;
  image.src = `images/image_${current}.png`;
}



