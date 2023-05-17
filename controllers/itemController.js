const items = require('../items')


const getItems = async (request, reply) => {
    reply.send(items)
}

const getItem = async (request, reply) => {
    const { id } = request.params
    const item = items.find(item => item.id === id)
    reply.send(item)
}

module.exports = {
    getItems,
    getItem
}