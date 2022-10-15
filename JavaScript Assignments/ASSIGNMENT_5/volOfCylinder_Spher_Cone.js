const phi = 3.1415
class Cylinder {
    constructor(_rad, _hig) 
    {
        this.radius = _rad;
        this.height = _hig;
    }
       
    getVol()
            {
                return phi*this.height*this.radius*this.radius
            }
}

class Sphere {
    constructor(_rad) 
    {
        this.radius = _rad;
        
    }
       
    getVol()
            {
                return phi*this.radius*this.radius*this.radius*4/3
            }
}

class Cone {
    constructor(_rad, _hig) 
    {
        this.radius = _rad;
        this.height = _hig;
    }
       
    getVol()
            {
                return phi*this.height*this.radius*this.radius/3
            }
}

let obj = new Cone(3,5); 
console.log(obj.getVol());


/*


            ************************Encapsulated Form****************************


            
All Volumes in One Class...............

const phi = 3.1415
class Volume 
{
    constructor(_rad, _hig) 
    {
        this.radius = _rad;
        this.height = _hig;
    }

    get CylinderVol() // for getting CylinderVolume
            {   
                return this.calcVol()
    
            }
        calcVol()
            {
                return phi*this.height*this.radius*this.radius
            }

    get ConeVol() // for getting ConeVolume
            {   
                return this.calcVol()              
            }
        calcVol()
            {
                return phi*this.height*this.radius*this.radius/3
            }
    get SphereVol()         // for getting SphereVolume
            {   
                return this.calcVol()                
            }
        calcVol()
            {
                return phi*this.radius*this.radius*this.radius*4/3
            }
}

let obj = new Volume(3) //volume(radius,height)
console.log(` The required Volume is ${obj.SphereVol}`); // 


*/

/*




                *********************** User Defined and Switch Case**********************





const phi = 3.1415
const prompt = require("prompt-sync")();

class Cylinder {
    constructor(_rad, _hig) 
    {
        this.radius = _rad;
        this.height = _hig;
    }
       
    getVol()
            {
                return phi*this.height*this.radius*this.radius
            }
}
class Sphere {
    constructor(_rad) 
    {
        this.radius = _rad;
        
    }
       
    getVol()
            {
                return phi*this.radius*this.radius*this.radius*4/3
            }
}

class Cone {
    constructor(_rad, _hig) 
    {
        this.radius = _rad;
        this.height = _hig;
    }
       
    getVol()
            {
                return phi*this.height*this.radius*this.radius/3
            }
}


console.log(" *********************\n 1.Cylinder Volume\n 2.Sphere Volume \n 3.Cone Volume");

var temp = prompt("\nEnter Your Choice:");
choice=parseInt(temp)
switch(choice)
    {
        case 1 :
            var radius = prompt("Enter Radius :");
            var height = prompt("Enter Height :");
            let Cyl_Vol = new Cylinder(radius,height)
            console.log(`\nThe Volume of Cylinder With radius : "${radius}" and height : "${height}" is \n\n\t\t ==> ${Cyl_Vol.getVol()} <==`);
            break;

        case 2:
            var radius = prompt("Enter Radius :");
            let sphr_Vol = new Sphere(radius)
            console.log(`\nThe Volume of Sphere With radius : "${radius}" is \n\n\t\t ==> ${sphr_Vol.getVol()} <==`);     
            break;
        
        case 3 :
                var radius = prompt("Enter Radius :");
                var height = prompt("Enter Height :");
                let Cone_Vol = new Cone(radius,height)
                console.log(`\nThe Volume of Cone With radius : "${radius}" and height : "${height}" is \n\n\t\t ==> ${Cone_Vol.getVol()} <==`);
                break;

        default:
            console.log("Enter Correct Option");

    }





*/