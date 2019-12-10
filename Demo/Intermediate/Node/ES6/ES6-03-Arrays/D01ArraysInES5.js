/**
 * Demo about Array api in ES5
 * 
 */

 //1) Create Array from constructor:
 /*
    let array = new Array();
    array[0]=0;
    array[2]=2;
*/

 //2) Index could be string as well (associative array)
 
 /*
    let array = new Array();
    array['city']='Tallinn';
    array['street']='Viru';

    console.log("Value for Street: "+array['street']);

    for (k in array){ //accessible only from enumerable keys for..in
        console.log(array[k]);
    }
*/

 //3) Array As json literal
 //let array =[1,2,3,4,5];


 //************************TEST****************************/
 
 for (let i=0; i<array.length; i++){
     console.log(array[i]);
 }




