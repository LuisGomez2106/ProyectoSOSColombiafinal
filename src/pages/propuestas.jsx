import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import styled from '@emotion/styled';


const Forme = styled.div`
form {
  background-color: #fff;
  color: #ff0000;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  border-radius: 6px;
  box-shadow: 2px 2px 10px #666;
  margin: 5px;
  padding: 5px;
  padding-top: 25px;
  width: 90%;
  position: relative;
  left: 10%;
  padding-bottom: 20px;
   @media (max-width: 700px) {
   height: 200%;
   right:40%
    border-radius: 1px;
    margin: 1px;
  padding: 1px;
  padding-top: 5px;
  font-size:10px;
  }
  
}

form button {
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px;
   @media (max-width: 700px) {
    border: none;
  border-radius: 1px;
  padding: 2.4px;
  margin-right:10px;
  }
  box-shadow: 2px 2px 10px #666;
  cursor: pointer;
}

form input {
  padding: 5px;
  border-radius: 5px;
  border: #9b9b9b solid;
  margin-left: 20px;
   @media (max-width: 700px) {
    padding: 1px;
  border-radius: 1px;
  border: #9b9b9b solid;
  margin-left: 4px;
  }
}

form label {
  padding-right: 20px;
   @media (max-width: 700px) {
    padding-right: 4px;
  }
}
`;


const Propuestas = center => (
  <Layout>
    <Helmet title={'Propuestas'} />
    <Header title="Propuestas">Cuentanos en que podemos mejorar</Header>
    <Container center={center}>
    <Forme>
<form method="post" action="https://getform.io/f/e8fb3d9f-234e-4a26-901c-4dd1393d7a66">
  <label>
  <strong>Email</strong>
    <input type="email" name="email" id="email" placeholder="Correo Electronico"/>
  </label>
  
  <label>
  <strong>Propuesta</strong>
    <input type="text" name="message" id="message" placeholder="Deja aqui tu propuesta"/>
    
  </label>
  <input type="hidden" name="subject" id="subject" value="Propuestas"/>

  
  <button type="submit">Informar</button>
  
</form>
</Forme>
    </Container>
  </Layout>
);

export default Propuestas;

Propuestas.propTypes = {
  center: PropTypes.object,
};
