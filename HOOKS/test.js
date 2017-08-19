var assert = require('assert');


describe('hooks', function () {
        before(function () {
            console.log('在所有it方法执行前执行，只执行一次')
        });
        after(function () {
            console.log('在所有it方法执行后执行，只执行一次')
        });
        beforeEach(function () {
            console.log('在每个it方法前执行')
        });
        afterEach(function () {
            console.log('在每个it方法后执行')
        });
        it('hooks测试1',function(){
            assert.ok(1+1 == 2,'');
        })
        it('hooks测试2',function(){
            assert.ok(2+2 == 4,'');
        })
});

describe('hooks_asynchronous', function () {
    before(function (done) {
        console.log('不调用done方法，使得测试超时，抛出错误')
        // done()
    });
    after(function () {
        console.log('在所有it方法执行后执行，只执行一次')
    });
    it('hooks测试1',function(){
        assert.ok(1+1 == 2,'');
    })
});