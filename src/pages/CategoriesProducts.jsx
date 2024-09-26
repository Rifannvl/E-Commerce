import React, { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext"; // Import hook useCart untuk mengakses fungsi addToCart
import { Link } from "react-router-dom"; // Import Link dari react-router-dom untuk navigasi
import Swal from "sweetalert2";

export default function CategoriesProducts() {
  // State untuk menyimpan kategori, kategori yang dipilih, produk, dan kuantitas
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("electronics");
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // Mengakses fungsi addToCart dari CartContext

  // Mengambil kategori produk dari API ketika komponen pertama kali dirender
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Mengambil produk berdasarkan kategori yang dipilih dari API setiap kali kategori berubah
  useEffect(() => {
    if (selectedCategory) {
      fetch(
        `https://fakestoreapi.com/products/category/${selectedCategory}?limit=4`
      )
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, [selectedCategory]);

  // Fungsi untuk menangani klik pada kategori dan mengubah kategori yang dipilih
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Fungsi untuk menambahkan produk ke keranjang dan menampilkan alert
  const handleAddToCart = (product) => {
    const cartItem = { ...product, quantity }; // Membuat objek cartItem dengan kuantitas
    addToCart(cartItem); // Menambahkan produk ke keranjang

    Swal.fire({
      icon: "success",
      text: `${product.title}`,
      title: "Product berhasil di tambahkan ke keranjang",
      confirmButtonText: "OK",
      backdrop: true,
      allowOutsideClick: true,
    });
    // Menampilkan pesan alert
  };

  return (
    <div className="container  mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4 text-white">
        Products by Category
      </h1>

      {/* Tombol Kategori */}
      <div className="mb-6 flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`p-4 border border-gray-300 rounded-lg shadow-sm
              ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-transparent backdrop-blur-sm text-white glass backdrop-brightness-50"
              }
              transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white active:bg-blue-700 active:text-white`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Daftar Produk */}
      <div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col border p-4 rounded shadow-md bg-gray-50"
          >
            <img
              src={product.image}
              alt={product.title}
              className="mx-auto py-4 aspect-square w-full object-contain hover:scale-110 transition duration-300 ease-in-out"
            />
            {/* Menampilkan harga dan kategori produk */}
            <p className="text-lg font-bold mb-2">$ {product.price}</p>
            <p className="text-sm mb-2">{product.category}</p>
            <div className="flex items-center mb-2"></div>
            <div className="flex justify-between gap-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-4 w-full lg:my-auto">
                {/* Link untuk melihat detail produk */}
                <Link
                  to={`/products/${product.id}`}
                  className="bg-blue-500 hover:bg-blue-400 transition duration-200 ease-in-out border rounded-lg shadow-md py-2 lg:py-3 text-center sm:text-xs md:text-lg lg:font-semibold text-white  w-full transform hover:scale-105"
                >
                  View
                </Link>

                {/* Tombol untuk menambahkan produk ke keranjang */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-teal-600 hover:bg-teal-500 transition duration-200 ease-in-out text-white py-2 lg:py-3 rounded-lg shadow-md text-center w-full sm:text-xs md:text-lg lg:font-semibold transform hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
