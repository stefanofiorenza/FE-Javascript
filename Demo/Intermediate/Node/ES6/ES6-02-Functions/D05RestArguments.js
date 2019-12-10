/**
 * 
 * Demo on Rest arguments
 * Start from reading the test at the end of code.
 *  
 */


// compare passengers by status (where is platinum)
const byStatus = (a, b) => {
  let ret;
  if (a.status === 'platinum' && b.status !== 'platinum') {
    ret = -1;
  } else if (a.status === 'platinum' && b.status === 'platinum') {
    ret = 0;
  } else if (a.status !== 'platinum' && b.status === 'platinum') {
    ret = 1;
  }
  return ret;
};


/**
 * Function boarding with arguments (I need to add to list object with order string:Pilot, string:Crew, Passenger (platinum first))
 * */ 

const passengerOne = {
  name: 'Stefano',
  status: 'silver',
};

const passengerTwo = {
  name: 'Maarja',
  status: 'platinum',
};


//1) Solution with arguments:
/**
 * Issues:
 * 1.1) argument==Object != array. 
 *      Need to convert to Array in order to use .sort()
 * 1.2) need to skip elements I already added (Pilot, Crew)
 */


function boardPlane(pilot, crewMember ) {
  const plane = [];
  plane.push(pilot); 
  plane.push(crewMember); 
  const toArr = Array.prototype.slice.call(arguments); //copy it to array (1.1)  see later comments for details
 
  const passengers = toArr.slice(2, toArr.length); //extract elements after 2nd (1.2) 
  plane.push(passengers.sort(byStatus)); //add passengers according to their status 
  return plane;
  }
  

  
//2) Solution with ..rest arguments:
// (1) rest operator is an array (Array api could be used without conversion)
// (2) I can clearly separate some mandatory arguments (on left) from the one that are optional (..rest)
/*
const boardPlane = (pilot, crewMember, ...passengers) => { 
  const plane = [];
  plane.push(pilot);
  plane.push(crewMember);
  plane.push(passengers.sort(byStatus));
  return plane;
}
*/


//***************************TEST************************* */

const plane = boardPlane('Amelia', 'Rosemary', passengerOne, passengerTwo);
console.assert(Array.isArray(plane));

// verify pilots and crew board first
console.assert(plane[0] === 'Amelia',"Pilot is not the 1st element");
console.assert(plane[1] === 'Rosemary',"Crew is not the 2nd element");

// verify that passengers board by status
console.assert(Array.isArray(plane[2]));
console.assert(plane[2][0] === passengerTwo,"Passenger2 should be 1st on boarding");
console.assert(plane[2][1] === passengerOne,"Passenger1 should be last on boarding");


/**  use of -  Array.prototype.slice.call..
 * 
 *  .slice is a method available on JS Arrays object
 *  Ordinary syntax is [1,2,3,4].s;ice(3); ...
 * 
 *  We can apply same logic with syntax Array.prototype.slice(otherObj)
 *  
 *  1) replacing the caller array object with the one in arguments (otherObj)
 *  2) Inoke method defined in Array class
  
 */