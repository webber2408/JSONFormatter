import React, { useRef } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import swal from 'sweetalert';

import './styles.scss';

const DUMMY_JSON = `{"items":{"item":[{"id":"0001","type":"donut","name":"Cake","ppu":0.55,"batters":{"batter":[{"id":"1001","type":"Regular"},{"id":"1002","type":"Chocolate"},{"id":"1003","type":"Blueberry"},{"id":"1004","type":"Devil's Food"}]},"topping":[{"id":"5001","type":"None"},{"id":"5002","type":"Glazed"},{"id":"5005","type":"Sugar"},{"id":"5007","type":"Powdered Sugar"},{"id":"5006","type":"Chocolate with Sprinkles"},{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}]}]}}`;

const JSONValidator = ({ onSuccessValidate, onClear }) => {
  const textRef = useRef();

  const onTextSubmit = () => {
    onClear();
    const value = textRef.current?.value;
    if (!value) return;
    let parsedJSON;
    try {
      parsedJSON = JSON.parse(value);
    } catch (err) {
      swal('Argh!', 'Please enter valid JSON', 'error');
      return;
    }
    onSuccessValidate(parsedJSON);
  };

  const onTextClear = () => {
    textRef.current.value = '';
    onClear();
  };

  const onDummySelect = () => {
    onClear();
    textRef.current.value = DUMMY_JSON;
    onSuccessValidate(JSON.parse(DUMMY_JSON));
  };

  return (
    <div className='json-validator'>
      <Alert variant='primary' className='headerBox'>
        <Alert.Heading>{'{ Just JSON Formatter }'}</Alert.Heading>
        <p>
          Your one stop help for debugging large JSON. JSON data is often output
          without line breaks to save space, it can be extremely difficult to
          actually read and make sense of it. This tool hoped to solve the
          problem by formatting and beautifying the JSON data so that it is easy
          to read and debug by human beings.
        </p>
        <hr />
        <p className='mb-0'>Just go ahead and paste the JSON below!</p>
      </Alert>
      <div className='json-validator__textAreaWrappper'>
        <div className='json-validator__options'>
          <span>Paste JSON</span>
          <Button variant='light' onClick={onTextSubmit}>
            Format
          </Button>
          <Button variant='dark' onClick={onTextClear}>
            Clear
          </Button>
          <Button variant='info' onClick={onDummySelect}>
            Dummy
          </Button>
        </div>
        <FormControl
          as='textarea'
          className='json-validator__textArea'
          aria-label='With textarea'
          ref={textRef}
        />
      </div>
    </div>
  );
};

export default JSONValidator;
