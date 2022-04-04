// INSERT YOUR PREFERENCES HERE - - - - - -

//canva dimensions
CNV_HEIGHT = 400
CNV_WIDTH = 800

const SPEED = 5 //pace of the figure: how many pixels it will walk to the next generated point

//l-system: the system of rules the koch curve will folllow to generate its path. Separate the rules by hierachy. If you have any questions, please read the instructions.
//example used: f -> f+f-f-f+f
const L_SYSTEM_LEFT = ["f"]
const L_SYSTEM_RIGHT = ["f+f-f-f+f"]

const SEED = "f" //initial string to apply the rules of the l-system

//starting point of the figure
const INITIAL_X = 0
const INITIAL_Y = CNV_HEIGHT/2
var initial_point; 

const EXPANSIONS = 4 //number of iterations in order to generate a greater figure

// - - - - - - - - - - - - - - - - - - - - - - - -


function setup() {
  createCanvas(CNV_WIDTH, CNV_HEIGHT);
  initial_point = createVector(INITIAL_X, INITIAL_Y)
  var koch = new KochCurve(initial_point, SPEED,L_SYSTEM_LEFT, L_SYSTEM_RIGHT, SEED,  EXPANSIONS)
  koch.generate()
  print(koch.generated_string)
}

function string_to_vectors(string, initial_vector = createVector(0,height/2)){
  let last_point = initial_vector
  let pts = [last_point]
  
  for(let l=0; l<string.length; l++){
      let s = string[l]
      let current_point

      switch (s){
        
        case "f": //move foward
          current_point = move_forward(last_point)
          break
        
        case "+": //turn left
          current_point = move_left(last_point)
          break
        
        case "-": //turn right
          current_point = move_right(last_point)
          break
        
        default:
          break
      }
    pts.push(current_point)
    last_point = current_point
  }
    
  return pts
}
  
function axiom(seed, n = 10){
  let generated = seed
    
  
  for(let i = 0; i < n; i++){
    let aux = ""
    for(let l=0; l<generated.length; l++){
      let s = generated[l]
      
      if (s === "f"){             
        aux += "f+f-f-f+f"
      }
      else{aux+=s}
    }
    generated = aux
    
  }
  
  return generated
}

var angle = 0;
const default_angle = Math.PI/2;
function draw() {
// //   changeMatrix()
  background(240);

//   stroke(0)

//   circle(vectors[0].x, vectors[0].y,4)
//   for(let l = 0; l < vectors.length-1; l++){
//     line(vectors[l].x,vectors[l].y,vectors[l+1].x,vectors[l+1].y)
//     circle(vectors[l+1].x,vectors[l+1].y,4)
//   }
  
  
}

function move_forward(v){
  let v2 = v.copy()
  let ang = v2.angleBetween(createVector(1,0)) == 0 ? 0 : angle

  v2.x = v.x + SPEED*cos(ang)
  v2.y = v.y + SPEED*sin(ang)
  return v2
}
function move_left(v) {
  let v2 = move_forward(v)
  // v2.rotate(angle)
  // let v2 = createVector(v.x,v.y)
  // v2.add(v2)

  // v2.rotate(angle)
  // v2.setMag(SPEED)
  // v2.add(v)
  angle += default_angle
  v2.x = v.x + SPEED*cos(angle)
  v2.y = v.y + SPEED*sin(angle)
  
  return v2
}
function move_right(v){
  angle -= default_angle
  let v2 = move_forward(v)
  v2.x = v.x + SPEED*cos(angle)
  v2.y = v.y + SPEED*sin(angle)
  
  return v2
}
function path(){
  let v = initial_vector.copy() //initial point
  for(let i = 0; i < 3; i++){

    v = move_left(v)
    vectors.push(v)
    v = move_forward(v)
    vectors.push(v)
  }
}
function changeMatrix(){
  translate( width/2, height/2)
  scale( 1, -1 )
}