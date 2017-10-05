function setup() {
  createCanvas(1080,1920);
  background(200);
  angleMode(DEGREES);
  
  frameRate(20);
}

function draw() {
  translate(width/2,height/2);
  rotate(frameCount*6);
  noStroke();

  // lerpColor blends two colors to find a third color somewhere between them.
  // lerpColor(col1,col2,amount)
  
  fill(lerpColor(color(92,0,26,10), color(6,94,130,10), frameCount/200));
  rect(100,0,50+frameCount*6,50+frameCount*6);
  
  //if (frameCount == 240) {
  //noLoop();
  //}
}
