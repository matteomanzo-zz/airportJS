describe('Airport', function() {

  beforeEach(function() {
    Gatwick = new Airport;
  });

  it('it is empty when created', function() {
    expect(Gatwick.planes).toEqual([])
  });

  it('can dock a plane', function() {
    Gatwick.dock('Boeing 747');
    expect(Gatwick.planes).toEqual(['Boeing 747']);
  });
});
