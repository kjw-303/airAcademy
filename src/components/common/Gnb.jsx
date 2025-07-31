import React, { useState, useEffect, useRef } from "react";
import {Link} from "react-router-dom"
import "../../assets/css/main.css";
import logoBlue from "../../assets/img/logo_blue.png";
import MobileNav from "./MobileNav";

const GNB = ({ isLogin = false, activeCampus = "gangnam" }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const wrapperRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef(null);
  const bgRef = useRef(null);
  const navRef = useRef(null);

  // 스크롤 상태
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 메뉴 mouse enter
  const handleMouseEnter = (index) => {
    setOpenMenu(index);
  };

  // 메뉴 + submenu + bg-depth 전체 영역 hover 체크
  const handleGlobalMouseLeave = (e) => {
    const to = e.relatedTarget;

    // 1depth li, submenu, bg-depth 영역 안에 있다면 닫지 않음
    const stillInside =
      navRef.current?.contains(to) || bgRef.current?.contains(to);

    if (!stillInside) {
      setOpenMenu(null);
    }
  };

  return (
    <>
      <header
        id="main-header"
        ref={headerRef}
        className={`${isScrolled ? "active fixed" : ""} ${
          openMenu !== null && !isScrolled ? "on" : ""
        }`}
         onMouseLeave={() => setOpenMenu(null)}
      >
        {/* 상단 캠퍼스/로그인 영역 */}
        <div id="gnbTop">
          <div className="gnb-left">
            <div className="select-campus">
              <a
                href="https://www.koreaairacademy.com/index_new.asp"
                className={activeCampus === "gangnam" ? "active" : ""}
              >
                강남캠퍼스
              </a>
              <a
                href="http://www.busankoreaairacademy.com/index_new.asp"
                className={activeCampus === "busan" ? "active" : ""}
              >
                부산캠퍼스
              </a>
            </div>
            <div className="select-site">
              <a href="/index_new.asp">항공과 입시</a>
              <a href="https://www.koreacrewacademy.com/">승무원</a>
              <a href="https://www.koreaground.com/">지상직</a>
            </div>
          </div>

          <div className="gnb-right">
            {!isLogin ? (
              <div className="login-box">
                <a href="/2025/member/login.asp" className="login">
                  로그인
                </a>
                <a href="/2025/member/join.asp">회원가입</a>
              </div>
            ) : (
              <div className="logout-box">
                <a href="/2025/member/logout.asp" className="logout">
                  로그아웃
                </a>
                <a href="/2025/member/joinStep02.asp">정보수정</a>
              </div>
            )}
            <div>
              <a href="/2025/about/location.asp">오시는길</a>
            </div>
            <div>대표문의전화 1588-2095</div>
          </div>
        </div>

        {/* 로고 + 메뉴 */}
        <div className="container gnb-wrapper" ref={wrapperRef} onMouseLeave={() => setOpenMenu(null)}>
          <h1>
            <Link to="/" className="home-link">
              <img src={logoBlue} alt="logo" />
            </Link>
          </h1>

          <nav className="gnb">
            <ul>
              {[
                {
                  title: "아카데미소개",
                  submenu: [{label:"교육센터소개", to:"/about"}, {label:"코리아강사진", to:"/about"}, {label:"교육시설안내", to:"/about"}, {label:"찾아오시는길", to:"/about"}],
                },
                {
                  title: "교육과정안내",
                  submenu: [
                    "항공운항과 대학입시반",
                    "항공경영과 대학입시반",
                    "고1&고2 집중반",
                    "수시, 정시 집중 대비반",
                  ],
                },
                {
                  title: "어학정보",
                  submenu: ["토익", "토익 스피킹"],
                },
                {
                  title: "입시정보",
                  submenu: [
                    "항공운항과 소개",
                    "진로·비전",
                    "산학협력대학교",
                    "항공운항과 면접지원",
                  ],
                },
              ].map((menu, index) => (
                <li
                  key={index}
                  className={openMenu === index ? "open" : ""}
                  onMouseEnter={() => setOpenMenu(index)}>
                  <a tabIndex={0}>{menu.title}</a>
                  {openMenu === index && (
                  <ul className="submenu">
                    {menu.submenu.map((item, i) => (
                      <li key={i}>
                        <Link to={item.to}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                  )}
                </li>
              ))}
            </ul>
            <div
              ref={bgRef}
              className={`bg-depth ${openMenu !== null ? "open" : ""}`}
            ></div>
          </nav>

          {/* 언어 선택 */}
          <div className="header-right">
            <div id="google_translate_element" style={{ display: "none" }}></div>
            <div className="tran_sel">
              <ul className="lang-list">
                <li data-lang="ko" className="lang-btn active">
                  KO
                </li>
                <li data-lang="en" className="lang-btn">
                  EN
                </li>
                <li data-lang="zh-CN" className="lang-btn">
                  CH
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* 모바일 메뉴 */}
      <MobileNav />
    </>
  );
};

export default GNB;
