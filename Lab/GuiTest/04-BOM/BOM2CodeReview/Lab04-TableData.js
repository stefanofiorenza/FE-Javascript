//alert("connected");
let step = 0;
let displayCount = 1; 

function next() {
    if (shipments.length == displayCount) {
        //document.querySelector("#next").classList.add("disabled");
        return;
    }

    // if (document.querySelector("#previous").classList.contains("disabled")) {
    //     document.querySelector("#previous").classList.remove("disabled");
    // }
    
    step += 1;
    displayCount +=1;

    getData();
}

function previous() {
    if (step == 0) {
        //document.querySelector("#previous").classList.add("disabled");
        return;
    }

    // if (document.querySelector("#next").classList.contains("disabled")) {
    //     document.querySelector("#next").classList.remove("disabled");
    // }

    step -= 1;
    displayCount -=1;

    getData(); 
}

function last() {
    displayCount = shipments.length;
    step = displayCount - 1;

    getData();
}

function first() {
    step = 0;
    displayCount = 1;    

    getData();
}

function getData() {

    for (step; step < displayCount; step++) {
        document.querySelector('#txtOrder').value = shipments[step].orderNo;
        document.querySelector('#txtDate').value = shipments[step].date;
        document.querySelector('#txtCustomer').value = shipments[step].customer;
        document.querySelector('#txtTrackingNo').value = shipments[step].trackingNo;
        document.querySelector('#txtStatus').value = shipments[step].status;
        document.querySelector('#txtConsignee').value = shipments[step].consignee;
    }
    step -= 1;

    //page number
    let pageNumber = document.querySelector('#pageNumber');
    pageNumber.innerText = displayCount + " / " + shipments.length;


    // navigation button css
    if (step == 0) {
        document.querySelector("#previous").classList.add("disabled");
        document.querySelector("#first").classList.add("disabled");
    } else if (step > 0) {
        document.querySelector("#previous").classList.remove("disabled");
        document.querySelector("#first").classList.remove("disabled");
    } 
    
    if (shipments.length - step == 1) {
        document.querySelector("#next").classList.add("disabled");
        document.querySelector("#last").classList.add("disabled");
    } else if (shipments.length - step > 1) {
        document.querySelector("#next").classList.remove("disabled");
        document.querySelector("#last").classList.remove("disabled");
    }
 
}
