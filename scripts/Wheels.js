import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

export const Wheels = () => {
    let html = `<h2>Wheels</h2>`

    html += `<select id='wheel'>`
    html += '<option value="0">Select an wheel package</option>'

    const wheelArray = wheels.map(
        (wheel) => {
            return `<option value="${wheel.id}">${wheel.optionName}</option>`
        }
    )

    html += wheelArray.join("")
    html += "</select>"

    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheel") {
            setWheels(parseInt(changeEvent.target.value))
        }
    })