import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";
import NavBar from "./Navbar";

export default function Dashboard() {
  return (
    <Container>
      <NavBar />
      <Outlet />
    </Container>
  );
}
