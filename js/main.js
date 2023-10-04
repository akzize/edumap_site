const cardsContainer = document.querySelector(".container-fluid.section-gray");
const cardsRow = cardsContainer.querySelector(".row");
let isScrolling = false;

cardsContainer.addEventListener("scroll", function () {
  if (!isScrolling) {
    window.requestAnimationFrame(function () {
      checkScrolling();
      isScrolling = false;
    });
  }
  isScrolling = true;
});

function checkScrolling() {
  const windowHeight = cardsContainer.offsetHeight;
  const cardsHeight = cardsRow.offsetHeight;
  const scrollTop = cardsContainer.scrollTop;

  if (windowHeight + scrollTop >= cardsHeight) {
    console.log("Charger plus de cartes...");
  }
}

const counters = document.querySelectorAll(".counter");
for (let n of counters) {
  const updateCount = () => {
    const target = +n.getAttribute("data-target");
    const count = +n.innerText;
    const speed = 1100;
    const inc = target / speed;
    if (count < target) {
      n.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, -500);
    } else {
      n.innerText = target;
    }
  };
  updateCount();
}
