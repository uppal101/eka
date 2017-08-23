module.exports = {
  "Submit values" : function(browser){
    return browser
        .url('http://http://localhost:3001/signup')
        .waitForElementVisible('body', 1000)
        .setValue('input[name="username"]', 'myusername')
        .setValue('input[name="email"]', 'myemail@hotmail.com')
        .setValue('input[name="password"]', 'mypassword')
        .click('Button')
        .pause(1000)
        .assert.containsText('myusername', 'myemail@hotmail.com', 'mypassword')
        .end();
  },
  
  "First form loads" : function (browser) {
    browser
    .url("http://http://localhost:3001/signup")
     .waitForElementVisible('body', 5000)
    .assert.elementPresent('input[name="username"]')
    .assert.elementPresent('input[name="password"]')
    .assert.elementPresent('input[name="email"]')
     .end();
  },

}

