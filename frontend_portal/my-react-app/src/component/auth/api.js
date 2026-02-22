// src/api.js

import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

// 🔥 REQUEST INTERCEPTOR → attach access token
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);


// 🔥 RESPONSE INTERCEPTOR → handle 401
api.interceptors.response.use(
  (response) => response,
  

  async (error) => {
    const originalRequest = error.config;
    console.log(originalRequest,'31');
    

    // If 401 & request not retried already
    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refresh");
      console.log(refreshToken);
      

      if (!refreshToken) {
        logoutUser();
        return Promise.reject(error);
      }

      try {
        // 🔁 Call refresh token API
        const response = await axios.post(
          "http://127.0.0.1:8000/accounts/token/refresh/",
          {
            refresh: refreshToken,
          }
        );
        console.log(response,'58');
        

        const newAccessToken = response.data.access;

        // Save new access token
        localStorage.setItem("access", newAccessToken);

        // Update header
        originalRequest.headers.Authorization =
          `Bearer ${newAccessToken}`;

        // 🔁 Retry original request
        return api(originalRequest);

      } catch (refreshError) {
        logoutUser();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);


// 🔥 Logout Function
function logoutUser() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  window.location.href = "/login";
}

export default api;