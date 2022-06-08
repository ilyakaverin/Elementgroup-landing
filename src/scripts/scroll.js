export default () => {
  const topButton = document.querySelector(".arrow-up");
  const scrollToCalculator = document.querySelector(".arrow-down");

  const scrollTo = (topValue = 0, bottomValue) => {
    document.documentElement.scrollTo({
      top: topValue,
      bottom: bottomValue,
      behavior: "smooth",
    });
  };

  const scrollFunction = (button) => {
    if (
      document.body.scrollTop > 800 ||
      document.documentElement.scrollTop > 800
    ) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };

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
};
