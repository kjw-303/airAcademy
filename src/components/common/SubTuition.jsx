import React, { useState } from "react";

// props로 선택 교육과정(selectedCourses) 넘겨줄 수 있음
const SubTuition = ({ selectedCourses = [], setSelectedCourses }) => {
  // 입력값 state 관리
  const [name, setName] = useState("");
  const [phone1, setPhone1] = useState("010");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");
  const [agree, setAgree] = useState(false);

  // 선택된 지점 (추후 select 등으로 추가)
  const [location, setLocation] = useState("");

  // (임시) 제출 이벤트
  const handleSubmit = (e) => {
    e.preventDefault();
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

  // 숫자만 입력되게
  const handleNumberInput = (e) => {
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  };
  // 삭제 함수
  const handleDelete = (course) => {
    setSelectedCourses(selectedCourses.filter(c => c !== course));
  };
  
  return (
    <>
        <section className="write-wr" onSubmit={handleSubmit}>
          <ul className="write-form">
            <li className="width100">
              <div className="tui-tit-point">선택하신 교육과정입니다.</div>
              <ul className="tuitionHope">
                {selectedCourses.length === 0 ? (
                  <li>선택한 과정이 없습니다.</li>
                ) : (
                  selectedCourses.map((c, idx) => <li key={idx}>{c}<button type="button" onClick={() => handleDelete(c)} className="delete" aria-label="삭제"></button></li>)
                )}
              </ul>
            </li>

            <li>
              <div className="tui-tit-point">가까운 지점을 선택해주세요.</div>
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
            </li>
            <li>
              <div className="tui-tit-point">신청하시는 분의 이름과 연락처를 입력해 주세요.</div>
              <div className="inputTxt">
                <div className="input-field">
                  <input
                    type="text"
                    name="name"
                    maxLength={25}
                    title="이름"
                    value={name}
                    placeholder="이름을 입력해 주세요."
                    required
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <ul className="telForm">
                    <li>
                      <select
                        name="handphone1"
                        value={phone1}
                        onChange={e => setPhone1(e.target.value)}
                      >
                        <option value="010">010</option>
                        <option value="011">011</option>
                        <option value="016">016</option>
                        <option value="017">017</option>
                        <option value="018">018</option>
                        <option value="019">019</option>
                      </select>
                    </li>
                    <li>
                      <span className="telBar">-</span>
                    </li>
                    <li>
                      <input
                        name="handphone2"
                        className="phoneInputBar01"
                        type="tel"
                        value={phone2}
                        title="휴대폰 앞 번호"
                        maxLength={4}
                        onKeyDown={handleNumberInput}
                        onChange={e => setPhone2(e.target.value.replace(/[^0-9]/g, ""))}
                        required
                      />
                    </li>
                    <li>
                      <span className="telBar">-</span>
                    </li>
                    <li>
                      <input
                        name="handphone3"
                        className="phoneInputBar02"
                        type="tel"
                        value={phone3}
                        title="휴대폰 뒷 번호"
                        maxLength={4}
                        onKeyDown={handleNumberInput}
                        onChange={e => setPhone3(e.target.value.replace(/[^0-9]/g, ""))}
                        required
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="btn-wrap text-center">
                <button
                  type="submit"
                  className="btnSubmit"
                  style={{ width: "100%", fontSize: "1.6rem" }}
                >
                  간편수강료 조회하기
                </button>
              </div>
            </li>
            <li>
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
            </li>
          </ul>
        </section>
    </>
  );
};

export default SubTuition;
