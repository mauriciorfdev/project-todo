import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

const PostDog = () => {
  const [name,setName] = useState('')
  const [show, setShow] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const navigate = useNavigate()

  const handleShow = () => {
    setShow(show => !show)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsDisabled(true)
    try {
      const response = await fetch('http://localhost:5000/api/dogs', {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({name})
      })
      const data = await response.json();
      console.log(data)
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
      <Button type='submit' disabled={isDisabled}>Submit</Button>
    </Form>
    <ToastContainer position='top-end'>
      <Toast  bg='success' onClose={handleShow} show={show} delay={1000} autohide>
        <Toast.Body>Dog Inserted!</Toast.Body>
      </Toast>
      
    </ToastContainer>
  </>)
}

export default PostDog