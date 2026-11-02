let cols, rows
let s = 60

let squareSizeSlider
let frameRateSlider
let squareRotateSlider
let square2SizeSlider
let square2StrokeWeight
let square2ShapeSlider

function setup(){
    createCanvas(800, 800)
    cols = int(width/s)
    rows = int(height/s)

    squareSizeSlider = createSlider(10, 90, 20);
    // squareRotateSlider = createSlider(0, 360, 90, 0);
    squareShapeSlider = createSlider(1, 50, 1)
    squareStrokeSlider = createSlider(1, 5, 2)
    squareColorPicker = createColorPicker('orange')


    createP ('Shape 2')
    square2SizeSlider = createSlider(10, 90, 20);
    square2StrokeWeight = createSlider(1, 5, 2)
    square2ShapeSlider = createSlider(1, 50, 1)
    frameRateSlider = createSlider(10, 50);
    square2ColorPicker = createColorPicker('blue')



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
            let br1 = squareShapeSlider.value()
            let sw = squareStrokeSlider.value()

            for (let i = 0; i < 5; i++){
                push()
                translate(x, y) //distance from Center
                rotate(frameCount/10)
                noFill()
                stroke(square2ColorPicker.value())
                strokeWeight(s2w)
                rectMode(CENTER)
                square(0, 0, s2, br)
                pop()
                
            }

        push()
        rectMode(CENTER)
        translate(0, 0)
        noFill()
        stroke(squareColorPicker.value())
        strokeWeight(sw)
        square(x, y, squareSizeSlider.value(), br1) 
        // rotate(radians(squareRotateSlider.value()))
        pop()

        }
    }

}
