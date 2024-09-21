import React, { useEffect, useState } from "react";
import { User } from "../utils/types/Types";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<User | null>(null); 
  const [error, setError] = useState<string | null>(null);
  const [isLogout,setLogout] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }

        const data = await res.json();
        if (data.birthDate) {
          data.birthDate = new Date(data.birthDate);
        }
        setUserData(data);
        setLogout(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An unknown error occurred");
      }
    };

    fetchData();
  }, [isLogout]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  const handleLogout = ()=>{
    if(localStorage.getItem('token')){
        localStorage.removeItem('token');
        navigate('/login')
        setLogout(true)
    }
  }

  return (
    <div className="h-[80vh] flex  flex-col items-center">
      <div className="container mx-auto bg-gray-200  p-4">
        <p>Name: {userData.firstName} {userData.lastName}</p>
        <p>Age: {userData.age}</p>
        <p>Email: {userData.email}</p>
        <p>Phone: {userData.phone}</p>
        <p>University: {userData.university}</p>
        <img src={userData.image} alt="Profile" className="w-24 h-24 rounded-full"/>
      </div>

      <button className=" p-3 bg-black text-white text-2xl"onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
