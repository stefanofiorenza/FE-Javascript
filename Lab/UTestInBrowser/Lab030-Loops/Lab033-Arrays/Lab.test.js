//See https://www.chaijs.com/api/assert/ 

describe('variables', function () {  

	it('myFirstVariable should be a string', function() {	
		chai.assert.typeOf(myFirstVariable, 'string', 'myFirstVariable should be a string'); 
	});
	
	it('myFirstVariableAsInteger should be a int', function() {	
		chai.assert.typeOf(myFirstVariableAsInteger, 'int', 'myFirstVariableAsInteger should be a int'); 
	});
	
	it('myFirstVariableAsDouble should be a double', function() {	
		chai.assert.typeOf(myFirstVariableAsDouble, 'double', 'myFirstVariableAsDouble should be a double'); 
	});
	
	it('myFirstVariableAsBoolean should be a boolean', function() {	
		chai.assert.typeOf(myFirstVariableAsBoolean, 'boolean', 'myFirstVariableAsBoolean should be a boolean'); 
	});
		
	
	it('sum should be an integer', function() {	
		chai.assert.typeOf(sum, 'integer', 'sum should be an integer'); 
		chai.assert.equal(sum, 12,'5+7 should be 12');  
	});	
				  
});	
	
describe('express operators boolean condition as var for X=8', function () { 	

	var msg='isX_HigherThan2 should be a boolean'
	it(msg, function() {	
		chai.assert.typeOf(isX_HigherThan2, 'boolean', msg);
	});
	
	msg='X is Higher Than 2. Expected true';
	it(msg, function() {	
		chai.assert.isTrue(isX_HigherThan2,  msg);
	});
	
	msg='isX_Between_5Inclusive_And_10Inclusive should be a boolean'
	it(msg, function() {	
		chai.assert.typeOf(isX_Between_5Inclusive_And_10Inclusive, 'boolean', msg);
	});
	
	msg='isXNegativeNumber should be a boolean'
	it(msg, function() {	
		chai.assert.typeOf(isXNegativeNumber, 'boolean', msg); 
	});
		
	msg='isXDivisibleWith2 should be a boolean'
	it(msg, function() {	
		chai.assert.typeOf(isXDivisibleWith2, 'boolean', msg); 
	});
	
	msg='isXNotEqualTo10 should be a boolean'
	it(msg, function() {	
		chai.assert.typeOf(isXNotEqualTo10, 'boolean', msg); 
	});
	
	
	msg='X is in [5,10] interval. expected true'
	it(msg, function() {	
		chai.assert.isTrue(isX_Between_5Inclusive_And_10Inclusive, msg); 
	});
		
	msg='X is positive number. expected false';
	it(msg, function() {	
		chai.assert.isFalse(isXNegativeNumber, msg); 
	});
	
	
	msg='X is even number. expected true';
	it(msg, function() {	
		chai.assert.isTrue(isXDivisibleWith2, msg); 
	});
	
	msg=' X is NOT equal to 10. expected false';
	it(msg, function() {	
		chai.assert.isFalse(isXNotEqualTo10, msg); 
	});
	
});