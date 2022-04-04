// INSERT YOUR PREFERENCES HERE - - - - - -

//canva dimensions
CNV_HEIGHT = 400
CNV_WIDTH = 800

const PACE = 5 //pace of the figure: how many pixels it will walk to the next generated point

//l-system: the system of rules the koch curve will folllow to generate its path. Separate the rules by hierachy. If you have any questions, please read the instructions.
//example used: f -> f+f-f-f+f
const L_SYSTEM_LEFT = ["f"]
const L_SYSTEM_RIGHT = ["f+f-f-f+f"]

const SEED = "f" //initial string to apply the rules of the l-system

//starting point of the figure
const INITIAL_X = 0
const INITIAL_Y = CNV_HEIGHT/2
 

const EXPANSIONS = 3 //number of iterations in order to generate a greater figure

// - - - - - - - - - - - - - - - - - - - - - - - -

var initial_point;
var koch;

function setup() {
  createCanvas(CNV_WIDTH, CNV_HEIGHT);
  initial_point = createVector(INITIAL_X, INITIAL_Y)
  
  koch = new KochCurve(initial_point, PACE,L_SYSTEM_LEFT, L_SYSTEM_RIGHT, SEED,  EXPANSIONS) //creates the koch curve
  koch.generate() //generates the string
  koch.generate_points() //generates the points
}

function draw() {
  background(240);
  koch.draw() //draws the curve
}
