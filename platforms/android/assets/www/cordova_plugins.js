cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-cache-clear.CacheClear",
        "file": "plugins/cordova-plugin-cache-clear/www/CacheClear.js",
        "pluginId": "cordova-plugin-cache-clear",
        "clobbers": [
            "CacheClear"
        ]
    },
    {
        "id": "cordova-plugin-network-information.network",
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "id": "cordova-plugin-network-information.Connection",
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "id": "cordova-plugin-ping.ping",
        "file": "plugins/cordova-plugin-ping/www/ping.js",
        "pluginId": "cordova-plugin-ping",
        "clobbers": [
            "Ping"
        ]
    },
    {
        "id": "onesignal-cordova-plugin.OneSignal",
        "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
        "pluginId": "onesignal-cordova-plugin",
        "clobbers": [
            "OneSignal"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-cache-clear": "1.3.7",
    "cordova-plugin-network-information": "1.3.3",
    "cordova-plugin-ping": "0.3.1",
    "cordova-plugin-remote-injection": "0.5.2",
    "onesignal-cordova-plugin": "2.1.2"
};
// BOTTOM OF METADATA
});