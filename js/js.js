document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const container = document.querySelector(".card-container");

    cards.forEach((card) => {
        card.addEventListener("click", function () {
            if (card.classList.contains("expanded")) {
                // If the clicked card is already expanded, collapse it
                card.classList.remove("expanded");
            } 
            else {
                // Collapse any previously expanded card
                cards.forEach((otherCard) => {
                    if (otherCard.classList.contains("expanded")) {
                        otherCard.classList.remove("expanded");
                    }
                });
                // Expand the clicked card
                card.classList.add("expanded");

                // Scroll the container to the top
            }
            container.scrollTop = 0;
            //     {
            //         top: 0,
            //         behavior: "smooth"
            // });
        });
    });
});

// ------------------- for collpase list start -------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".collapsible-item");

    items.forEach((item) => {
        const header = item.querySelector(".collapsible-header");
        const content = item.querySelector(".collapsible-content");

        header.addEventListener("click", function (e) {
            // Prevent the click event from propagating to the card level
            e.stopPropagation();

            // Check if the clicked item is currently open
            const isOpen = item.classList.contains("open");

            // Close all items
            items.forEach((otherItem) => {
                otherItem.classList.remove("open");
                otherItem.querySelector(".collapsible-content").style.display = "none";
            });

            // If the clicked item was closed, open it
            if (!isOpen) {
                item.classList.add("open");
                content.style.display = "block";
            }
        });
    });
});



// ------------------- for collpase list end -------------------------------

// -------------- for the swiper lib ----------------------



// -------------- end the swiper lib ----------------------

// tree js


  document.addEventListener('DOMContentLoaded', function () {
    window.nav = new NavTree("#nav-tree", {
      searchable: true,
      searchPlaceholderText: 'Search Here',
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    window.nav = new NavTree("#nav-tree", {
      groupOpenIconClass: "fas",
      groupOpenIcon: "fa-chevron-down",
      groupCloseIconClass: "fas",
      groupCloseIcon: "fa-chevron-right",
      linkIconClass: "fas",
      linkIcon: "fa-link",
      iconWidth: "25px",
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    window.nav = new NavTree("#nav-tree", {
      showEmptyGroups: true,
    });
  });
  function localiser(lieu) {
    $("#mapFrame").attr(
      "src",
      "https://maps.google.com/maps?q=" + lieu + "&output=embed"
    );
  }