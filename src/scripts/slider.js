import $ from 'jquery';

export default () => {
    var index = document.getElementsByClassName('image');
    var length = index.length;
    var slide = 0;
    
    // we run through the collection of elements and assign display: none to them;
    for (var i = 1; i < index.length; i++) {
        index[i].style.display = 'none';
    }
    // button to the right;
    document.getElementById('right').onclick = function Right () {
        if(slide == length-1){
            index[0].style.display = "block";
            index[slide].style.display = "none";
            slide = 0;
        } else {
            index[slide+1].style.display = "block";
            index[slide].style.display = "none";
            slide++;
        }
    }
    // button to the left;
    document.getElementById('left').onclick = function Left () {
        if(slide <= 0) {
            index[slide].style.display = "none";
            slide = length;
            slide--;
            index[slide].style.display = "block";
        } else {
            index[slide].style.display = "none";
            slide--;
            index[slide].style.display = "block";
        }
    }
    
}