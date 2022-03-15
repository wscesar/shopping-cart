const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/shopping-cart-db')

const Product = mongoose.model(
  'products',
  new mongoose.Schema({
    title: String,
    image: String,
    price: Number,
    sizes: [String],
    description: String,
  })
)

app.get('/api/products', async (req, res) => {
  const products = await Product.find({})
  res.send(products)
})

app.post('/api/products', async (req, res) => {
  const newProduct = new Product(req.body)
  const savedProduct = await newProduct.save()
  res.send(savedProduct)
})

app.delete('/api/products/:id', async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id)
  res.send(deletedProduct)
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on port ${port}`))
