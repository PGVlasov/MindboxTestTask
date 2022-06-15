import { Container, Nav, Navbar } from "react-bootstrap";

export const NavMenu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">ToDoList</Nav.Link>
            <Nav.Link href="/active">Active</Nav.Link>
            <Nav.Link href="/completed">Completed</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
