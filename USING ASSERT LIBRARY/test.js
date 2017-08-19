var assert = require('assert');
var should = require('should');

describe('assert', function () {
    it('1的索引是否为0',function () {
        assert.ok([1, 2, 3].indexOf(1) === 0, '测试失败');
    });

    it('返回value在数组中的索引，不存在返回-1',function () {
        assert.equal(0, [1, 2, 3].indexOf(1), '测试失败');
    });
    
    var person1 = { "name":"hejj", "age":"22" };
    var person2 = { "name":"hejj", "age":"22" };
    
    it('person1和person2是否为同一个人',function () {
        assert.deepEqual(person1, person2, '不是同一个人');
    });
});


describe('should', function () {

    it('1的索引为0应该是正确的',function () {
        ([1, 2, 3].indexOf(1) === 0).should.be.true('测试失败');
    });

    it('1的索引应该为0',function () {
        ([1, 2, 3].indexOf(1)).should.be.equal(0,"测试失败");
    });
    
    var person1 = { "name":"hejj", "age":"22" };
    var person2 = { "name":"hejj", "age":"22" };
    
    it('person1和person2是否为同一个人',function () {
        person1.should.be.eql(person2,'不是同一个人');
    });
});
