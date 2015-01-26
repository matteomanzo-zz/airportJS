var Plane = function() {
  this.flying = true;
};

Plane.prototype.isFlying = function() {
  return this.flying;
};

Plane.prototype.land = function() {
  if(this.flying == false) throw new Error('You are not flying!')
  return this.flying = false;
};

Plane.prototype.takeOff = function() {
  if (this.flying == true) throw new Error('You are already flying!')
  return this.flying = true;
};
