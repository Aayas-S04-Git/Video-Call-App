import React from 'react'
import{ createBrowserRouter,RouterProvider} from  "react-router-dom"
import "./App.css"
import Home from './Componentes/Home';
import Video from './Componentes/Video';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    { 
      path: '/room/:id',
      element: <Video />,
    },
    

  ]);
  return (
    <div className='App'>
<RouterProvider router={router} />
    </div>
  )
}

export default App
