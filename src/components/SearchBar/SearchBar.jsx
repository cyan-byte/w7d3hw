import EmployeeList from '../EmployeeList/EmployeeList.jsx'
import Header from '../Header/Header.jsx'
import SearchBar from '../SearchBar/SearchBar'
import '../HomePage/homePage.css'

export default function Homepage() {
  return (
    <div className='homepage'>
    <Header title="Employee Directory"/>
    <SearchBar />
    <EmployeeList />
    </div>
  )
}