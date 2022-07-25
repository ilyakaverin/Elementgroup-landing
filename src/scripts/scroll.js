export const scrollFunction = (button) => {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};
export const scrollTo = (topValue = 0, bottomValue) => {
  document.documentElement.scrollTo({
    top: topValue,
    bottom: bottomValue,
    behavior: "smooth",
  });
};

export default () => {
  const topButton = document.querySelector(".arrow-up");
  const scrollToCalculator = document.querySelector(".calc");
  const scrollToOffer = document.querySelector(".offers");
  const scrollToFaq = document.querySelector(".faq");

  window.onscroll = function () {
    scrollFunction(topButton);
  };
  topButton.onclick = scrollTo;

  scrollToCalculator.addEventListener("click", () => {
    const element = document.getElementById("calculator");
    const position = element.getBoundingClientRect();
    const osX = position.left;
    const osY = position.top;
    scrollTo(osY, osX);
  });
  scrollToOffer.addEventListener("click", () => {
    const element = document.querySelector(".main-price-container");
    const position = element.getBoundingClientRect();
    const osX = position.left;
    const osY = position.top;
    scrollTo(osY, osX);

  })
  scrollToFaq.addEventListener("click", () => {
    const element = document.querySelector(".main-faq-container");
    const position = element.getBoundingClientRect();
    const osX = position.left;
    const osY = position.top;
    scrollTo(osY, osX);

  })
};
