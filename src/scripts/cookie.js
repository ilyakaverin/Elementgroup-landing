export default () => {
  const cookie = "coooookie om nom nom";
  const cookieNotice = document.querySelector(".cookies");

  if (!sessionStorage.getItem("wasHere")) {
    sessionStorage.setItem("wasHere", cookie);
  } else {
    const animated = document.querySelectorAll(".animated");
    animated.forEach((node, index) =>
      node.classList.remove(`animation-${index}`)
    );
  }
  if (!localStorage.getItem("wasHere")) {
    const cookieClose = document.querySelector(".cookies > button");

    cookieClose.addEventListener("click", () => {
      cookieNotice.remove();
    });
    localStorage.setItem("wasHere", cookie);
  } else {
    cookieNotice.remove();
  }
};
