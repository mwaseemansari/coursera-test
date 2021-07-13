// Object literals and "this"
var literalCircle = {
  radius: 10,

  getArea: function () {
    console.log(this);
    var increaseRadius = () => {
      this.radius = 20;
    };
    increaseRadius();
    console.log(this.radius);

    return Math.PI * Math.pow(this.radius, 2);
  },
};
console.log(literalCircle.getArea());
