let particles = []
let num = 1000
let scaleValue = 0.007  // how zoomed in the noise is
let speed = 7


let paper = 'black'
let ink = '#14161F'
let colors = ['cyan', 'magenta', '#black', 'yellow']

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(paper)
  noStroke()
  for (let i = 0; i < num; i++) {
    particles.push(makeParticle())
  }
}

function makeParticle() {
  // random(1) cubed: most sizes come out small, a few come out huge
  let size = 3 + pow(random(1), 2) * 10
  let life = random(10, 100)
  return {
    x: random(width),
    y: random(height),
    size: size,
    life: life,
    maxLife: life,
    steps: 0,
    c: random(colors)
  }
}

function draw() {

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i]

    // noise (0 to 1) becomes an angle (0 to two full turns)
    let n = noise(p.x * scaleValue, p.y * scaleValue)
    let angle = n * TWO_PI * 2
    p.x += sin(angle) * speed
    p.y += cos(angle) * speed
    p.life -= 1
    p.steps += 1

    // 0 at birth, 1 in the middle of its life, 0 at death
    let age = 1 - p.life / p.maxLife
    let d = p.size * sin(age * PI)

    fill(p.c) 
    stroke(ink)
    // noFill()
    rectMode(CENTER)
    rect(p.x, p.y, d, 30, 5)

    // die when old or off the canvas, then start again
    let offCanvas = p.x < 9 || p.x > width || p.y < 10 || p.y > height
    if (p.life <= 0 || offCanvas) {
      particles[i] = makeParticle()

    //noLoop()
    }
  }
}

// click: a new noise landscape on a clean sheet
function mousePressed() {
  noiseSeed(random(100))
  background(paper)
}

// function keyPressed() {
//   if (key === 's') {
//     saveCanvas('my-flow-field', 'png')
//   }
// }
