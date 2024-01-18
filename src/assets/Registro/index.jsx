import React, { useState } from 'react';
import Formulario from '../Formulario';
import SocialButton from '../SocialButton';
import Alert from '../Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles.css'

const Registro = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleSocialButtonClick = (icon) => {

  };

  return (
    
    <div className="container">
      <div className="centered-content">
        <Card className="text-center">
          <Card.Body>
            <Card.Title class="h1">Crea una cuenta</Card.Title>
            <SocialButton />
          <h5>O usa tu mail para </h5>
          </Card.Body>  
          <Formulario setAlertMessage={setAlertMessage} setAlertType={setAlertType} />
          <Alert message={alertMessage} type={alertType} />    
        </Card>
      </div>
    </div>
  );
};

export default Registro;



