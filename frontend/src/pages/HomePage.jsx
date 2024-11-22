import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container';
import DogsTable from '../components/DogsTable'
import TeachersTable from '../components/TeachersTable';

import React, { useState } from 'react'

const initObj = [{
  fname: 'john',
  age: 20,
},{
  fname: 'brad',
  age: 30
},{
  fname: 'kate',
  age: 34
},]

const HomePage = () => {
  const [showData, setShowData] = useState(true)

  return (<>
    <div>HomePage</div>
    <Button style={{margin:'20px'}} variant="primary">Im a Button</Button>
    <Container  >
    <Table striped bordered hover variant='dark'>
      <thead>
        <tr>
          <th>fname</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
        {initObj.map(obj => {
          return (
            <tr key={obj.fname}>
              <td>{obj.fname}</td>
              <td>{obj.age}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    </Container>
    <Container>
        {showData && <DogsTable/>}
    </Container>
    <Container>
        {showData && <TeachersTable/>}
    </Container>

  </>)
}

export default HomePage