import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../assets/css/main.css";

// 2depth 메뉴 컴포넌트
const MobileDepth2 = ({ activeMenu, activeSubPage }) => {
  const menuDepth2 = {
    about: [
      { text: "교육센터소개", url: "/2025/about/about.asp" },
      { text: "코리아강사진", url: "/2025/about/teacher.asp" },
      { text: "교육시설안내", url: "/2025/about/facilities.asp" },
      { text: "찾아오시는길", url: "/2025/about/location.asp" },
    ],
    curriculum: [
      { text: "항공운항과 대학입시반", url: "/2025/curriculum/curriculum01.asp" },
      { text: "항공경영과 대학입시반", url: "/2025/curriculum/curriculum02.asp" },
      { text: "예비 고3 집중반", url: "/2025/curriculum/curriculum03.asp" },
      { text: "수시, 정시 집중 대비반", url: "/2025/curriculum/curriculum04.asp" },
    ],
    language: [
      { text: "토익", url: "/2025/language/language01.asp" },
      { text: "토익스피킹", url: "/2025/language/language02.asp" },
    ],
    univerinfo: [
      { text: "항공운항과 소개", url: "/2025/univerinfo/course.asp" },
      { text: "진로·비전", url: "/2025/univerinfo/career.asp" },
      { text: "산학협력대학교", url: "/2025/univerinfo/collegePartner.asp" },
      { text: "항공운항과 면접지원", url: "/2025/univerinfo/support.asp" },
    ],
    community: [
      { text: "포토존", url: "/2025/community/gallery.asp" },
      { text: "합격생 리얼성공후기", url: "/2025/community/airlini_cl.asp" },
      { text: "합격생인터뷰", url: "/2025/community/interview.asp" },
      { text: "수강생 후기", url: "/2025/community/eventPOST.asp" },
    ],
    customer: [
      { text: "새학기특강조회", url: "/2025/customer/prices_vacation.asp" },
      { text: "시간표조회", url: "/2025/customer/timetable.asp" },
      { text: "입시컨설팅", url: "/2025/customer/online.asp" },
      { text: "학부모상담", url: "/2025/customer/feedback.asp" },
      { text: "지원가능한 대학조회", url: "/2025/customer/search_airline.asp" },
      { text: "카톡상담", url: "/2025/customer/kakao.asp" },
      { text: "수강료안내", url: "/2025/customer/tuition_info.asp" },
    ],
  };

  const subMenu = menuDepth2[activeMenu] || [];

  if (subMenu.length === 0) return null;

  return (
    <div className="mo-2dapth">
      <div className="modapthSwiper">
        <Swiper slidesPerView={"auto"} className="swiper-wrapper">
          {subMenu.map((item) => (
            <SwiperSlide
              key={item.url}
              className={activeSubPage === item.url ? "active" : ""}
            >
              <a href={item.url}>{item.text}</a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

// 메인 MobileGnb
const MobileGnb = ({ isLogin = false, userName = "홍길동", activeMenu = "about" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const mainMenus = [
    { key: "about", text: "아카데미소개", url: "/2025/about/about.asp" },
    { key: "curriculum", text: "교육과정안내", url: "/2025/curriculum/curriculum01.asp" },
    { key: "language", text: "어학정보", url: "/2025/language/language01.asp" },
    { key: "univerinfo", text: "입시정보", url: "/2025/univerinfo/course.asp" },
    { key: "community", text: "커뮤니티", url: "/2025/community/gallery.asp" },
    { key: "customer", text: "고객상담센터", url: "/2025/customer/prices_vacation.asp" },
  ];

  const accordionMenus = [
    {
      title: "아카데미소개",
      links: [
        { text: "교육센터소개", url: "/2025/about/about.asp" },
        { text: "코리아강사진", url: "/2025/about/teacher.asp" },
        { text: "교육시설안내", url: "/2025/about/facilities.asp" },
        { text: "찾아오시는길", url: "/2025/about/location.asp" },
      ],
    },
    {
      title: "교육과정안내",
      links: [
        { text: "항공운항과 대학입시반", url: "/2025/curriculum/curriculum01.asp" },
        { text: "항공경영과 대학입시반", url: "/2025/curriculum/curriculum02.asp" },
        { text: "고1&고2 집중반", url: "/2025/curriculum/curriculum03.asp" },
        { text: "수시, 정시 집중 대비반", url: "/2025/curriculum/curriculum04.asp" },
      ],
    },
    {
      title: "어학정보",
      links: [
        { text: "토익", url: "/2025/language/language01.asp" },
        { text: "토익스피킹", url: "/2025/language/language02.asp" },
      ],
    },
    {
      title: "입시정보",
      links: [
        { text: "항공운항과 소개", url: "/2025/univerinfo/course.asp" },
        { text: "진로·비전", url: "/2025/univerinfo/career.asp" },
        { text: "산학협력대학교", url: "/2025/univerinfo/collegePartner.asp" },
        { text: "항공운항과 면접지원", url: "/2025/univerinfo/support.asp" },
      ],
    },
    {
      title: "커뮤니티",
      links: [
        { text: "포토존", url: "/2025/community/gallery.asp" },
        { text: "합격생 리얼성공후기", url: "/2025/community/airlini_cl.asp" },
        { text: "합격생인터뷰", url: "/2025/community/interview.asp" },
        { text: "수강생후기", url: "/2025/community/eventPOST.asp" },
      ],
    },
    {
      title: "고객상담센터",
      links: [
        { text: "새학기특강조회", url: "/2025/customer/prices_vacation.asp" },
        { text: "시간표조회", url: "/2025/customer/timetable.asp" },
        { text: "입시컨설팅", url: "/2025/customer/online.asp" },
        { text: "학부모상담", url: "/2025/customer/feedback.asp" },
        { text: "지원가능한 대학조회", url: "/2025/customer/search_airline.asp" },
        { text: "카톡상담", url: "/2025/customer/kakao.asp" },
        { text: "수강료안내", url: "/2025/customer/tuition_info.asp" },
      ],
    },
  ];

  return (
    <>
      {/* 모바일 헤더 */}
      <header id="main-header" className="mo-header">
        <div className="container">
          <h1>
            <a href="/index_new.asp" className="home-link"></a>
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
            <button onClick={toggleMenu}>
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
              <SwiperSlide key={menu.key} className={activeMenu === menu.key ? "active" : ""}>
                <a href={menu.url}>{menu.text}</a>
              </SwiperSlide>
            ))}
          </Swiper>
        </nav>

        {/* 2depth 메뉴 Swiper */}
        <MobileDepth2 activeMenu={activeMenu} activeSubPage="/2025/about/teacher.asp" />
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
          <button type="button" className="close" onClick={toggleMenu}>
            ✕
          </button>
        </div>

        {/* 로그인 영역 */}
        <div className="sitemapMember gnbMember">
          {!isLogin ? (
            <div className="join-member">
              <a href="/2025/member/login.asp" className="gnbMemLogin">로그인</a>
              <div className="gnbMemMenu">
                <a href="/2025/member/join.asp">회원가입</a>
              </div>
            </div>
          ) : (
            <div className="join-member">
              <p className="gnbMemTxt">{userName}님</p>
              <div className="gnbMemMenu">
                <a href="/2025/member/joinStep02.asp">정보수정</a>
                <a href="/2025/member/logout.asp">로그아웃</a>
              </div>
            </div>
          )}
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
                    <li key={i}>
                      <a href={link.url}>{link.text}</a>
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
