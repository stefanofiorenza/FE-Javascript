//See https://www.chaijs.com/api/assert/ 

describe('compare test', function () {  

	let msg='compareForLower 1 with 1 should return 0'
	it(msg, function() {	
		chai.assert.equal(compareForLower(1,1), 0, msg); 
	});
	
	msg='compareForLower -10 with 1 should return -1'
	it(msg, function() {	
		chai.assert.equal(compareForLower(-10,1), -1, msg); 
	});
	
	msg='compareForLower 10 with 1 should return 1'
	it(msg, function() {	
		chai.assert.equal(compareForLower(10,1), 1, msg); 
	});
				  
});	


describe('isYearBissextile test', function () {  

	let msg='Year divisible per 400 is a Leap Year'
	it(msg, function() {	
		chai.assert.equal.isTrue(isYearBissextile(400), msg); 
		chai.assert.equal.isTrue(isYearBissextile(2000), msg); 
		chai.assert.equal.isTrue(isYearBissextile(2400), msg); 
		chai.assert.equal.isTrue(isYearBissextile(1600), msg); 
	});
	
	msg='Year divisible per 100 is NOT a Leap Year Unless divisible per 400'
	it(msg, function() {	
		chai.assert.equal.isNotTrue(isYearBissextile(100), msg); 
		chai.assert.equal.isNotTrue(isYearBissextile(200), msg); 
		chai.assert.equal.isNotTrue(isYearBissextile(300), msg); 
		chai.assert.equal.isTrue(isYearBissextile(400), msg); 
		chai.assert.equal.isNotTrue(isYearBissextile(500), msg); 
		chai.assert.equal.isNotTrue(isYearBissextile(600), msg); 
		chai.assert.equal.isNotTrue(isYearBissextile(700), msg); 
		chai.assert.equal.isTrue(isYearBissextile(800), msg); 
	});
	
	msg='Year divisible per 4 is a Leap Year Unless divisible per 100'
	it(msg, function() {	
		chai.assert.equal.isNotTrue(isYearBissextile(3), msg); 
		chai.assert.equal.isNotTrue(isYearBissextile(1995), msg); 
		chai.assert.equal.isTrue(isYearBissextile(1996), msg); 
		chai.assert.equal.isNotTrue(isYearBissextile(1900), msg); 
		chai.assert.equal.isNotTrue(isYearBissextile(1800), msg); //divisible for 4 but also for 100 and NOT for 400
		chai.assert.equal.isNotTrue(isYearBissextile(1700), msg); 
		chai.assert.equal.isNotTrue(isYearBissextile(5), msg); 
		chai.assert.equal.isNotTrue(isYearBissextile(9), msg); 
		chai.assert.equal.isTrue(isYearBissextile(4), msg); 
		chai.assert.equal.isTrue(isYearBissextile(2004), msg); 
		chai.assert.equal.isTrue(isYearBissextile(2012), msg); 
		chai.assert.equal.isTrue(isYearBissextile(2024), msg); 
	});
				  
});	


describe('isOddNumber test', function () {  

	it('isOddNumber test', function() {	
		chai.assert.equal.isNotTrue(isOddNumber(4),'4 is not odd number'); 
		chai.assert.equal.isNotTrue(isOddNumber(12),'12 is not odd number'); 
		chai.assert.equal.isNotTrue(isOddNumber(2000),'2000 is not odd number'); 
		chai.assert.equal.isNotTrue(isOddNumber(-4),'-4 is not odd number'); 
		chai.assert.equal.isNotTrue(isOddNumber(14),'14 is not odd number'); 
		
		chai.assert.equal.isTrue(isOddNumber(5),'5 is an odd number'); 
		chai.assert.equal.isTrue(isOddNumber(13),'13 is an odd number'); 
		chai.assert.equal.isTrue(isOddNumber(2001),'2001 is an odd number'); 
		chai.assert.equal.isTrue(isOddNumber(-141),'-141 is an odd number'); 
		chai.assert.equal.isTrue(isOddNumber(1),'1 is an odd number'); 
	});



});


describe('willBuy test', function () {  

	
	it('willBuy test', function() {	
		chai.assert.equal.isNotTrue(willBuy(4),'4 is not odd number'); 
		chai.assert.equal.isNotTrue(isOddNumber(12),'12 is not odd number'); 
		chai.assert.equal.isNotTrue(isOddNumber(2000),'2000 is not odd number'); 
		chai.assert.equal.isNotTrue(isOddNumber(-4),'-4 is not odd number'); 
		chai.assert.equal.isNotTrue(isOddNumber(14),'14 is not odd number'); 
		
		chai.assert.equal.isTrue(isOddNumber(5),'5 is an odd number'); 
		chai.assert.equal.isTrue(isOddNumber(13),'13 is an odd number'); 
		chai.assert.equal.isTrue(isOddNumber(2001),'2001 is an odd number'); 
		chai.assert.equal.isTrue(isOddNumber(-141),'-141 is an odd number'); 
		chai.assert.equal.isTrue(isOddNumber(1),'1 is an odd number'); 
	});



});

function willBuy(unitPrice,quantity,budget){

};

function isInInterval(x,lowerBound,upperBound){

};



function dayOfWeek(dayOfWeekAsNumber){
	var dayOfWeekAsString;
	//... your code here. Assign proper value to dayOfWeekAsString
	return dayOfWeekAsString;
};
