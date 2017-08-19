var assert = require('assert');

before(function () {
    console.log('在所有describe之外使用before方法')
});

describe('global_hooks', function () {
    it('hooks测试', function () {
        assert.ok(2 + 2 == 4, '');
    })
});