function ProductCard(props) {

    console.log("ProductCard component rendered");
    console.log("ProductCard component rendered successfully");


    return (
<div className="border w-64 h-80">
  <h2 className="text-xl font-bold mb-2">{props.name}</h2>
  <p className="text-gray-600 mb-4">{props.description}</p>

  <img
    src={props.photo}
    alt="Product Image"
    className="w-48 h-48 object-cover mb-4"
  />

  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
    Add to Cart
  </button>
</div>
    )
}

export default ProductCard;