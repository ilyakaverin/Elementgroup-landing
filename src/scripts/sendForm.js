import axios from "axios";
import onChange from "on-change";

export default () => {
  const forms = document.querySelectorAll(".phoneForm");

  const state = {
    loading: false,
    data: null,
    currentButton: null,
  };

  const observer = onChange(state, async (path, value) => {
    if (path === "data") {
      try {
        await axios.post("send.php", state.data);
      } catch (e) {
        console.log("eba");
        observer.loading = false;
      }
    }

    if (path === "loading") {
      switch (value) {
        case true:
          state.currentButton.textContent = "Отправка";
          state.currentButton.setAttribute("disabled", true);
          break;
        case false:
          state.currentButton.textContent = "Отправили";
      }
    }
  });

  forms.forEach((form) => {
    const button = form.querySelector(" button");
    observer.currentButton = button;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputData = new FormData(e.target);
      observer.loading = true;
      observer.data = inputData;
    });
  });
};
