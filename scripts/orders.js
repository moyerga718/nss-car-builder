import { getOrders } from "./database.js";
import { getPaint } from "./database.js";
import { getInteriors } from "./database.js";
import { getTech } from "./database.js";
import { getWheels } from "./database.js";

const paints = getPaint()
const interiors = getInteriors()
const tech = getTech()
const wheels = getWheels()


// use paintID in order to get matching paint object
const findPaintInfo = (order) => {
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    return foundPaint
}


// use interior ID in order to get matching interior object
const findInteriorInfo = (order) => {
    
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    
    return foundInterior
}

// user techID in order to get matching tech object
const findTechInfo = (order) => {
    
    const foundTech = tech.find(
        (tech) => {
            return tech.id === order.techId
        }
    )
    
    return foundTech
}

// use find wheelID in order to get matching wheels object
const findWheelInfo = (order) => {
    
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.paintId
        }
    )
    
    return foundWheel
}

// make function that builds out HTML string for total price
const buildTotalPriceHTML = (paintPrice, interiorPrice, techPrice, wheelPrice) => {
    const totalPrice = paintPrice + interiorPrice + techPrice + wheelPrice
    const totalPriceString = totalPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return totalPriceString
}

const buildOrderHTML = (order) => {
    //invoke all functions above and use that information to build html string for custom order
    const foundPaint = findPaintInfo(order)
    const foundInterior = findInteriorInfo(order)
    const foundTech = findTechInfo(order)
    const foundWheels = findWheelInfo(order)
    const totalPriceHTML = buildTotalPriceHTML(foundPaint.price, foundInterior.price, foundTech.price, foundWheels.price)
    return `<p class="customOrderText"><b>Order #${order.id} (placed on ${order.timestamp}):</b> ${foundPaint.color} car with ${foundWheels.optionName} wheels, ${foundInterior.type}, and the ${foundTech.package} for a total cost of ${totalPriceHTML}</p>`
}

export const Orders = () => {
    //invoke order getter function to make sure we have updated data from database
    const orders = getOrders()
    //start html with div
    let html = "<div class='custom_order_card_container'>"
    // use map to iterate through orders and invoke buildOrderHTML for each order.
    const ordersHTMLarray = orders.map(
        (order) => {
            if (order.id > 0) {
                return buildOrderHTML(order)
            }
        }
    )
    html += ordersHTMLarray.join(" ")
    html += "</div>"
    return html
}