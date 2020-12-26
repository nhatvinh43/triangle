module.exports = class TamGiac
{
    constructor([{ point1, point2 }, { point3, point4 }, { point5, point6 }])
    {
        this.firstSide = point1.calculateDistance(point2);
        this.secondSide = point3.calculateDistance(point4);;
        this.thirdSide = point5.calculateDistance(point6);
    }

    isValid()
    {
        return (this.firstSide < this.secondSide + this.thirdSide &&
            this.secondSide < this.firstSide + this.thirdSide &&
            this.thirdSide < this.firstSide + this.secondSide);
    }

    calculatePerimeter()
    {
        return (this.isValid() && this.firstSide + this.secondSide + this.thirdSide);
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
        return (this.isValid() && (Math.pow(this.firstSide, 2) === Math.pow(this.secondSide + this.thirdSide, 2) ||
            Math.pow(this.secondSide, 2) === Math.pow(this.firstSide + this.thirdSide, 2) ||
            Math.pow(this.thirdSide, 2) === Math.pow(this.firstSide + this.secondSide, 2)
        ));
    }

    //Vuong can
    isRightAndIsosceles()
    {
        return (this.isIsosceles() && this.isRight);
    }

    //Tam giac thuong
    isNormal()
    {
        return (this.isValid());
    }

    //Phan loai tam giac
    classifyTriangle()
    {
        if (this.isEquilateral()) return "Đều";
        if (this.isRightAndIsosceles()) return "Vuông cân";
        if (this.isRight()) return "Vuông";
        if (this.isIsosceles()) return "Cân";
        if (this.isNormal()) return "Thường";
        return "Không phải tam tác";
    }
}
