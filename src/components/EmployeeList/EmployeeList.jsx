import EmployeeListItem from '../EmployeeListItem/EmployeeListItem.jsx'
import './employeeList.css'

export default function EmployeeList() {
  return (
    <div className='employeelist'>
    <EmployeeListItem employeeName='James King' employeeTitle='President and CEO'/>
    <EmployeeListItem employeeName='Julie Taylor' employeeTitle='VP of Marketing'/>
    <EmployeeListItem employeeName='Eugene Lee' employeeTitle='CFO'/>
    <EmployeeListItem employeeName='John Williams' employeeTitle='VP of Engineering'/>
    <EmployeeListItem employeeName='Ray Moore' employeeTitle='VP of Sales'/>
    <EmployeeListItem employeeName='Paul Jones' employeeTitle='QA manager'/>

    </div>
  )
}