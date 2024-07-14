import { 
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'
import Mainlayout from './layout/Mainlayout';
import Home from "./pages/Home";
import BookPage from './pages/BookPage';


const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path='/books' element={<BookPage />} />
          </Route>
        )
      );
    
      return <RouterProvider router={router} />;
}

export default App