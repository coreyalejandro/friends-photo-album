//   import React from "react";
// import "./style.css";
// import Login from "./components/Login";
// import AddFriend from "./components/AddFriend";
// import Friends from "./components/FriendsList";
// import Logout from "./components/Logout";
// import { Routes, Route, Link, Navigate } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";

// function App() {
//   const isAuthenticated = true; // Replace with your authentication logic

//   return (
//     <div className="App">
//       <header>
//         <logo> FRIENDS DATABASE </logo>
//         <nav>
//           <Link className="links" to="/login">
//             {" "}
//             LOGIN{" "}
//           </Link>{" "}
//           &nbsp;
//           <Link className="links" to="/friends">
//             {" "}
//             FRIENDS{" "}
//           </Link>{" "}
//           &nbsp;
//           <Link className="links" to="/friends/add">
//             {" "}
//             ADD FRIENDS{" "}
//           </Link>{" "}
//           &nbsp;
//           <Link className="links" to="/logout">
//             {" "}
//             LOG OUT
//           </Link>
//         </nav>
//       </header>

//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
//           <Route path="/friends" element={isAuthenticated ? <Friends /> : <Navigate to="/login" replace state={{ message: "Please login to view friends." }} />} />
//           <Route path="/friends/add" element={isAuthenticated ? <AddFriend /> : <Navigate to="/login" replace state={{ message: "Please login to add friends." }} />} />
//         </Route>
//         <Route path="/logout" element={<Logout />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import Login from "./components/Login";
import AddFriend from "./components/AddFriend";
import Friends from "./components/Friends";
import Logout from "./components/Logout";
import { Routes, Route, Link } from "react-router-dom";
import PrivateWrapper from "./components/PrivateWrapper";

function App() {
  return (
    <div className="App">
      <header>
        <h1> FRIENDS DATABASE </h1>
        <nav>
          <Link className="links" to="/login">
            {" "}
            Login{" "}
          </Link>{" "}
          &nbsp;
          <Link className="links" to="/friends">
            {" "}
            Friends{" "}
          </Link>{" "}
          &nbsp;
          <Link className="links" to="/friends/add">
            {" "}
            Add Friend{" "}
          </Link>{" "}
          &nbsp;
          <Link className="links" to="/logout">
            {" "}
            Log Out
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateWrapper />}>
          <Route path="/friends" element={<Friends />} />
          <Route path="/friends/add" element={<AddFriend />} />
        </Route>
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}
export default App;