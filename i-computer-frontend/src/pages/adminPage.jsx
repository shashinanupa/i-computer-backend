import { Link, Routes, Route } from "react-router-dom";
import { FaClipboardList, FaBoxOpen, FaUsers } from "react-icons/fa";
import AdminProduct from "./admin/adminProduct";
import AdminAddProductForm from "./admin/AdminAddProductForm";

export default function AdminPage() {
  return (
    <div className="w-full h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-[300px] h-full bg-white flex flex-col shadow-xl rounded-r-3xl">

        {/* Logo */}
        <div className="w-full h-[100px] flex items-center justify-center border-b px-6 py-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Menu */}
        <div className="flex flex-col p-4 gap-2 mt-3">

          <Link
            to="/admin"
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"
          >
            <FaClipboardList className="text-xl" />
            <span className="font-semibold">Orders</span>
          </Link>

          <Link
            to="/admin/products"
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"
          >
            <FaBoxOpen className="text-xl" />
            <span className="font-semibold">Products</span>
          </Link>

          <Link
            to="/admin/users"
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"
          >
            <FaUsers className="text-xl" />
            <span className="font-semibold">Users</span>
          </Link>

        </div>
      </div>

      {/* Content Area */}
      <div className="w-[calc(100%-300px)] h-full bg-gray-100 p-8">
        <div className="w-full h-full bg-white rounded-3xl shadow-lg p-8 overflow-y-auto">

          <Routes>
            {/* Orders Route */}
            <Route
              path="/"
              element={
                <>
                  <h1 className="text-3xl font-bold mb-2">Orders Page</h1>
                  <p className="text-gray-500">
                    Manage all customer orders here.
                  </p>
                </>
              }
            />

            {/* Products Route */}
            <Route
              path="/products"
              element={<AdminProduct />}
            />

            {/* Users Route */}
            <Route
              path="/users"
              element={
                <h1 className="text-3xl font-bold">Users Page</h1>
              }
            />

            {/* Add Product Route */}
            <Route 
              path="/add-product" 
              element={<AdminAddProductForm />} 
            />
          </Routes>

        </div>
      </div>

    </div>
  );
}