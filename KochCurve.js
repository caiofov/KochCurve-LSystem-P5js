class KochCurve{
    constructor(initial_point, pace, l_system_left,l_system_right, seed, expansions){
        this.initial_point = initial_point
        this.seed = seed
        this.l_system_left = l_system_left
        this.l_system_right = l_system_right
        this.expansions = expansions
        this.generated_string = undefined
        this.pace = pace
        this.points = []
    }

    generate(){ //generates the string using the l_system previously defined
        let generated = this.seed
          
        
        for(let i = 0; i < this.expansions; i++){
          let aux = "" //current parallel statement
          for(let l=0; l<generated.length; l++){
            let s = generated[l]
            let changed = false
            
            for (let st = 0; st < this.l_system_left.length; st++){
                if (s === this.l_system_left[st]){             
                    aux += this.l_system_right[st]
                    changed = true
                    break
                }
            }
           
            if(!changed){
                aux+=s
            }
          }
          generated = aux
          
        }
        
        this.generated_string = generated
    }
    
}