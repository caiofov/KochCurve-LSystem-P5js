// INSERT YOUR PREFERENCES HERE - - - - - -

//canva dimensions
CNV_HEIGHT = 400
CNV_WIDTH = 800

//pace of the figure: how many pixels it will walk to the next generated point
const PACE = 5 

//L-SYSTEM
//it's the system of rules the koch curve will folllow to generate its path. 
//Consider separating the rules by hierachy for better results.
//example of hierarchy:
//1. A -> AB
//2. B -> A
//you should write:
//L_SYSTEM_LEFT = ["A", "B"]
// L_SYSTEM_RIGHT = ["AB", A]

//example used: f -> f+f-f-f+f
const L_SYSTEM_LEFT = ["f"]
const L_SYSTEM_RIGHT = ["f+f-f-f+f"]

const SEED = "f" //initial string to apply the rules of the l-system

//starting point of the figure
const INITIAL_X = 0
const INITIAL_Y = CNV_HEIGHT/2
 

const EXPANSIONS = 3 //number of iterations in order to generate a greater figure

// - - - - - - - - - - - - - - - - - - - - - - - -
