import Table from 'react-bootstrap/Table'
import { useEffect, useState } from 'react'

const DogsTable = () => {
  const [dogs, setDogs] = useState([])

  useEffect(()=>{
    const fetchDogs = async () => {
      try{
        const resp = await fetch("http://localhost:5000/api/dogs")
        const data = await resp.json()
        setDogs(data)
      }
      catch(error){
        console.error('error while fetching dogs: ', error.message)
      }
    }
    fetchDogs()
  }, [])

  return (<>
    <div>DogsTable</div>
    <Table>
      <thead>
        <tr>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        {dogs.map(dog => 
          <tr key={dog.name}>
            <td>{dog.name}</td>
          </tr>
        )}
      </tbody>
    </Table>
  </>)
}

export default DogsTable