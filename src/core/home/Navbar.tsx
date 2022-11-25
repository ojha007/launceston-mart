import {
  NavbarBrand,
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavLink,
  NavItem,
} from "reactstrap";
import {
  Speedometer2,
  PersonCircle,
  Send,
  ClockHistory,
  PeopleFill,
  BoxArrowRight,
  List,
} from "react-bootstrap-icons";
import TokenService from "../../services/TokenService";
import { useState } from "react";
import { Link, useResolvedPath, useMatch, LinkProps } from "react-router-dom";

function NavBarLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link className={`nav-link ${match ? "active" : ""}`} to={to} {...props}>
      {children}
    </Link>
  );
}

export default function NavBar() {
  const [toogle, setToogle] = useState<boolean>(false);

  return (
    <Navbar color="light" expand="md" light>
      <NavbarBrand href="https://launchestonmart.com.au">
        <img
          src={require("../../assets/images/logo.png")}
          alt="Launceston Mart Remit"
          width="100"
          height="40"
          className="d-inline-block align-top"
        />
      </NavbarBrand>

      <NavbarToggler onClick={(e) => setToogle(!toogle)} />

      <Collapse navbar isOpen={toogle} className="justify-content-end">
        <Nav className="ml-auto " navbar>
          <NavItem>
            <NavBarLink to="">
              <Speedometer2 className="bi me-2" />
              <span>Dashboard</span>
            </NavBarLink>
          </NavItem>
          <NavItem>
            <NavBarLink to="send-money">
              <Send className="bi me-2" />
              <span>Send Money</span>
            </NavBarLink>
          </NavItem>
          <NavItem>
            <NavBarLink to="history">
              <ClockHistory className="bi me-2" />
              <span>History</span>
            </NavBarLink>
          </NavItem>
          <NavItem>
            <NavBarLink to="beneficiary">
              <PeopleFill className="bi me-2" />
              <span>Beneficiary</span>
            </NavBarLink>
          </NavItem>
          <NavItem>
            <NavBarLink to="user/kyc">
              <PersonCircle className="bi me-2" />
              <span>Profile</span>
            </NavBarLink>
          </NavItem>
          <NavItem>
            <a
              className="nav-link"
              href="/"
              aria-current="page"
              onClick={() => TokenService.clearToken()}
            >
              <BoxArrowRight className="bi me-2" />
              <span>Logout</span>
            </a>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
