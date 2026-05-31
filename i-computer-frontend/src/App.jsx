import './App.css'
import ProductCard from "./ProductCard.jsx";

function App() {
  return (
    <>
      <ProductCard
        name="MacBook Air"
        description="Rs. 250,000"
        photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRAOD9SraFVYdntHiGnU6VI6Q9zz0Lq4DiWA&s"
      />

      <ProductCard
        name="iPhone 15"
        description="Rs. 180,000"
        photo="https://images.unsplash.com/photo-1695048133142-1a20484d2569"
      />

      <ProductCard
        name="iPad Pro"
        description="Rs. 150,000"
        photo="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0"
      />

      <ProductCard
        name="Apple Watch"
        description="Rs. 95,000"
        photo="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
      />

      <ProductCard
        name="AirPods Pro"
        description="Rs. 65,000"
        photo="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1"
      />
    </>
  );
}

export default App;