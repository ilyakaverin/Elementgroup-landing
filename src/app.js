export default () => {

    const cookie = 'coooookie om nom nom';

    if(!localStorage.getItem('wasHere')) {
        localStorage.setItem('wasHere', cookie)
    } else {
        const animated = document.querySelectorAll('.animated');
        animated.forEach((node, index) => node.classList.remove(`animation-${index}`));
    }

}