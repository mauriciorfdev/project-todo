import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DogsTable = () => {
  const [dogs, setDogs] = useState([])
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

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

  useEffect(() => {
    fetchDogs()
  }, [])

  const handleShow = () => {
    setShow(!show)
  }

  function handleUpdate(dogId) {
    navigate(`dog/${dogId}`)
  }

  async function handleDelete(dogId) {
    try {
      const response = await fetch(`http://localhost:5000/api/dogs/${dogId}`, {
        method: 'DELETE',
      })
      if(response.ok){
        handleShow()
        setTimeout(() => {
          fetchDogs()
        }, 1000);
      }
    } catch (error) {
      console.error(error.message)
    }
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
              <Button onClick={() => { handleDelete(dog._id) }} variant='dark'>Delete</Button>
            </td>

          </tr>
        )}
      </tbody>
    </Table>
    <Toast bg='success' onClose={handleShow} show={show} delay={1000} autohide>
      <Toast.Body>Dog Deleted</Toast.Body>
    </Toast>
  </>)
}

export default DogsTable