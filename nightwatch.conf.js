const SCREENSHOT_PATH = process.env.CIRCLE_ARTIFACTS || './screenshots';

module.exports = {
  src_folders: [
    'tests/fixtures'
  ],
  output_folder: 'reports',
  custom_commands_path: 'tests/commands',
  page_objects_path: '',
  globals_path: 'tests/globals.js',
 
 test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        waitForConditionTimeout: 5000
      },
      screenshots: {
        enabled: true,
        path: SCREENSHOT_PATH,
        on_failure: true,
        on_error: false
      }
    },
    chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                'goog:chromeOptions': {
                    args: ['--window-size=1024,768'],
                    w3c: false
                },
            },
      },
    firefox: {
          desiredCapabilities: {
              browserName: 'firefox',
              javascriptEnabled: true,
              acceptSslCerts: true,
              marionette: true
          },
      },
  }
};
