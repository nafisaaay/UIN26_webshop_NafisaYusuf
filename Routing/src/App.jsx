import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Categories from './components/Categories'
import About from './components/About'
import Layout from './components/Layout'
import Category from './components/Category'
import CategoryLayout from './components/CategoryLayout'


function App() {

  //i route kan man enten skrive html kode rett inn, eller hvilken rute den skal peke på
  //kalles for statiske ruter hvis man er sikker på at man skal bruke de rutene som er definert 
  //dersom man f.eks skulle hatt noen produkter ville det ikke egnet seg med statiske paths fordi de endres veldig ofte, men med "om oss" siden f.eks, så egner det seg ned statiske paths
  //path her betyr hva som skal stå i urlen for å få komponentene 
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path='categories' element={<CategoryLayout />}>
          <Route index element={<Categories/>}/>
          <Route path=':slug' element={<Category />}/>
        </Route>
        <Route path='about' element={<About/>} />
      </Routes>
    </Layout>
  )
}

export default App
