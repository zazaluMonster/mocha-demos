var assert = require('assert');

describe('retry_test', function () {
    this.retries(4);
    it('retry测试', function () {
        this.retries(2);
        console.log('retry执行')
        assert.ok(2 + 2 == 2, '');
    })

    it('retry测试', function (done) {
        this.retries(2);
        console.log('retry执行')
        assert.ok(2 + 2 == 4, '');
    })
});