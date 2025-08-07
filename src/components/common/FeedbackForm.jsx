import React, { useState } from 'react';

const initialState = {
  interest_grade: '',    // 학년 (radio)
  region: [],            // 대학선택 기준 (checkbox)
  admission: '',         // 2/4년제 (radio)
  lack: [],              // 부족하다고 생각하는 점 (checkbox)
  activeness: '',        // 적극성 (radio)
  academy_criteria: [],  // 학원선택 기준 (checkbox)
  consult: '',           // 상담 경험 (radio)
  location: '',          // 캠퍼스 (radio)
  name: '',              // 이름 (text)
  tel1: '010',           // 전화번호 (select)
  tel2: '',              // 전화번호2 (text)
  tel3: '',              // 전화번호3 (text)
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
    if (!agree) {
      alert("개인정보처리방침에 동의해 주세요.");
      return;
    }
    alert(
      `[신청 정보]
        이름: ${form.name}
        연락처: ${form.tel1}-${form.tel2}-${form.tel3}
        지점: ${form.location}
        학년: ${form.interest_grade}
        대학선택 기준: ${form.region.join(', ')}
        2/4년제: ${form.admission}
        부족하다고 생각하는 점: ${form.lack.join(', ')}
        적극성: ${form.activeness}
        학원선택 기준: ${form.academy_criteria.join(', ')}
        상담 경험: ${form.consult}`
    );
  };

  // 삭제 함수
  const handleDelete = (label, value) => {
  // summary label에 따라 state key 매핑
  const keyMap = {
    "학년": "interest_grade",
    "대학선택 기준": "region",
    "2/4년제": "admission",
    "부족하다고 생각하는 점": "lack",
    "적극성": "activeness",
    "학원선택 기준": "academy_criteria",
    "상담 경험": "consult",
  };
  const key = keyMap[label];
  if (!key) return;
  setForm(prev => ({
    ...prev,
    [key]: Array.isArray(prev[key])
      ? prev[key].filter(v => v !== value)  // checkbox
      : '' // radio, input
  }));
};

  // 선택 내용 요약
  const summary = [
    { label: "학년", value: form.interest_grade },
    { label: "대학선택 기준", value: form.region },  // 배열 (checkbox)
    { label: "2/4년제", value: form.admission },
    { label: "부족하다고 생각하는 점", value: form.lack }, // 배열 (checkbox)
    { label: "적극성", value: form.activeness },
    { label: "학원선택 기준", value: form.academy_criteria }, // 배열 (checkbox)
    { label: "상담 경험", value: form.consult },
  ];

  return (
    <form onSubmit={handleSubmit} className="cont-box">
      <div className="tuitionType02">
        <div className="title">Q. 현재 자녀는 몇학년인가요?</div>
        <ul>
          {['고등학교 1학년', '고등학교 2학년', '고등학교 3학년'].map((grade, i) => (
            <li key={grade}>
              <input
                id={`chk01${i+1}`}
                type="radio"
                name="interest_grade"
                value={grade}
                checked={form.interest_grade === grade}
                onChange={handleChange}
              />
              <label htmlFor={`chk01${i+1}`}>{grade}</label>
            </li>
          ))}
        </ul>

        <div className="title">Q. 대학선택의 기준은 무엇인가요?</div>
        <ul>
          {[
            "위치(통학시간)", "취업률", "가능성 있는 학교"
          ].map((region, i) => (
            <li key={region}>
              <input
                id={`chk02${i+1}`}
                type="checkbox"
                name="region"
                value={region}
                checked={form.region.includes(region)}
                onChange={e => handleCheckbox(e, 'region')}
              />
              <label htmlFor={`chk02${i+1}`}>{region}</label>
            </li>
          ))}
        </ul>

        <div className="title">Q. 2년제와 4년제 중 어디를 입학했으면 하나요?</div>
        <ul>
          {["2년제", "4년제", "상관없음"].map((ad, i) => (
            <li key={ad}>
              <input
                id={`chk03${i+1}`}
                type="radio"
                name="admission"
                value={ad}
                checked={form.admission === ad}
                onChange={handleChange}
              />
              <label htmlFor={`chk03${i+1}`}>{ad}</label>
            </li>
          ))}
        </ul>

        <div className="title">Q. 객관적으로 부족하다고 생각하는 점이 있나요?</div>
        <ul>
          {["외모", "체형", "키", "말투", "표정", "집중력", "자신감", "친화력"].map((lack, i) => (
            <li key={lack}>
              <input
                id={`chk04${i+1}`}
                type="checkbox"
                name="lack"
                value={lack}
                checked={form.lack.includes(lack)}
                onChange={e => handleCheckbox(e, 'lack')}
              />
              <label htmlFor={`chk04${i+1}`}>{lack}</label>
            </li>
          ))}
        </ul>

        <div className="title">Q. 자녀가 항공운항과 입학에 적극적인가요?</div>
        <ul>
          {["부모님만 알아보고 있다.", "부모님/자녀 모두 적극적이다."].map((activeness, i) => (
            <li key={activeness}>
              <input
                id={`chk05${i+1}`}
                type="radio"
                name="activeness"
                value={activeness}
                checked={form.activeness === activeness}
                onChange={handleChange}
              />
              <label htmlFor={`chk05${i+1}`}>{activeness}</label>
            </li>
          ))}
        </ul>

        <div className="title">Q. 학원선택에 있어 가장 중요하게 생각하는 점은?</div>
        <ul>
          {["수강료", "학생관리", "합격률", "커리큘럼", "거리", "인지도", "강사진"].map((ac, i) => (
            <li key={ac}>
              <input
                id={`chk06${i+1}`}
                type="checkbox"
                name="academy_criteria"
                value={ac}
                checked={form.academy_criteria.includes(ac)}
                onChange={e => handleCheckbox(e, 'academy_criteria')}
              />
              <label htmlFor={`chk06${i+1}`}>{ac}</label>
            </li>
          ))}
        </ul>

        <div className="title">Q. 학원 상담 경험이 있으신가요?</div>
        <ul>
          {["네", "아니오"].map((consult, i) => (
            <li key={consult}>
              <input
                id={`chk07${i+1}`}
                type="radio"
                name="consult"
                value={consult}
                checked={form.consult === consult}
                onChange={handleChange}
              />
              <label htmlFor={`chk07${i+1}`}>{consult}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* 캠퍼스/이름/연락처 */}
      <div className="tuition-section">
        <div className="tui-control">
          <div className="tui-tit-point">선택하신 내용을 다시 한번 확인해 주세요.</div>
          <ul className="tuitionHope">
            {summary.map(item =>
                Array.isArray(item.value)
                ? item.value.map(v =>
                    v && (
                        <li key={item.label + v}>
                        <span>{v}</span>
                        <button
                            type="button"
                            onClick={() => handleDelete(item.label, v)}
                            className="delete"
                            aria-label="삭제"
                        ></button>
                        </li>
                    )
                    )
                : item.value && (
                    <li key={item.label}>
                        <span>{item.value}</span>
                        <button
                        type="button"
                        onClick={() => handleDelete(item.label, item.value)}
                        className="delete"
                        aria-label="삭제"
                        ></button>
                    </li>
                    )
            )}
            </ul>
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
