module.exports = {
    getInventory: (req, res, next) => {
        const db = req.app.get('db')
        db.get_inventory().then(inventory => {
            res.status(200).send(inventory)
        }).catch(err => {
            console.log(err)
        })
    },
    addProduct: (req, res, next) => {
        const {name, price, imgurl} = req.body
        const db = req.app.get('db')
        db.add_product(name, price, imgurl).then(products => {
            res.status(200).send(products)
            //next step is to set up SQL commands for this function and then connect it to the front end
        })
    }
}