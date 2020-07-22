/*
 *  Copyright 2020 Adobe Systems Incorporated
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
let wdio_config = require('./wdio.conf.local.js').config;
let config = require('./lib/config');

let capabilities = {
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
        'excludeSwitches': ['enable-automation']
    }
};

if (config.selenium.headless === true) {
    capabilities['goog:chromeOptions'].args = ['headless'];
}

wdio_config.capabilities = [capabilities];

exports.config = wdio_config;
