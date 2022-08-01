export default () => {
    const modalButtons = document.querySelectorAll('.main-price-container-inner-card > button');
    const modal = document.querySelector('.modal__root');

    modalButtons.forEach(button => {
        
        button.addEventListener('click', () => {
            modal.classList.add('open');
            console.log(button.dataset.target)
      
          })
    })

    modal.addEventListener('click', (e) => {

        if(e.target === modal) {
            modal.classList.remove('open');
        } 
    })

}