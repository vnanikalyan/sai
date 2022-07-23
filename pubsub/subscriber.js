const Publisher = require('./publisher')
const subscriber = new Publisher()

subscriber.on('started', ()=>{
    console.log('SUBSCRIBER - The Process is started!')
}) 

subscriber.on('completed', ()=>{
    console.log('SUBSCRIBER - The Process is completed!')
})

const publisher = subscriber

publisher.started()
publisher.completed()
publisher.started()
