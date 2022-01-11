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


//partie lightbox
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

//left btn
    const lightboxBigImage = document.querySelector(".gallery-inner img");       
    const lightboxLeftBtn = document.querySelector(".gallery-controle-prev");
    
    let startIndex = 0;
    
    lightboxLeftBtn.addEventListener("click", () => {
    const images = document.querySelectorAll(".gallery-items-img img");

    // // Find the img with the active class
    images.forEach((img, i) => {
        if (img.classList.contains("gallery-items-img-active")) {
        startIndex = i;
        img.classList.remove("gallery-items-img-active");
        }
    });
    if (startIndex > 0) {
        startIndex--;
    }
    images[startIndex].classList.add("gallery-items-img-active");

    let item = images[startIndex].querySelector("img");
    lightboxBigImage.src = item.src.replace("-thumbnail", "");
    });