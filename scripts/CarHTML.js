import { Wheels } from "./Wheels.js";
import { Interiors } from "./Interiors.js";
import { Paint } from "./Paints.js";
import { Technologies } from "./Technologies.js";
import { Orders } from "./orders.js";
import { Types } from "./Types.js"
import { createNewOrder } from "./database.js"
import { getTempState } from "./database.js";

export const CarHTML = () => {
    return `
    <header>
        <h1>Cars 'R Us: Personal Car Builder</h1>
    </header>
    <body>

        <article class="option-card-container">
            <div class="option-card">${Types()}</div>
            <div class="option-card">${Paint()}</div>
            <div class="option-card">${Interiors()}</div>
            <div class="option-card">${Wheels()}</div>
            <div class="option-card">${Technologies()}</div>
        </article>
            
        <article class="orderButton-container">
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    </body>
    `
}

document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "orderButton") {
            let tempState = getTempState()
            if (tempState.paintId > 0 && tempState.interiorId > 0 && tempState.techId > 0 && tempState.wheelId > 0 && tempState.typeId > 0) {
                createNewOrder()
            } else {
                window.alert("PLEASE SELECT AN OPTION FOR EACH CATEGORY")
            }
        }
    }
)


