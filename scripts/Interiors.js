import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors()

export const Interiors = () => {
    let html = `<h2>Interiors</h2>`

    html += `<select id='interior'>`
    html += '<option value="0">Select an interior package</option>'

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.type}</option>`
    }

    html += "</select>"

    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            setInterior(parseInt(changeEvent.target.value))
        }
    })