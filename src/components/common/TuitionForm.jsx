import React, { useState } from "react";
import SubTuition from "./SubTuition";

const tabData = [
  {
    id: "tabCr01",
    title: "코리아 이벤트",
    details: [
      "26년 입시트렌드 분석 특강",
      "승무원 직업체험 강의 (선착순)",
      "친구할인 이벤트",
    ],
  },
  {
    id: "tabCr02",
    title: "2025 시즌클래스",
    details: [
      "고3 항공과 26학번 집중반",
      "고2 항공과입시 정규반",
      "고1 생기부/면접 모두완성반",
    ],
  },
  {
    id: "tabCr03",
    title: "고3 집중클래스",
    details: [
      "고3 항공과 입시정규반",
      "고3 수시집중 대비반",
      "고3 등급별 집중클래스",
    ],
  },
  {
    id: "tabCr04",
    title: "항공과 고1/고2 집중반",
    details: [
      "고3 항공과 입시정규반",
      "고3 수시집중 대비반",
    ],
  },
  {
    id: "tabCr05",
    title: "서비스학부 입시정규반",
    details: [
      "항공경영과 입시대비반",
      "호텔학과 입시대비반",
      "비서학과 입시대비반",
      "관광학과 입시대비반",
    ],
  },
  {
    id: "tabCr06",
    title: "에브리데이 어학과정",
    details: [
      "입시대비 에브리데이 어학 스펙업과정",
      "TOEIC 매일반",
    ],
  },
];

const TuitionTab = () => {
  const [activeTab, setActiveTab] = useState("tabCr01");
  // 선택된 세부 과정 체크박스 관리 (선택사항)
  const [checkedItems, setCheckedItems] = useState([]);

  // 체크박스 토글 함수 (필요에 따라 구현)
  const handleCheckbox = (value) => {
    setCheckedItems((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="mo-stuition-btn mo-show"  onClick={() => setOpen(true)}>빠른 수강료 조회</div>
    <div className={`container-tuition subTuitionBtm${open ? " open" : ""}`}>
      <div className="subTuitionTitle mo-show">
        <h3>빠른 수강료 조회</h3>
        <p>빠르고 간편하게 관심있는 교육과정의 수강료를 조회할 수 있습니다.</p>
        <button type="button" className="qckClose" onClick={() => setOpen(false)}></button>
      </div>
      <form name="subTuitionForm" method="post" onSubmit={e => e.preventDefault()}> 
        <div className="tuition-section">
          <div className="tui-control">
              <div className="tui-tit-point">
                  Step1. 찾고자 하는 학과를 먼저 선택 해주세요.
              </div>
              <ul className="tuitionTap">
                  {tabData.map((tab) => (
                  <li
                      key={tab.id}
                      data-curri-tab={tab.id}
                      className={activeTab === tab.id ? "active" : ""}
                      onClick={() => setActiveTab(tab.id)}
                  >
                      <a href="#!" onClick={e => e.preventDefault()}>{tab.title}</a>
                  </li>
                  ))}
              </ul>
              <div className="tui-tit-point">
                  Step2. 세부 교육과정을 선택해주세요.
              </div>
              <div className="tuitionContWrap">
                  {tabData.map(
                  (tab) =>
                      tab.id === activeTab && (
                      <ul className="tuitionCont" id={tab.id} key={tab.id}>
                          {tab.details.map((detail, idx) => (
                          <li key={idx}>
                              <input
                              type="checkbox"
                              id={`chk${tab.id}${idx}`}
                              checked={checkedItems.includes(detail)}
                              onChange={() => handleCheckbox(detail)}
                              />
                              <label htmlFor={`chk${tab.id}${idx}`}>{detail}</label>
                          </li>
                          ))}
                      </ul>
                      )
                  )}
              </div>
          </div>
          {/* subTuition */}
          <SubTuition selectedCourses={checkedItems} setSelectedCourses={setCheckedItems}/>
        </div>
      </form>
    </div>
    </>
  );
};

export default TuitionTab;
