module.exports = class TamGiac
{
    constructor(point1, point2, point3)
    {
        this.firstSide = point1.calculateDistance(point2);
        this.secondSide = point2.calculateDistance(point3);;
        this.thirdSide = point1.calculateDistance(point3);
    }

    isValid()
    {
        return (this.firstSide < this.secondSide + this.thirdSide &&
            this.secondSide < this.firstSide + this.thirdSide &&
            this.thirdSide < this.firstSide + this.secondSide);
    }

    calculatePerimeter()
    {
        return (this.isValid() && (this.firstSide + this.secondSide + this.thirdSide).toFixed(2) - 0);
    }


    //Tam giac deu
    isEquilateral()
    {
        return (this.isValid() && this.firstSide === this.secondSide && this.secondSide == this.thirdSide);
    }

    //Tam giac can
    isIsosceles()
    {
        return (this.isValid() && !this.isEquilateral() && (this.firstSide === this.secondSide || this.firstSide == this.thirdSide || this.secondSide == this.thirdSide));
    }

    //Tam giac vuong
    isRight()
    {
        return (this.isValid() && (Math.pow(this.firstSide, 2) === Math.pow(this.secondSide,2) + Math.pow( this.thirdSide, 2) ||
        Math.pow(this.secondSide, 2) === Math.pow(this.firstSide,2) + Math.pow( this.thirdSide, 2) ||
        Math.pow(this.thirdSide, 2) === Math.pow(this.secondSide,2) + Math.pow( this.firstSide, 2)
        ));
    }

    //Vuong can
    isRightAndIsosceles()
    {
        return (this.isIsosceles() && this.isRight());
    }

    //Tam giac thuong


    //Phan loai tam giac
    classifyTriangle()
    {
        if (this.isEquilateral()) return "Đều";
        if (this.isRightAndIsosceles()) return "Vuông cân";
        if (this.isRight()) return "Vuông";
        if (this.isIsosceles()) return "Cân";
        if (this.isValid()) return "Thường";
        return "Không phải tam tác";
    }
}
