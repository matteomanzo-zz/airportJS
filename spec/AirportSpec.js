describe('Airport', function() {

  var Gatwick;

  beforeEach(function() {
    Gatwick = new Airport();
    plane = jasmine.createSpyObj('Boeing 747', ['land']);
  });

  it('it is empty when created', function() {
    expect(Gatwick.planes).toEqual([])
  });

  it('lands the planes before docking them', function() {
    Gatwick.dock(plane);
    expect(plane.land).toHaveBeenCalled();
  });

  it('can dock a plane', function() {
    Gatwick.dock(plane);
    expect(Gatwick.planes).toEqual([plane]);
  });
});
