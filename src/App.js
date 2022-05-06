import { Routes, Route } from 'react-router-dom';
import { findWidth } from './features/findWidthSlice';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Layout from './components/layouts/Layout';
import  Home from './components/home/Home';
function App() {
  const dispatch = useDispatch();
  //side effect
  useEffect(() => {
    const handleResize= () => dispatch(findWidth({ width: window.innerWidth }))
    window.addEventListener('resize',handleResize)
  })

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route path='/' element={<Home />} />
      </Route>

    </Routes>
    );
}

export default App;
