var mySong;
var myImage;
var snowx;

function preload() {
  mySong = loadSound("./assets/taipingchangan.mp3");
  myImage = loadImage("./assets/ballscolorful.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('white');

  analyser = new p5.Amplitude();
  analyser.setInput(mySong);
  mySong.play();

  frameRate(25);

}

function draw() {

  background('white');
  image(myImage, 0, 0, myImage.width, myImage.height);

  //soundillustrator
  noStroke();
  var volume = analyser.getLevel();
  volume = map(volume, 0, 1, 0, 360);
  snowx = random(width);

  noStroke();
  fill('white');
  for (var m = 5; m < width; m += 20) {
    ellipse(width / 5 * 4, snowx / 100 + m, volume / 10);
  }

  var i = 2;
  fill('white');
  ellipse(width / 5 * 4, height / 5 * 4, volume);
  for (var n = 0; n < 120; n += 10) {
    strokeWeight(3);
    stroke(255);
    line(12 + n, 0, 12 + n, volume + 3 * n);
    line(0, 12 + 2*n, 12 + n, volume + 3 * n);
    stroke(175 * sin(volume), 0, 255, 100);
    strokeWeight(3);
    stroke('white');
    line(width - volume * 7, height, width, 10 + n * 5)
    line(width - volume * 10, 10, width, 10 + n * 2)
    ellipse(12,  height / 9 *8 - 2*n, volume / 6);
    strokeWeight(3);
    stroke(255);
    line(12+2*n, height / 9 *8 - n,volume * 10 + width / 7,  height /9 *8 - n);
  }


  var myRate = map(mouseY, 0, height, 2, 0);
  mySong.amp(myRate);


  noStroke();
  fill(175 * sin(volume), 0, 175 * cos(volume), 100);
  ellipse(width / 2, height / 2, volume * 5);
  fill('white');

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
