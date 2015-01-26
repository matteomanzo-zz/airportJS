var Airport = function() {
  this.planes = [];
};

Airport.prototype.dock = function(plane) {
  plane.land();
  this.planes.push(plane);
};
