import React, {useState} from "react";
import Backendless from "backendless";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const loginUser = async (username, password) => {
   try {
     const user = await Backendless.UserService.login(username, password, true);
     console.log("User logged in successfully:", user);

     // Fetch user roles explicitly
     const roles = await Backendless.UserService.getUserRoles();
     console.log("User roles:", roles);

     if (roles.includes("Admin")) {
       console.log("User has admin access");
       return true; // Indicate success
     } else {
       alert("Access denied: Admin role required");
       return false; // Indicate failure
     }
   } catch (error) {
     console.error("Error during login:", error);
     alert("Login failed: Check your username or password");
     return false;
   }
};

const Adminlogin = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   const Handlelogin = async () => {
      const isAdmin = await loginUser(username, password); // Check if the user has admin access

      if (isAdmin) {
         navigate("/admin-dashboard");
      } else {
         alert("Login failed or user does not have admin access.");
      }
   };

   return (
      <div>
         <p className="category"> Login as an Admin</p>
         <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="admin-input"
         /> 
         <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="admin-input"
         />
           <Button variant="outlined" onClick={Handlelogin} className="submit">Submit</Button>
      </div>
   );
};

export default Adminlogin;
