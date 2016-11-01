require('babel-register');
var jar = require('selenium-server-standalone-jar')
console.log(`Selenium Server Standalone Version: ${jar.version}`)

module.exports = {

    src_folders: ['./test/e2e/specs'],
    output_folder: './test/e2e/results',
    custom_commands_path : 'node_modules/nightwatch-custom-commands-assertions/js/commands',
    custom_assertions_path : 'node_modules/nightwatch-custom-commands-assertions/js/assertions',
    page_objects_path: ['./e2e/pages'],

    selenium: {
        start_process: true,
        server_path: jar.path,
        log_path: './e2e/results',
        host: '127.0.0.1',
        port: 4444
    },

    test_settings: {
        default: {
            selenium_host: '127.0.0.1',
            selenium_port: 4444,
            sreenshots: {
                enable: true,
                path: './e2e/results/screenshots'
            },
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            },
            globals: require('./data/dev')
        }
    },


};