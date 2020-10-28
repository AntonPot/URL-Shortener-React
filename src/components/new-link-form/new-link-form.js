import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useSubmitNewLink from './hooks/use-submit-new-link'

const NewLinkForm = (props) => {
  const [
    handleUrlInputChange,
    handleSlugInputChange,
    handleSubmit,
  ] = useSubmitNewLink(props.onSubmit);

  return (
    <Form className="new-link-form" onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicUrl">
        <Form.Label>URL</Form.Label>
        <Form.Control type="text" placeholder="https://google.com" onChange={handleUrlInputChange} />
        <Form.Text className="text-muted">
          Enter a URL you would like to see shortened
    </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicSlug">
        <Form.Label>Enter shortcut</Form.Label>
        <Form.Control type="text" placeholder="foobar" onChange={handleSlugInputChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
};

export default NewLinkForm;
