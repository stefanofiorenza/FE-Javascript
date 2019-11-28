var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //not supported natively in Node.js. Needs a library https://www.npmjs.com/package/xmlhttprequest


const mockDataUrl="https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";
const echoPostUrl="https://postman-echo.com/post";
const wrongKeyMockDataUrl="https://my.api.mockaroo.com/shipments.json?key=5e0b62d0_thispartdoesntmatch";;

//1) Get Data:
    /*
        function processRequest(responseData) {
            console.log(responseData)
        };

        var xhr = new XMLHttpRequest(); //emulates browser XMLHttpRequest object
        xhr.onreadystatechange = () =>{

            if (xhr.readyState == 4 && xhr.status == 200) {
            processRequest(xhr.responseText)
            }else{
                console.log("State: "+xhr.readyState+" Status: "+xhr.status+ "Time: "+new Date().getMilliseconds());
            }
        };
        xhr.open("GET", mockDataUrl, true);
        xhr.send();
    */

//2) Same as above with function and callback for both process(success) and reject (exception)

    /*
        const sendGetRequest =(url, process, reject) =>{
            var xhr = new XMLHttpRequest(); //emulates browser XMLHttpRequest object
            xhr.onreadystatechange = () =>{
            
                if (xhr.readyState == 4 && xhr.status == 200) {
                    process(xhr);
                }else if (xhr.status >300){ //error
                    reject(xhr);
                }else{
                    console.log("State: "+xhr.readyState+" Status: "+xhr.status+ "Time: "+new Date().getMilliseconds());
                }
            };
            xhr.open("GET", url, true);
            xhr.send();

        };

        const handleSuccessResponse =(httpReq)=>{
            console.log(httpReq.responseText);
        }
        const handleExceptionResponse =(httpReq)=>{
            console.log("Status: "+httpReq.status +" Details: "+ httpReq.responseText);
        }

        sendGetRequest(mockDataUrl, handleSuccessResponse,handleExceptionResponse);   
        //sendGetRequest(wrongKeyMockDataUrl, handleSuccessResponse,handleExceptionResponse);    
    */


//3) Send POST call:
/*
var data = {firstName: "Stefano", lastName:"Fiorenza"};
var body = JSON.stringify(data);

const sendGetRequest =(url, process, reject) =>{
    var xhr = new XMLHttpRequest(); //emulates browser XMLHttpRequest object
  

    xhr.onreadystatechange = () =>{
    
        if (xhr.readyState == 4 && xhr.status == 200) {
            process(xhr);
        }else if (xhr.status >300){ //error
            reject(xhr);
        }else{
            console.log("State: "+xhr.readyState+" Status: "+xhr.status+ "Time: "+new Date().getMilliseconds());
        }
    };
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");

    xhr.send(body);

};

const handleSuccessResponse =(httpReq)=>{
    console.log(httpReq.responseText);
}
const handleExceptionResponse =(httpReq)=>{
    console.log("Status: "+httpReq.status +" Details: "+ httpReq.responseText);
}

sendGetRequest(echoPostUrl, handleSuccessResponse,handleExceptionResponse);   
//sendGetRequest(wrongKeyMockDataUrl, handleSuccessResponse,handleExceptionResponse);   
*/