import { getTech, setTech } from "./database.js";

const technologies = getTech()

export const Technologies = () => {
    let html = `<h2>Technologies</h2>`

    html += `<select id='tech'>`
    html += '<option value="0">Select an tech package</option>'

    const techArray = technologies.map(
        (tech) => {
            return `<option value="${tech.id}">${tech.package}</option>`
        }
    )

    html += techArray.join("")
    html += "</select>"

    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            setTech(parseInt(changeEvent.target.value))
        }
    })