import React, { useRef } from 'react';
import GNB from "../components/common/Gnb";
import TeacherSlider from "../components/common/TeacherSlider";
import Facility from "../components/common/Facility";
import TuitionForm from "../components/common/TuitionForm";
import Footer from "../components/common/Footer";
import loginIcon01 from "../assets/img/login_icon01.png";
import loginIcon02 from "../assets/img/login_icon02.png";
import loginIcon03 from "../assets/img/login_icon03.png";
import loginIcon04 from "../assets/img/login_icon04.png";

const login = () => {
  const formRef = useRef(null);

  // input refs
  const userIdRef = useRef(null);
  const pwdRef = useRef(null);

  // 로그인 유효성 검사
  const checkLogin = (e) => {
    e.preventDefault();
    const userid = userIdRef.current.value.trim();
    const pwd = pwdRef.current.value.trim();

    if (!userid) {
      alert("아이디를 입력하세요.");
      userIdRef.current.focus();
      return;
    }
    if (!pwd) {
      alert("비밀번호를 입력하세요.");
      pwdRef.current.focus();
      return;
    }
    // TODO: 로그인 처리 (fetch/axios 등 백엔드 연동)
    alert("로그인 요청: " + userid + " / " + pwd);
    }
    
    return (
      <div id="wrap" className="sub login member">
      <GNB isMain={false} />
      <div className="sub-pt">
        <div className="sub-title-area">
          <div className="text01">Login</div>
          <h3>로그인</h3>
          <div className="text02">
            아직 코리아항공운항과학원 회원이 아니신가요?
            <br />
            로그인하고 항공운항과 면접지원부터 가이드북까지 받아보세요.
          </div>
        </div>
        <div className="cont-box">
          <div className="txt-box">
            <div className="item">
              <em>
                <img src={loginIcon01} alt="" />
              </em>
              <div className="txts">
                <div>운항과 입시소식</div>
                <p>매해 변경되는 입시소식을 실시간으로 제공해드립니다.</p>
              </div>
            </div>
            <div className="item">
              <em>
                <img src={loginIcon02} alt="" />
              </em>
              <div className="txts">
                <div>무료 입시 가이드북 제공</div>
                <p>항공운항과 대학입시 필수 가이드북을 무료로 제공해드립니다.</p>
              </div>
            </div>
            <div className="item">
              <em>
                <img src={loginIcon03} alt="" />
              </em>
              <div className="txts">
                <div>오프라인 무료특강</div>
                <p>자소서 오프라인 무료 특강 등 각종 무료특강 참여기획를 드립니다.</p>
              </div>
            </div>
            <div className="item">
              <em>
                <img src={loginIcon04} alt="" />
              </em>
              <div className="txts">
                <div>운항과 입시설명회</div>
                <p>수시로 진행되는 입시설명회 참가자격을 드립니다.</p>
              </div>
            </div>
          </div>
          <div className="login-box">
            <form ref={formRef} onSubmit={checkLogin} autoComplete="off">
              <div className="login-area">
                <ul>
                  <li>
                    <label htmlFor="userid">아이디를 입력해주세요.</label>
                    <input
                      type="text"
                      id="userid"
                      name="userid"
                      tabIndex={1}
                      title="아이디를 입력하세요"
                      placeholder="아이디를 입력하세요"
                      ref={userIdRef}
                    />
                  </li>
                  <li>
                    <label htmlFor="pwd">비밀번호를 입력해주세요.</label>
                    <input
                      type="password"
                      id="pwd"
                      name="pwd"
                      tabIndex={2}
                      title="비밀번호를 입력하세요"
                      placeholder="비밀번호를 입력하세요"
                      ref={pwdRef}
                    />
                  </li>
                  <li>
                    <a type="submit" className="btnType01">
                      로그인
                    </a>
                  </li>
                </ul>
              </div>
            </form>
            <ul className="login-btm-btn">
              <li>
                <a href="/join" className="">
                  회원가입
                </a>
              </li>
              <li>
                <a href="/idpwSearch" className="">
                  아이디/비밀번호찾기
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        {/* 강사진 슬라이더 */}
        <TeacherSlider />

        {/* 시설 슬라이더 */}
        <div className=''>
        <Facility />
        </div>

        {/* 간편수강료 조회 */}
        <TuitionForm />

        {/* 푸터 */}
        <Footer />
    </div>
    );
};


export default login;