// change big image of gallery
const productPageBigImage = document.querySelector(".left_product-big-image img");

const allSmallImagesMainPage = document.querySelectorAll(
    ".left_product-item img"
  );
  
  allSmallImagesMainPage.forEach((img) => {
    img.addEventListener("click", () => {
      allSmallImagesMainPage.forEach((child) => {
        child.parentElement.classList.remove(
          "left_product-item-active"
        );
      });
      img.parentElement.classList.add("left_product-item-active");
      productPageBigImage.src = img.src.replace("-thumbnail", "");
    });
  });
// end-change big image of gallery

const images = document.querySelectorAll('.left_product-item img')
const gallery = document.querySelector('.left-gallery')
const galleryImg = document.querySelector('.gallery-inner img')
const close = document.querySelector('.gallery-close')

const next = document.querySelector('.gallery-controle-next')
const prev = document.querySelector('.gallery-controle-prev')

let currentIndex = 0

galleryImg.forEach((img, index) => {
	img.addEventListener('click', () => {
		currentIndex = index
		showGallery()
	})
})

function showGallery() {
	currentIndex == galleryImg.length - 1
		? next.classList.add('hide')
		: next.classList.remove('hide')

	currentIndex == 0 ? prev.classList.add('hide') : prev.classList.remove('hide')

	gallery.classList.add('show')
	galleryImg.src = galleryImg[currentIndex].src
}
/*
close.addEventListener('click', () => {
	gallery.classList.remove('show')
})

next.addEventListener('click', () => {
	currentIndex != images.length - 1 ? currentIndex++ : undefined
	showGallery()
})
prev.addEventListener('click', () => {
	currentIndex != 0 ? currentIndex-- : undefined
	showGallery()
})
*/
