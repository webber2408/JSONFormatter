import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ObjectType from './ObjectType';

import './styles.scss';

const JSONDisplay = ({ parsedJSON }) => {
  const [triggerExpand, setTriggerExpand] = useState(false);
  return (
    <div className='json-display'>
      <div className='json-display__heading'>
        <span>Result</span>{' '}
        <Button variant='info' onClick={() => setTriggerExpand(true)}>
          Expand All
        </Button>
        <Button variant='info' onClick={() => setTriggerExpand(false)}>
          Collapse All
        </Button>
      </div>
      <div className='json-display__formattedJSON'>
        <ObjectType
          data={parsedJSON}
          label={'Object'}
          triggerExpand={triggerExpand}
        />
      </div>
    </div>
  );
};

export default JSONDisplay;
