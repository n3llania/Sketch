let myData
let cols
let rows

let moodColors = {
  'frustrated': '#006aff',
  'tired': '#e8e86a',
  'neutral': '#ff9c32',
  'fun': '#d723cb',
  'roadrage': '#7fdf61',
}

async function setup () {
    createCanvas(1000, 600)
    background(0)
    
    myData = await loadJSON('data.json');
    
    
}   

function draw() {
    let cols = 250
    let startX = 200;

    let columnCounts = {
            'monday':0,
            'tuesday':0,
            'wednesday':0,
        }

        let dayColumn = {
            'monday':0,
            'tuesday':1,
            'wednesday':2,
        }

        textAlign(CENTER, CENTER);
        textSize(20);
        textFont('sans-serif');
        noStroke();
        fill(255);

        let days = Object.keys(dayColumn);
        for (let j = 0; j < days.length; j++){
            let dayName = days[j]
            let colIndex = dayColumn[dayName]
            let headerX = startX + (colIndex * cols)
            let headerY = 50;

            let displayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
            text(displayName, headerX, headerY)
        }
    for (let i = 0; i < myData.length; i++) {
        let drive = myData[i]
        
        let num
        let c = moodColors[drive.mood]

        let colIndex = dayColumn[drive.day];
        if (colIndex === undefined) continue;
        
        let x = startX + (colIndex * cols)
        // let x = (i+1) * 150
        let y = 180 + (columnCounts[drive.day]*150)
        
        columnCounts[drive.day]++;
        // translate(width/2, height/2)
        push()
        translate(x,y)
        noFill()
        strokeWeight(15)
        stroke(c)
    
         
        if (drive.destination === "home") {
            stroke(c)
            circle(0, 0, 80)
        } else if (drive.destination === 'school') {
            stroke(c)
            rectMode(CENTER)
            square(0, 0, 80)
        } else if (drive.destination === 'else'){
            rectMode(CENTER)
            square(0,0,80,20)
            
            // push ()
            // scale(1,1)
            // stroke(c)
            // beginShape()
            // vertex(-50, 50)
            // vertex(0, -50)
            // vertex(50, 50)
            // endShape(CLOSE)
            // pop ()
            // triangle(80, 0, 0, 0, 0, 0)
        }

        if (drive.traffic === "bad") {
            num = 10
        } else if (drive.traffic === 'neutral') {
            num = 8
        } else if (drive.traffic === 'good'){
            num = 4
        }



        for(let i = 0; i < num; i++) {
            push()
            strokeWeight(10)
            stroke(c)
            rotate(i/num * TWO_PI)
            translate(0, 0) 
            rotate(radians(0))
            line(0, 0, 43, 0) 
            pop()
    }

    stroke('black')
    strokeWeight(5)
        if (drive.temp === "cold") {
            fill(c)
            circle(0, 0, 20)
        } else if (drive.temp === 'good') {
            fill(c)
            rectMode(CENTER)
            square(0, 0, 20)
        } else if (drive.temp === 'hot'){
            fill(c)
            beginShape()
            vertex(-50, 50)
            vertex(0, -50)
            vertex(50, 50)
            endShape(CLOSE)
        }
        pop()


}}

