let cols, rows
let s = 30

let squareSizeSlider
let frameRateSlider
let squareRotateSlider
let square2SizeSlider
let square2StrokeWeight
let square2ShapeSlider

function setup(){
    createCanvas(windowWidth, windowHeight)
    cols = int(width/s)
    rows = int(height/s)

    squareSizeSlider = createSlider(10, 50, 20);
    frameRateSlider = createSlider(10, 50);
    squareRotateSlider = createSlider(0, 360, 90, 0);
    createP ('Shape 2')
    square2SizeSlider = createSlider(10, 50, 20);
    square2StrokeWeight = createSlider(1, 5, 2)
    square2ShapeSlider = createSlider(1, 30, 1)


    // frameRate(frameRateSlider);

}

function draw(){
    background(0);
    frameRate(frameRateSlider.value())
    

        for (let i = 0; i < cols; i++){
            for (let j = 0; j < rows; j++){
            let x = i * s + s/2
            let y = j * s + s/2
            let r = map(x, 0, width, 100, 250)
            let b = map(y, 0, height, 250, 250)
            let s2 = square2SizeSlider.value()
            let s2w = square2StrokeWeight.value()
            let br = square2ShapeSlider.value()

            for (let i = 0; i < 5; i++){
                push()
                translate(x, y) //distance from Center
                rotate(frameCount/10)
                noFill()
                stroke('blue')
                strokeWeight(s2w)
                rectMode(CENTER)
                square(0, 0, s2, br)
                pop()
            }

        push()
        rectMode(CENTER)
        translate(0,0)
        noFill()
        stroke('orange')
        square(x, y, squareSizeSlider.value()) 
        // rotate(radians(squareRotateSlider.value()))
        pop()

        }
    }

}
