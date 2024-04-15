import { BrowserRouter as Router, Routes, Route,useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Login from "./pages/login/Login";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import MovieList from "./pages/movieList/MovieList";
import NewMovie from "./pages/newMovie/NewMovie";
import Movie from './pages/movie/Movie';

function App() {
  const { user } = useContext(AuthContext);
  // const navigate=useNavigate()

  // useEffect(()=>{
  //    if(!user){
  //      navigate('/login')
  //    }
  // },[])

  return (
    <Router>
      {user ? (
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/movies" element={<MovieList />} />
              <Route path="/movie/:movieId" element={<Movie />} />
              <Route path="/newMovie" element={<NewMovie />} />
              <Route path="/lists" element={<ListList />} />
              <Route path="/list/:listId" element={<List />} />
              <Route path="/newlist" element={<NewList />} />
            </Routes>
          </div>
        </>
       ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )} 
    </Router>
  );
}

export default App;



// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
// import "./app.css";
// import Home from "./pages/home/Home";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import UserList from "./pages/userList/UserList";
// import User from "./pages/user/User";
// import NewUser from "./pages/newUser/NewUser";
// import Login from "./pages/login/Login";
// import { AuthContext } from "./context/authContext/AuthContext";
// import { useContext } from "react";
// import ListList from "./pages/listList/ListList";
// import List from "./pages/list/List";
// import NewList from "./pages/newList/NewList";
// import MovieList from "./pages/movieList/MovieList";
// import NewMovie from "./pages/newMovie/NewMovie";
// import Movie from './pages/movie/Movie'

// function App() {
//   const { user } = useContext(AuthContext);
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login">{user ? <Navigate to="/" /> : <Login />}</Route>
//         {user && (
//           <>
//             <Topbar />
//             <div className="container">
//               <Sidebar />
//               <Route exact path="/">
//                 <Home />
//               </Route>
//               <Route path="/users">
//                 <UserList />
//               </Route>
//               <Route path="/user/:userId">
//                 <User />
//               </Route>
//               <Route path="/newUser">
//                 <NewUser />
//               </Route>
//               <Route path="/movies">
//                 <MovieList />
//               </Route>
//               <Route path="/movie/:movieId">
//                 <Movie />
//               </Route>
//               <Route path="/newMovie">
//                 <NewMovie />
//               </Route>
//               <Route path="/lists">
//                 <ListList />
//               </Route>
//               <Route path="/list/:listId">
//                 <List />
//               </Route>
//               <Route path="/newlist">
//                 <NewList />
//               </Route>
//             </div>
//           </>
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default App;