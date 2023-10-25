import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.svg";
function Header() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 navControl"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Pages">Pages</Link>
              </li>
              <li>
                <Link to="/Moives">Movies</Link>
              </li>
              <li>
                <Link to="/TVShows">TVShows</Link>
              </li>
              <li>
                <Link to="/Celebs">Celebs</Link>
              </li>
              <li>
                <Link to="/Blog">Blog</Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
