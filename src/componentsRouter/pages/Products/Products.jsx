import { useEffect, useState } from "react";
import { fetchProducts, fetchProductsByName } from "../../APi/fetchAPI";
import ProductList from "../../components/ProductList/ProductList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const productName = searchParams.get("q") ?? '';
  
  useEffect(() => {
    const getProductByName = async () => {
      const data = productName
        ? await fetchProductsByName(productName)
        : await fetchProducts();
      setProducts(data.products);
    }

    getProductByName();
  }, [productName])
  
  console.log('products :>> ', products);
  
  return (
    <div>
      <h1>Products page</h1>
      <SearchBox />
      <ProductList products={products} />
    </div>
  );
}

export default Products