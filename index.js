const fastify = require('fastify')({ logger: true })       // logger is used to log the request and response
const items = require('./items')                           // import the items array

fastify.register(require('@fastify/swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: { title: 'fastify-api' },
    },
})
fastify.register(require('./routes/itemsRoute'))                // register the items route
// routes are defined in routes/itemsRoute.js file so we need to import it here so that we can register it with fastify and fastify will know about the routes that we have defined in the itemsRoute.js file and will be able to serve them.

// start the server
const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()