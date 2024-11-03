import React from "react";

import Login from "./screens/auth/login/login";
import Dashboard from "./screens/dashboard/dashboard";

const Home = () => localStorage.getItem('id') ? <Dashboard /> : <Login />

export default Home;