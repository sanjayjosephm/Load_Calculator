const addCargoButton = document.getElementById("addCargo");
const form = document.getElementById("cbmForm");
let clickCount = 0;
let num = 1;


let dimensions = {
    length: [],
    width: [],
    height: [],
    quantity: [],
    weight: [],
};

addCargoButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (clickCount < 5) {
    num++;
    const newRow = document.createElement("div");
    newRow.classList.add("form");

    newRow.innerHTML = `
        <div class="name-section">
            <label for="name">Name</label>
            <input type="text" id="name_${clickCount + 1}" step="0" placeholder="Cargo ${num}" required><br>
        </div>
        <div class="length-section">
            <label for="length">Length (CM)</label>
            <input type="number" id="length_${clickCount + 1}" step="0" placeholder="Length" required><br>
        </div>
        <div class="width-section">
            <label for="width">Width (CM)</label>
            <input type="number" id="width_${clickCount + 1}" step="0" placeholder="Width" required><br>
        </div>
        <div class="height-section">
            <label for="height">Height (CM)</label>
            <input type="number" id="height_${clickCount + 1}" step="0" placeholder="Height" required><br>
        </div>
        <div class="quantity-section">
            <label for="height"># of units</label>
            <input type="number" id="quantity_${clickCount + 1}" step="0" placeholder="Quantity" required><br>
        </div>
        <div class="weight-section">
            <label for="height">Weight <span>(in kg)</span></label>
            <input type="number" id="weight_${clickCount + 1}" step="0" placeholder="Weight" required><br>
        </div>
        <div class="remove-section">
            <i class="fa-solid fa-trash" id="remove" style="color: #1010e8;"></i>
        </div>
    `;
    form.appendChild(newRow);
    clickCount++;
  }
});

const nextButton = document.getElementById("Next");

nextButton.addEventListener("click", function (event) {
  event.preventDefault();
  const allFormElements = document.querySelectorAll(".form");

  allFormElements.forEach((formElement, index) => {
    const nameInput = formElement.querySelector(`#name_${index + 1}`);
    const lengthInput = formElement.querySelector(`#length_${index + 1}`);
    const widthInput = formElement.querySelector(`#width_${index + 1}`);
    const heightInput = formElement.querySelector(`#height_${index + 1}`);
    const quantityInput = formElement.querySelector(`#quantity_${index + 1}`);
    const weightInput = formElement.querySelector(`#weight_${index + 1}`);

    dimensions.length.push(lengthInput.value);
    dimensions.width.push(widthInput.value);
    dimensions.height.push(heightInput.value);
    dimensions.quantity.push(quantityInput.value);
    dimensions.weight.push(weightInput.value);
  });

  console.log(dimensions);
});


//testing the formula

const feet_20 = {
    length:589,
    width:234,
    height:238,
    max_cbm:33
}
const feet_40 = {
    length:1200,
    width:234,
    height:238,
    max_cbm:66
}
const highcube_40 = {
    length:1200,
    width:234,
    height:269,
    max_cbm:76
}


let dimensionsSample = [
    {
        length:100,
        width:100,
        height: 150,
        quantity: 70,
        weight: 50,
    },
    {
        length:100,
        width:150,
        height: 160,
        quantity: 60,
        weight: 70,
    }
];

console.log(dimensionsSample[0])
let cbmTot = 0;

for(let packages=0;packages<dimensionsSample.length;packages++){
    let cbmvalue = (dimensionsSample[packages].length*dimensionsSample[packages].height*dimensionsSample[packages].width*dimensionsSample[packages].quantity)/1000000
    console.log(cbmvalue)
    cbmTot += cbmvalue
}
console.log("Total cbm value "+cbmTot)

checking(cbmTot);


function checking(cbmtotal){
    if(cbmtotal>highcube_40.max_cbm){
        let tot_container = cbmtotal/highcube_40.max_cbm
        let value1 = cbmtotal-(Math.floor(tot_container)*highcube_40.max_cbm)
        console.log("Total container : "+Math.floor(tot_container))
        console.log("Remaining cbm : " + value1)
    }
}
