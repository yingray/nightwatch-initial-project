module.exports = {


    'Change Password': function (client) {
        var data = client.globals;
        var time = 5000;
        client
            .url(data.urls.login)
            .setValue('input[type=password]', data.password)
            .setValue('input[type=email]', data.username)
            .click('.c-link__button--major')
            .useXpath()
            .waitForElementVisible('//*[@id="root"]/div/div[3]/div/div[1]/div/div[2]/div[2]/p[1]', time)
            .waitForText('//*[@id="root"]/div/div[3]/div/div[1]/div/div[2]/div[2]/p[1]', text => (text === data.username))
            .assert.containsText('//*[@id="root"]/div/div[3]/div/div[1]/div/div[2]/div[2]/p[1]', data.username)
            .click('//*[@id="root"]/div/div[3]/div/div[2]/div/div[3]')
            .waitForElementVisible('//*[@id="root"]/div/div[3]/div/div[1]/div/div/div[1]/input', time)
            .setValue('//*[@id="root"]/div/div[3]/div/div[1]/div/div/div[1]/input', data.password)
            .setValue('//*[@id="root"]/div/div[3]/div/div[2]/div/div/div[1]/div/div[1]/input', data.password)
            .setValue('//*[@id="root"]/div/div[3]/div/div[2]/div/div/div[2]/div/input', data.password)
            .click('//*[@id="root"]/div/div[3]/div/div[3]/button')
            .useCss()
            .waitForElementVisible('.c-notification', time)
            .assert.containsText('.c-notification__content_message', 'Your password has been changed')
            .end();
    },



    // 'Demo test Google' : function (client) {
    //     client
    //         .url('http://www.google.com')
    //         .waitForElementVisible('body', 1000)
    //         .assert.title('Google')
    //         .assert.visible('input[type=text]')
    //         .setValue('input[type=text]', 'rembrandt van rijn')
    //         .waitForElementVisible('button[name=btnG]', 1000)
    //         .click('button[name=btnG]')
    //         .pause(1000)
    //         .assert.containsText('ol#rso li:first-child',
    //         .end();
    // }
}