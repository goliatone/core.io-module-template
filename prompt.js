'use strict';
const slug = require('slug');
slug.defaults.mode ='rfc3986';
slug.defaults.modes['rfc3986'] = {
    replacement: '-',      // replace spaces with replacement
    symbols: true,         // replace unicode symbols or not
    remove: null,          // (optional) regex to remove characters
    lower: true,           // result in lower case
    charmap: slug.charmap, // replace special characters
    multicharmap: slug.multicharmap // replace multi-characters
};

let questions = [
    {
        type: 'input',
        name: 'name',
        default: function(answer) {
            return answer.target;
        },
        message: 'What\'s the project\'s name?'
    },
    {
        type: 'input',
        name: 'moduleName',
        default: function(answer) {
            return slug(answer.name);
        },
        message: 'What\'s the module\'s name?'
    },
    {
        type: 'input',
        name: 'descripton',
        default: function(answer) {
            return 'core.io module';
        },
        message: 'Description of the project'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
    //TODO: Want to enter a list of packages as dependencies?
];

module.exports = questions;
