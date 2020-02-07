module.exports = {
    getInventory: (req, res, next) => {
        const db = req.app.get('db')
        db.get_inventory().then(inventory => {
            res.status(200).send(inventory)
        })
    }
}