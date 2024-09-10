import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { FaPhoneAlt, FaMapMarkerAlt, FaSignOutAlt } from "react-icons/fa";
import LogoutButton from "../components/LogoutButton";

export default function UserPages() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // State untuk memantau status loading
  const token = localStorage.getItem("userToken");

  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        try {
          // Ambil data pengguna dari localStorage
          const userDataFromStorage = localStorage.getItem("userData");
          if (userDataFromStorage) {
            setUserData(JSON.parse(userDataFromStorage));
          } else {
            console.error("User data not found in localStorage");
          }
        } catch (error) {
          console.error("An error occurred while retrieving user data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        console.error("No token found in localStorage");
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token]);

  if (loading) {
    return <p>Loading user data...</p>;
  }

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto p-6 mt-20">
        <button
          onClick={handleBack}
          className="my-2 border p-2 rounded bg-gray-300"
        >
          Back
        </button>
        <h1 className="text-3xl font-bold mb-4">Profil Pengguna</h1>
        {userData ? (
          <div className="bg-white p-6 border rounded-lg shadow-md md:flex-col  lg:flex-row items-center w-96 ">
            <div className="w-32 h-32 mr-6">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 512 512'%3E%3Cpath fill='%23000' d='M189.6 19.18C162 46.06 150.9 71.02 149 94.29c-1.7 21.21 4.3 41.51 14.6 60.81c11.2-2.8 23.2-2.7 34.7.9c4.5-19.1 10.5-38.6 24.3-56c14.4-18.06 36.9-33.1 72.5-43.47c-22-16.95-48.1-28.2-75.9-33.63c-10.2-1.99-20.1-3.23-29.6-3.72m-25.1.41c-31.6 2.76-58.5 14.19-80.27 31.83c-16.52 13.36-30.19 30.44-40.65 50.28l1.38-.2c6.28 45 31.59 70.4 75.44 83.6c7-9.9 16.1-17.9 26.3-23.4c-10.8-20.9-17.6-44.1-15.6-68.86c1.9-23.76 12.1-48.51 33.4-73.25m146.8 51.25c-40 9.69-61.5 23.99-74.6 40.36c-12 15.2-17.2 32.8-21.6 52.2c7.3 4.2 12.9 9.2 17.1 14.8c4 5.4 6.6 11.2 8.6 17.1c33.4-15.7 76.2-33.2 118-30.1c-7-39.3-24-70.81-47.5-94.36M32.5 127c-4.83 13.6-8.37 28.1-10.52 43.3c-4.54 32-.31 67.5 10.98 99.9c29.71 2.9 53.76-2.6 72.74-21.8c-.6-5.5-.8-11.1-.7-16.7c.2-11 2.5-21.4 6.4-30.7c-38.71-12.9-66.7-37.3-78.9-74m318 55.9h-2.6l-6.6.3c-2.2.2-4.3.4-6.4.6c-33.3 3.8-68.3 19-96.1 32.3l-7.2 3.4c-1 .9-2.1 1.8-3.1 2.8c0 0-23-18.1-55.1-24.7c-23.1-4.7-16.4 33.5 1.5 49c18.9 16.5 36.8 16.3 36.8 16.3c-11 20.3-20.3 38.2-28.8 54.6c23 5.7 53.9 4.7 94.9-7.4l11.7-3.5l-.2 12.2c-.4 27.5-25.9 53.7-61.9 68.3c-24.5 9.9-54.6 14-86.5 7.5c-18.2 29.9-39.9 60.1-74.15 99.4H355.9c-.1-10.3.2-20.8.6-31.6l10.9 5.3l-8.5-29.1l15.6 4.2l-17-55.4c-.8-13.2-2.5-26.1-5.6-38.5c43.9 10.3 98.5 24.3 126 17.4c8-2 21.1-27.6 17.7-43.9c-5.3-25.9-40.3-36.3-58.4-52.4c0 0-12.5-29-22.7-43.2c-11.7-16.3-32.7-34.1-41.7-41.5l-4.8-.8c-5.7-1-11.5-1.6-17.5-1.6m3 40.8c20.3 3.4 43.2 9.7 39.4 38.7c-24.7-1.9-48.8-3.6-39.4-38.7M109.6 269c-19.61 15.2-43.6 20.6-69.25 19.6c14.27 31.5 35.56 58.1 62.05 72.8c18.3-11 30.4-32.9 26-56.4c-8.9-10.5-15.1-22.9-18.8-36m37.4 52.6c-1.9 19.2-11.7 36.6-25.9 48.5c23.9 9.2 46.9 11.3 67.5 8.6c8.8-15.7 8.2-28.3 2.7-41.4c-17.5-2.3-32.2-7.8-44.3-15.7m120.7 9.6c-21.2 5.2-40.3 7.6-57.2 7.4c3 11.2 3.2 23.2-.5 35.6c3.6-1.2 7.2-2.4 10.6-3.8c23.6-9.5 40.2-25.4 47.1-39.2'/%3E%3C/svg%3E"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Selamat datang, {userData.username}
              </h2>
              <p className="flex items-center mb-2">
                <FaPhoneAlt className="mr-2" /> {userData.phone}
              </p>
              <p className="flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2" /> {userData.address.city}
              </p>
              <p className="flex items-center mb-4">
                <FaMapMarkerAlt className="mr-2" /> {userData.address.street}
              </p>

              <LogoutButton />
            </div>
          </div>
        ) : (
          <p>Data pengguna tidak ditemukan atau Anda belum login.</p>
        )}
      </div>
    </div>
  );
}
