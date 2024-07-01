
import { useContext } from 'react';
import { AuthContext } from './Contexto/AuthContext';
import BotonLogin from './BotonLogin';
import FormularioRegistro from './FormularioRegistro';

export default function Navbar() {
   
    const { isAuthenticated, logout } = useContext(AuthContext);
       
    return (
        <div className="container-fluid m-0 p-0">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><b>Green</b>Threads</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                      
                        </ul>
                        {isAuthenticated ? (
                            <button className="btn btn-outline-danger" onClick={logout}>Cerrar Sesión</button>
                        ) : (
                            <>
                                <BotonLogin />
                                <FormularioRegistro />
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}
