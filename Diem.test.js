
const Diem = require('./Diem');
const assert = require('assert');

describe('Điểm', () =>
{
    describe('#calculateDistance()', () =>
    {
        it('Should return positive distance betwwen two points', () =>
        {
            let firstPoint = new Diem(3, 2);
            let secondPoint = new Diem(-1, 0);
            assert.strictEqual(firstPoint.calculateDistance(secondPoint) >= 0, true);
        })

        it('Should calculate the right distance value between two points when both are positive', () =>
        {
            let firstPoint = new Diem(3, 2);
            let secondPoint = new Diem(1, 0);
            assert.strictEqual(firstPoint.calculateDistance(secondPoint), 2.83);
        })

        it('Should calculate the right distance value between two points when both are negative', () =>
        {
            firstPoint = new Diem(-5, -10);
            secondPoint = new Diem(-29, -1);
            assert.strictEqual(firstPoint.calculateDistance(secondPoint), 25.63);

        })

        it('Should calculate the right distance value between two points when one is negative and the other is positive', () =>
        {
            firstPoint = new Diem(-5, -10);
            secondPoint = new Diem(29, 1);
            assert.strictEqual(firstPoint.calculateDistance(secondPoint), 35.74);

            firstPoint = new Diem(29, 1);
            secondPoint = new Diem(-5, -10);
            assert.strictEqual(firstPoint.calculateDistance(secondPoint), 35.74);
        })

        it('Should return error when one point has invalid character', () =>
        {
            firstPoint = new Diem(-5, 'a');
            secondPoint = new Diem(21, 1);
            assert.strictEqual(typeof firstPoint.calculateDistance(secondPoint) !== 'Number', true);

            firstPoint = new Diem(-5, 1);
            secondPoint = new Diem(21, 'c');
            assert.strictEqual(typeof firstPoint.calculateDistance(secondPoint) !== 'Number', true);

        })

        it('Should return zero when two points are zero', () =>
        {
            firstPoint = new Diem(0, 0);
            secondPoint = new Diem(0, 0);
            assert.strictEqual(firstPoint.calculateDistance(secondPoint), 0.00);
        })
    });

});