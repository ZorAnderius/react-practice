import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../APi/fetchAPI";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProductById(productId);
      setProduct(data);
    };

    getProduct();
  }, [productId]);
  return product && (
    <div className="card">
      <img
        src={product.images[0]}
        className="img-thumbnail"
        style={{ width: "200px" }}
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>

        <h6>Price: {product.price}</h6>
        <button type='button' className="btn btn-primary">
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;