export default () => {

    const cookie = 'coooookie om nom nom';

    if(!sessionStorage.getItem('wasHere')) {
        sessionStorage.setItem('wasHere', cookie)
    } else {
        const animated = document.querySelectorAll('.animated');
        animated.forEach((node, index) => node.classList.remove(`animation-${index}`));
    }

}