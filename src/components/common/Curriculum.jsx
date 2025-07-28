import React from "react";
import "../../assets/css/main.css"; // 기존 스타일 유지

const curriculumData = [
  {
    id: 1,
    link: "/2025/curriculum/curriculum01.asp",
    tag: "Curriculum 01",
    subtitle: "Entrance Examination",
    title: ["항공운항과", "대학입시반"],
    info: [
      { label: "대학", text: "4년제 / 2년제" },
      { label: "대상", text: "고등학교 3학년 학생" },
    ],
  },
  {
    id: 2,
    link: "/2025/curriculum/curriculum02.asp",
    tag: "Curriculum 02",
    subtitle: "Aviation management",
    title: ["항공경영과", "대학입시반"],
    info: [
      { label: "대학", text: "4년제 / 2년제" },
      { label: "대상", text: "고등학교 3학년 학생" },
    ],
  },
  {
    id: 3,
    link: "/2025/curriculum/curriculum03.asp",
    tag: "Curriculum 03",
    subtitle: "Reserve Stewardess",
    title: ["고1 & 고2", "집중반"],
    info: [
      { label: "대학", text: "4년제 / 2년제" },
      { label: "대상", text: "고등학교 1학년 & 2학년 학생" },
    ],
  },
  {
    id: 4,
    link: "/2025/curriculum/curriculum04.asp",
    tag: "Curriculum 04",
    subtitle: "Short-Term Class",
    title: ["수시, 정시", "집중대비반"],
    info: [
      { label: "대학", text: "4년제 / 2년제" },
      { label: "대상", text: "고등학교 3학년 학생" },
    ],
  },
];

const Curriculum = () => {
  return (
    <section className="section main-curri">
      <div className="wrap">
        <div className="cont-box">
          <ul className="curri-list">
            {curriculumData.map((item) => (
              <li key={item.id}>
                <a href={item.link}>
                  <em>{item.tag}</em>
                  <div className="curri-box">
                    <span>{item.subtitle}</span>
                    <h4>
                      {item.title[0]}
                      <br />
                      {item.title[1]}
                    </h4>
                    {item.info.map((infoItem, idx) => (
                      <div key={idx}>
                        <strong>{infoItem.label}</strong>
                        {infoItem.text}
                      </div>
                    ))}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="title-box">
          <h2>Curriculum</h2>
          <p>
            매년 변화하는 면접트렌드 분석을 통한
            <br />
            체계적인 항공운항과 입시전략
          </p>
          <a href="/2025/customer/online.asp" className="link-btn">
            무료 입시상담 신청하기<span className="arrow"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
