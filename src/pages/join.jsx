import React, { useState } from "react";
import GNB from "../components/common/Gnb";
import Footer from "../components/common/Footer";

const join = ({ campusName = "코리아항공운항과학원" }) => {
    
    const [chk1, setChk1] = useState(false);
    const [chk2, setChk2] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!chk1) {
        alert("서비스 이용약관에 동의하세요.");
        return;
        }
        if (!chk2) {
        alert("개인정보 수집 및 이용에 동의하세요.");
        return;
        }
        // TODO: 다음 회원가입 단계로 이동
        alert("약관동의 완료! (여기서 회원가입 2단계로 이동)");
        // 예시: window.location.href = "/joinStep02";
        // 또는, props.onNextStep() 등으로 페이지 전환 처리
    };

    return (
        <div id="wrap" className="sub join member">
            <GNB isMain={false} />
            <div className="sub-pt">
                <div className="sub-title-area">
                    <div className="text01">Member Join</div>
                    <h3>회원가입</h3>
                    <div className="text02">
                        아직 {campusName} 회원이 아니신가요?
                        <br />
                        무료 회원가입만으로도 {campusName}만의 특별한 혜택을 받으실 수 있습니다.
                    </div>
                </div>
                <div className="cont-box">
                {/* 회원가입STEP 이미지 */}
                <img src="/src/assets/img/member_step01.jpg" alt="" className="joinStep" />

                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="mtype" value="" />

                    <h4 className="joinPrivacyTitle">이용약관 동의</h4>
                    <div className="joinPrivacy">
                    <div className="joinPrivacyCont">
                        <p>
                        정확한 정보를 입력하시면, 편리한 서비스가 기다립니다.
                        <br />
                        {campusName}은 대한민국 헌법에 보장된 '사생활의 비밀과 자유 및 통신의 비밀 보장'을 위해 개인 정보 및 사생활에 대한 추적을 금지하고 있습니다.
                        <br />
                        그러나 일부 부도덕한 사람들의 불법행위로 인해 발생할지도 모르는 사생활 위협을 막고, 회원의 개인정보를 적극적으로 보호하며, 동시에 회원에게 보다 적절한 서비스를 제공하기 위해 {campusName}은 다음과 같은 개인정보 보호 정책을 적용하고 있습니다.
                        <br />
                        이는, 정보통신부에서 지정한 개인정보 보호지침 제 7조에 의거한 것으로 아래와 같이 명시합니다.
                        <br />
                        <br />
                        ⊙ 본 개인정보 보호정책은 정부의 관련법률 및 지침의 변경과 {campusName} 정책 변화에 따라 변경될 수 있습니다.
                        <br />
                        ⊙ 본 보호기준의 전문은 {campusName} 개인정보 보호정책' 항목에서 방문 시 언제라도 열람하실 수 있도록 하고 있으므로, 방문하실 때 수시로 확인해 보시기 바랍니다.
                        <br />
                        {campusName} 홈페이지에서는 정보통신망이용촉진등에 관한 법률을 비롯한 모든 관련 법규를 준수하며 다음과 같은 원칙을 실천하고 있습니다.
                        </p>
                        <h2>&gt; 개인정보 수집의 종류와 이용목적</h2>
                        <p>
                        {campusName}에서 수집하는 정보로는 기본적인 서비스제공을 위한 필수정보와 회원 각각의 기호와 필요에 맞는 서비스를 제공하기 위한 선택정보가 있습니다. 필수정보는 기본적인 서비스제공을 위하여 반드시 수집해야 하는 최소한의 정보로서 이름, 주민등록번호, 아이디, 패스워드, 주소, 일반전화번호, 이동전화번호, E-mail주소 및 기타 회사가 필요하다고 인정되는 사항이 해당됩니다.
                        <br />
                        {campusName}에서 수집하는 모든 회원정보는 {campusName}에서 서비스 제공 이외의 다른 목적으로는 사용되지 않습니다.
                        <br />
                        </p>

                        <h2>&gt; 개인정보의 열람/정정방법과 절차</h2>
                        <p>
                        {campusName}에서 회원님은 언제든지 등록되어 있는 자신의 개인정보를 열람 및 수정하실 수 있습니다. 홈페이지 초기화면의 개인정보관리 내에 있는 웹 회원 정보조회/변경을 통해 회원님의 주소, 연락처, 패스워드 등을 열람, 변경하실 수 있습니다. 또한 이메일로 문의하시면 상담원을 통해 자신의 개인정보를 열람, 변경할 수 있습니다. ID 변경은 회원 탈퇴 후 재가입하는 방법으로 변경하시면 됩니다.
                        </p>

                        <h2>&gt; 동의 철회 방법과 절차</h2>
                        <p>
                        {campusName}회원님은 회원탈퇴를 통해 홈페이지에 제공한 개인정보이용에 관한 동의를 철회할 수 있습니다. 탈퇴를 원하시는 회원님께서는 초기화면의 개인정보관리 내에 있는 웹 회원 탈퇴를 통해 해지신청이 가능합니다.
                        </p>

                        <h2>&gt; 정보 보유기간과 이용기간</h2>
                        <p>
                        {campusName}회원으로서 {campusName}에서 제공하는 서비스를 받는 동안 회원님의 개인정보는 서비스 제공을 위하여 이용하게 됩니다. 그러나, {campusName}홈페이지의 회원님이 회원탈퇴를 요청하거나 위에서 설명한 개인정보를 수집한 목적과 이용요금 등의 결재가 완료된 경우 수집된 개인의 정보가 열람 또는 이용될 수 없도록 처리됩니다.
                        </p>

                        <h2>&gt; 쿠키(Cookie)의 운용 및 활용</h2>
                        <p>
                        쿠키(Cookie)는 이용자 사이트에 대한 기본 설정 정보를 보관하기 위하여 웹 사이트가 이용자의 컴퓨터 브라우저로 전송하는 소량의 정보입니다. 이용자가 웹사이트에 접속을 하면 서비스 제공자의 컴퓨터는 이용자의 브라우저에 있는 내용을 읽고, 이용자의 추가정보를 자신의 컴퓨터에서 찾아 접속에 따른 성명 등의 추가 입력 없이 서비스를 제공할 수 있습니다. 기본적으로 쿠키는 사용자의 컴퓨터는 식별하지만 사용자를 개인적으로 식별하지는 않습니다. 또한 이용자는 쿠키에 대한 선택권을 가질 수 있습니다. 브라우저의 보안 옵션을 조정함으로써 모든 쿠키를 다 받아들이거나, 쿠키가 설치될 때 통지를 보내도록 하거나, 아니면 모든 쿠키를 거부할 수 있는 선택권을 가집니다. 다만, 쿠키설정을 거부할 경우 쿠키설정을 요하는 웹사이트에서 서비스를 받을 수 없는 경우가 발생 할 수 있습니다.
                        </p>

                        <h2>&gt; 기타 개인정보보호 관련 사항</h2>
                        <p>
                        온라인 상(게시판이나 e-mail 등)에서 귀하가 자발적으로 제공하는 개인정보는 다른 사람들이 수집하여 사용할 수 있음을 유념하셔야 합니다. 다시 말해, 공개적으로 접속할 수 있는 온라인상에서 개인정보를 게재하는 경우 원치 않는 메시지를 답장으로 받게 될 수 있습니다.
                        <br />
                        ID 및 비밀번호에 대한 관리책임은 이용고객에게 있습니다. 따라서 온라인상에 접속해 있을 때에는 각별히 주의를 하시기 바랍니다. 또한 다른 사람이 추측할 수 있는 쉬운 비밀번호는 사용을 피하시기를 권장하며, 정기적으로 비밀번호를 변경하시는 것이 바람직합니다. 특히, 공동으로 사용하는 PC에서 저희 홈페이지를 접속하여 로그인 한 상태에서 다른 사이트로 이동하는 경우, 서비스 이용을 종료하는 경우에는 반드시 로그아웃 처리 후 해당 홈페이지를 종료하시기 바랍니다. 그렇지 않을 경우, 해당 브라우저를 통해 ID, 비밀번호 등 고객님의 정보가 타인에게 쉽게 유출될 위험이 있습니다.
                        </p>
                    </div>
                    </div>

                    <p className="joinChkAgree">
                    <input
                        type="checkbox"
                        id="chk1"
                        name="chk1"
                        checked={chk1}
                        onChange={e => setChk1(e.target.checked)}
                    />
                    <label htmlFor="chk1">이용약관에 동의합니다.</label>
                    </p>

                    <h4 className="joinPrivacyTitle">개인정보 수집, 이용 동의</h4>
                    <div className="joinPrivacy">
                    <div className="joinPrivacyCont">
                        <p>
                        {campusName}은 (이하 '회사'은)
                        <br />
                        고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.
                        <br />
                        회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
                        <br />
                        회사는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.
                        </p>
                        <h2>■ 수집하는 개인정보 항목</h2>
                        <p>
                        회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
                        <br />
                        ο 수집항목 : 이름 , 생년월일 , 성별 , 로그인ID , 비밀번호 , 자택 전화번호 , 자택 주소 , 휴대전화번호 , 이메일 , 직업
                        <br />
                        ο 개인정보 수집방법 : 홈페이지(회원가입,상담신청)
                        </p>
                        <h2>■ 개인정보의 수집 및 이용목적</h2>
                        <p>
                        회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                        <br />
                        ο 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산
                        <br />
                        콘텐츠 제공
                        <br />
                        ο 회원 관리
                        <br />
                        가입 의사 확인 , 고지사항 전달
                        <br />
                        ο 마케팅 및 광고에 활용
                        <br />
                        이벤트 등 광고성 정보 전달
                        </p>
                        <h2>■ 개인정보의 보유 및 이용기간</h2>
                        <p>
                        회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다.
                        </p>
                    </div>
                    </div>

                    <p className="joinChkAgree">
                    <input
                        type="checkbox"
                        id="chk2"
                        name="chk2"
                        checked={chk2}
                        onChange={e => setChk2(e.target.checked)}
                    />
                    <label htmlFor="chk2">개인정보 보호를 위한 이용자 동의사항에 동의합니다.</label>
                    </p>

                    {/* button */}
                    <div className="JoinBtn">
                    <a type="submit" className="btnType01">
                        확인
                    </a>
                    </div>
                    {/* //button */}
                </form>
                </div>
            </div>
            {/* 푸터 */}
            <Footer />
        </div>
    );
};

export default join;