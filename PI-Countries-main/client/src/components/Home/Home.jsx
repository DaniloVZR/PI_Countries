import NavBar from '../NavBar/NavBar.jsx';
import Cards from '../Cards/Cards.jsx'
import './Home.css'

export default function Home() {
  return (
    <div className='home-container'>
      <NavBar/>
      <Cards/>
    </div>
  )
}