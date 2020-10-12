import React from "react";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import { Card, Nav } from "react-bootstrap";

function Header() {
    return (
            <Card className="mainCard">
              <Card.Header>
                <Nav className="nav" variant="pills" defaultActiveKey="#first">
                  <Nav.Item>
                      <Nav.Link href="/">Google Books</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link href="/search">Search</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link href="/saved">Saved</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body >
                <Card.Title><h3>React Google Books Search</h3><FontAwesomeIcon icon={faBook} /></Card.Title>
                  <Card.Text>Search and Save Books of Interest !</Card.Text>
              </Card.Body>
            </Card>
    );
  };
  
  export default Header;