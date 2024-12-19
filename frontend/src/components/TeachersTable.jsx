import Table from 'react-bootstrap/Table'
import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';


const TeachersTable = () => {
  const url = import.meta.env.VITE_API_URL

  const [teachers, setTeachers] = useState([])
  const [isDataLoading, setIsDataLoading] = useState(true)

  useEffect(()=>{
    const fetchTeachers = async () => {
      try {
        const resp = await fetch(url)
        const data = await resp.json()
        setTeachers(data)
        setIsDataLoading(!isDataLoading)
      } catch (error) {
        console.error('error while fetching teachers', error.message)
      }
    }
    fetchTeachers()
  }, [])


  return (<>
    <div>TeachersTable</div>

    {
      isDataLoading && 
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    }
    
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