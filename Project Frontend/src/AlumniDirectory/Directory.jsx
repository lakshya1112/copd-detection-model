import Header from './Header'
import AlumniCard from './AlumniCard'
import Navbar from './Navbar'
import AlumniTable from './AlumniTable'
import Sidebar from './Sidebar'
function Directory() {

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
        <Header/>
        <Navbar/>
        <Sidebar/>
        <AlumniTable/>
        <AlumniCard alumniList = {users}/>
        <AlumniCard alumniList = {users}/>
        <AlumniCard alumniList = {users}/>
    </>
  )
}

export default Directory