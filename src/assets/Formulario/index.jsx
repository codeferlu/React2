import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './styles.css'
const Formulario = ({ setAlertMessage, setAlertType }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!email.includes('@') || password !== confirmPassword) {
      setAlertMessage('Error en el formulario. Verifica tus datos.');
      setAlertType('danger');
      return;
    }

   
    setAlertMessage('Registro exitoso.');
    setAlertType('success');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="caja1" >
      <label>
        <input placeholder="Nombre"  type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <label>
        <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <input placeholder="Contraseña"  type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        <input
          placeholder="Confirmar contraseña" 
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <Button variant="success" type="submit">Registrarse</Button>
      </div>
    </form>
  );
};

export default Formulario;
