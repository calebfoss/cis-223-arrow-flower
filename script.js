function setup() {
  // DON'T CHANGE THIS PART
  createCanvas(400, 400);
  background(255);
  angleMode(DEGREES);

  fill('red');
  arrow(100, 300, 100, 100, 0);

  fill('green');
  arrow(200, 300, 50, 150, 180);

  fill('blue');
  arrow(300, 300, 100, 100, 45);

  fill('red');
  flower(100, 100, 100, 5);

  fill('green');
  flower(200, 100, 50, 5);

  fill('blue');
  flower(300, 100, 100, 7);
  // DON'T CHANGE PART ABOVE
}

function arrow(x, y, w, h, angle) {
  /*
      Write code in this function to make it work!
      x      x coordinate of the center of the arrow 
      y      y coordinate of the center of the arrow
      w      width of the arrow
      h      height of the arrow
      angle  rotation of the arrow
      */
}

function flower(x, y, diam, petals) {
  /*
      Write code in this function to make it work!
      x       x coordinate of the center of the flower
      y       y coordinate of the center of the flower
      diam    diameter of the flower (including the petals)
      petals  number of petals
      */
}
