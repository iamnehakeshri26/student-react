function Navbar({ title, search, setSearch }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

       <a className="navbar-brand fw-bold" href="#">
  🏠 {title}
</a>

        <div className="collapse navbar-collapse show">

          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Properties</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>

          </ul>
<input
  type="text"
  className="form-control me-3"
  placeholder="Search City..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{ width: "250px" }}
/>
          <button className="btn btn-light me-2">
            Login
          </button>

          <button className="btn btn-warning">
            Register
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;