import { galleryItems } from './gallery-items.js';
// Change code below this line

function renderMarkup(items) {
    return items
      .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
      })
      .join("");
  }
  
  const galleryContainer = document.querySelector(".gallery");
  const galleryMakrup = renderMarkup(galleryItems);
  galleryContainer.insertAdjacentHTML("beforeend", galleryMakrup);
  
  galleryContainer.addEventListener("click", onClickGetModal);
  
  function onClickGetModal(evt) {
    evt.preventDefault();
  
    const isImage = evt.target.classList.contains("gallery__image");
  
    if (!isImage) {
      return;
    }
    const currentImage = evt.target;
  
    const instance = basicLightbox.create(`
          <img src="${currentImage.dataset.source}" alt="${currentImage["alt"]}" >
          `);
    instance.show();
  
    document.addEventListener("keydown", onCloseModal);
  
    function onCloseModal(evt) {
      // console.log(evt.key);
      if (evt.key === "Escape") {
        instance.close();
        document.removeEventListener("keydown", onCloseModal);
      }
    }
  }
  

console.log(galleryItems);


