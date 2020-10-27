import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import remoteClient from '../../utils/remote-client';

const submitNewLink = async (requestOptions) => await axios.post('http://localhost:3001/links.json', requestOptions)
  .then(function (response) {
    console.log(response)
  }).catch(function (response) {
    console.log(response)
  })

const NewLinkForm = () => {
  const [urlInput, setUrlInput] = useState('');
  const [slugInput, setSlugInput] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestOptions = {
      link: {
        url: urlInput,
        slug: slugInput
      }
    };
    await submitNewLink(requestOptions);
  };

  return (
    <Form className="new-link-form" onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicUrl">
        <Form.Label>URL</Form.Label>
        <Form.Control type="text" placeholder="https://google.com" onChange={(event) => setUrlInput(event.target.value)} />
        <Form.Text className="text-muted">
          Enter a URL you would like to see shortened
    </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicSlug">
        <Form.Label>Enter shortcut</Form.Label>
        <Form.Control type="text" placeholder="foobar" nChange={(event) => setSlugInput(event.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
};

export default NewLinkForm;
