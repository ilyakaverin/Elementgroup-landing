export default () => {
 const pictures = document.querySelectorAll('.main-content-gallery-inner-container .gallery .pic');
 const modal = document.querySelector('.modal__root');
 const modalInner = document.querySelector('.modal_inner');
 const next = document.querySelector('.gallery__mobile_next');
 const prev = document.querySelector('.gallery__mobile_prev');
 
 pictures.forEach(picture => {
     picture.addEventListener('click', () => {
         const image = picture.querySelector('img');
         const url = image.src;
         const img = document.createElement('img');
         img.src = url;
         modalInner.innerHTML = null
         modalInner.append(img);
         modal.classList.add('open');
     })
 })

 next.addEventListener('click', () => {
     for(const pic of pictures) {
         pic.classList.add('showpic')
     }
 })

 
}