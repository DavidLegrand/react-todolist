import React, { useState, useEffect, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import { Logged } from '../context'

const NewPost = ({ refetch }) => {
  const [post, setPost] = useState('');
  const [submited, setSubmited] = useState(false);
  const { user } = useContext(Logged);

  useEffect(() => {
    if (post !== '') {

      axios.post(
        `http://localhost:8080/api/users/${user.id}/posts`,
        { content: post }
      )
        .then(response => refetch())
        .catch(error => console.log(error));
    }

    return () => {
      setPost('');
      setSubmited(false)
    }
  }, [submited])

  const handleSubmit = e => {
    e.preventDefault();
    setSubmited(true);
  }
  return (
    <Col xs={12}>
      <Card className='my-3'>
        <Form onSubmit={handleSubmit}>
          <Card.Body>
            <Form.Control onChange={e => setPost(e.target.value)} as="textarea" placeholder="Dites quelque chose à vos amis" rows="3" />
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" type="submit">Envoyer !</Button>
          </Card.Footer>
        </Form>
      </Card>
    </Col>

  )
}

export default NewPost
