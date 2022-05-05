// set up database according to ERD structure

const database = {
    paint: [
        {id: 1, color: "Silver", price: 200},
        {id: 2, color: "Midnight Blue", price: 300},
        {id: 3, color: "Firebrick Red", price: 47},
        {id: 4, color: "Spring Green", price: 10000},
    ],
    interior: [
        {id: 1, type: "Beige Fabric", price: 300},
        {id: 2, type: "Charcoal Fabric", price: 600},
        {id: 3, type: "White Leather", price: 1500},
        {id: 4, type: "Black Leather", price: 1100},
    ],
    tech: [
        {id: 1, package: "Basic package", price: 100},
        {id: 2, package: "Navigation package", price: 500},
        {id: 3, package: "Visibility package", price: 700},
        {id: 4, package: "Ultra package", price: 1100},
    ],
    wheels: [
        {id: 1, optionName: "17-inch Pair Radial", price: 300},
        {id: 2, optionName: "17-inch Pair Radial Black", price: 500},
        {id: 3, optionName: "18-inch Pair Spoke Silver", price: 700},
        {id: 4, optionName: "18-inch Pair Spoke Black", price: 850},
    ],
    types: [
        {id: 1, name: "Car", priceFactor: 1},
        {id: 2, name: "SUV", priceFactor: 1.5},
        {id: 3, name: "Truck", priceFactor: 2.25}
    ],
    customOrders: [
        {id: 0, paintId: 1, interiorId: 1, techId: 1, wheelId: 1, typeId: 1, timestamp: 1}

    ],
    orderBuilder: {}
}

export const getPaint = () => {
    return database.paint.map((paint) => ({...paint}))
}

export const getInteriors = () => {
    return database.interior.map((interior) => ({...interior}))
}

export const getTech = () => {
    return database.tech.map((tech) => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map((wheels) => ({...wheels}))
}

export const getTypes = () => {
    return database.types.map((type) => ({...type}))
}

export const getOrders = () => {
    return database.customOrders.map((order) => ({...order}))
}

export const getTempState = () => {
    return {...database.orderBuilder}
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    database.orderBuilder.techId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const setType = (id) => {
    database.orderBuilder.typeId = id
}

export const createNewOrder = () => {
    //create copy of temp state, assign to new variable
    const newOrder = {...database.orderBuilder}
    //find index of last order, use this to find id for last order and increment it for new order
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    //add timestamp to new order
    newOrder.timestamp = Date.now()
    // push newOrder to customOrders to save temporary state
    database.customOrders.push(newOrder)
    // reset temporary state
    database.orderBuilder = {}
    // create custom event
    document.dispatchEvent(new CustomEvent("stateChanged"))
}