export default () => {

    const contacts = document.querySelector('.header-contacts');
    const showContactsButton = document.querySelector('.heading-contact-container button');


      showContactsButton.addEventListener('click', () => {
          contacts.classList.toggle('active')
      })

}