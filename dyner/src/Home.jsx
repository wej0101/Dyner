// 📁 Home.jsx
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
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
            <Link to="/sign-up" className="btn btn-green">Sign Up</Link>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <h1>함께 성장할 개발자를 찾고 있나요?</h1>
              <p>
                스터디부터 실전 프로젝트까지, 같은 목표를 가진 개발자들과 쉽고 빠르게 팀을 이루세요.
              </p>
              <div className="hero-buttons">
                <Link to="/projects/create" className="btn btn-green">스터디/프로젝트 개설</Link>
                <Link to="/developers" className="btn btn-outline">개발자 찾기</Link>
              </div>
            </div>
            <div className="hero-card">
              <h3>모바일 앱 개발자</h3>
              <p>피트니스 트래킹 앱을 위한 리액트 네이티브 개발자와 UI/UX 디자이너를 찾고 있습니다.</p>
              <div className="tags">
                <span>React Native</span>
                <span>UI/UX Design</span>
                <span>Mobile</span>
              </div>
              <Link to="/projects/1" className="btn btn-outline small">자세히 보기</Link>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <div className="container">
            <h2>Dyner는 어떻게 이용하나요?</h2>
            <p className="section-desc">
              Dyner는 개발 프로젝트에 필요한 인재를 쉽게 찾고, 유망한 팀에 합류할 수 있는 플랫폼입니다.
            </p>
            <div className="features">
              <div className="feature-card">
                <h3>스터디/프로젝트 개설</h3>
                <p>
                  스터디/프로젝트 정보와 필요 기술, 일정을 입력하면 적합한 개발자에게 추천됩니다.
                </p>
              </div>
              <div className="feature-card">
                <h3>개발자 찾기</h3>
                <p>
                  개발자 프로필과 포트폴리오를 확인하고, 필요한 기술을 가진 인재와 연결하세요.
                </p>
              </div>
              <div className="feature-card">
                <h3>함께 성장하기</h3>
                <p>
                  함께 만들고, 함께 배우며, 함께 성장하세요.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-devs">
          <div className="container">
            <h2>Dyner Developers</h2>
            <p className="section-desc">
              프로젝트/스터디 그룹원 매칭 플랫폼 Dyner를 제작해주신 개발자분들을 소개합니다.
            </p>
            <div className="dev-cards">
              {[1, 2, 3, 4].map((id) => (
                <div key={id} className="dev-card">
                  <div className="avatar">{`Dev ${id}`}</div>
                  <h3>Developer {id}</h3>
                  <p className="desc">
                    {id === 1
                      ? "설명"
                      : id === 2
                      ? "설명"
                      : id === 3
                      ? "설명"
                      :"설명"}
                  </p>
                  <div className="tags">
                    {id === 1 ? (
                      <>
                        <span>React</span><span>Node.js</span><span>AWS</span>
                      </>
                    ) : id === 2 ? (
                      <>
                        <span>UI/UX</span><span>Figma</span><span>Mobile</span>
                      </>
                    ) : id === 3 ?(
                      <>
                        <span>Python</span><span>Django</span><span>SQL</span>
                      </>
                    ) : (
                      <>
                       <span>React</span><span>Node.js</span><span>AWS</span>
                      </>
                    )}
                  </div>
                  <Link to={`/developers/${id}`} className="btn btn-outline small">View Profile</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container cta-inner">
            <div className="cta-text">
              <h2>스터디/프로젝트에 참여하고 싶으신가요?</h2>
              <p>
                여러분의 여정에 함께할 개발자를 Dyner에서 만나보세요. 목표를 향해 함께 달려갈 든든한 팀을 지금 바로 찾을 수 있어요.
              </p>
              <Link to="/sign-up" className="btn btn-black cta-button">지금 시작하기 →</Link>
            </div>
            <div className="cta-card">
              <h3>가입하기</h3>
              <p>프로필을 만들고, 당신의 역량을 보여주세요. 흥미로운 프로젝트/스터디를 추천받을 수 있어요.</p>
              <Link to="/sign-up?role=developer" className="btn btn-outline small">내 프로필 만들러 가기</Link>
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
