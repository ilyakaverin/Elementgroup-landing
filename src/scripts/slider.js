export default () => {
    const slider = document.querySelector(".slider");
const sliderContent = document.querySelector(".item-wrapper");
const sliderItems = sliderContent.querySelectorAll(".pic");
const itemCount = sliderItems.length;
const prevBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
const indicatorWrapper = document.querySelector(".indicator-wrapper");

let currentIndex = 0;

const handleButtonClick = (direction) => {
  if (direction === "left") {
    currentIndex++;

    if (currentIndex > itemCount - 1) {
      currentIndex = 0;
    }
  } else {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = itemCount - 1;
    }
  }

  moveSlide();
  styleIndicator();
};

const handleIndicatorClick = (e) => {
  if (!e.target.classList.contains("indicator")) return;

  currentIndex = e.target.dataset.index;

  moveSlide();
  styleIndicator();
};

const initIndicators = () => {
  for (let i = 0; i < itemCount; i++) {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicator.dataset.index = i;
    indicatorWrapper.appendChild(indicator);
  }

  styleIndicator();
};

const styleIndicator = () => {
  const indicators = indicatorWrapper.querySelectorAll(".indicator");
  indicators.forEach((indicator) => indicator.classList.remove("current"));
  indicators[currentIndex].classList.add("current");
};

const moveSlide = () => {
  const sliderWidth = slider.clientWidth;
  sliderContent.style.transform = `translateX(-${
    currentIndex * sliderWidth
  }px)`;
};

const addEventListeners = () => {
  prevBtn.addEventListener("click", () => handleButtonClick("left"));
  nextBtn.addEventListener("click", () => handleButtonClick("right"));
  indicatorWrapper.addEventListener("click", handleIndicatorClick);
};

const init = () => {
  addEventListeners();
  initIndicators();
};

init();
}