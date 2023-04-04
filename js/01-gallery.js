import { galleryItems } from './gallery-items.js';
// Change code below this line

//  {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
//     description: 'Container Haulage Freight',
//   },
// console.log(galleryItems);



const glalleryList = document.querySelector("ul");
// console.log( glalleryList);
const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`);
// console.log(markup.join(""));
// glalleryList.classList.add("gallery");
glalleryList.insertAdjacentHTML("beforeend", markup.join(""));

glalleryList.addEventListener("click", onPicClick);
let instance;
function onPicClick(evt) {
  console.log(evt.currentTarget.classList.value);
    instance= basicLightbox.create(`
    <img src="${evt.target.dataset.source}">`)
    evt.preventDefault()
   
    
  if (evt.target.classList.value === "gallery__image") {
    instance.show();
    }
    
    
}
const closeOnKeyboard = window.addEventListener("keydown", onKeyClose);
function onKeyClose(evt) {

    if ( basicLightbox.visible()&&evt.code === "Escape") {
        instance.close();
        // console.dir(evt.code);
    }
    
}




    



