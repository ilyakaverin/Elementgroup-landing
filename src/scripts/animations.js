export default () => {
  const Cards = {
    init: () => {
      Cards.triggerCardChange();
      Cards.directlyClickOnCards();
    },

    //  Change the active Card on directly clicking on it
    // - - - - - - - - - - - - - - - - - - - - - - - - - -

    directlyClickOnCards: () => {
      let cards = conf.qSA(".card");
      if (cards.length) {
        cards.forEach(function (item) {
          item.onclick = () => {
            if (!item.classList.contains("active")) {
              // search the active card
              for (let i = 0; i < cards.length; i++) {
                if (cards[i].classList.contains("active")) {
                  let dataCard = cards[i];
                  dataCard.classList.add("inactive");
                  dataCard.classList.remove("active");
                  break;
                }
              }

              conf.qS(".cards-wrapper").prepend(item);
              item.classList.remove("inactive");
              item.classList.add("active");
            }
          };
        });
      }
    },

    //  Change the active Card
    // - - - - - - - - - - - - - - - - - - - - - - - - - -

    triggerCardChange: () => {
      let arrow = conf.qS(".slide-button"),
        cards = conf.qSA(".card");

      if (arrow) {
        arrow.onclick = () => {
          if (cards.length) {
            for (let i = 0; i < cards.length; i++) {
              if (cards[i].classList.contains("active")) {
                let dataCard = cards[i];
                getNextCard(dataCard);
                break;
              }
            }
          }

          function getNextCard(prevCard) {
            for (let i = 0; i < cards.length; i++) {
              let dataCard = parseInt(prevCard.getAttribute("data-card"), 10),
                nextCard = parseInt(cards[i].getAttribute("data-card"), 10);

              if (dataCard + 1 === nextCard) {
                prevCard.classList.add("inactive");
                prevCard.classList.remove("active");
                conf.qS(".cards-wrapper").prepend(cards[i]);
                cards[i].classList.remove("inactive");
                cards[i].classList.add("active");
                break;
              } else if (dataCard + 1 >= cards.length) {
                prevCard.classList.add("inactive");
                prevCard.classList.remove("active");
                conf.qS(".cards-wrapper").prepend(cards[i]);
                cards[0].classList.remove("inactive");
                cards[0].classList.add("active");
                break;
              }
            }
          }
        };
      }
    },
  };

  //  Config Functions
  // - - - - - - - - - - - - - - - - - - - - - - - - - -

  const conf = {
    qS: (selector) => {
      return document.querySelector(selector);
    },
    qSA: (selector) => {
      return document.querySelectorAll(selector);
    },
    CqS: (container, selector) => {
      return container.querySelector(selector);
    },
    InfoBox: () => {
      let toggle = conf.qS(".infobox-container .infobox-toggle"),
        detail = conf.qS(".infobox-container .infobox-detail-container");

      if (toggle) {
        toggle.onclick = (e) => {
          e.preventDefault();
          detail.classList.toggle("active");
        };
      }
    },
  };
  document.addEventListener("DOMContentLoaded", function () {
    // thanks to koby.dev

    "use strict";

    Cards.init();
    conf.InfoBox();
  });
};
