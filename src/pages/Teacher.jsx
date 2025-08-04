import React, { useState } from "react";
import GNB from "../components/common/Gnb";
import { teacherList } from "../data/teacherList";
import TeacherPopup from "../components/common/TeacherPopup";
import Facility from "../components/common/Facility";
import Footer from "../components/common/Footer";
import TuitionForm from "../components/common/TuitionForm";

const TeacherSection = () => {
  const [campus, setCampus] = useState("gangnam");
  const [popupTeacher, setPopupTeacher] = useState(null);

  // 캠퍼스 필터링
  const teachers = teacherList.filter(t => t.campus === campus);

  return (
    <>
    <GNB isLogin={false} isMain={false} activeCampus="gangnam"/>
    <div className="academy-main sub-pt">
      <div className="sub-title-area">
        <div className="text01">Korea Master Class</div>
        <h3>코리아만의 국가대표급 라인업</h3>
        <div className="text02">
          코리아항공운항과학원에서 엄격한 기준으로 강사진을 선발, 강사의 강의력과<br />
          수강생의 만족도로만 평가하며 분야별 전임 강사제도를 도입해 운영하고 있습니다.
        </div>
      </div>
      {/* 캠퍼스 버튼 */}
      <div className="teacher-list">
        <div className="location-filter">
            <button
            type="button"
            data-campus="gangnam"
            className={campus === "gangnam" ? "on" : ""}
            onClick={() => setCampus("gangnam")}
            >
            강남캠퍼스
            </button>
            <button
            type="button"
            data-campus="busan"
            className={campus === "busan" ? "on" : ""}
            onClick={() => setCampus("busan")}
            >
            부산캠퍼스
            </button>
        </div>
        {/* 강사 리스트 */}
        <div className="teacher-info" data-campus={campus}>
            <ul>
            {teachers.map(teacher => (
                <li
                key={teacher.id}
                data-id={teacher.id}
                className={`${teacher.id} tch-item ${teacher.isDefault ? "tch-default" : ""}`}
                onClick={() => setPopupTeacher(teacher)}
                >
                <div className={`logo ${teacher.logoAlt.replace(/\s/g, "").toLowerCase()}`}>
                    <img src={teacher.logo} alt={teacher.logoAlt} />
                </div>
                <div className="name">
                    <div>{teacher.name}</div>
                    <div className="job">{teacher.job}</div>
                </div>
                <div className="discription">
                    {teacher.description.map((d, i) => (
                    <React.Fragment key={i}>{d}<br /></React.Fragment>
                    ))}
                </div>
                </li>
            ))}
            </ul>
        </div>
      </div>
      {/* 시설 사진 */}
      <Facility isMain={false}/>
      {/* 수강료 조회 */}
      <TuitionForm/>
      {/* 푸터 */}
      <Footer/>
      {/* 팝업 */}
      <TeacherPopup open={!!popupTeacher} teacher={popupTeacher} onClose={() => setPopupTeacher(null)} />
    </div>
    </>
  );
};

export default TeacherSection;
