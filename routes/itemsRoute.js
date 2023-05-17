const items = require('../items')

function itemRoutes(fastify, options, done) {
    // we define a function that takes in fastify, options, and done as parameters. where fastify is the fastify instance, options is the options object passed to fastify.register(), and done is a callback that we need to call when we are done with the plugin registration.

    fastify.get('/items', async (request, reply) => {
        reply.send(items)
    })
    fastify.get('/items/:id', async (request, reply) => {
        const { id } = request.params
        const item = items.find(item => item.id === id)
        reply.send(item)
    })

    done()
}

module.exports = itemRoutes