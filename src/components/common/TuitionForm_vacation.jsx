import React, { useState } from "react";

const COURSE_LIST = {
  busan: [
    "승무원진로체험 승무원은 어떤 직업일까? 체험하고 알아보자!",
    "합격자분석특강 항공과 주요대학 어떤사람이 합격했을까?",
    "예비고3 특강 항공과입시 합격트렌드 및 전략",
    "고1,고2 특강 생기부부터 면접까지!"
  ],
  gangnam: [
    "고3 항공과 입시대비반(새학기특강)",
    "예비고3 합격스파르타반(새학기특강)",
    "고1,고2 인하공전/한서대반(새학기특강)",
    "예비고1 생기부/면접반(새학기특강)"
  ]
};

const BRANCH_LIST = [
  { label: "강남캠퍼스", value: "gangnam" },
  { label: "부산캠퍼스", value: "busan" }
];

const TuitionForm = ({ campus = "gangnam" }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  // 선택된 지점 (추후 select 등으로 추가)
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [tel1, setTel1] = useState("010");
  const [tel2, setTel2] = useState("");
  const [tel3, setTel3] = useState("");
  const [agree, setAgree] = useState(false);

  // 과정 선택 체크박스 핸들러
  const handleCourseChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCourses((prev) =>
      checked ? [...prev, value] : prev.filter((c) => c !== value)
    );
  };
  // 삭제 함수
  const handleDelete = (course) => {
    setSelectedCourses(selectedCourses.filter(c => c !== course));
  };
  // 폼 제출
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 데이터 전송 (API 또는 form action)
    alert(
      `[신청 정보]\n이름: ${name}\n연락처: ${tel1}-${tel2}-${tel3}\n지점: ${selectedBranch}\n과정: ${selectedCourses.join(", ")}`
    );
    if (!agree) {
      alert("개인정보처리방침에 동의해 주세요.");
      return;
    }
    // 실제로는 서버로 전달하거나 처리
    alert(
      `이름: ${name}\n연락처: ${phone1}-${phone2}-${phone3}\n교육과정: ${selectedCourses.join(
        ", "
      )}\n지점: ${location}`
    );
  };

  return (
    <div className="cont-box">
      <form onSubmit={handleSubmit} autoComplete="off">
        <input type="hidden" name="typ" value="write" />
        <input type="hidden" name="mode" value="BB002" />
        <input type="hidden" name="imsi_title" value="새학기특강조회" />
        <div className="tuition-section">
          <div className="tui-control">
            <div className="tui-tit-point">Step1. 관심있는 교육과정을 선택해주세요.</div>
            <div className="tuitionContWrap">
              <ul className="tuitionCont on">
                {COURSE_LIST[campus].map((c, i) => (
                  <li key={i}>
                    <input
                      id={`chk${i + 1}`}
                      type="checkbox"
                      name="interest"
                      value={c}
                      checked={selectedCourses.includes(c)}
                      onChange={handleCourseChange}
                    />
                    <label htmlFor={`chk${i + 1}`}>{c}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="write-wr">
            <ul className="write-form">
              <li>
                <div className="tui-tit-point">선택하신 교육과정입니다.</div>
                <div>
                  <ul className="tuitionHope">
                    {selectedCourses.length === 0 ? (
                    <li>선택한 과정이 없습니다.</li>
                    ) : (
                    selectedCourses.map((c, idx) => <li key={idx}>{c}<button type="button" onClick={() => handleDelete(c)} className="delete" aria-label="삭제"></button></li>)
                    )}
                  </ul>
                  <input type="hidden" name="content" value={selectedCourses.join(", ")} />
                </div>
              </li>
              <li>
                <div className="tui-tit-point">가까운 지점을 선택해주세요.</div>
                <div className="input-field">
                    <ul id="r_div_sec" className="radioList tui-local-check">
                        <li>
                            <input
                                id="location0"
                                name="location"
                                type="radio"
                                value="항공운항(강남)"
                                checked={location === "항공운항(강남)"}
                                onChange={e => setLocation(e.target.value)}
                            />
                            <label htmlFor="location0">강남캠퍼스</label>
                        </li>
                        <li>
                            <input
                                id="location1"
                                name="location"
                                type="radio"
                                value="항공운항(부산)"
                                checked={location === "항공운항(부산)"}
                                onChange={e => setLocation(e.target.value)}
                            />
                            <label htmlFor="location1">부산캠퍼스</label>
                        </li>
                    </ul>
                </div>
              </li>
              <li>
                <div className="tui-tit-point">신청하시는 분의 이름과 연락처를 입력해 주세요.</div>
                <div className="inputTxt">
                  <div className="input-field">
                    <input
                      type="text"
                      name="name"
                      maxLength={15}
                      placeholder="이름"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <ul className="telForm">
                      <li>
                        <select
                          name="tel1"
                          value={tel1}
                          onChange={e => setTel1(e.target.value)}
                        >
                          <option>010</option>
                          <option>011</option>
                          <option>016</option>
                          <option>017</option>
                          <option>019</option>
                        </select>
                      </li>
                      <li><span className="telBar">-</span></li>
                      <li>
                        <input
                          type="tel"
                          name="tel2"
                          maxLength={4}
                          value={tel2}
                          onChange={e => setTel2(e.target.value.replace(/\D/g, ""))}
                          required
                        />
                      </li>
                      <li><span className="telBar">-</span></li>
                      <li>
                        <input
                          type="tel"
                          name="tel3"
                          maxLength={4}
                          value={tel3}
                          onChange={e => setTel3(e.target.value.replace(/\D/g, ""))}
                          required
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <div className="btn-wrap text-center">
              <button className="button" type="submit" style={{ width: "100%", fontSize: "1.6rem" }}>
                수강료 조회하기
              </button>
            </div>
            <div className="privacyAgree">
                <div className="wCheckWrap">
                <label htmlFor="w_check" className="formCheck">
                    <input
                    type="checkbox"
                    name="chkAgree"
                    id="w_check"
                    checked={agree}
                    onChange={e => setAgree(e.target.checked)}
                    required
                    />
                    <u>개인정보처리방침에 동의</u>
                </label>
                </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TuitionForm;
