class Rectangle 
    {
        constructor(_len,_bred)
            {
                this.length = _len;
                this.breadth = _bred;
            }

        area()
            {
                return this.length*this.breadth;
            }
    }
let obj = new Rectangle(5,5)
console.log(obj.area());