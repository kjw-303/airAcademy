import React from "react";
import tchDefault from "/public/teacher/tch-default.png";

const TeacherPopup = ({ open, teacher, onClose }) => {
  if (!open || !teacher) return null;
  return (
    <>
      <div className="overlay" style={{ display: "block" }} onClick={onClose} />
      <div className="popup" id="popupTch" style={{display:'block'}}>
        <div className="popup-top">
          <p className="poppins">KOREA MASTER CLASS</p>
          <div className="close-btn" onClick={onClose} />
        </div>
        <div id="popup-content">
          <div className="tch-top">
            <div className="logo">
              <img src={teacher.logo} alt={teacher.logoAlt} />
            </div>
            <div>
              <span className="name">{teacher.name}</span> {teacher.job}
            </div>
            <ul className="thumb-txt">
              {teacher.description.map((txt, i) => (
                <li key={i}>{txt}</li>
              ))}
            </ul>
            <div className="tch-img">
              <img
                src={teacher.profileImg ? teacher.profileImg : tchDefault}
                alt={teacher.name}
                onError={e => {
                  e.target.onerror = null; // 무한루프 방지!
                  e.target.src = tchDefault;
                }}
              />
              </div>
          </div>
          <div className="teacher-curri">
            <h4>출신항공사 및 비행경력</h4>
            <ul>
              {teacher.career1 &&
                teacher.career1.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
            <h4>기관 강의 경력</h4>
            <ul>
              {teacher.career2 &&
                teacher.career2.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
            <h4>자격 및 수료</h4>
            <ul>
              {teacher.career3 &&
                teacher.career3.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherPopup;
