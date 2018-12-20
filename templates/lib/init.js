'use strict';

const Module = require('./#moduleName#');

module.exports = function $init(context, config) {

    var _logger = context.getLogger('#moduleName#');

    _logger.info('#moduleName# module booting...');

    return new Promise(function(resolve, reject) {
        context.resolve({});
    });
};