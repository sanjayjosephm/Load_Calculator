const addCargo = document.getElementById("addCargo");
const submit = document.getElementById("Next");
const form = document.getElementById("cbmForm");
const lengthInput = document.getElementById("length_0");
const widthInput = document.getElementById("width_0");
const heightInput = document.getElementById("height_0");
const quantityValue = document.getElementById("quantity_0");
const weightValue = document.getElementById("weight_0");
const nameInput = document.getElementById("name");

console.log(lengthInput);

let num = 1;
let clickCount = 0;

let dimensions = {
  length: [],
  width: [],
  height: [],
  quantity: [],
  weight: [],
};

// dimensions.length.add(lengthInput.value)
// dimensions.length.add(lengthInput.value)

addCargo.addEventListener("click", function (event) {
//   event.preventDefault();

  if (clickCount < 5) {
    num = num + 1;
    const newRow = document.createElement("div");
    newRow.classList.add(`form_${clickCount + 1}`);
    console.log(newRow);

    const nameSection = document.createElement("div");
    nameSection.classList.add("name-section");
    nameSection.innerHTML = `
          <input type="text" id="name" step="0" placeholder="Cargo ${num}" required><br>
        `;

    const lengthSection = document.createElement("div");
    lengthSection.classList.add("length-section");
    lengthSection.innerHTML = `
          <input type="number" id="length_${clickCount + 1}" step="0" placeholder="Length" required><br>`;

    const widthSection = document.createElement("div");
    widthSection.classList.add("width-section");
    widthSection.innerHTML = `
          <input type="number" id="width_${clickCount + 1}" step="0" placeholder="Width" required><br>`;

    const heightSection = document.createElement("div");
    heightSection.classList.add("height-section");
    heightSection.innerHTML = `
          <input type="number" id="height_${
            clickCount + 1
          }" step="0" placeholder="Height" required><br>
        `;

    const quantitySection = document.createElement("div");
    quantitySection.classList.add("quantity-section");
    quantitySection.innerHTML = `
          <input type="number" id="quantity_${
            clickCount + 1
          }" step="0" placeholder="Quantity" required><br>
        `;

    const weightSection = document.createElement("div");
    weightSection.classList.add("weight-section");
    weightSection.innerHTML = `
          <input type="number" id="weight_${clickCount + 1}" step="0" placeholder="Weight" required><br>
        `;
    const removeSection = document.createElement("div");
    removeSection.classList.add("remove-section");
    removeSection.innerHTML = `
        <i class="fa-solid fa-trash" id="remove-spam" onclick="removeRow(this)" style="color: #1010e8;"></i>
        `;

    newRow.appendChild(nameSection);
    newRow.appendChild(lengthSection);
    newRow.appendChild(widthSection);
    newRow.appendChild(heightSection);
    newRow.appendChild(quantitySection);
    newRow.appendChild(weightSection);
    newRow.appendChild(removeSection);

    // Append the new row to the form
    form.appendChild(newRow);
    clickCount++;
    if (clickCount === 4) {
      addCargo.disabled = true;
    }
    console.log("************",length_1)
    const lengthValue_1 = document.getElementById(length_1);
    const widthValue_1 = document.getElementById(width_1);
    const heightValue_1 = document.getElementById(height_1);
    const quantityValue_1 = document.getElementById(quantity_1);
    const weightValue_1 = document.getElementById(weight_1);

    dimensions.length.push(lengthValue_1.value);
    dimensions.height.push(heightValue_1.value);
    dimensions.width.push(widthValue_1.value);
    dimensions.quantity.push(quantityValue_1.value);
    dimensions.weight.push(weightValue_1.value);
  }


});

submit.addEventListener("click", function (event) {
  event.preventDefault();
  dimensions.length.push(parseInt(lengthInput.value));
  dimensions.height.push(parseInt(heightInput.value));
  dimensions.width.push(parseInt(widthInput.value));
  dimensions.quantity.push(parseInt(quantityValue.value));
  dimensions.weight.push(parseInt(weightValue.value));
  console.log(dimensions);
  console.log("hello");
});

