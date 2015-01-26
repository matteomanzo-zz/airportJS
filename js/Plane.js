var Plane = function() {
  this.flying = true;
};

Plane.prototype.isFlying = function() {
  return this.flying;
};

Plane.prototype.land = function() {
  return this.flying = false;
};

Plane.prototype.takeOff = function() {
  return this.flying = true;
};
