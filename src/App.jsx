import React, { useState } from 'react';
import Registro from './assets/Registro';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  return (
    <div className="container">
      <Registro setAlertMessage={setAlertMessage} setAlertType={setAlertType} />
     
      {alertMessage && <div className={`alert alert-${alertType}`}>{alertMessage}</div>}
    </div>
  );
};

export default App;
