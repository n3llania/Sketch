let cols, rows
let s = 40
function setup(){
    createCanvas(windowWidth, windowHeight)
    cols = int(width/s)
    rows = int(height/s)
    frameRate(30);
}

function draw(){
    background(0);
    // for(let i = 0; i < width; i+20){
    //     circle(i, 0, 40)
    // }

   
    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){
        let x = i * s + s/2
        let y = j * s + s/2
        let r = map(x, 0, width, 100, 250)
        let b = map(y, 0, height, 250, 250)

        if ((i+j) % 2 === 0) {
            noStroke()
            strokeWeight(2)
            stroke("orange")
            fill (b, y, r)

        } else {
            noFill()
            strokeWeight(2)
            stroke("red")
        }
        
 // if (random() > 0.5) {
        //     // push()
        //     // translate(x, y)
        //     noStroke()
        //     fill (r, 100, b)
        //     // square(x-s/2, y-s/2, s * 0.5)

        // } else {
        //     // push()
        //     // translate(x, y)
        //     noFill()
        //     strokeWeight(2)
        //     stroke("blue")
        //     // square(x, y, s * 0.5)
        // }       

        let d = dist(x, y, mouseX, mouseY)
        let circleSize = map(d, 0, 300, s*2, s * .01)
        // let r = map(x, 0, width, 100, 250)
        // let b = map(y, 0, height, 250, 250)
        // stroke("orange")
            push()
            translate(x, y)
            rotate(frameCount / 10.0)
            fill("red")
            square (0, 0, circleSize)
            square (0, 0, circleSize)
            pop()

            circle (x, y, circleSize)
            rectMode(CENTER)
            noFill()
            circle (x, y, s*.5)
            rect (x, y, s*5)
        // fill (r, 100, b)
        // rectMode(CENTER)
       
//         // triangle(x-circleSize/2, y-circleSize/2, x-circleSize/2, y+cirlceSize/2, x+circleSize/2, y+circleSize/2)            
//         // rectMode(CENTER)
//         // rect(x, y, s)
//         // stroke("blue")
//         // line(x, y, s)
//         // line(x-s/2, y-s/2, x+s/2, y+s/2)
//         // line(x-s/2, y+s/2, x+s/2, y-s/2)
        }
    }
}
