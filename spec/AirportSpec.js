describe('Airport', function() {

  it('it is empty when created', function() {
    var Gatwick = new Airport();
    expect(Gatwick.planes).toEqual(0)
  });
});
