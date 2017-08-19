var assert = require('assert');
var axios = require('axios');


describe('异步测试', function () {
    it('异步请求获取response后表示测试完成', function (done) {
        axios({
            method: 'get',
            url: 'https://api.github.com'
        })
            .then(function (response) {
                assert.ok(response.data.current_user_url == 'https://api.github.com/user', '测试失败');
                done();
            })
            .catch(function (error) {
            });
    });

    it('异步请求失败例子', function (done) {
        axios({
            method: 'get',
            url: 'https://awdawd'
        })
            .then(function (response) {
            })
            .catch(function (error) {
                done(error);
            });
    });
});