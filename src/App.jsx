import {Routes , Route} from 'react-router-dom'
import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail';
import Notfound from './Pages/Notfound';

function App() {


  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:slug' element={<ProductDetail/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>

  )
}

export default App
