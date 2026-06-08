import { Link } from "react-router-dom";
export default function AdminProduct() {
    return (
        <div className="w-full h-full">   
           <Link to="/admin/add-product"    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full fixed bottom-20 right-20 shadow-7xl">
             Add Product
           </Link>
        </div>
    )
}