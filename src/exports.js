(function(window) {
    var callbacks = {},
        modules = {};
    function require(name) {
        if (!modules[name] && callbacks[name]) {
            modules[name] = callbacks[name](require);
        }
        if (modules[name]) {
            return modules[name];
        } else {
            throw new Error('Module ' + name + ' is not found');
        }
    }
    window.exports = function(name, callback) {
        callbacks[name] = callback;
    };
    window.run = function(callback) {
        callback(require);
    };
})(window);
