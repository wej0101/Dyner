import { Link } from 'react-router-dom';
import './SignIn.css';

export default function SignIn() {
    return (
        <div className="sign-in-page">
            <header className="header">
                <div className="container header-inner">
                    <Link to="/" className='logo-link'>
                        <img src="/dyner-logo.png" alt="Dyner Logo" className='logo-img' />
                    </Link>
                    <nav className="nav">
                        <Link to="/projects">Projects</Link>
                        <Link to="/developers">Developers</Link>
                        <Link to="/study">Study</Link>
                    </nav>
                    <div className="auth">
                        <Link to="/sign-in" className="btn btn-outline active">Sign In</Link>
                        <Link to="/sign-up" className="btn btn-green">Sign Up</Link>
                    </div>
                </div>
            </header>
            <main className="main">
        <section className="sign-in-form-section">
          <div className="container form-container">
            <h1>로그인</h1>

            <form className="sign-in-form">
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" placeholder="example@dyner.com" required />

              <label htmlFor="password">비밀번호</label>
              <input type="password" id="password" placeholder="********" required />

              <button type="submit" className="btn btn-green full-width">로그인</button>
            </form>

            <div className="form-footer">
              <p>계정이 없으신가요? <Link to="/sign-up">회원가입</Link></p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="logo">Dyner</div>
            <p>2025년 한림대학교 창업동아리 Dyner가 제작하였습니다.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Platform</h4>
              <ul>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/developers">Developers</Link></li>
                <li><Link to="/study">Study</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/careers">Careers</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/privacy">Privacy</Link></li>
                <li><Link to="/terms">Terms</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2025 Dyner. All rights reserved.</p>
          <div className="footer-policy">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </footer>
        </div>
    )
}