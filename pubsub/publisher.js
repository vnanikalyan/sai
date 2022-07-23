const EventEmitter = require('events');

class Publisher extends EventEmitter{
    started() {
        console.log('PUB - Started')
        this.emit('started', 'The process is started!!')
    }

    completed() {
        console.log('SUB - Completed')
        this.emit('completed', 'The process is completed!!')
    }
}

module.exports = Publisher