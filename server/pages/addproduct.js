import { useState } from 'react';
import dbConnect from '../lib/dbConnect';
import Product from '../models/Product';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [sizes, setSizes] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dbConnect();

    const newProduct = new Product({
      name,
      price,
      sizes: sizes.split(','),
      image,
    });

    await newProduct.save();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Sizes (comma separated)"
        value={sizes}
        onChange={(e) => setSizes(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
