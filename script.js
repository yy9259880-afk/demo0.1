// ==========================================
// NIHAD BRAND
// E-COMMERCE DEMO
// ==========================================


// ==========================================
// WHATSAPP NUMBER
// ==========================================

// IMPORTANT:
// Remplacez ce numéro par le vrai numéro WhatsApp
// de Nihad Brand.
//
// Format:
// 2126XXXXXXXX
//
// PAS de:
// +
// espaces
// tirets
//
// Exemple:
// const WHATSAPP_NUMBER = "212612345678";

const WHATSAPP_NUMBER = "212600000000";



// ==========================================
// ELEMENTS
// ==========================================

const modal =
  document.getElementById("orderModal");

const modalProductName =
  document.getElementById("modalProductName");

const sizeSelect =
  document.getElementById("sizeSelect");

const colorInput =
  document.getElementById("colorInput");

const customerCity =
  document.getElementById("customerCity");

const sendOrder =
  document.getElementById("sendOrder");

const modalClose =
  document.getElementById("modalClose");

const contactWhatsApp =
  document.getElementById("contactWhatsApp");

const floatingWhatsApp =
  document.getElementById("floatingWhatsApp");



// ==========================================
// SELECTED PRODUCT
// ==========================================

let selectedProduct = {

  name: "",

  price: "",

  sizes: [
    "S",
    "M",
    "L",
    "XL"
  ]

};



// ==========================================
// WHATSAPP URL
// ==========================================

function whatsappUrl(message) {

  const number =
    WHATSAPP_NUMBER.replace(/\D/g, "");

  return (
    "https://wa.me/" +
    number +
    "?text=" +
    encodeURIComponent(message)
  );

}



// ==========================================
// OPEN WHATSAPP
// ==========================================

function openWhatsApp(message) {

  if (
    !WHATSAPP_NUMBER ||
    WHATSAPP_NUMBER === "212600000000"
  ) {

    alert(
      "DEMO : ajoutez le vrai numéro WhatsApp de Nihad Brand dans script.js."
    );

    return;

  }


  window.open(
    whatsappUrl(message),
    "_blank",
    "noopener,noreferrer"
  );

}



// ==========================================
// PRODUCT ORDER BUTTONS
// ==========================================

document
  .querySelectorAll(".quick-order")
  .forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        selectedProduct = {

          name:
            button.dataset.product,

          price:
            button.dataset.price,

          sizes:
            (
              button.dataset.sizes ||
              "S, M, L, XL"
            )
              .split(",")
              .map(
                (size) =>
                  size.trim()
              )

        };


        // Product name + price

        modalProductName.textContent =
          `${selectedProduct.name} · ${selectedProduct.price} DH`;


        // Sizes

        sizeSelect.innerHTML =
          selectedProduct.sizes
            .map(
              (size) =>
                `<option value="${size}">
                  ${size}
                </option>`
            )
            .join("");


        // Reset fields

        colorInput.value = "";

        customerCity.value = "";


        // Open modal

        modal.classList.add("open");

        modal.setAttribute(
          "aria-hidden",
          "false"
        );


        document.body.style.overflow =
          "hidden";

      }

    );

  });



// ==========================================
// CLOSE MODAL
// ==========================================

function closeModal() {

  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";

}


modalClose.addEventListener(
  "click",
  closeModal
);



// Close when clicking outside

modal.addEventListener(
  "click",
  (event) => {

    if (
      event.target === modal
    ) {

      closeModal();

    }

  }
);



// Close with ESC

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape"
    ) {

      closeModal();

    }

  }
);



// ==========================================
// SEND ORDER
// ==========================================

sendOrder.addEventListener(
  "click",
  () => {

    const city =
      customerCity.value.trim();


    // City required

    if (!city) {

      customerCity.focus();

      customerCity.setCustomValidity(
        "Veuillez saisir votre ville."
      );

      customerCity.reportValidity();

      customerCity.setCustomValidity(
        ""
      );

      return;

    }


    const color =
      colorInput.value.trim() ||
      "À préciser";


    const message = [

      "Bonjour Nihad Brand 👋",

      "",

      "Je souhaite commander cet article :",

      "",

      `Produit : ${selectedProduct.name}`,

      `Prix affiché : ${selectedProduct.price} DH`,

      `Taille : ${sizeSelect.value}`,

      `Couleur : ${color}`,

      `Ville de livraison : ${city}`,

      "",

      "Pouvez-vous me confirmer la disponibilité et les frais de livraison ?"

    ].join("\n");


    openWhatsApp(message);

  }

);



// ==========================================
// GENERAL WHATSAPP
// ==========================================

const generalMessage =
  "Bonjour Nihad Brand 👋 Je souhaite avoir plus d'informations sur votre collection.";



// Contact button

contactWhatsApp.href =
  whatsappUrl(generalMessage);


contactWhatsApp.addEventListener(
  "click",
  (event) => {

    if (
      WHATSAPP_NUMBER ===
      "212600000000"
    ) {

      event.preventDefault();

      alert(
        "DEMO : remplacez WHATSAPP_NUMBER dans script.js par le vrai numéro WhatsApp de la marque."
      );

    }

  }
);



// Floating WhatsApp

floatingWhatsApp.href =
  whatsappUrl(generalMessage);


floatingWhatsApp.addEventListener(
  "click",
  (event) => {

    if (
      WHATSAPP_NUMBER ===
      "212600000000"
    ) {

      event.preventDefault();

      alert(
        "DEMO : remplacez WHATSAPP_NUMBER dans script.js par le vrai numéro WhatsApp de la marque."
      );

    }

  }
);



// ==========================================
// PRODUCT FILTERS
// ==========================================

document
  .querySelectorAll(".filter")
  .forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        // Remove active

        document
          .querySelectorAll(".filter")
          .forEach(
            (item) => {

              item.classList.remove(
                "active"
              );

            }
          );


        // Add active

        button.classList.add(
          "active"
        );


        const filter =
          button.dataset.filter;


        // Products

        document
          .querySelectorAll(".product-card")
          .forEach((card) => {

            if (
              filter === "all" ||
              card.dataset.category ===
                filter
            ) {

              card.hidden = false;

            } else {

              card.hidden = true;

            }

          });

      }

    );

  });



// ==========================================
// MOBILE MENU
// ==========================================

const menuToggle =
  document.getElementById(
    "menuToggle"
  );

const mainNav =
  document.getElementById(
    "mainNav"
  );


menuToggle.addEventListener(
  "click",
  () => {

    const isOpen =
      mainNav.classList.toggle(
        "open"
      );


    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );


    menuToggle.textContent =
      isOpen
        ? "×"
        : "☰";

  }
);



// Close mobile menu
// after clicking a link

mainNav
  .querySelectorAll("a")
  .forEach(
    (link) => {

      link.addEventListener(
        "click",
        () => {

          mainNav.classList.remove(
            "open"
          );

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

          menuToggle.textContent =
            "☰";

        }
      );

    }
  );



// ==========================================
// CURRENT YEAR
// ==========================================

document.getElementById(
  "year"
).textContent =
  new Date().getFullYear();