import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Users from './components/Users/Users';
import AddUsers from './components/AddUsers/AddUsers';
import Update from './components/Update/Update';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Users></Users>,
      loader: async () => {
        return fetch('http://localhost:5000/users');
      }
    },
    { path: "/users/add", element: <AddUsers></AddUsers> },
    {
      path: "/users/update/:id",
      element: <Update></Update>,
      loader: async ({params})=>{ return fetch(`http://localhost:5000/users/${params.id}`)}
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
