import React, { useState } from "react";
import SubTuition from "./SubTuition";

const tabData = [
  {
    id: "tabCr01",
    title: "4년제",
    details: [
      "한서대학교",
      "중부대학교",
      "극동대학교",
      "호서대학교",
      "한국교통대학교",
      "광주여자대학교",
      "백석대학교",
      "신라대학교",
    ],
  },
  {
    id: "tabCr02",
    title: "2년제",
    details: [
      "인하공업 전문대",
      "수원과학대학교",
      "연성대학교",
      "장안대학교",
      "한국관광대학교",
      "신구대학교",
      "한국영상대학교",
      "서영대학교",
      "두원공과대학교",
      "동서울대학교",
      "대림대학교",
      "강동대학교"
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

  return (
    <div className="container-tuition subTuitionBtm">
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
                        <ul className="tuitionCont on" id={tab.id} key={tab.id}>
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
  );
};

export default TuitionTab;
