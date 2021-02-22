let stock = {
    macbook: 2,
    iphone: 4
};

const processPayment = itemName => {
    stock[itemName] -= 1;
    console.log(`Payment is being processed for item ${itemName}`)
}

const processError = itemName => {
    console.log(`No more ${itemName}s in stock`);
    console.log("Payment is not being processed");
}

const processOrder = (itemName, callbackPayment, callbackError) => {
    console.log(`Verifying the stock of ${itemName}`);
    if (stock[itemName] > 0) {
        callbackPayment(itemName);
    }
    else callbackError(itemName);
}


let data = prompt("Please enter the item you would like to purchase (Macbook, iPhone)");

data = data.toLowerCase()

if (data) {
    if (Object.keys(stock).includes(data)) {
        processOrder(data, processPayment, processError);
    } else console.log("Sorry, we don't have that item");
}