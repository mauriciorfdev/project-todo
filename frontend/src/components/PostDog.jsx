import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PostDog = () => {
  const [name,setName] = useState('')
  const navigate = useNavigate()

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
      console.log(data)
      console.log(JSON.stringify({name}))
      navigate('/')
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
  </>)
}

export default PostDog