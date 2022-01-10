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

//close lightbox
    const closeLightboxBtn = document.querySelector(".gallery-close");
    const lightbox = document.querySelector(".left-gallery");

    const closeLightbox = () => {
        lightbox.style.display = "none";
    };
    closeLightboxBtn.addEventListener("click", closeLightbox);

// open lightbox
    productPageBigImage.addEventListener("click", () => {
        lightbox.style.display = "flex";
    });