import { getTypes, setType } from "./database.js"

const types = getTypes()

export const Types = () => {
    let html = `<h2>Types</h2>`

    html += `<select id='type'>`
    html += '<option value="0">Select a vehicle type</option>'

    for (const type of types) {
        html += `<option value="${type.id}">${type.name}</option>`
    }

    html += "</select>"

    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "type") {
            setType(parseInt(changeEvent.target.value))
        }
    }
)