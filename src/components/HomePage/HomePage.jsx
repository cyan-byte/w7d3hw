import EmployeeList from "../EmployeeList/EmployeeList.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Header from "../Header/Header.jsx"
import "../HomePage/homePage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}
