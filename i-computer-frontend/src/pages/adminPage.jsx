import { Link, Routes, Route } from "react-router-dom";

export default function AdminPage() {
    return (
        <div className="w-full h-full flex">
           <div className="w-[300px] h-full bg-white" >
           <Link to="/admin/products" className="block p-4 hover:bg-gray-200">Products</Link>
           <Link to="/admin/users" className="block p-4 hover:bg-gray-200">Users</Link> 
           <Link to="/admin" className="block p-4 hover:bg-gray-200">Orders</Link>
           </div>
           <div className="w-[calc(100%-300px)] h-full bg-amber-200">
<Routes>
    <Route path='/' element={<h1>ordres page</h1>} />
    <Route path='/products' element={<h1>products page</h1>} />
    <Route path='/users' element={<h1>users page</h1>} />
</Routes>
           </div>
           
        </div>
    )
}