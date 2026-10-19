
function setup() {
  createCanvas(500, 500);
  frameRate(30)
//   background(0)
}

function draw() {
    // noFill()
    // if (mouseIsPressed) {
    //     noFill()
    //     stroke(random(myColors))
    //     strokeWeight(random(10, 30, 60))
    // } else {
    //     noStroke()
    //     fill(random(myColors))
    // }
    // circle(mouseX, mouseY, random(10, 100))
    let radius = 50;

    let leftX = width / 2 - 30;
    let rightX = width / 2 + 30;

    let x = map(mouseX, 0, width, -5, 5);
    let y = map(mouseY, 0, height, -5, 5);

    let iradius = 100;
    let ileftX = width / 2 - 100;
    let irightX = width / 2 + 100;

    let ix = map(mouseX, 0, width, -20, 20);
    let iy = map(mouseY, 0, height, -20, 20);

    if (mouseIsPressed) {
        background(255)

        fill(0)
        text('STOP', 250, 170)
         textSize(80)
        textWeight(400)
        textAlign(CENTER)

        noFill();
        stroke(0);
        strokeWeight(10)
        ellipse(ileftX, height / 2, iradius, iradius);
        ellipse(irightX, height / 2, iradius, iradius);

        fill(0);
        ellipse(ileftX + ix, height / 2 + iy, 20, 20);
        ellipse(irightX + ix, height / 2 + iy, 20, 20);
    } else {
        background(0)

        fill(255)
        text('Press Me!', 250, 170)
        textAlign(CENTER)

        noFill()
        stroke("white")
        strokeWeight(20)
        rect (200, 210, 100, 140,)

        noStroke()
        fill('white')
        circle(width/2, height/2, 100)
    
        noFill();
        stroke(0);
        strokeWeight(10)
        ellipse(leftX, height / 2, radius, radius);
        ellipse(rightX, height / 2, radius, radius);

        fill(0);
        ellipse(leftX + x, height / 2 + y, 20, 20);
        ellipse(rightX + x, height / 2 + y, 20, 20);
        }
    }