
export const scrollTo = (topValue = 0, bottomValue) => {

  document.documentElement.scrollTo({
    top: topValue,
    bottom: bottomValue,
    behavior: 'smooth'
  }); 

}

export const scrollFunction = (button) => {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }