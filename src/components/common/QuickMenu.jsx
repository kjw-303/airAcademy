import React from "react";
import "../../assets/css/main.css"; // 기존 메인 CSS
// 아이콘 이미지
import quickIcon01 from "../../assets/img/quick_icon01.png";
import quickIcon02 from "../../assets/img/quick_icon02.png";
import quickIcon03 from "../../assets/img/quick_icon03.png";
import quickIcon04 from "../../assets/img/quick_icon04.png";
import quickIcon05 from "../../assets/img/quick_icon05.png";

const QuickMenu = () => {
  const menuItems = [
    {
      label: "수강료조회",
      href: "/prices_vacation",
      icon: quickIcon01,
      bubble: "마감임박!\n선착순 이벤트",
      labelMobile: "수강료조회",
    },
    {
      label: "무료입시컨설팅",
      href: "/online",
      icon: quickIcon02,
      labelMobile: "입시컨설팅",
    },
    {
      label: "학원위치조회",
      href: "/location",
      icon: quickIcon03,
      labelMobile: "위치조회",
    },
    {
      label: "지원가능한대학",
      href: "/searchAirline",
      icon: quickIcon04,
      labelMobile: "지원가능대학",
    },
    {
      label: "카톡상담",
      href: "/kakao",
      icon: quickIcon05,
      labelMobile: "카톡상담",
    },
  ];

  return (
    <section className="section main-quick">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.bubble && <em className="bubble">{item.bubble}</em>}
            <a href={item.href}>
              <div className="icon" style={{ backgroundImage: `url(${item.icon})` }}></div>
              <div className="menu pc-show">{item.label}</div>
              {item.labelMobile && <div className="menu mo-show">{item.labelMobile}</div>}
            </a>
          </li>
        ))}
      </ul>

      <div className="call-box">
        <div className="title">Customer Center</div>
        <div className="call">1588.2095</div>
        <div className="text">주말 공휴일도 상담 및 접수 가능</div>
      </div>
    </section>
  );
};

export default QuickMenu;
