// const addCargo = document.getElementById("addCargo")
const submit = document.getElementById("Next")
const form = document.getElementById("cbmForm");
//datas
const total = document.getElementById("total");
const cbm = document.getElementById("cbm");
const max_boxes = document.getElementById("max_boxes");
const max_containers = document.getElementById("max_containers");
const cargo_density = document.getElementById("cargo-density");
const total1 = document.getElementById("total1");
const cbm1 = document.getElementById("cbm1");
const max_boxes1 = document.getElementById("max_boxes1");
const max_containers1 = document.getElementById("max_containers1");
const cargo_density1 = document.getElementById("cargo-density1");
const total2 = document.getElementById("total2");
const cbm2 = document.getElementById("cbm2");
const max_boxes2 = document.getElementById("max_boxes2");
const max_containers2 = document.getElementById("max_containers2");
const cargo_density2 = document.getElementById("cargo-density2");
const wt_per_container = document.getElementById("wt_per_container");
const vol_per_container = document.getElementById("vol_per_container");
const wt_per_container1 = document.getElementById("wt_per_container1");
const vol_per_container1 = document.getElementById("vol_per_container1");
const wt_per_container2 = document.getElementById("wt_per_container2");
const vol_per_container2 = document.getElementById("vol_per_container2");
const autoButton = document.getElementById("auto")


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

let num = 1;
// let num = 1;
let clickCount = 0;
const lengthInput = document.getElementById("length");
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const quantityValue = document.getElementById("quantity");
const weightValue = document.getElementById("weight");
const nameInput = document.getElementById("name");

function display20Feet(length,height,width,quantity,weight,cbmvalue){
    const noOfBoxes20feet = Math.floor(feet_20.length/length)*Math.floor(feet_20.width/width)*Math.floor(feet_20.height/height)
    const cbm20PerBox = (length * width * height * noOfBoxes20feet) / 1000000;
    let noOfContainers20feet = quantity/noOfBoxes20feet

    if(Number.isInteger(noOfContainers20feet)===false){
        noOfContainers20feet = Math.floor(noOfContainers20feet+1)
    }

    total.innerHTML = `<span class="same">20dv</span><br><p>Total : ${quantity} packages</p>`
    cbm.innerHTML = `<p>Total Cargo volume : ${cbmvalue} m<sup>3</sup></p>`
    max_boxes.innerHTML = `<p>Total Cargo per container # : ${noOfBoxes20feet}</p>`
    wt_per_container.innerHTML = `<p>Total Cargo weight per container # : ${noOfBoxes20feet*weight}kG</p>`
    cargo_density.innerHTML = `<p>Total Cargo Weight: ${quantity*weight} kg</p>`
    vol_per_container.innerHTML = `<p>Volume per container : ${cbm20PerBox} m<sup>3</sup></p>`
    max_containers.innerHTML = `<p>20'dv container : ${noOfContainers20feet}</p>`
}
function display40Feet(length,height,width,quantity,weight,cbmvalue){
    const noOfBoxes40feet = Math.floor(feet_40.length/length)*Math.floor(feet_40.width/width)*Math.floor(feet_40.height/height)
    const cbm40PerBox = (length * width * height * noOfBoxes40feet) / 1000000;
    let noOfContainers40feet = quantity/noOfBoxes40feet
    if(Number.isInteger(noOfContainers40feet)===false){
        noOfContainers40feet = Math.floor(noOfContainers40feet+1)
    }
    total1.innerHTML = `<span class="same">40dv</span><br><p>Total : ${quantity} packages</p>`
    cbm1.innerHTML = `<p>Total Cargo volume : ${cbmvalue} m<sup>3</sup></p>`
    cargo_density1.innerHTML = `<p>Total Cargo Weight: ${quantity*weight} kg</p>`
    max_boxes1.innerHTML = `<p>Total boxes per unit # : ${noOfBoxes40feet}</p>`
    wt_per_container1.innerHTML = `<p>Total Cargo weight per container # : ${noOfBoxes40feet*weightValue.value}kg</p>`
    vol_per_container1.innerHTML = `<p>Volume per container : ${cbm40PerBox} m<sup>3</sup></p>`
    max_containers1.innerHTML = `<p>40'dv Unit : ${noOfContainers40feet}</p>`
}
function display40HighCube(length,height,width,quantity,weight,cbmvalue){
    const noOfBoxes40hq = Math.floor(highcube_40.length/length)*Math.floor(highcube_40.width/width)*Math.floor(highcube_40.height/height)
    const cbm40hqPerBox = (length * width * height * noOfBoxes40hq) / 1000000;
    let noOfContainers40hq = quantityValue.value/noOfBoxes40hq
    if(Number.isInteger(noOfContainers40hq)===false){
        noOfContainers40hq = Math.floor(noOfContainers40hq+1)
    }
    total2.innerHTML = `<span class="same">40Hq</span><br><p>Total : ${quantity} packages</p>`
    cbm2.innerHTML = `<p>Total Cargo volume : ${cbmvalue} m<sup>3</sup></p>`
    cargo_density2.innerHTML = `<p>Total Cargo Weight: ${quantity*weight} kg</p>`
    max_boxes2.innerHTML = `<p>Total boxes per unit # : ${noOfBoxes40hq}</p>`
    wt_per_container2.innerHTML = `<p>Total Cargo weight per container # : ${noOfBoxes40hq*weight}kg</p>`
    vol_per_container2.innerHTML = `<p>Volume per container : ${cbm40hqPerBox} m<sup>3</sup></p>`
    max_containers2.innerHTML = `<p>40'hq Unit : ${noOfContainers40hq}</p>`
}

function remove20Feet(){
    total.innerHTML = "";
    cbm.innerHTML = "";
    max_boxes.innerHTML = "";
    wt_per_container.innerHTML = "";
    cargo_density.innerHTML = "";
    vol_per_container.innerHTML = "";
    max_containers.innerHTML = "";
}
function remove40Feet(){
    total1.innerHTML = "";
    cbm1.innerHTML = "";
    cargo_density1.innerHTML = "";
    max_boxes1.innerHTML = "";
    wt_per_container1.innerHTML = "";
    vol_per_container1.innerHTML = "";
    max_containers1.innerHTML = "";
}
function remove40Hq(){
    total2.innerHTML = "";
    cbm2.innerHTML = "";
    cargo_density2.innerHTML = "";
    max_boxes2.innerHTML = "";
    wt_per_container2.innerHTML = "";
    vol_per_container2.innerHTML = "";
    max_containers2.innerHTML = "";
}
// addCargo.addEventListener("click", function(event) {
//     event.preventDefault();
//     if(clickCount<5){
//         num = num+1;
//         const newRow = document.createElement("div");
//         newRow.classList.add("form");//creates class name as form
    
//         const nameSection = document.createElement("div");
//         nameSection.classList.add("name-section");
//         nameSection.innerHTML = `
//           <input type="text" id="name" step="0" placeholder="Cargo ${num}" required><br>
//         `;
    
//         const lengthSection = document.createElement("div");
//         lengthSection.classList.add("length-section");
//         lengthSection.innerHTML = `
//           <input type="number" id="length" step="0" placeholder="Length" required><br>
//         `;
      
//         const widthSection = document.createElement("div");
//         widthSection.classList.add("width-section");
//         widthSection.innerHTML = `
//           <input type="number" id="width" step="0" placeholder="Width" required><br>
//         `;
      
//         const heightSection = document.createElement("div");
//         heightSection.classList.add("height-section");
//         heightSection.innerHTML = `
//           <input type="number" id="height" step="0" placeholder="Height" required><br>
//         `;
      
//         const quantitySection = document.createElement("div");
//         quantitySection.classList.add("quantity-section");
//         quantitySection.innerHTML = `
//           <input type="number" id="quantity" step="0" placeholder="Quantity" required><br>
//         `;
      
//         const weightSection = document.createElement("div");
//         weightSection.classList.add("weight-section");
//         weightSection.innerHTML = `
//           <input type="number" id="weight" step="0" placeholder="Weight" required><br>
//         `;
//         const removeSection = document.createElement("div");
//         removeSection.classList.add("remove-section");
//         removeSection.innerHTML = `
//         <i class="fa-solid fa-trash" id="remove-spam" onclick="removeRow(this)" style="color: #1010e8;"></i>
//         `;
//         newRow.appendChild(nameSection);
//         newRow.appendChild(lengthSection);
//         newRow.appendChild(widthSection);
//         newRow.appendChild(heightSection);
//         newRow.appendChild(quantitySection);
//         newRow.appendChild(weightSection);
//         newRow.appendChild(removeSection);
    
//         // Append the new row to the form
//         form.appendChild(newRow);
//         clickCount++;
//         if (clickCount === 4) {
//             addCargo.disabled = true;
//         }
//     }

// });
  
// function removeRow(element) {
//     const row = element.parentNode.parentNode; 
//     row.remove();
// }

const containerSelection = document.getElementById("container")
let selectedValue = containerSelection.value

submit.addEventListener('click',function(event){
    event.preventDefault();
    const lengthValue = lengthInput.value;
    const widthValue = lengthInput.value;
    const heightValue = lengthInput.value;
    const qtyValue = quantityValue.value;
    const wtValue = weightValue.value;
    // addCargo.disabled = true
    autoButton.style.display = "block";
    if(lengthValue=="" || widthValue==""|| heightValue==""){
        alert("Please provide the necessary information!")
    }
    const cbmTotal = (lengthValue * widthValue * heightValue * qtyValue) / 1000000;

    display20Feet(lengthValue,heightValue,widthValue,qtyValue,wtValue,cbmTotal)
    total1.innerHTML = "";
    cbm1.innerHTML = "";
    cargo_density1.innerHTML = "";
    max_boxes1.innerHTML = "";
    wt_per_container1.innerHTML = "";
    vol_per_container1.innerHTML = "";
    max_containers1.innerHTML = "";
    total2.innerHTML = "";
    cbm2.innerHTML = "";
    cargo_density2.innerHTML = "";
    max_boxes2.innerHTML = "";
    wt_per_container2.innerHTML = "";
    vol_per_container2.innerHTML = "";
    max_containers2.innerHTML = "";

    containerSelection.addEventListener("change",function(){
        selectedValue = containerSelection.value
        if(selectedValue==="20Feet"){
            display20Feet(lengthValue,heightValue,widthValue,qtyValue,wtValue,cbmTotal)
            remove40Feet()
            remove40Hq()

        } else if(selectedValue==="40Feet"){
            display40Feet(lengthValue,heightValue,widthValue,qtyValue,wtValue,cbmTotal)
            remove20Feet()
            remove40Hq()
        } else if(selectedValue==="40Hq"){
            display40HighCube(lengthValue,heightValue,widthValue,qtyValue,wtValue,cbmTotal)
            remove20Feet()
            remove40Feet()
        }
    })
    autoButton.addEventListener('click',function(){
        display20Feet(lengthValue,heightValue,widthValue,qtyValue,wtValue,cbmTotal)
        display40Feet(lengthValue,heightValue,widthValue,qtyValue,wtValue,cbmTotal)
        display40HighCube(lengthValue,heightValue,widthValue,qtyValue,wtValue,cbmTotal)
    })
    disclaimer();
})



function disclaimer(){
    const disc = document.getElementById("Disclaimer")
    disc.innerHTML=`
        <p><span>NOTE: </span>The values vary according to the region. It is advised to check with the professional fright forwarder</p>
    `
}




