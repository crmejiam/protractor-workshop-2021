import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 30000,
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
    browser.manage().timeouts().implicitlyWait(0);

    const { AwesomeReport } = require('jasmine-awesome-report');
    const config = {
      fullPath: 'awesome-report',
      fileName: 'report',
      merge: true

    };

    jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--disable-popup-blocking', '--no-default-browser-check', '--window-size=800,600'],
      prefs: { credentials_enable_service: false }
    }
  },

};
