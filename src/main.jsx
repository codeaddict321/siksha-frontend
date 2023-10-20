import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Layout'
import './index.css'
import Home from './pages/Home/Home'
import Layout from './Layout'
import { QueryClient,QueryClientProvider } from 'react-query'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import VideoPage from './pages/VideoPage/VideoPage'

 const queryClient =  new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Home />, 
      },
      {
        path: "video/:Id",
        element: <VideoPage />, 
      }
    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

   
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
