import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// function Naver() {
//   return (
//     <Navbar expand="lg" className="bg-danger p-4 text-bol4">
//       <Container>
//         <Navbar.Brand href="#home">BlogER</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             {/* <Nav.Link to="/">Home</Nav.Link>
//             <Nav.Link to="/about">About</Nav.Link>
//             <Nav.Link to="/contact">Contact</Nav.Link> */}
//             <Nav.Link><Link to="/">home</Link></Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

function Naver() {
  return(
    <>
    <nav>
      <ul>
        <li>
          {/* <a href="/">home</a> <br />
          <a href="/about">about</a> <br />
          <a href="/contact">contact</a> */}
          <Link>home</Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Naver;