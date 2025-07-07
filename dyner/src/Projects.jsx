import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const projectList = [
    {
      id: 1,
      title: '모바일 앱 개발',
      description: 'React Native를 사용한 피트니스 앱 제작 프로젝트',
      tags: ['React Native', 'Mobile', 'UI/UX'],
      type: '모바일 앱',
    },
    {
      id: 2,
      title: '웹 서비스 클론',
      description: '프론트엔드 중심 클론 코딩 프로젝트',
      tags: ['React', 'Redux', 'Tailwind'],
      type: '프론트엔드',
    },
    {
      id: 3,
      title: 'AI 스터디',
      description: '머신러닝 이론과 실습을 함께할 팀원 모집',
      tags: ['Python', 'Scikit-learn', 'Pandas'],
      type: 'AI/ML',
    },
    {
      id: 4,
      title: '백엔드 API 개발',
      description: 'Spring Boot 기반 RESTful API 구현 프로젝트',
      tags: ['Spring', 'Java', 'MySQL'],
      type: '백엔드',
    },
    {
      id: 5,
      title: '포트폴리오 웹 제작',
      description: '디자이너와 함께 작업할 퍼블리셔 구함',
      tags: ['HTML', 'CSS', 'JavaScript'],
      type: '웹 퍼블리싱',
    },
    {
      id: 6,
      title: '실시간 채팅앱',
      description: 'Socket.io와 Firebase를 활용한 메신저 개발',
      tags: ['Node.js', 'Socket.io', 'Firebase'],
      type: '백엔드',
    },
    {
      id: 7,
      title: '캡스톤 디자인',
      description: '졸업 프로젝트로 웹 플랫폼 제작 팀원 모집',
      tags: ['Fullstack', 'Team', 'MySQL'],
      type: '기타',
    },
  ];

  // 페이지네이션 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projectList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projectList.length / itemsPerPage);

  return (
    <div className="projects-page">
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="logo-link">
            <img src="/dyner-logo.png" alt="Dyner Logo" className="logo-img" />
          </Link>
          <nav className="nav">
            <Link to="/projects" className="active">Projects</Link>
            <Link to="/developers">Developers</Link>
            <Link to="/study">Study</Link>
          </nav>
          <div className="auth">
            <Link to="/sign-in" className="btn btn-outline">Sign In</Link>
            <Link to="/sign-up" className="btn btn-black">Sign Up</Link>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="projects-header">
          <div className="container projects-header-inner">
            <div>
              <h1>Projects</h1>
              <p className="section-desc">
                당신의 기술과 관심사에 맞는 개발 프로젝트를 찾아보세요.
              </p>
            </div>
            <Link to="/projects/create" className="btn btn-black create-btn">+ 스터디 만들기</Link>
          </div>
        </section>

        <section className="projects-filters container">
          <input type="text" placeholder="🔍 스터디 검색" className="search-input" />
          <select className="filter-select">
            <option>전체 보기</option>
            <option>프론트엔드</option>
            <option>백엔드</option>
            <option>AI/ML</option>
          </select>
        </section>

       <section className="projects-list container">
  {currentProjects.length === 0 ? (
    <div className="empty-state">
      <p>📭 아직 등록된 프로젝트가 없습니다.</p>
      <Link to="/projects/create" className="btn btn-black small">스터디/프로젝트 개설하기</Link>
    </div>
  ) : (
    currentProjects.map((project) => (
      <div key={project.id} className="project-card">
        <h3>{project.title}</h3>
        <p className="desc">{project.description}</p>
        <div className="tags">
          {project.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <p className="type"><strong>분야:</strong> {project.type}</p>
        <Link to={`/projects/${project.id}`} className="btn btn-outline small">자세히 보기</Link>
      </div>
    ))
  )}
</section>

        

        <div className="pagination container">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
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
