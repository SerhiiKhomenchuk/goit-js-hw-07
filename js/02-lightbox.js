import { galleryItems } from './gallery-items.js';
// Change code below this line
// {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   },


// console.log(galleryItems);
const galleryList = document.querySelector(".gallery");
// console.log(galleryList); 
const markup = galleryItems.map(({ preview, original, description }) => 
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
   </a>
</li>`
);
galleryList.insertAdjacentHTML("beforeend", markup.join(""));



let gallery = new SimpleLightbox(".gallery__item .gallery__link", {
      // enableKeyboard,
      captionDelay: 250,
      captionsData: "alt",
      

   
})

