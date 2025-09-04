import React, { useState,useEffect } from "react";
import {Link, useLocation, useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

  const mainMenus = [
    { key: "about", text: "아카데미소개", url: "/about" },
    { key: "curriculum", text: "교육과정안내", url: "/curriculum01" },
    { key: "language", text: "어학정보", url: "/language01" },
    { key: "univerinfo", text: "입시정보", url: "/course" },
    { key: "community", text: "커뮤니티", url: "/gallery" },
    { key: "customer", text: "고객상담센터", url: "/prices_vacation" },
  ];

  const menuDepth2 = {
    about: [
      { text: "교육센터소개", url: "/about" },
      { text: "코리아강사진", url: "/teacher" },
      { text: "교육시설안내", url: "/facilities" },
      { text: "찾아오시는길", url: "/location" },
    ],
    curriculum: [
      { text: "항공운항과 대학입시반", url: "/curriculum01" },
      { text: "항공경영과 대학입시반", url: "/curriculum02" },
      { text: "예비 고3 집중반", url: "/curriculum03" },
      { text: "수시, 정시 집중 대비반", url: "/curriculum04" },
    ],
    language: [
      { text: "토익", url: "/language01" },
      { text: "토익스피킹", url: "/language02" },
    ],
    univerinfo: [
      { text: "항공운항과 소개", url: "/course" },
      { text: "진로·비전", url: "/career" },
      { text: "산학협력대학교", url: "/collegePartner" },
      { text: "항공운항과 면접지원", url: "/support" },
    ],
    community: [
      { text: "포토존", url: "/gallery" },
      { text: "합격생 리얼성공후기", url: "/airline_cl" },
      { text: "합격생인터뷰", url: "/interview." },
      { text: "수강생 후기", url: "/eventPOST" },
    ],
    customer: [
      { text: "새학기특강조회", url: "/prices_vacation" },
      { text: "시간표조회", url: "/timetable" },
      { text: "입시컨설팅", url: "/online" },
      { text: "학부모상담", url: "/feedback" },
      { text: "지원가능한 대학조회", url: "/search_airline" },
      { text: "카톡상담", url: "/kakao" },
      { text: "수강료안내", url: "/tuition_info" },
    ],
  };

  const accordionMenus = [
    {
      title: "아카데미소개",
      links: [
        { text: "교육센터소개", url: "/about" },
        { text: "코리아강사진", url: "/teacher" },
        { text: "교육시설안내", url: "/facilities" },
        { text: "찾아오시는길", url: "/location" },
      ],
    },
    {
      title: "교육과정안내",
      links: [
        { text: "항공운항과 대학입시반", url: "/curriculum01" },
        { text: "항공경영과 대학입시반", url: "/curriculum02" },
        { text: "고1&고2 집중반", url: "/curriculum03" },
        { text: "수시, 정시 집중 대비반", url: "/curriculum04" },
      ],
    },
    {
      title: "어학정보",
      links: [
        { text: "토익", url: "/language01" },
        { text: "토익스피킹", url: "/language02" },
      ],
    },
    {
      title: "입시정보",
      links: [
        { text: "항공운항과 소개", url: "/course" },
        { text: "진로·비전", url: "/career" },
        { text: "산학협력대학교", url: "/collegePartner" },
        { text: "항공운항과 면접지원", url: "/support" },
      ],
    },
    {
      title: "커뮤니티",
      links: [
        { text: "포토존", url: "/gallery" },
        { text: "합격생 리얼성공후기", url: "/airline_cl" },
        { text: "합격생인터뷰", url: "/interview" },
        { text: "수강생후기", url: "/eventPOST" },
      ],
    },
    {
      title: "고객상담센터",
      links: [
        { text: "새학기특강조회", url: "/prices_vacation" },
        { text: "시간표조회", url: "/timetable" },
        { text: "입시컨설팅", url: "/online" },
        { text: "학부모상담", url: "/feedback" },
        { text: "지원가능한 대학조회", url: "/search_airline" },
        { text: "카톡상담", url: "/kakao" },
        { text: "수강료안내", url: "/tuition_info" },
      ],
    },
  ];

// 2depth 메뉴 컴포넌트
const MobileDepth2 = ({ activeMenu, activeSubPage, onDepth2Click }) => {
  const subMenu = menuDepth2[activeMenu] || [];
  if (!subMenu.length) return null;

  return (
    <div className="mo-2dapth">
      <div className="modapthSwiper">
        <Swiper slidesPerView={"auto"} className="swiper-wrapper">
          {subMenu.map((item) => (
            <SwiperSlide
              key={item.url}
              className={activeSubPage === item.url ? "active" : ""}
            >
              <Link to={item.url} onClick={() => onDepth2Click(item.url)}>{item.text}</Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

// 메인 MobileGnb
const MobileGnb = ({ isLogin = false, userName = "홍길동" }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // 1depth 메뉴는 Swiper에서만 state 관리
  const [activeMenu, setActiveMenu] = useState("about");

  // (필요하다면) 2depth에서 현재 선택된 url 추적 (location.pathname 사용해도 충분)
  // 아코디언은 완전 별개!
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  // 1depth 클릭 시 1depth 메뉴 변경, 2depth 자동 첫 번째로 이동!
  const handleMainMenuClick = (menu) => {
    setActiveMenu(menu.key);
    // 2depth의 첫번째 메뉴로 페이지 이동
    const first2depth = menuDepth2[menu.key]?.[0]?.url;
    if (first2depth && location.pathname !== first2depth) {
      navigate(first2depth);
    }
  };

  // 2depth 클릭 시 activeMenu는 유지(변경X), 페이지 이동만 처리
  const handleDepth2Click = (url) => {
    if (location.pathname !== url) {
      navigate(url);
    }
  };

  const toggleAccordion = (index) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  // 페이지 새로고침/URL 직접 접근 시에도 1depth 맞춰줌
  useEffect(() => {
    // 가장 url이 잘 맞는 메뉴 찾기 (더 긴 url부터)
    const sorted = [...mainMenus].sort((a, b) => b.url.length - a.url.length);
    const found = sorted.find(menu => location.pathname.startsWith(menu.url));
    if (found && found.key !== activeMenu) {
      setActiveMenu(found.key);
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <>
      {/* 모바일 헤더 */}
      <header id="main-header" className="mo-header">
        <div className="container">
          <h1>
            <Link to="/" className="home-link"></Link>
          </h1>
          <div className="header-right">
            <div className="tran_sel">
              <ul className="lang-list">
                <li className="lang-btn">KO</li>
                <li className="lang-btn">EN</li>
                <li className="lang-btn">CH</li>
              </ul>
            </div>
          </div>
          <div className="site-map">
            <button onClick={() => setIsOpen(true)}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>
          </div>
        </div>

        {/* 상단 1depth 메뉴 Swiper */}
        <nav className="mo-gnb">
          <Swiper slidesPerView={"auto"} className="mognbSwiper">
            {mainMenus.map((menu) => (
              <SwiperSlide key={menu.key} className={activeMenu === menu.key ? "active" : ""}
              onClick={() => handleMainMenuClick(menu)}>
                <Link to={menu.url}>{menu.text}</Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </nav>

        {/* 2depth 메뉴 Swiper */}
        <MobileDepth2 activeMenu={activeMenu} activeSubPage={location.pathname} onDepth2Click={handleDepth2Click} />
      </header>

      {/* 햄버거 전체 메뉴 */}
      <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
        <div className="site-header">
          <div className="select-site">
            <a href="http://koreaairacademy.com/index_new.asp" className="active">
              강남
            </a>
            <a href="http://busan.koreaairacademy.com/index_new.asp">부산</a>
          </div>
          <button type="button" className="close" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>

        {/* 로그인 영역 */}
        <div className="sitemapMember gnbMember">
          {!isLogin ? (
            <div className="join-member">
              <Link to="/login" className="gnbMemLogin">
                <span className="home-link"></span>
                <span>로그인</span>
              </Link>
              <div className="gnbMemMenu">
                <Link to="/join">회원가입</Link>
              </div>
            </div>
          ) : (
            <div className="join-member">
              <p className="gnbMemTxt">{userName}님</p>
              <div className="gnbMemMenu">
                <Link to="/joinStep02">정보수정</Link>
                <Link to="/logout">로그아웃</Link>
              </div>
            </div>
          )}
        </div>
        <div className="select-area">
          <div className="select-site">
            <a href="#" className="active">승무원</a>
            <a href="https://www.koreaground.com/m/">지상직</a>
            <a href="https://www.koreaairacademy.com/m/">항공과 입시</a>
          </div>
        </div>

        {/* 아코디언 메뉴 */}
        <div className="accordion-container">
          {accordionMenus.map((menu, index) => (
            <div className="accordion-item" key={index}>
              <button
                className={`accordion-btn ${activeAccordion === index ? "active" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                {menu.title}
                <div className="icon">
                  <div className="vertical">
                    <div className="bar"></div>
                    <div className="horizontal"></div>
                  </div>
                </div>
              </button>
              <div
                className="accordion-panel"
                style={{
                  maxHeight: activeAccordion === index ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <ul>
                  {menu.links.map((link, i) => (
                    <li key={i} className={location.pathname.startsWith(link.url) ? "active" : ""}>
                      <Link to={link.url}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="menu-divider"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileGnb;
