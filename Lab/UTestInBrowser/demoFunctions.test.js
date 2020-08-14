describe('add', function () {
  
  //different assertion styles from chai
  //1) expect
  it('should return sum of arguments', function () {
    chai.expect(add(1, 2)).to.equal(5);
  });
  
  it('should return sum of arguments', function () {
    chai.assert(add(1, 2)).to.equal(5);
  });
  
  
});