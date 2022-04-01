const form = document.querySelector(".form")
const output = document.querySelector(".output")
const colorInp = document.querySelector(".color-inp")
const colorSel = document.querySelector(".color-sel")
form.addEventListener("submit", getColor)

function getColor(e) {
  // Color Input
  const colorValue = colorInp.value
  const newColor = colorValue.slice(1, 7)
  // Selected Input
  const selected = colorSel.value

  // Fetch the data from The Color API
  fetch(`https://www.thecolorapi.com/scheme?hex=${newColor}&mode=${selected}&count=1`)
    .then(response => response.json())
    .then(data => {
      output.innerHTML += `
    <div class=" flex" >
    <img src="${data.image.bare}" alt="color" class="img" > 
    <br>
    ${data.seed.hex.value}
    </div>
    <br/>
    `    })

  e.preventDefault()
}