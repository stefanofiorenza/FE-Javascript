const fetch = require("node-fetch"); //not natively supported, needs a library See https://www.npmjs.com/package/node-fetch

const mockDataUrl="https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";
const echoPostUrl="https://postman-echo.com/post";

//1) getting response status
    /*
    fetch(mockDataUrl).then(response => {
        if (response.ok) {
        console.log("Received Content");
        }
        if (response.status >= 100 && response.status < 200) {
        console.log("Status for client");
        }
        if (response.status >= 300 && response.status < 399) {
        console.log("Redirected");
        }
        if (response.status >= 400 && response.status < 499) {
        console.log("Error in Request");
        }
        if (response.status >= 500 && response.status < 599) {
        console.log("Error on server");
        }
    }).catch(error => console.log("Exception in Call"));
    */

 //2) getting response data (chaining then callbacks):

    /*
    fetch(mockDataUrl).then(response => {
        if (response.ok && response.status==200) { 
            return response;
        }else{
            console.log("Request failed");
        }
    }).then(response=> { //extract data as js object
        return response.json(); 

    }).then(data=> { //process data
    // console.log(data);
        let processedData = data.filter(record => record.status=="\'In Transit\'")
                                .map(record =>{
                                    let {orderNo, trackingNo, customer}=record;
                                    return {oid:orderNo,tid: trackingNo,customer:customer};
                                });
    
        console.log(processedData);

    }).catch(error => console.log("Exception :",error));
    */

//3) POST some data (with headers):
/*
var headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"   
};

var data = {firstName: "Stefano", lastName:"Fiorenza"};
var body = JSON.stringify(data);
fetch(echoPostUrl,{
    method: "POST", 
    body: body,
    headers:headers
}).then(response=> { //extract data as js object
        return response.json(); 
}).then(data=> { //process data
        console.log(data);
}).catch(error => console.log("Exception :",error));
*/



