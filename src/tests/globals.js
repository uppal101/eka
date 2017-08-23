module.exports = {
  'default' : {
    isLocal : true,
  },

  'integration' : {
    isLocal : false
  },

  // External before hook is ran at the beginning of the tests run, before creating the Selenium session
  before: function(done) {
    if (this.isLocal) {
      App.startServer(function() {
        done();
      });
    } else {
      done();
    }
  },

  // External after hook is ran at the very end of the tests run, after closing the Selenium session
  after: function(done) {
    if (this.isLocal) {
      App.stopServer(function() {
        done();
      });
    } else {
      done();
    }
  },

  // This will be run before each test suite is started
  beforeEach: function(browser, done) {
    // getting the session info
    browser.status(function(result) {
      console.log(result.value);
      done();
    });
  },

  // This will be run after each test suite is finished
  afterEach: function(browser, done) {
    console.log(browser.currentTest);
    done();
  }
};
