export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Udemy</div>
      <div className="nav-links">
        <span>Categories</span>
        <span>Udemy Business</span>
        <span>Teach on Udemy</span>
      </div>
      <div className="auth">
        <button className="login">Log in</button>
        <button className="signup">Sign up</button>
      </div>
    </nav>
  );
}