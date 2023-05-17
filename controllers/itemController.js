let items = require('../items')
const { v4: uuidv4 } = require('uuid')  // we are importing the uuid package and renaming it to uuidv4. we will use this to generate unique ids for our items.

const getItems = async (request, reply) => {
    reply.send(items)
}

const getItem = async (request, reply) => {
    const { id } = request.params
    const item = items.find(item => item.id === id)
    reply.send(item)
}


const postItem = async (request, reply) => {
    const { name } = request.body
    const item = {
        id: uuidv4(),    // we are generating a unique id for the item using uuidv4()
        name
    }
    items.push(item)      // we are pushing the item to the items array
    reply.code(201).send(item)
}

module.exports = {
    getItems,
    getItem,
    postItem
}