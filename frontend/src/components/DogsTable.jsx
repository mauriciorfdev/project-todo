import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DogsTable = () => {
  const [dogs, setDogs] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const resp = await fetch("http://localhost:5000/api/dogs")
        const data = await resp.json()
        setDogs(data)
      }
      catch (error) {
        console.error('error while fetching dogs: ', error.message)
      }
    }
    fetchDogs()
  }, [])

  function handleUpdate(dogId) {
    navigate(`dog/${dogId}`)
  }

  return (<>
    <div>DogsTable</div>
    <Table striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {dogs.map(dog =>
          <tr key={dog.name}>
            <td>{dog.name}</td>
            <td>
              <Button onClick={() => { handleUpdate(dog._id) }} >Update</Button>{' '}
              <Button variant='dark'>Delete</Button>
            </td>

          </tr>
        )}
      </tbody>
    </Table>
  </>)
}

export default DogsTable