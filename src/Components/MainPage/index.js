import React from 'react';
import {
  Card,
  Container,
  CardText,
  CardTitle,
  Row,
  Col,
  NavLink
} from 'reactstrap';
import './index.css';
import { NavLink as RRNavLink } from 'react-router-dom';

const MainPage = (props) => {
  return (
    <Container>
      <Row>
        <Col sm="4">
          <Card body>
            <CardTitle>Laugh</CardTitle>
            <CardText>As an adult, come and discover our irresistible clowns, between practical jokes and pranks let yourself be carried away by their joy and fall back into childhood.</CardText>
          </Card>
        </Col>
        <Col sm="4">
          <Card body>
            <CardTitle>Dream</CardTitle>
            <CardText>Let yourself be carried away in a world where the real and the imaginary are one, in the company of our talented magicians, discover a wonderful world limited only by your imagination.</CardText>
          </Card>
        </Col>
        <Col sm="4">
          <Card body>
            <CardTitle>Marvel at</CardTitle>
            <CardText>Tame the untameable in the company of our tamers, between roar and razor-sharp claws, watch these sweet kittens turn into fierce felines. Never ever seen!</CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="4">
          <Card body>
            <CardTitle>Laugh</CardTitle>
            <CardText>As an adult, come and discover our irresistible clowns, between practical jokes and pranks let yourself be carried away by their joy and fall back into childhood.</CardText>
          </Card>
        </Col>
        <Col sm="4">
          <Card body>
            <CardTitle>Dream</CardTitle>
            <CardText>Let yourself be carried away in a world where the real and the imaginary are one, in the company of our talented magicians, discover a wonderful world limited only by your imagination.</CardText>
          </Card>
        </Col>
        <Col sm="4">
          <Card body>
            <CardTitle>Marvel at</CardTitle>
            <CardText>Tame the untameable in the company of our tamers, between roar and razor-sharp claws, watch these sweet kittens turn into fierce felines. Never ever seen!</CardText>
          </Card>
        </Col>
      </Row>
      <NavLink to="/book" className="my-budget" tag={RRNavLink}>Book !
      </NavLink>
    </Container>
  );
};


export default MainPage;