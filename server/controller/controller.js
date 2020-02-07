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
        console.log('imgurl', imgurl)
        const db = req.app.get('db')
        db.add_product(name, price, imgurl).then(products => {
            res.status(200).send(products)
        })
    },
    deleteProduct: (req, res, next) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.delete_product(id).then(products => {
            res.status(200).send(products)
        })
    },
    updateProduct: (req, res, next) => {
        const {id} = req.params
        const {name, price, imgurl} = req.body 
        const db = req.app.get('db')
        db.update_product(name, price, imgurl, id).then(products => {
            res.status(200).send(products)
        })
    }
}