//alert ("Implement solution in Lab03-Tables.js file ");
//alert ("Test data connected: OrderNo: "+shipments[0].orderNo);



// --- declare steppers ---

// stepers are use for for-loop
// step is always lower than displayCount
let step = 0;
let displayCount = 10;

// used to step back
let stepsTaken = 0;


// --- helper functions ---

// return the amount of elements remaining in array
function getDisplayCount() {
    return parseInt(displayCount = shipments.length - displayCount);
}

// used at getLast() 
// step is 10 but if it is not
// return that number
function getLastDisplayCount() {
    if (shipments.length % 10 == 0) {
        return 10;
    } else {
        return (shipments.length % 10); //return remainder
    }
}


// --- table pagination controls ---

function stepTenUp() {
    // go up 10 steps, if there are more than 10 elements in array
    if (shipments.length - displayCount >= 10) {
        step += 10;
        displayCount += 10;

        // if there are 1-10 elements left then displayCount should return the right amount
    } else if (shipments.length - displayCount < 10 && shipments.length - displayCount > 0) {
        step += 10;
        displayCount += getDisplayCount();

        // if array has no more elements return
    } else if (shipments.length - displayCount == 0) {
        return;
    }

    // call function with given steps
    getAllShipments();
}

function stepTenDown() {
    // if there are more than 10 elements shown i can go back 10
    if (displayCount > 10 && shipments.length - displayCount >= 10) {
        step -= 10;
        displayCount -= 10;

        // if less than 10 elements are shown, use stepsTaken to go back
    } else if (shipments.length - displayCount < 10) {
        step -= 10;
        displayCount = displayCount - stepsTaken;
    }

    // call function with given steps
    getAllShipments();
}

function getFirst() {
    // reset steps
    step = 0;
    displayCount = 10;

    // call function with given steps
    getAllShipments();
}

function getLast() {
    // get upper steps
    displayCount = shipments.length;
    step = displayCount - getLastDisplayCount(); // -10 if array length ends with 0, else -remainder

    // call function with given steps
    getAllShipments();
}


// --- load data ---
function getAllShipments() {

    let shipmentHTML = '';
    let stepCounter = step;

    for (step; step < displayCount; step++) {
        shipmentHTML = shipmentHTML + `
        <tr class="selectable">
			<td class="center">${shipments[step].orderNo}</td>
			<td class="center">${shipments[step].date}</td>
			<td class="center">${shipments[step].customer}</td>								
			<td class="center">${shipments[step].trackingNo}</td>
			<td class="center">${shipments[step].status}</td>
			<td class="center">${shipments[step].consignee}</td>
			<td class="center">
				<a href="#" class="btn-action glyphicons eye_open btn-info"><i></i></a>
				<a href="#" class="btn-action glyphicons pencil btn-success"><i></i></a>
				<a href="#" class="btn-action glyphicons remove_2 btn-danger"><i></i></a>
			</td>
		</tr>
        `;
    }


    stepsTaken = step - stepCounter;
    stepsTaken = parseInt(stepsTaken);
    step = (step - stepsTaken); // remove added steps

    // send built shipmentHTML to given id
    document.querySelector('#shipmentTable').innerHTML = shipmentHTML;
}

// --- starting function ---

function getData() {
    if (shipments.length > 10) {
        getAllShipments();
    } else {

        

        let shipmentHTML = '';

        for (let i = 0; i < shipments.length; i++) {
            shipmentHTML = shipmentHTML + `
            <tr class="selectable">
                <td class="center">${shipments[i].orderNo}</td>
                <td class="center">${shipments[i].date}</td>
                <td class="center">${shipments[i].customer}</td>								
                <td class="center">${shipments[i].trackingNo}</td>
                <td class="center">${shipments[i].status}</td>
                <td class="center">${shipments[i].consignee}</td>
                <td class="center">
                    <a href="#" class="btn-action glyphicons eye_open btn-info"><i></i></a>
                    <a href="#" class="btn-action glyphicons pencil btn-success"><i></i></a>
                    <a href="#" class="btn-action glyphicons remove_2 btn-danger"><i></i></a>
                </td>
            </tr>
            `;
        }

        // send built shipmentHTML to given id
        document.querySelector('#shipmentTable').innerHTML = shipmentHTML; 

        // disable buttons
        let paginationControlButtons = document.querySelector("#controls");
        for (let i = 0; i < paginationControlButtons.children.length; i++) {
            paginationControlButtons.children[i].classList.add("disabled");
            paginationControlButtons.children[i].onclick = '';
        }

    }
}