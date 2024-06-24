import dbConnect from '../lib/db';
import Product from '../models/Product';

const Home = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: INR {product.price}</p>
            <p>Sizes: {product.sizes.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  const result = await Product.find({});
  const products = result.map((doc) => {
    const product = doc.toObject();
    product._id = product._id.toString();
    return product;
  });

  return { props: { products: products } };
}

export default Home;
