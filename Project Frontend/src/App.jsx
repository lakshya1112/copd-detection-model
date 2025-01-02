import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage'
import Directory from './AlumniDirectory/Directory'
function App() {

  const users = [{
    imgURL: '/src/assets/pexels-italo-melo-881954-2379004.jpg',
    fullname: 'Bye',
    grad_year: '2016',
  },{
    imgURL: 'src/assets/pexels-moh-adbelghaffar-771742.jpg',
    fullname: 'Hello',
    grad_year: '2004',
  },
  {
    imgURL: '/src/assets/pexels-italo-melo-881954-2379004.jpg',
    fullname: 'Bye',
    grad_year: '2016',
  },
  {
    imgURL: 'src/assets/pexels-moh-adbelghaffar-771742.jpg',
    fullname: 'Hello',
    grad_year: '2004',
  },
  {
    imgURL: '/src/assets/pexels-italo-melo-881954-2379004.jpg',
    fullname: 'Bye',
    grad_year: '2016',
  },
  {
    imgURL: 'src/assets/pexels-moh-adbelghaffar-771742.jpg',
    fullname: 'Hello',
    grad_year: '2004',
  },
  {
    imgURL: '/src/assets/pexels-italo-melo-881954-2379004.jpg',
    fullname: 'Bye',
    grad_year: '2016',
  },
  {
    imgURL: 'src/assets/pexels-moh-adbelghaffar-771742.jpg',
    fullname: 'Hello',
    grad_year: '2004',
  }]
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/directory" element={<Directory/>}></Route>
          </Routes>
        </Router>
    </>
  )
}

export default App