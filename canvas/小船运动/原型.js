function test() {
    console.log('ok');
}
var t = new test();
var t1 = new test();

console.log(t.__proto__ === test.prototype,1);
console.log(test.prototype.constructor === test,2);
console.log(t.__proto__.constructor === test,3);
console.log(t.__proto__.constructor.name === 'test',4);
console.log(test.constructor,5);
console.log(test.__proto__,6);
console.log(test.prototype.constructor,7);
console.log(t.prototype,8);
/**
 * 每一个对象都有__proto__属性；每一个函数都有prototype属性，而且仅限于函数。
 * test.prototype是函数test的原型（或原型对象）。
 * test.prototype中有一个属性constructor，这个属性指向函数本身，即test.prototype.constructor === test.
 * t是由new 命令， 通过test函数构造生成的， 所以就有t.__proto__ === test.prototype。这是永远成立的。
 * t是对象而不是函数，所以t.prototype不存在，值是undefined.
 */