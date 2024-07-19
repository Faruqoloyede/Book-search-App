import { 
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'
import Mainlayout from './layout/Mainlayout';
import Home from "./pages/Home";
import BookPage from './pages/BookPage';
import BookDetails from "./pages/BookDetails";


const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path='/books' element={<BookPage />} />
            <Route
          path='/books/:id'
          element={<BookDetails />}
          
        />
          </Route>
        )
      );
    
      return <RouterProvider router={router} />;
}

export default App