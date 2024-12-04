import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import { useParams } from 'react-router-dom'

const updateDog = () => {
  const { id } = useParams()

  const [name, setName] = useState('')
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:5000/api/dogs/${id}`, {
        method: 'PUT',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name })
      }
      )
      const data = response.json();
      handleShow()
    } catch (error) {
      console.error(error.message)
    }
  }

  return (<>

    <div>updateDog</div>

    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3'>
        <Form.Label>New Dog Name:</Form.Label>
        <Form.Control
          type='text'
          name='dogname'
          placeholder='Enter the new name'
          value={name}
          onChange={(e) => { setName(e.target.value) }}
        />
      </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form>
    <Toast bg='success' onClose={handleShow} show={show} delay={1000} autohide>
      <Toast.Body>Dog Updated!</Toast.Body>
    </Toast>
  </>)
}

export default updateDog