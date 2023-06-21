"use client";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav,NavDropdown  } from 'react-bootstrap';
import Link from 'next/link';
import dynamic from "next/dynamic";


function NavBar() {
  return (
    <>
 <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary drop-shadow-xl z-50" fixed="top">
      <Container className=''>
        <Navbar.Brand className='font-semibold'><Link href={"/"}>Offsiders</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link href="/plan">Matches</Link></Nav.Link>
            <Nav.Link ><Link href="/">Transfers</Link></Nav.Link>
            <NavDropdown title="Leagues" id="collasible-nav-dropdown">
              <NavDropdown.Item>Premier League</NavDropdown.Item>
              <NavDropdown.Item>
                La-Liga 
              </NavDropdown.Item>
              <NavDropdown.Item>Bundesliga</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item>
                Serie A
              </NavDropdown.Item>
              <NavDropdown.Item>
                League-One
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link><Link href="/">About US</Link></Nav.Link>
            <Nav.Link>
              <Link href="/">Contact Us</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default dynamic (() => Promise.resolve(NavBar), {ssr: false});

