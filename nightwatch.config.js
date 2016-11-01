require('babel-register');
var jar = require('selenium-server-standalone-jar')
console.log(`Selenium Server Standalone Version: ${jar.version}`)

module.exports = {

    src_folders: ['./specs'],
    output_folder: './results',
    custom_commands_path : 'node_modules/nightwatch-custom-commands-assertions/js/commands',
    custom_assertions_path : 'node_modules/nightwatch-custom-commands-assertions/js/assertions',
    page_objects_path: ['./pages'],

    selenium: {
        start_process: true,
        server_path: jar.path,
        log_path: './results',
        host: '127.0.0.1',
        port: 4444
    },

    test_settings: {
        default: {
            selenium_host: '127.0.0.1',
            selenium_port: 4444,
            sreenshots: {
                enable: true,
                path: './results/screenshots'
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