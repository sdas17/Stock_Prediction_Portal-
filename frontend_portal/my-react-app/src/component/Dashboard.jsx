import React, { useEffect } from "react";
import api from "../component/auth/api"; // adjust path properly

const Dashboard = () => {

  useEffect(() => {
    console.log("initial render api calling will happen");
    fetchBackendJWT();
  }, []);

  const fetchBackendJWT = async () => {
    try {

      const response = await api.get(
        "/accounts/user-lookup/?username=leovo"
      );

      console.log("User Data:", response.data);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
};

export default Dashboard;