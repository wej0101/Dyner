import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

export default function SignUp() {
  const [interestArea, setInterestArea] = useState('');
  const [customInterest, setCustomInterest] = useState('');
  const [customStacks, setCustomStacks] = useState(['']);

  return (
    <div className="sign-up-page">
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="logo-link">
            <img src="/dyner-logo.png" alt="Dyner Logo" className="logo-img" />
          </Link>
          <nav className="nav">
            <Link to="/projects">Projects</Link>
            <Link to="/developers">Developers</Link>
            <Link to="/study">Study</Link>
          </nav>
          <div className="auth">
            <Link to="/sign-in" className="btn btn-outline">Sign In</Link>
            <Link to="/sign-up" className="btn btn-green active">Sign Up</Link>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="sign-up-form-section">
          <div className="container form-container">
            <h1>회원가입</h1>
            <form className="sign-up-form">
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" placeholder="example@dyner.com" required />

              <label htmlFor="password">비밀번호</label>
              <input type="password" id="password" placeholder="********" required />

              <label htmlFor="nickname">닉네임</label>
              <input type="text" id="nickname" placeholder="예: dev_hong" required />

              <label htmlFor="bio">자기소개</label>
              <textarea id="bio" placeholder="간단한 소개를 입력해주세요" rows="3" />

              {/* 관심 분야 */}
              <label htmlFor="interest_area">관심 분야</label>
              <select
                id="interest_area"
                value={interestArea}
                onChange={(e) => setInterestArea(e.target.value)}
              >
                <option value="">관심 분야 선택</option>
                <option value="frontend">프론트엔드</option>
                <option value="backend">백엔드</option>
                <option value="ai">AI/ML</option>
                <option value="mobile">모바일 앱</option>
                <option value="기타">기타 (직접 입력)</option>
              </select>
              {interestArea === '기타' && (
                <input
                  type="text"
                  placeholder="관심 분야를 입력해주세요"
                  value={customInterest}
                  onChange={(e) => setCustomInterest(e.target.value)}
                />
              )}

              {/* 기술 스택 */}
              <label>사용 기술 스택</label>
              <div className="checkbox-group">
                <label><input type="checkbox" name="stack" value="React" /> React</label>
                <label><input type="checkbox" name="stack" value="Node.js" /> Node.js</label>
                <label><input type="checkbox" name="stack" value="Python" /> Python</label>
                <label><input type="checkbox" name="stack" value="Django" /> Django</label>
                <label><input type="checkbox" name="stack" value="MySQL" /> MySQL</label>
              </div>

              <div className="custom-stack-inputs">
                <label>기타 기술 스택 직접 추가</label>
                {customStacks.map((stack, index) => (
                  <input
                    key={index}
                    type="text"
                    value={stack}
                    onChange={(e) => {
                      const newStacks = [...customStacks];
                      newStacks[index] = e.target.value;
                      setCustomStacks(newStacks);
                    }}
                    placeholder={`예: Spring, Swift 등`}
                  />
                ))}
                <button
                  type="button"
                  className="btn btn-outline small"
                  onClick={() => setCustomStacks([...customStacks, ''])}
                >
                  + 기술 스택 추가
                </button>
              </div>

              <button type="submit" className="btn btn-green full-width">가입하기</button>
            </form>
            <div className="form-footer">
              <p>이미 계정이 있으신가요? <Link to="/sign-in">로그인</Link></p>
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
  );
}
