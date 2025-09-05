import React, { useState } from 'react';
import GNB from "../components/common/Gnb";
import TeacherSlider from "../components/common/TeacherSlider";
import Facility from "../components/common/Facility";
import TuitionForm from "../components/common/TuitionForm";
import Footer from "../components/common/Footer";

const interviewInfo = [
    {title:"한서대 항공관광과 입시 합격 노하우 공개(수시준비 꿀팁)", data:"2025-07-30"},
    {title:"인하공전, 한서대 항공과 입시 동시 합격 노하우 공개", data:"2025-07-30"},
    {title:"22학번 한서대/한양여대 외 5개 학교 합격! 이지원 수강생 인터뷰", data:"2025-07-30"},
    {title:"22학번 한서대/연성대 동시합격! 정예진 수강생 인터뷰", data:"2025-07-30"},
    {title:"22학번 인하공전/한서대 동시합격! 박경은 수강생 인터뷰", data:"2025-07-30"},
]

const interview = () => {
    const [search, setSearch] = useState("title");
    return (
        <div id="wrap" className="sub community">
            <GNB isMain={false} />
            <div className="academy-main sub-pt">
                <div className="sub-title-area">
                    <div className="text01">Interview</div>
                    <h3>합격생인터뷰</h3>
                    <div className="text02">항공운항과 합격생이 직접 말하는 합격후기! 그 생생한 인터뷰 현장을 함께 확인해보세요!</div>
                </div>
                <div className="cont-box">
                    <div className="cmntState">
                        <div className="container">

                            <div className="cmntSch">
                            <form name="searchfrm" method="post" action="">
                                <ul>
                                    <li>
                                        <select name="search" id="select" value={search} onChange={e => setSearch(e.target.value)}>
                                            <option value="title">제목</option>
                                        </select>
                                    </li>
                                    <li><input type="text" name="strsearch" id="textfield" defaultValue="" /></li>
                                    <li><button type="button"></button></li>
                                </ul>
                            </form>
                            </div>

                        </div>
                    </div>
                    <div className='container brdOther'>
                        <ul className='photoList'>
                            {interviewInfo.map((p,i) => (
                                <li key={p.title}>
                                    <a href="#">
                                        <div><em></em></div>
                                        <h5>{p.title}</h5>
                                        <h6>{p.data}</h6>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* 강사진 슬라이더 */}
            <TeacherSlider />

            {/* 시설 슬라이더 */}
            <Facility />

            {/* 간편수강료 조회 */}
            <TuitionForm />

            {/* 푸터 */}
            <Footer />
        </div>
    );
};

export default interview;