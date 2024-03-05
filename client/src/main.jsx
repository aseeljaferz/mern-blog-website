import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Register from './pages/Register'
import PostDetails from './pages/PostDetail'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import Authors from './pages/Authors'
import CreatePost from './pages/CreatePost'
import CategoryPost from './pages/CategoryPost'
import AuthorsPosts from './pages/AuthorsPosts'
import Dashboard from './pages/Dashboard'
import EditPost from './pages/EditPost'
import Logout from './pages/Logout'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      {path: "posts/:id", element: <PostDetails/> },
      {path: "register", element: <Register/>},
      {path: "login", element: <Login/>},
      {path: "profile/:id", element: <UserProfile/>},
      {path: "authors", element: <Authors/>},
      {path: "create", element: <CreatePost/>},
      {path: "posts/categories/:category", element: <CategoryPost/>},
      {path: "posts/users/:id", element: <AuthorsPosts/>},
      {path: "myposts/:id", element: <Dashboard/>},
      {path: "posts/:id/edit", element: <EditPost/>},
      {path: "logout", element: <Logout/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
