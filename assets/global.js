// Start Genius Maker Offer Details JS CODE 

document.addEventListener("DOMContentLoaded", function () {
  const offers = document.querySelectorAll(".first-offer-info, .second-offer-info, .third-offer-info, .fourth-offer-info");
  offers.forEach((offer) => {
    document.body.appendChild(offer); // Move the elements to <body>
    offer.style.visibility = "visible"; // Make visible after moving to body
  });

  const offerInputs = document.querySelectorAll('input[name="offer-info-gm"]');

  offerInputs.forEach((input) => {
    input.addEventListener("change", function () {
      if (this.checked && this.id !== "none-offer-info-gm") {
        const targetOffer = document.querySelector(`.${this.id}-info`);
        if (targetOffer) {
          targetOffer.style.transform = "translateX(0)";
        }
      } else {
        offers.forEach((offer) => {
          offer.style.transform = "translateX(120%)";
        });
      }
    });
  });

  const closeButtons = document.querySelectorAll(".close-offer-info-gm");
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      document.getElementById("none-offer-info").checked = true;
      offers.forEach((offer) => {
        offer.style.transform = "translateX(120%)";
      });
    });
  });
});

// copy button code
document.addEventListener("DOMContentLoaded", function () {
  // Function to handle copying discount code
  function copyDiscountCode(button, code, successMsg) {
    button.addEventListener("click", function () {
      const codeToCopy = code.innerText;

      navigator.clipboard
        .writeText(codeToCopy)
        .then(() => {
          successMsg.style.bottom = "0";
          successMsg.style.visibility = "visible";
          setTimeout(() => {
            successMsg.style.bottom = "-30px";
            successMsg.style.visibility = "hidden";
          }, 1500);
        })
        .catch((err) => {
          console.error("The code is not copied", err);
        });
    });
  }

  // Initialize copy buttons for all offer details sections
  const offerDetailsSections = document.querySelectorAll(".first-offer-info, .second-offer-info, .third-offer-info, .fourth-offer-info");

  offerDetailsSections.forEach((section) => {
    const copyButton = section.querySelector("#copy-button--gm");
    const discountCode = section.querySelector("#discount-code--gm");
    const successMsg = section.querySelector("#success-msg--gm");

    if (copyButton && discountCode && successMsg) {
      copyDiscountCode(copyButton, discountCode, successMsg);
    }
  });
});

// Start Genius Maker Offer Details JS CODE 
