module.exports = class Diem
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    calculateDistance(secondPoint)
    {
        return (Math.sqrt(Math.pow(secondPoint.x - this.x, 2) + Math.pow(secondPoint.y - this.y, 2))).toFixed(2) - 0;
    }

}

