// Create a product
app.post('/products', (req, res) => {
  const { name, price, description } = req.body;

  const product = new Product({ name, price, description });

  product.save((err) => {
    if (err) {
      console.error('Error saving product:', err);
      res.status(500).send('Error saving product');
    } else {
      res.status(201).send('Product created successfully');
    }
  });
});

// Read all products
app.get('/products', (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      console.error('Error retrieving products:', err);
      res.status(500).send('Error retrieving products');
    } else {
      res.json(products);
    }
  });
});

// Read a single product
app.get('/products/:id', (req, res) => {
  const productId = req.params.id;

  Product.findById(productId, (err, product) => {
    if (err) {
      console.error('Error retrieving product:', err);
      res.status(500).send('Error retrieving product');
    } else {
      res.json(product);
    }
  });
});

// Update a product
app.put('/products/:id', (req, res) => {
  const productId = req.params.id;
  const { name, price, description } = req.body;

  Product.findByIdAndUpdate(
    productId,
    { name, price, description },
    (err, product) => {
      if (err) {
        console.error('Error updating product:', err);
        res.status(500).send('Error updating product');
      } else {
        res.status(200).send('Product updated successfully');
      }
    }
  );
});

// Delete a product
app.delete('/products/:id', (req, res) => {
  const productId = req.params.id;

  Product.findByIdAndRemove(productId, (err, product) => {
    if (err) {
      console.error('Error deleting product:', err);
      res.status(500).send('Error deleting product');
    } else {
      res.status(200).send('Product deleted successfully');
    }
  });
});
