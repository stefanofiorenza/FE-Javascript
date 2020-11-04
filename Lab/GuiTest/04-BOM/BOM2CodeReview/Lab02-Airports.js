//alert ("Implement solution in Airports.js script");

// load data into first dropdown
function loadDeparturesData() {

    //add a empty option
    // let departureOption = document.createElement('option');
    // departureOption.text = '';
    // document.querySelector('#slcDepartures').add(departureOption);

    for (let i = 0; i < airports.length; i++) {
        let departureOption = document.createElement('option');
        departureOption.text = airports[i].departure;
        document.querySelector('#slcDepartures').add(departureOption);
    }

    loadDestinationsData();
}


function loadDestinationsData() {

    //clean up each time
    document.querySelector('#slcDestinations').options.length = 0;

    //add a empty option
    // let destinationsOption = document.createElement('option');
    // destinationsOption.text = '';
    // document.querySelector('#slcDestinations').add(destinationsOption);

    // get selected departure
    let getDeparture = document.querySelector('#slcDepartures').value;
    
    for (let i = 0; i < airports.length; i++) {
        if (getDeparture == airports[i].departure) {
            for (let j = 0; j < airports[i].destinations.length; j++) {
                let destinationsOption = document.createElement('option');
                destinationsOption.text = airports[i].destinations[j];
                document.querySelector('#slcDestinations').add(destinationsOption);
            }
        }
    }

}
