module.exports = {

    'Fill out form and login': function (client) {
        var data = client.globals;
        client
            .url(data.urls.login)
            .assert.title('ThingMaker ID')
            .click('.c-link__button--major')
            // .pause(2000)
            .useXpath()
            .waitForText('//*[@id="root"]/div/div[3]/div/div/div[1]/p', text => (text.length > 2))
            .assert.containsText('//*[@id="root"]/div/div[3]/div/div/div[1]/p', 'Invalid email')

            .useCss()
            .setValue('input[type=email]', 'asdfqwepoi0')
            .click('.c-link__button--major')
            // .pause(2000)
            .useXpath()
            .waitForText('//*[@id="root"]/div/div[3]/div/div/div[2]/p', text => (text.length > 2))
            .assert.containsText('//*[@id="root"]/div/div[3]/div/div/div[2]/p', 'Invalid password')

            .useCss()
            .setValue('input[type=password]', 'asdfqwepoi0')
            .click('.c-link__button--major')
            // .pause(2000)
            .useXpath()
            .waitForText('//*[@id="root"]/div/div[3]/div/div/div[1]/p', text => (text.length > 2))
            .assert.containsText('//*[@id="root"]/div/div[3]/div/div/div[1]/p', 'Invalid email')

            .useCss()
            .clearValue('input[type=email]')
            .setValue('input[type=email]', data.username)
            .click('.c-link__button--major')
            // .pause(2000)
            .useXpath()
            .waitForText('//*[@id="root"]/div/div[3]/div/div/div[2]/p', text => (text.length > 2))
            .assert.containsText('//*[@id="root"]/div/div[3]/div/div/div[2]/p', 'Invalid password')

            .useCss()
            .clearValue('input[type=password]')
            .setValue('input[type=password]', data.password)
            .assert.cssClassPresent('a.fa', 'fa-eye-slash')
            .click('.fa')
            .assert.cssClassPresent('a.fa', 'fa-eye')
            .assert.elementPresent("input[type=text]")
            .click('.fa')
            .assert.cssClassPresent('a.fa', 'fa-eye-slash')
            .assert.elementPresent("input[type=password]")
            .click('.c-link__button--major')
            .waitForElementVisible('.c-card__title', 5000)
            .assert.containsText('.c-card__title', 'Manage User Profile')

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