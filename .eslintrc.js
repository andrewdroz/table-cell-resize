module.exports = {
    "extends": "airbnb-base",
    "env": {
        "browser": true,
        "jquery": true
    },
    "rules": {
        // TO ALLOW DOM MANIPULATION OF BUTTON
        "no-param-reassign": [2, { "props": false }]
    }
};