import { CarHTML } from "./CarHTML.js";

document.addEventListener(
    "stateChanged",
    (stateChanged) => {
        console.log("State Changed! Rerendering html...")
        renderAllHTML()
    }
)

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = CarHTML()
}

renderAllHTML()

