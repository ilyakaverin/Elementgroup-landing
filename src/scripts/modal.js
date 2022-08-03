export default () => {
    const modalButtons = document.querySelectorAll('.main-price-container-inner-card > button');
    const modal = document.querySelector('.modal__root');
    const templates = document.querySelectorAll("template");
    const modalInner = document.querySelector('.modal_inner');
    const modalClose = document.querySelector('.modal_close')

    modalButtons.forEach(button => {
        
        button.addEventListener('click', () => {
            modal.classList.add('open');
            document.querySelector('body').style.overflow = 'hidden'
            const currentTemplate = templates[button.dataset.target];
            const clone = currentTemplate.content.cloneNode(true);
            modalInner.innerHTML = null
            modalInner.append(clone)

          })
    })

    modal.addEventListener('click', (e) => {

        if(e.target === modal || e.target === modalClose) {
            modal.classList.remove('open');
            document.querySelector('body').style.overflow = null
        } 
    })

}