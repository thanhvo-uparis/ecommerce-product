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


