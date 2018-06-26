// const Triangle = require('../lib/triangle');

xdescribe('Triangle', function () {
  it('equilateral triangles have equal sides', function () {
    let triangle = new Triangle(2, 2, 2);
    expect(triangle.kind()).toEqual('equilateral');
  });

  xit('larger equilateral triangles also have equal sides', function () {
    let triangle = new Triangle(10, 10, 10);
    expect(triangle.kind()).toEqual('equilateral');
  });

  xit('isosceles triangles have last two sides equal', function () {
    let triangle = new Triangle(3, 4, 4);
    expect(triangle.kind()).toEqual('isosceles');
  });

  xit('isosceles triangles have first two sides equal', function () {
    let triangle = new Triangle(2, 2, 3);
    expect(triangle.kind()).toEqual('isosceles');
  });

  xit('isosceles trianges have first and last sides equal', function () {
    let triangle = new Triangle(4, 3, 4);
    expect(triangle.kind()).toEqual('isosceles');
  });

  xit('isosceles triangles have two first sides equal', function () {
    let triangle = new Triangle(4, 4, 3);
    expect(triangle.kind()).toEqual('isosceles');
  });

  xit('isosceles triangles have in fact exactly two sides equal', function () {
    let triangle = new Triangle(10, 10, 2);
    expect(triangle.kind()).toEqual('isosceles');
  });

  xit('scalene triangles have no equal sides', function () {
    let triangle = new Triangle(3, 4, 5);
    expect(triangle.kind()).toEqual('scalene');
  });

  xit('scalene triangles have no equal sides at a larger scale too', function () {
    let triangle = new Triangle(10, 11, 12);
    expect(triangle.kind()).toEqual('scalene');
  });

  xit('scalene triangles have no equal sides in descending order either', function () {
    let triangle = new Triangle(5, 4, 2);
    expect(triangle.kind()).toEqual('scalene');
  });

  xit('very small triangles are legal', function () {
    let triangle = new Triangle(0.4, 0.6, 0.3);
    expect(triangle.kind()).toEqual('scalene');
  });

  xit('test triangles with no size are illegal', function () {
    let triangle = new Triangle(0, 0, 0);
    expect(triangle.kind.bind(triangle)).toThrow();
  });

  xit('triangles with negative sides are illegal', function () {
    let triangle = new Triangle(3, 4, -5);
    expect(triangle.kind.bind(triangle)).toThrow();
  });

  xit('triangles violating triangle inequality are illegal', function () {
    let triangle = new Triangle(1, 1, 3);
    expect(triangle.kind.bind(triangle)).toThrow();
  });

  xit('triangles violating triangle inequality are illegal 2', function () {
    let triangle = new Triangle(7, 3, 2);
    expect(triangle.kind.bind(triangle)).toThrow();
  });

  xit('triangles violating triangle inequality are illegal 3', function () {
    let triangle = new Triangle(10, 1, 3);
    expect(triangle.kind.bind(triangle)).toThrow();
  });
});