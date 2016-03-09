var v1, v2;
var marginLR, marginTB;

function setup() {
  createCanvas(windowWidth, windowHeight);
 
  marginLR = 0.05 * width;
  marginTB = 0.08 * height;
  
  v1 = createVector(marginLR, marginTB);
  v2 = createVector(2, 0);
}

function draw() {
  background(122);
  stroke(200);
  line(marginLR, 0, marginLR, height);
  line(width - marginLR, 0, width - marginLR, height);
  line(0, marginTB, width, marginTB);
  line(0, height-marginTB, width, height-marginTB);
  fill(0);
  ellipse(v1.x, v1.y, 0.02 * height, 0.02 * height);
  if(v1.x <= width - marginLR) {
    v1.add(v2);  
  } else {
    v1.y += 0.1 * height;
    v1.x = marginLR;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  marginLR = 0.05 * windowWidth;
  marginTB = 0.08 * windowHeight;
}