import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AdminLayout from "../layout/AdminLayout";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({ title: "", price: "" });
  const token = localStorage.getItem("userToken"); // Mengambil token dari localStorage

  useEffect(() => {
    if (!token) {
      navigate("/login"); // Arahkan ke halaman login jika tidak ada token
    }
  }, [token, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Apakah Anda ingin membuat produk ini?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, buat!",
      cancelButtonText: "Tidak, batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.post("https://fakestoreapi.com/products", product);
          Swal.fire("Dibuat!", "Produk Anda telah dibuat.", "success").then(
            () => {
              navigate("/dashboard");
            }
          );
        } catch (error) {
          Swal.fire(
            "Kesalahan!",
            "Terjadi kesalahan saat membuat produk.",
            "error"
          );
          console.error("Kesalahan saat membuat produk:", error);
        }
      } else if (result.isDismissed) {
        Swal.fire("Dibatalkan", "Pembuatan produk telah dibatalkan.", "info");
      }
    });
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-blue-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border border-gray-200 bg-opacity-80 backdrop-blur-sm">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">Buat Produk</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Judul
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={product.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder="Masukkan judul produk"
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Harga
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={product.price}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder="Masukkan harga produk"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            >
              Buat Produk
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CreateProduct;
