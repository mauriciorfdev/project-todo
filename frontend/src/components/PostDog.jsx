import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast'

const PostDog = () => {
  const [name,setName] = useState('')
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const handleShow = () => {
    setShow(show => !show)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:5000/api/dogs', {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({name})
      })
      const data = response.json();
      console.log(JSON.stringify({name}))
      handleShow()
      setTimeout(() => {
        navigate('/')
      }, 1500);
      ;
      
    } catch (error) {
      console.error(error.message)
    }
  }

  return (<>

    <div>PostDog</div>
    
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3'>
        <Form.Label>Dog Name</Form.Label>
        <Form.Control 
          type='text' 
          name='dogname'
          placeholder='Enter the dog name'
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
        />
      </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form>
    <Toast bg='success' onClose={handleShow} show={show} delay={1000} autohide>
      <Toast.Body>Dog Inserted!</Toast.Body>
    </Toast>
  </>)
}

export default PostDog