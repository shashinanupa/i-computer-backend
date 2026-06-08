import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminAddProductForm() {
  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [altName, setAltName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [labelledPrice, setLabelledPrice] = useState("");
  const [image, setImage] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [brand, setBrand] = useState("");

  function handleSave() {
    const product = {
      productId,
      name,
      altName: altName.split(",").map((item) => item.trim()),
      description,
      price: Number(price),
      labelledPrice,
      Image: image.split(",").map((item) => item.trim()),
      isAvailable,
      category,
      stock: Number(stock),
      brand,
    };

    console.log(product);
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 p-5">
      {/* Header */}
      <div className="w-full bg-white rounded-lg shadow-lg p-5 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          Add Product Form
        </h1>

        <div className="flex gap-3">
          <Link
            to="/admin/products"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-5 rounded-full"
          >
            Back to Products
          </Link>

          <button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-full coursor-pointer"
          >
            Save Product
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="w-full bg-white rounded-lg shadow-lg p-6 mt-5">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="font-semibold">Product ID</label>
            <input
              type="text"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Enter Product ID"
            />
          </div>

          <div>
            <label className="font-semibold">Product Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Enter Product Name"
            />
          </div>

          <div className="col-span-2">
            <label className="font-semibold">
              Alternative Names (comma separated)
            </label>
            <input
              type="text"
              value={altName}
              onChange={(e) => setAltName(e.target.value)}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Laptop, Notebook, Mac"
            />
          </div>

          <div className="col-span-2">
            <label className="font-semibold">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-lg p-2 mt-1 h-32 resize-none"
              placeholder="Enter Product Description"
            />
          </div>

          <div>
            <label className="font-semibold">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="0"
            />
          </div>

          <div>
            <label className="font-semibold">Labelled Price</label>
            <input
              type="text"
              value={labelledPrice}
              onChange={(e) => setLabelledPrice(e.target.value)}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Rs. 0"
            />
          </div>

          <div className="col-span-2">
            <label className="font-semibold">
              Image URLs (comma separated)
            </label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="https://image1.jpg, https://image2.jpg"
            />
          </div>

          <div>
            <label className="font-semibold">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Category"
            />
          </div>

          <div>
            <label className="font-semibold">Brand</label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Brand"
            />
          </div>

          <div>
            <label className="font-semibold">Stock</label>
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="0"
            />
          </div>

          <div className="flex items-center gap-3 mt-8">
            <input
              type="checkbox"
              checked={isAvailable}
              onChange={(e) => setIsAvailable(e.target.checked)}
              className="w-5 h-5"
            />
            <label className="font-semibold">Available</label>
          </div>
        </div>
      </div>
    </div>
  );
}