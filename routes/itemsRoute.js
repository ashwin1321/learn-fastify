const items = require('../items')

// Item Schema 
const Item = {
    type: 'object',
    properties: {
        id: { type: 'integer' },
        name: { type: 'string' }
    }
}

// options for get all items
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item
            }
        }
    }
}
//the getItemsOpts object is defining the expected response structure for the /items endpoint, where the response should be an array of objects, with each object having an id and a name property, both of which should be strings.


const getItemOpts = {
    schema: {
        response: {
            200: Item
        }
    }
}

// the getItemOpts object is defining the expected response structure for the /items/:id endpoint, where the response should be an object with an id and a name property, both of which should be strings.

function itemRoutes(fastify, options, done) {
    // we define a function that takes in fastify, options, and done as parameters. where fastify is the fastify instance, options is the options object passed to fastify.register(), and done is a callback that we need to call when we are done with the plugin registration.

    // get all items 
    fastify.get('/items', getItemsOpts, async (request, reply) => {
        // the gerItemsOpts is the second argument in the get() method. it is an object that defines the expected response structure for the /items endpoint, where the response should be an array of objects, with each object having an id and a name property, both of which should be strings.

        reply.send(items)
    })

    // get single item 
    fastify.get('/items/:id', getItemOpts, async (request, reply) => {
        const { id } = request.params
        const item = items.find(item => item.id === id)
        reply.send(item)
    })

    done()
}

module.exports = itemRoutes