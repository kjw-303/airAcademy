import React, { useState } from 'react';

const initialState = {
  interest_grade: '', // 학년 (radio)
  region: [],         // 지역 (checkbox)
  admission: [],      // 입학전형 (checkbox)
  interest_height: '',// 키 (radio)
  weight: [],         // 체중 (checkbox)
  disease: [],        // 질병/장애 (checkbox)
  score: [],          // 내신점수 (checkbox)
  toeic: [],          // 토익점수 (checkbox)
  language: [],       // 제2외국어 (checkbox)
  abroad: '',         // 어학연수 (radio)
  university: '',     // 대학선택 (radio)
  worry: [],          // 핵심고민 (checkbox)
  location: '',       // 캠퍼스 (radio)
  name: '',           // 이름 (text)
  tel1: '010',        // 전화번호 (select)
  tel2: '',           // 전화번호2 (text)
  tel3: '',           // 전화번호3 (text)
};

function FormComponent() {
  const [form, setForm] = useState(initialState);
  const [agree, setAgree] = useState(false);

  // 체크박스 선택/해제
  const handleCheckbox = (e, key) => {
    const { value, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [key]: checked
        ? [...prev[key], value]
        : prev[key].filter(v => v !== value)
    }));
  };

  // 라디오 및 일반 인풋
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
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
    <form onSubmit={handleSubmit} className="cont-box">
      <div className="tuitionType02">
        <div className="title">Q. 현재 몇학년이신가요?</div>
        <ul>
          {['고등학교1학년', '고등학교2학년', '고등학교3학년'].map((grade, i) => (
            <li key={grade}>
              <input
                id={`chk01${i+1}`}
                type="radio"
                name="interest_grade"
                value={`<b>[학년]</b> ${grade}`}
                checked={form.interest_grade === `<b>[학년]</b> ${grade}`}
                onChange={handleChange}
              />
              <label htmlFor={`chk01${i+1}`}>{grade.replace('고등학교','고등학교 ')}</label>
            </li>
          ))}
        </ul>

        <div className="title">Q. 현재 거주하고 계시는 지역은 어디인가요?</div>
        <ul>
          {[
            { label: "국내(수도권)", value: "<b>[지역]</b> 국내(수도권)" },
            { label: "국내(지방)", value: "<b>[지역]</b> 국내(수지방도권)" },
            { label: "해외(기타)", value: "<b>[지역]</b> 해외(기타)" }
          ].map((region, i) => (
            <li key={region.value}>
              <input
                id={`chk02${i+1}`}
                type="checkbox"
                name="region"
                value={region.value}
                checked={form.region.includes(region.value)}
                onChange={e => handleCheckbox(e, 'region')}
              />
              <label htmlFor={`chk02${i+1}`}>{region.label}</label>
            </li>
          ))}
        </ul>

        <div className="title">Q. 입학전형을 선택해주세요.</div>
        <ul>
          {[
            { label: "일반고/자율고(구)인문계", value: "<b>[입학전형]</b> 인문계" },
            { label: "특목고/특성화고(구)전문계", value: "<b>[입학전형]</b> 전문계" },
            { label: "농어촌", value: "<b>[입학전형]</b> 농어촌" },
            { label: "수급자 및 차상위", value: "<b>[입학전형]</b> 수급자 및 차상위" },
            { label: "검정고시", value: "<b>[입학전형]</b> 검정고시" }
          ].map((ad, i) => (
            <li key={ad.value}>
              <input
                id={`chk03${i+1}`}
                type="checkbox"
                name="admission"
                value={ad.value}
                checked={form.admission.includes(ad.value)}
                onChange={e => handleCheckbox(e, 'admission')}
              />
              <label htmlFor={`chk03${i+1}`}>{ad.label}</label>
            </li>
          ))}
        </ul>

        <div className="title">Q. 신체조건을 선택해주세요.(키)</div>
        <ul>
          {["160cm 이하", "160cm 이상", "165cm 이상", "170cm 이상"].map((height, i) => (
            <li key={height}>
              <input
                id={`chk04${i+1}`}
                type="radio"
                name="interest_height"
                value={`<b>[키]</b> ${height}`}
                checked={form.interest_height === `<b>[키]</b> ${height}`}
                onChange={handleChange}
              />
              <label htmlFor={`chk04${i+1}`}>{height}</label>
            </li>
          ))}
        </ul>

        <div className="title">Q. 신체조건을 선택해주세요.(체중)</div>
        <ul>
          {["적정체중", "과체중", "저체중"].map((weight, i) => (
            <li key={weight}>
              <input
                id={`chk05${i+1}`}
                type="checkbox"
                name="weight"
                value={`<b>[체중]</b> ${weight}`}
                checked={form.weight.includes(`<b>[체중]</b> ${weight}`)}
                onChange={e => handleCheckbox(e, 'weight')}
              />
              <label htmlFor={`chk05${i+1}`}>{weight}</label>
            </li>
          ))}
        </ul>

        <div className="title">Q. 신체조건을 선택해주세요.(질병 및 장애)</div>
        <ul>
          {["없음", "질병", "장애"].map((d, i) => (
            <li key={d}>
              <input
                id={`chk06${i+1}`}
                type="checkbox"
                name="disease"
                value={`<b>[질병/장애]</b> ${d}`}
                checked={form.disease.includes(`<b>[질병/장애]</b> ${d}`)}
                onChange={e => handleCheckbox(e, 'disease')}
              />
              <label htmlFor={`chk06${i+1}`}>{d}</label>
            </li>
          ))}
        </ul>

        <div className="title">Q. 내신점수를 선택해주세요.</div>
        <ul>
          {["1~2등급", "3~4등급", "5~6등급", "7~8등급", "8~9등급"].map((score, i) => (
            <li key={score}>
              <input
                id={`chk07${i+1}`}
                type="checkbox"
                name="score"
                value={`<b>[내신점수]</b> ${score}`}
                checked={form.score.includes(`<b>[내신점수]</b> ${score}`)}
                onChange={e => handleCheckbox(e, 'score')}
              />
              <label htmlFor={`chk07${i+1}`}>{score}</label>
            </li>
          ))}
        </ul>

        <div className="title">Q. 토익점수를 선택해주세요.</div>
        <ul>
          {["600점 이하", "600점 이상", "700점 이상", "800점 이상", "900점 이상"].map((toeic, i) => (
            <li key={toeic}>
              <input
                id={`chk08${i+1}`}
                type="checkbox"
                name="toeic"
                value={`<b>[토익점수]</b> ${toeic}`}
                checked={form.toeic.includes(`<b>[토익점수]</b> ${toeic}`)}
                onChange={e => handleCheckbox(e, 'toeic')}
              />
              <label htmlFor={`chk08${i+1}`}>{toeic}</label>
            </li>
          ))}
        </ul>

        <div className="title">Q. 제2외국어를 선택해주세요.</div>
        <ul>
          {["중국어", "일본어"].map((lang, i) => (
            <li key={lang}>
              <input
                id={`chk09${i+1}`}
                type="checkbox"
                name="language"
                value={`<b>[제2외국어]</b> ${lang}`}
                checked={form.language.includes(`<b>[제2외국어]</b> ${lang}`)}
                onChange={e => handleCheckbox(e, 'language')}
              />
              <label htmlFor={`chk09${i+1}`}>{lang}</label>
            </li>
          ))}
        </ul>

        <div className="title">Q. 어학연수 여부를 선택해주세요.</div>
        <ul>
          {["없음", "6개월이하", "6개월이상", "1년이상", "2년이상"].map((abroad, i) => (
            <li key={abroad}>
              <input
                id={`chk10${i+1}`}
                type="radio"
                name="abroad"
                value={`<b>[어학연수]</b> ${abroad}`}
                checked={form.abroad === `<b>[어학연수]</b> ${abroad}`}
                onChange={handleChange}
              />
              <label htmlFor={`chk10${i+1}`}>{abroad}</label>
            </li>
          ))}
        </ul>

        <div className="title">Q. 2년제와 4년제 중 어디를 입학했으면 하나요?</div>
        <ul>
          {["2년제", "4년제", "상관없음"].map((uni, i) => (
            <li key={uni}>
              <input
                id={`chk11${i+1}`}
                type="radio"
                name="university"
                value={`<b>[대학선택]</b> ${uni}`}
                checked={form.university === `<b>[대학선택]</b> ${uni}`}
                onChange={handleChange}
              />
              <label htmlFor={`chk11${i+1}`}>{uni}</label>
            </li>
          ))}
        </ul>

        <div className="title">Q. 입시준비에 있어 가장 큰 고민은 어떤건가요?</div>
        <ul>
          {["신체조건", "내신", "진로 미확정", "이미지", "면접준비"].map((worry, i) => (
            <li key={worry}>
              <input
                id={`chk12${i+1}`}
                type="checkbox"
                name="worry"
                value={`<b>[핵심고민]</b> ${worry}`}
                checked={form.worry.includes(`<b>[핵심고민]</b> ${worry}`)}
                onChange={e => handleCheckbox(e, 'worry')}
              />
              <label htmlFor={`chk12${i+1}`}>{worry}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* 캠퍼스/이름/연락처 */}
      <div className="tuition-section">
        <div className="tui-control">
          <div className="tui-tit-point">선택하신 내용을 다시 한번 확인해 주세요.</div>
          {/* 여기에 선택한 내용을 요약해서 보여줄 수 있음 */}
        </div>
        <div className="write-wr">
          <ul className="write-form">
            <li>
              <div className="tui-tit-point">가까운 지점을 선택해주세요.</div>
              <div className="input-field">
                <ul className="radioList tui-local-check">
                  {["항공운항(강남)", "항공운항(부산)"].map((loc, i) => (
                    <li key={loc}>
                      <input
                        id={`location${i}`}
                        name="location"
                        type="radio"
                        value={loc}
                        checked={form.location === loc}
                        onChange={handleChange}
                      />
                      <label htmlFor={`location${i}`}>{loc.includes("강남") ? "강남캠퍼스" : "부산캠퍼스"}</label>
                    </li>
                  ))}
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
                    maxLength="15"
                    placeholder="이름"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-field">
                  <ul className="telForm">
                    <li>
                      <select name="tel1" value={form.tel1} onChange={handleChange}>
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
                        maxLength="4"
                        value={form.tel2}
                        onChange={handleChange}
                        placeholder="0000"
                      />
                    </li>
                    <li><span className="telBar">-</span></li>
                    <li>
                      <input
                        type="tel"
                        name="tel3"
                        maxLength="4"
                        value={form.tel3}
                        onChange={handleChange}
                        placeholder="0000"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <div className="btn-wrap text-center">
            <button type="submit" className="button" style={{ width: "100%", fontSize: "1.6rem" }}>
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
  );
}

export default FormComponent;
