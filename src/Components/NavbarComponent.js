import { Nav, Navbar, Container } from "react-bootstrap";

export default function NavbarComponent() {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand href="/">ReactMovies</Navbar.Brand>
                    <Nav className="me-auto">
                        <div className="dropdown">
                            <button type="button" className="btn btn-sm btn-danger dropdown-toggle" data-bs-toggle="dropdown">
                                Genres
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/action">Action</a></li>
                                <li><a className="dropdown-item" href="/anime">Anime</a></li>
                                <li><a className="dropdown-item" href="/comedy">Comedy</a></li>
                                <li><a className="dropdown-item" href="/comingOfAge">Coming of Age</a></li>
                                <li><a className="dropdown-item" href="/drama">Drama</a></li>
                                <li><a className="dropdown-item" href="/horror">Horror</a></li>
                                <li><a className="dropdown-item" href="/mystery/sci-fi">Mystery/Sci-Fi</a></li>
                                <li><a className="dropdown-item" href="/romance">Romance</a></li>
                            </ul>
                        </div>








                    </Nav>
                    <Nav>
                        <form className="d-flex" role="search" action="http://localhost:8080/searchMovie" method="get">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="type"/>
                            <button class="btn btn-outline-success me-2" type="submit">Search</button>
                        </form>
                        <Nav.Link href="/addMovie">Add Movie</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}