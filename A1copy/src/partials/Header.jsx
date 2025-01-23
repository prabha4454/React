import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg blurred-navbar fixed-top">
                <div className="container ">
                    <a className="navbar-brand text-light" href="#"><img className="logo" src="/images/logo.jpg" alt="" /><h1>A1ideas</h1></a>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto gap-4 ">
                            <li class="nav-item ">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-dark me-2 btn-md" href="#">Services</a>
                            </li>
                            <li className="nav-item me-3">
                                <a classNames="btn btn-success btn-md" href="#">Products</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="btn btn-success btn-md" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;