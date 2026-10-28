let circleNumSlider
let circleGapSlider

let lines1NumSlider
let lines1LenSlider
let lines1DistSlider
let lines1SpinSlider
// let showLines1Checkbox
let lines1StrokeWeightSlider

let lines2NumSlider
let lines2LenSlider
let lines2DistSlider
let lines2SpinSlider
let lines2ColorPicker
let lines2StrokeWeightSlider
// let showLines2Checkbox

let jpegButton


function setup() {
    createCanvas(400, 400);
    noFill()
    strokeWeight(10)

    backColorPicker = createColorPicker('black');

    createP ('Circles')
    circleNumSlider = createSlider(1, 20, 2) //min, max, deafult, step
    circleGapSlider = createSlider(20, 100, 3)
    circleColorPicker = createColorPicker('blue');

    //line1
    createP ('Lines 1')
    lines1NumSlider = createSlider(1,12)
    lines1LenSlider = createSlider(30, 150, 60)
    lines1DistSlider = createSlider(0, 150, 100)
    lines1SpinSlider = createSlider(0, 360, 90, 5)
    showLines1Checkbox = createCheckbox ("show", true)
    lines1ColorPicker = createColorPicker("red")
    lines1StrokeWeightSlider = createSlider(10, 60, 30)

    createP ('Lines 2')
    lines2NumSlider = createSlider(1, 30, 12)
    lines2LenSlider = createSlider(30, 150, 60)
    lines2DistSlider = createSlider(0, 150, 100)
    lines2SpinSlider = createSlider(0, 360, 0, 5)
    lines2ColorPicker = createColorPicker("#00ffff")
    lines2StrokeWeightSlider = createSlider(10, 60, 30)
    showLines2Checkbox = createCheckbox ("show", true)

    jpegButton = createButton("export JPG")
    jpegButton.mousePressed(function(){
        saveCanvas("myCanvas", "jpg")
    })
}

function draw() {
    background(backColorPicker.value());
    translate(width/2, height/2)
    drawSquares()
    if (showLines1Checkbox.checked()){
        drawLines1()
    }

    if (showLines2Checkbox.checked()){
        drawLines2()
    }
}

function drawSquares(){
    let num = circleNumSlider.value()
    let gap = circleGapSlider.value()

    for(let i = 0; i < num; i++){
        push()
        stroke(circleColorPicker.value())
        rectMode(CENTER)
        rect (0, 0, (i+1) * gap)
        pop()
    }
}

function drawLines1(){
    
    let num = lines1NumSlider.value()
    let len = lines1LenSlider.value()

    for (let i = 0; i < num; i++){
        push()
        stroke(lines1ColorPicker.value())
        strokeWeight(lines1StrokeWeightSlider.value())
        rotate(i/num * TWO_PI)
        translate(lines1DistSlider.value(), 0) //distance from Center
        rotate(radians(lines1SpinSlider.value()))
        line (-len/2, 0, len/2, 0)
        pop()
    }
       
}

function drawLines2() {
    let num = lines2NumSlider.value() // slider input
    let len = lines2LenSlider.value() // slider input
    // let c = color(lines2ColorPicker.value())
    // c.setAlpha(opacity)
    for(let i = 0; i < num; i++) {
        push()
        stroke(lines2ColorPicker.value())
        strokeWeight(lines2StrokeWeightSlider.value())
        rotate(i/num * TWO_PI)
        translate(lines2DistSlider.value(), 0) // distance from the center
        rotate(-radians(lines2SpinSlider.value())) // slider input    
        line(-len/2,0,len/2,0) 
        pop()
    }
}