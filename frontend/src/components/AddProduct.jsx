import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState("");
  const userId = JSON.parse(localStorage.getItem("user"))?._id;
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !category || company || price) {
      setError(true);
      return;
    }
    const body = {
      name,
      category,
      price,
      company,
      userId,
    };
    const res = await fetch("http://localhost:4000/add-product", {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        {error && !name && <span className="error">Please enter the name</span>}

        <input
          type="number"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input"
        />
        {error && !price && (
          <span className="error">Please enter the price</span>
        )}

        <input
          type="category"
          placeholder="Enter Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input"
        />
        {error && !category && (
          <span className="error">Please enter the category</span>
        )}

        <input
          type="company"
          placeholder="Enter Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="input"
        />

        {error && !company && (
          <span className="error">Please enter the company</span>
        )}

        <button type="submit" className="btn">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
