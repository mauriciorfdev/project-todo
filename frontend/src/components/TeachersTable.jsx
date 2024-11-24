import Table from 'react-bootstrap/Table'
import React, { useEffect, useState } from 'react'

const TeachersTable = () => {
  const [teachers, setTeachers] = useState([])

  useEffect(()=>{
    const fetchTeachers = async () => {
      try {
        const resp = await fetch('http://localhost:5000/api/teachers')
        const data = await resp.json()
        setTeachers(data)
      } catch (error) {
        console.error('error while fetching teachers', error.message)
      }
    }
    fetchTeachers()
  }, [])


  return (<>
    <div>TeachersTable</div>
    <Table>
      <thead>
        <tr>
          <th>name</th>
          <th>age</th>
          <th>title</th>
        </tr>
      </thead>
      <tbody>
        {teachers.map(t => 
          <tr>
            <td>{t.name}</td>
            <td>{t.age}</td>
            <td>{t.title}</td>
          </tr>
        )}
      </tbody>
    </Table>
  </>)
}

export default TeachersTable