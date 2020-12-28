const TamGiac = require('./TamGiac');
const Diem = require('./Diem');
const assert = require('assert');

describe('Lớp TamGiac', () =>
{

    describe('#isValid(): Kiểm tra tam giác hợp lệ', () =>
    {
        it('Should return false when 3 points do not make a valid triangle', () =>
        {
            let point1 = new Diem(30, 20);
            let point2 = new Diem(30, 20);
            let point3 = new Diem(-5, 10);

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.isValid(), false);
        })

        it('Should return false when 3 points make a valid triangle', () =>
        {
            let point1 = new Diem(3, 2);
            let point2 = new Diem(-1, 0);
            let point3 = new Diem(-5, 10);

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.isValid(), true);
        })
    })

    describe('#calculatePerimeter(): Tính chu vi tam giác', () =>
    {
        it('Should always return positive number', () =>
        {
            let point1 = new Diem(3, 2);
            let point2 = new Diem(-1, 0);
            let point3 = new Diem(-5, 10);

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.calculatePerimeter() > 0, true);
        })

        it('Should return the right perimeter number', () =>
        {
            let point1 = new Diem(3, 2);
            let point2 = new Diem(-1, 0);
            let point3 = new Diem(-5, 10);

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.calculatePerimeter(), 26.55);
        })

        it('Should return the right perimeter number', () =>
        {
            let point1 = new Diem(3, 2);
            let point2 = new Diem(-1, 0);
            let point3 = new Diem(-5, 10);

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.calculatePerimeter(), 26.55);
        })

        it('Should return error message when triangle is not valid', () =>
        {
            let point1 = new Diem(3, 2);
            let point2 = new Diem(3, 2);
            let point3 = new Diem(-5, 10);

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.calculatePerimeter(), "Invalid triangle");
        })
    })
    describe('#isEquilateral(): Kiểm tra tam giác đều', () =>
    {
        it('Should return true when 3 points make an Equilateral triangle', () =>
        {
            let point1 = new Diem(5, 0);
            let point2 = new Diem(0, 0);
            let point3 = new Diem(2.5, 4.33);

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.isEquilateral(), true);
        })

        it('Should return false when 3 points do not make an Equilateral triangle', () =>
        {
            let point1 = new Diem(2, 0);
            let point2 = new Diem(0, 0);
            let point3 = new Diem(2.5, 4.33);

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.isEquilateral(), false);
        })
        it('Should throw error when triangle is not valid', () =>
        {
            let point1 = new Diem(3, 2);
            let point2 = new Diem(3, 2);
            let point3 = new Diem(-5, 'abc');

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.isEquilateral(), "Invalid triangle");
        })

    })

    describe('#isIsosceles(): Kiểm tra tam giác cân', () =>
    {
        it('Should return true when 3 points make an Isosceles triangle', () =>
        {
            let point1 = new Diem(2, 0);
            let point2 = new Diem(0, 0);
            let point3 = new Diem(1, 2.82);

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.isIsosceles(), true);
        })

        it('Should return false when 3 points do not make an Isosceles triangle', () =>
        {
            let point1 = new Diem(2, 0);
            let point2 = new Diem(0, 0);
            let point3 = new Diem(2, 4.33);

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.isIsosceles(), false);
        })

        it('Should throw error when triangle is not valid', () =>
        {
            let point1 = new Diem(3, 2);
            let point2 = new Diem(3, 2);
            let point3 = new Diem(-5, 'abc');

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.isIsosceles(), "Invalid triangle");
        })
    })

    describe('#isRight(): Kiểm tra tam giác vuông', () =>
    {
        it('Should return true when 3 points make a Right-angled triangle', () =>
        {
            let point1 = new Diem(5, 0);
            let point2 = new Diem(0, 0);
            let point3 = new Diem(1.80, 2.40);

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.isRight(), true);
        })

        it('Should return false when 3 points do not make a Right-angled triangle', () =>
        {
            let point1 = new Diem(5, 1);
            let point2 = new Diem(0, 0);
            let point3 = new Diem(1.8, 2.4);

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.isRight(), false);
        })

        it('Should throw error when triangle is not valid', () =>
        {
            let point1 = new Diem(3, 2);
            let point2 = new Diem(3, 2);
            let point3 = new Diem(-5, 'abc');

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.isRight(), "Invalid triangle");
        })
    })

    describe('#isRightAndIsosceles(): Kiểm tra tam giác vuông cân', () =>
    {
        it('Should return true when 3 points make a Right-angled and Isosceles triangle', () =>
        {
            let point1 = new Diem(5, 0);
            let point2 = new Diem(0, 0);
            let point3 = new Diem(2.5, 1.658);

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.isRightAndIsosceles(), true);
        })

        it('Should return false when 3 points do not make a Right-angled and Isosceles triangle', () =>
        {
            let point1 = new Diem(5, 1);
            let point2 = new Diem(0, 0);
            let point3 = new Diem(1.8, 2);

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.isRightAndIsosceles(), false);
        })

        it('Should throw error when triangle is not valid', () =>
        {
            let point1 = new Diem(3, 2);
            let point2 = new Diem(3, 2);
            let point3 = new Diem(-5, 'abc');

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.isRightAndIsosceles(), "Invalid triangle");
        })
    })

    describe('#classifyTriangle(): Phân loại tam giác', () =>
    {
        it('Should return \'Đều\' when triangle is Equilateral', () =>
        {
            let point1 = new Diem(5, 0);
            let point2 = new Diem(0, 0);
            let point3 = new Diem(2.5, 4.33);

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.classifyTriangle(), 'Đều');
        })

        it('Should return \'Cân\' when triangle is Isosceles', () =>
        {
            let point1 = new Diem(2, 0);
            let point2 = new Diem(0, 0);
            let point3 = new Diem(1, 2.82);

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.classifyTriangle(), 'Cân');
        })

        it('Should return \'Vuông\' when triangle is Right-angled', () =>
        {
            let point1 = new Diem(5, 0);
            let point2 = new Diem(0, 0);
            let point3 = new Diem(1.80, 2.40);

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.classifyTriangle(), 'Vuông');
        })

        it('Should return \'Vuông cân\' when triangle is Right and Isosceles', () =>
        {
            let point1 = new Diem(5, 0);
            let point2 = new Diem(0, 0);
            let point3 = new Diem(2.5, 1.658);

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.classifyTriangle(), 'Vuông cân');
        })

        it('Should return \'Thường\' when triangle is valid and none of the above', () =>
        {
            let point1 = new Diem(5, 0);
            let point2 = new Diem(10, 0);
            let point3 = new Diem(2.5, 1.658);

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.classifyTriangle(), 'Thường');
        })

        it('Should throw error when triangle is not valid', () =>
        {
            let point1 = new Diem(3, 2);
            let point2 = new Diem(3, 2);
            let point3 = new Diem(-5, 'abc');

            let triangle = new TamGiac(point1, point2, point3);

            assert.strictEqual(triangle.classifyTriangle(), "Invalid triangle");
        })
    })


});