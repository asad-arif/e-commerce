import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState();

  const navigate = useNavigate();

  const getProducts = async () => {
    const res = await fetch("http://localhost:4000/get-products", {
      method: "get",
    });

    const data = await res.json();
    setProducts(data);
  };

  const deleteProduct = (productId) => {
    const res = fetch(`http://localhost:4000/delete-product/${productId}`, {
      method: "delete",
    });
    if (res) {
      alert("Product deleted");
      getProducts();
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="product-listing">
      <ul className="table-row">
        <li>Sr.N</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Action</li>
      </ul>
      {products?.map((product, index) => {
        return (
          <ul className="table-row">
            <li>{index}</li>
            <li>{product?.name}</li>
            <li>{product?.price}</li>
            <li>{product?.category}</li>
            <li>{product?.company}</li>
            <li>
              <button onClick={() => deleteProduct(product?._id)}>
                Delete
              </button>
              <button
                onClick={() => navigate(`/update-product/${product?._id}`)}
              >
                Edit
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Products;
