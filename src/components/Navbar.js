import { useEffect } from "react";
import { Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCartDispatch, useCartState } from "../context/CartContext";
const Navbar = () => {
  const { allCart } = useCartState();
  const dispatch = useCartDispatch();
  const { mode } = useCartState();
  let allQuantity = allCart.reduce((curr, next) => curr + next.quantity, 0);
  useEffect(() => {
    dispatch({ type: "getMyCart" });
  }, [allCart]);
  const handleOpenCart = () => dispatch({ type: "openCart" });

  return (
    <NavbarBs sticky="top" className={`shadow-sm navbar ${mode==="light"?"bg-light navbar-light":"bg-dark navbar-dark"}`}>
      <div className="container">
        <Nav className="me-auto" >
          <Nav.Link to="/" as={NavLink} className="fw-bold">
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink} className="fw-bold">
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink} className="fw-bold">
            About
          </Nav.Link>
        </Nav>
        <button
          className="btn btn-outline-primary rounded-circle btn-cart"
          onClick={() => handleOpenCart()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.738.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1V2h3.25l.95 2Z" />
          </svg>
          <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center num-items">
            {allQuantity}
          </div>
        </button>

        <button className="btn mx-4 text-primary">
          {mode == "light" ? (
            <i
              class="fas fa-moon fa-2x mx-2 pointer"
              onClick={() => dispatch({ type: "setMode" })}
            />
          ) : (
            <i class="far fa-moon fa-2x pointer" onClick={() => dispatch({ type: "setMode" })} />
          )}
        </button>
      </div>
    </NavbarBs>
  );
};

export default Navbar;
