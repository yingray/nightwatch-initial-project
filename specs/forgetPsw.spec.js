module.exports = {
    'Forget Password': function (client) {
        var data = client.globals
        client
            .url(`${data.urls.forgetPsw}`)
            .setValue('input[type=email]', 'asldjfkhadlfknvadlk')
            .click('.c-link__button--major')
            .waitForElementVisible('.c-formChild__validate--red',5000)
            .assert.containsText('.c-formChild__validate--red', 'Invalid email')
            .clearValue('input[type=email]')
            .setValue('input[type=email]', ' ')
            .pause(500)
            .click('.c-link__button--major')
            // .pause(2000)
            .waitForElementPresent('.c-formChild__validate--red', 2000)
            .assert.containsText('.c-formChild__validate--red', 'This field is required')
            .end()
    }

}