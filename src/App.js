import { useState } from 'react';

import JSONDisplay from './Components/JSONDisplay';
import JSONValidator from './Components/JSONValidator';

import './App.scss';

const App = () => {
  const [parsedJSON, setParsedJSON] = useState();

  return (
    <div className='json-formatter'>
      <JSONValidator
        onSuccessValidate={setParsedJSON}
        onClear={() => setParsedJSON()}
      />
      <JSONDisplay parsedJSON={parsedJSON} />
    </div>
  );
};

export default App;
