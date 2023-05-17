const fastify = require('fastify')({ logger: true })       // logger is used to log the request and response


// declare the routes

// get 
fastify.get('/', async (request, reply) => {
    return `Welcome to Fastify API`
})


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