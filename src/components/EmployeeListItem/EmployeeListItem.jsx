import './employeeListItem.css'

export default function EmployeeListItem({employeeName, employeeTitle}) {
  return (
    <div className='employeelistitem'>
        <img></img>
        <h3>{employeeName}</h3>
        <p>{employeeTitle}</p>
    </div>
  )
}