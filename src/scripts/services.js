export default () => {
    const buttons = document.querySelectorAll('.main-content-start-service > button');
    const descContainer = document.querySelector('.main-content-start-service-desc');
    const desc = document.querySelector('.main-content-start-service-desc-inner');
    const services = document.querySelector('.main-content-start-services');
    const allService = document.querySelectorAll('.main-content-start-service');
    const templates = document.querySelectorAll('template');
    const close = document.querySelector('.close-button');
    const scrollToService = document.querySelector('.main-content-start-inner')



    buttons.forEach(button => {
        button.addEventListener('click', () => {
            scrollToService.scrollIntoView();
           allService.forEach(service => {
               service.classList.add('hide')
           })
           const currentTemplate = templates[button.dataset.target];
           const clone = currentTemplate.content.cloneNode(true);
           desc.innerHTML = '';
           desc.append(clone);
           descContainer.classList.add('show');

        })
    })

    close.addEventListener('click', () => {
        descContainer.classList.remove('show');
        allService.forEach(service => {
            service.classList.remove('hide')
        })
    })
}