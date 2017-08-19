//导入Node内嵌断言库assert
var assert = require('assert');

//describe方法诠释一组测试内容，用于将不同测试用例的分组，有点像父标题
//在describe方法中再次使用describe，用于在此测试内容中进行分组，有点像子标题
//it方法代表基本的测试用例
//两者结合使用，是mocha定义测一组相关测试用例的方式
describe('MyArrayTest', function() {
    describe('#indexOf()', function() {
        it('返回value在数组中的索引，不存在返回-1', () => {
            assert.equal(0,[1,2,3].indexOf(1),'测试成功');
        });
    });
});
