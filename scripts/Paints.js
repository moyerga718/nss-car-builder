import { getPaint, setPaint } from "./database.js";

const paints = getPaint()

export const Paint = () => {
    let html = `<h2>Paint</h2>`

    html += `<select id='paint'>`
    html += '<option value="0">Select an paint package</option>'

    const paintArray = paints.map(
        (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    html += paintArray.join("")
    html += "</select>"

    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
            setPaint(parseInt(changeEvent.target.value))
        }
    })