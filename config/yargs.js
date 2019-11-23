const options = {
    create: {
        description: {
            demand: true,
            alias: 'd',
            completed: false,
            description: 'activity description',
        }
    },
    update: {
        description: {
            demand: true,
            alias: 'u',
            completed: true,
            description: 'activity description',
        },
        completed: {
            alias: 'c',
            default: true,
            description: 'State of the activity',
        }
    },
    list: {
        functions: {
            alias: 'l',
            description: 'Shows tasks',
        }
    }
};

const argv = require('yargs')
    .command('create', 'Create a new activity ', options.create)
    .command('update', 'Update the state of the activity', options.update)
    .command('list', 'List all task', options.list)
    .command('delete', 'delete a task', options.create)
    .help()
    .argv;

module.exports = {
    argv
};