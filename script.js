const tireForm = document.getElementById("tire-form");
const tireBrand = document.getElementById("tire-brand");
const tireSize = document.getElementById("tire-size");
const tireQuantity = document.getElementById("tire-quantity");
const tirePrice = document.getElementById("tire-price");
const tireSeason = document.getElementById("tire-season");
const tireList = document.getElementById("tire-list");
const searchInput = document.getElementById("tire-search");
const tireFilter = document.getElementById("tire-finder");
const searchButton = document.getElementById("search-button");

let tires = JSON.parse(localStorage.getItem("tires")) || [];

tireForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const tire = {
    brand: tireBrand.value,
    size: tireSize.value,
    quantity: parseInt(tireQuantity.value),
    price: parseFloat(tirePrice.value),
    season: tireSeason.value,
  };

  tires.push(tire);
  tireForm.reset();
  displayTires(tires);

  localStorage.setItem("tires", JSON.stringify(tires));
});

function displayTires(list) {
  tireList.innerHTML = "";

  list.forEach(function (tire, index) {
    const tireItem = document.createElement("div");
    tireItem.classList.add("tire-card");
    if (tire.quantity <= 2) {
      tireItem.classList.add("low-stock");

      const warning = document.createElement("span");
      warning.textContent = "Low stock";
      warning.classList.add("low-stock-label");
      tireItem.appendChild(warning);
    }
    const tireInfo = document.createElement("span");
    tireInfo.classList.add("tire-info");
    tireInfo.textContent = `${tire.brand} - ${tire.size} - ${tire.quantity} - $${tire.price.toFixed(2)} - ${tire.season}`;
    tireItem.appendChild(tireInfo);
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-button");
    editButton.addEventListener("click", function () {
      const quantityInput = document.createElement("input");
      quantityInput.type = "number";
      quantityInput.min = "0";
      quantityInput.value = tire.quantity;

      // 2. The Apply button
      const applyButton = document.createElement("button");
      applyButton.textContent = "Apply";
      applyButton.classList.add("apply-button");

      // 3. When Apply is clicked: check the number, update, redraw, save
      applyButton.addEventListener("click", function () {
        const newQuantity = parseInt(quantityInput.value);

        // Only update if it's a real number, 0 or more
        if (!isNaN(newQuantity) && newQuantity >= 0) {
          tire.quantity = newQuantity;
          displayTires(tires);
          localStorage.setItem("tires", JSON.stringify(tires));
        }
      });

      // 4. Put the box and Apply button on the card
      tireItem.appendChild(quantityInput);
      tireItem.appendChild(applyButton);

      // Hide Edit while editing so it can't be clicked twice
      editButton.style.display = "none";
      deleteButton.style.display = "none";
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", function () {
      tires.splice(tires.indexOf(tire), 1);
      displayTires(tires);
      localStorage.setItem("tires", JSON.stringify(tires));
    });

    tireItem.appendChild(editButton);
    tireItem.appendChild(deleteButton);
    tireList.appendChild(tireItem);
  });
}

searchInput.addEventListener("input", function () {
  const results = tires.filter(function (tire) {
    const seasonMatches =
      tireFilter.value === "all" || tire.season === tireFilter.value;

    const brandMatches = tire.brand
      .toLowerCase()
      .includes(searchInput.value.toLowerCase());
    const sizeMatches = tire.size
      .toLowerCase()
      .includes(searchInput.value.toLowerCase());

    return seasonMatches && (brandMatches || sizeMatches);
  });

  displayTires(results);
});

displayTires(tires);
