/*
Your task is to create a Circle constructor that creates a circle with a radius provided by an argument.
The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which 
give both respective areas and perimeter (circumference).

*/

class Areaandperimeter
{

    constructor(radius)
    {
        this.radius=radius;
    }
    getArea()
    {
        let Area=3.14*this.radius*this.radius
        return Area
    }
    getPerimeter()
    {
        let perimeter=2*3.14*this.radius
        return perimeter
    }
}
Area1=new Areaandperimeter(3)
console.log(Area1.getArea())
console.log(Area1.getPerimeter())