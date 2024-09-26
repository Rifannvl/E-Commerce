import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
import { useCart } from "../contexts/CartContext";
import Swal from "sweetalert2";
import Breadcrumbs from "../components/Breadcrumbs";

const SkeletonLoader = () => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 animate-pulse">
    <div className="bg-gray-700 h-48 rounded-lg mb-4"></div>
    <div className="bg-gray-700 h-6 rounded mb-2"></div>
    <div className="bg-gray-700 h-6 rounded mb-2"></div>
    <div className="bg-gray-700 h-8 rounded mb-4"></div>
    <div className="flex space-x-4">
      <div className="bg-gray-700 h-10 rounded-lg flex-1"></div>
      <div className="bg-gray-700 h-10 rounded-lg flex-1"></div>
    </div>
  </div>
);

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true); // State to track loading
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setTotal(data.price);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false); // Also set loading to false on error
      });
  }, [id]);

  useEffect(() => {
    if (product.price) {
      setTotal(product.price * quantity);
    }
  }, [quantity, product.price]);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    const cartItem = { ...product, quantity };
    addToCart(cartItem);
    Swal.fire({
      icon: "success",
      title: "Product successfully added to cart",
      text: `${product.title}`,
      confirmButtonText: "OK",
      backdrop: true,
      allowOutsideClick: true,
    });
    setQuantity(1);
  };

  const handleBuyNow = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to buy now?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, buy now!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        handleAddToCart();
        navigate("/checkout");
      }
    });
  };

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" }, // Anda dapat menyesuaikan ini sesuai rute yang ada
    { label: "Product Details", path: `/products/${id}` },
  ];

  return (
    <BaseLayout>
      <div className="bg-gray-900 min-h-screen flex flex-col  ">
        <Breadcrumbs items={breadcrumbItems} />
        <div className=" ">
          <div className="container mx-auto mb-10">
            {loading ? (
              <SkeletonLoader />
            ) : (
              <div className=" bg-gray-800 rounded-lg shadow-lg p-6 lg:flex lg:items-center lg:space-x-12 lg:space-y-0 ">
                <div className="bg-gray-900 p-4 rounded-lg flex justify-center items-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover h-96 w-full lg:w-96 lg:h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="text-white mt-6 lg:mt-0 lg:flex-grow lg:flex lg:flex-col lg:justify-center">
                  <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                  <p className="text-lg mb-4">{product.category}</p>
                  <p className="text-xl font-bold mb-6">$ {product.price}</p>

                  <div className="flex items-center mb-6">
                    <button
                      onClick={handleDecrease}
                      className="bg-gray-700 text-white py-2 px-4 rounded-full shadow-lg hover:bg-gray-600 transition-colors duration-300"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="mx-4 text-xl">{quantity}</span>
                    <button
                      onClick={handleIncrease}
                      className="bg-gray-700 text-white py-2 px-4 rounded-full shadow-lg hover:bg-gray-600 transition-colors duration-300"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <div className="mb-6">
                    <p className="text-xl font-bold">
                      Total Price: $ {total.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={handleAddToCart}
                      className="bg-yellow-500 text-gray-900 py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={handleBuyNow}
                      className="bg-yellow-500 text-gray-900 py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
