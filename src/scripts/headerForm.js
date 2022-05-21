export default () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get('phone'))
  });
};
