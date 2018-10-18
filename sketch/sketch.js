function setup() {
  createCanvas(400, 400)
  background(255)
}

function draw() {
  fill(255, 130, 0)
  stroke(0)
 house(0, 80, 80)

 fill(255, 130, 0)
  stroke(0)
 house(100, 80, 80
  )
 fill(255, 130, 0)
  stroke(0)
 house(200, 80, 80)
}
function square(x, y, size) {
  rect(x, y, size, size)
}
function roof(x,y) {
  triangle(x, y, 30, 40, 0, 80, 30)
}
function house(x, y){
  triangle(x, y, x+70, y, x+35, y-70)
  square(x, y, 70)

}



