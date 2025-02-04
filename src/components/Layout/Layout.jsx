import { Link } from "react-router-dom"
import "./Layout.css"

const Layout = ({ children }) => {
    return (
     <>
    <header>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Harry Potter</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto"> {/* Alinea la nav a la derecha */}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/personajes">
                  Personajes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Info">
                  Info
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
         <main>{children}</main>

         <footer className="bg-dark text-light py-3 mt-auto border-top border-secondary">
      <div className="container text-center">
        {/* Menú de navegación */}
        <ul className="list-inline mb-2">
          <li className="list-inline-item">
            <Link className="text-light text-decoration-none" to="/">Home</Link>
          </li>
          <li className="list-inline-item">|</li>
          <li className="list-inline-item">
            <Link className="text-light text-decoration-none" to="/personajes">Personajes</Link>
          </li>
          <li className="list-inline-item">|</li>
          <li className="list-inline-item">
            <Link className="text-light text-decoration-none" to="/Info">Info</Link>
          </li>
        </ul>       

        {/* Derechos reservados */}
        <p className="mb-0">&copy; 2025 Desarrollado por tomas G . Todos los derechos reservados.</p>
      </div>
    </footer>  
     </>
  )
 }
 
 
 export { Layout }
 