import React, { useState } from "react";
import GNB from "../components/common/Gnb";
import Footer from "../components/common/Footer";

const idpwSearch = () => {
    // 입력값 state
    const [form, setForm] = useState({
        mem_name: "",
        mem_email: "",
        mem_hp1: "010",
        mem_hp2: "",
        mem_hp3: "",
    });

    // 입력 변경 핸들러
    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prev => ({
        ...prev,
        [name]: value,
        }));
    };

    // 제출 핸들러
    const handleSubmit = e => {
        e.preventDefault();

        if (form.mem_name.trim() === "") {
        alert("이름(한글)을 입력하세요");
        return;
        }
        if (form.mem_email.trim() === "") {
        alert("이메일을 입력하세요");
        return;
        }
        if (form.mem_hp2.trim() === "" || form.mem_hp3.trim() === "") {
        alert("핸드폰번호를 입력해주세요.");
        return;
        }

        // TODO: 실제 아이디/비밀번호 찾기 요청(axios/fetch 등)
        alert(
        `[요청]\n이름: ${form.mem_name}\n이메일: ${form.mem_email}\n휴대폰: ${form.mem_hp1}-${form.mem_hp2}-${form.mem_hp3}`
        );
    };
    return (
        <div id="wrap" className="sub findpw member">
            <GNB isMain={false} />
            <div className="sub-pt">
                <div className="sub-title-area">
                    <div className="text01">Find ID&amp;PW</div>
                    <h3>아이디&amp;비밀번호 찾기</h3>
                    <div className="text02">
                        회원가입시 입력했던 이름, 핸드폰, 이메일 주소를 입력해 주세요.
                    </div>
                </div>
                <div className="cont-box">
                    <div className="login-box">
                        <form onSubmit={handleSubmit} autoComplete="off">
                        <div className="login-area">
                            <ul>
                            <li>
                                <label htmlFor="mem_name">
                                신청하시는 분의 이름과 연락처를 입력해 주세요.
                                </label>
                                <input
                                type="text"
                                name="mem_name"
                                id="mem_name"
                                maxLength={20}
                                title="이름을 입력하세요"
                                placeholder="이름을 입력하세요"
                                value={form.mem_name}
                                onChange={handleChange}
                                />
                            </li>
                            <li>
                                <input
                                type="text"
                                name="mem_email"
                                id="mem_email"
                                maxLength={30}
                                title="이메일 주소를 입력하세요"
                                placeholder="이메일 주소를 입력하세요"
                                value={form.mem_email}
                                onChange={handleChange}
                                />
                            </li>
                            <li>
                                <ul className="idSearchTel">
                                <li>
                                    <select
                                    name="mem_hp1"
                                    id="mem_hp1"
                                    value={form.mem_hp1}
                                    onChange={handleChange}
                                    >
                                    <option>010</option>
                                    <option>011</option>
                                    <option>016</option>
                                    <option>017</option>
                                    <option>019</option>
                                    </select>
                                </li>
                                <li>
                                    <span className="telBar">-</span>
                                </li>
                                <li>
                                    <input
                                    type="text"
                                    name="mem_hp2"
                                    id="mem_hp2"
                                    maxLength={4}
                                    value={form.mem_hp2}
                                    onChange={handleChange}
                                    placeholder="0000"
                                    />
                                </li>
                                <li>
                                    <span className="telBar">-</span>
                                </li>
                                <li>
                                    <input
                                    type="text"
                                    name="mem_hp3"
                                    id="mem_hp3"
                                    maxLength={4}
                                    value={form.mem_hp3}
                                    onChange={handleChange}
                                    placeholder="0000"
                                    />
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a type="submit" className="btnType01">
                                아이디/비밀번호 찾기
                                </a>
                            </li>
                            </ul>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* 푸터 */}
            <Footer />
        </div>
    );
};

export default idpwSearch;