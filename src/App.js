import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';
import './App.css';
import { Toaster } from 'react-hot-toast';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div>
        <Toaster />
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
