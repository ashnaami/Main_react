  import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar.jsx'
import BlogCard from './Components/BlogCard.jsx'
import Hero from './Components/Hero.jsx'
import Footer from './Components/Footer.jsx'

import CreatePost from './Pages/CreatePost.jsx'
import Home from './Pages/Home.jsx'
import Posts from './Pages/Posts.jsx'
import WritingAssistant from './Components/WritingAssistant.jsx'
import SearchBar from './Components/SearchBar.jsx'
import PostDetails from './Pages/PostDetails.jsx'
import Comments from './Components/Comments.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Profile from './Pages/Profile.jsx'
import EditPost from './Pages/EditPost.jsx'

// import axios from axios


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/addpost" element={<CreatePost />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/post/:id" element={<PostDetails />} />  
        <Route path="/comments" element={<Comments />} />  
        <Route path="/profile" element={<Profile />} />
        <Route path="/editpost/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App