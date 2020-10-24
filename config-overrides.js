const { alias } = require('react-app-rewire-alias')
const path = require("path");

module.exports = function override(config) {
    alias({
        "~components": path.resolve(__dirname, "src/components"),
        "~scss": path.resolve(__dirname, "src/scss"),
    })(config)
    return config
}