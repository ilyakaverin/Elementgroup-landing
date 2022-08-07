import onChange from 'on-change';

export default () => {
 const pictures = document.querySelectorAll('.main-content-gallery-inner-container .gallery .pic');
 const modal = document.querySelector('.modal__root');
 const modalInner = document.querySelector('.modal_inner');
 const next = document.querySelector('.gallery__mobile_next');
 const prev = document.querySelector('.gallery__mobile_prev');
 const view = document.querySelector('.main-content-gallery-inner-container')
 
 pictures.forEach(picture => {
     picture.addEventListener('click', () => {
         const image = picture.querySelector('img');
         const url = image.src;
         const img = document.createElement('img');
         img.setAttribute('loading', 'lazy')
         img.src = url;
         modalInner.innerHTML = null
         modalInner.append(img);
         modal.classList.add('open');
     })
 });

 const state = {
     current: 0
 }
 pictures[state.current].classList.add('showpic');
 prev.setAttribute('disabled', true)

const observer = onChange(state, (_, value, previous) => {

    pictures[previous].classList.remove('showpic');
    pictures[value].classList.add('showpic');
    if(value === pictures.length - 1) {
        next.setAttribute('disabled', true)
    } else {
        next.removeAttribute('disabled')
    }
    if(value === 0) {
        prev.setAttribute('disabled', true)
    } else {
        prev.removeAttribute('disabled')
    }
  

})

 next.addEventListener('click', () => {
    view.scrollIntoView();
    observer.current = observer.current += 1
    
 })
 prev.addEventListener('click', () => {
    view.scrollIntoView();
    observer.current = observer.current -= 1
    
 })

 
}