import React, { useState } from 'react';
import GNB from "../components/common/Gnb";
import TeacherSlider from "../components/common/TeacherSlider";
import Facility from "../components/common/Facility";
import TuitionForm from "../components/common/TuitionForm";
import Footer from "../components/common/Footer";
import Thumn from "../assets/img/review_thum.jpg"

const reviewInfo = [
    {loca:"강남", num:"110", name:"김채원", review:"2024학년도 인하공업전문대학 외 3개 대학 합격을 축하드립니다!", data:"2025-07-30"},
    {loca:"강남", num:"111", name:"김윤아", review:"2024학년도 인하공업전문대학 외 3개 대학 합격을 축하드립니다!", data:"2025-07-31"},
    {loca:"강남", num:"112", name:"김이나", review:"2024학년도 인하공업전문대학 외 3개 대학 합격을 축하드립니다!", data:"2025-08-01"},
    {loca:"강남", num:"113", name:"김아영", review:"2024학년도 인하공업전문대학 외 3개 대학 합격을 축하드립니다!", data:"2025-08-02"},
    {loca:"강남", num:"114", name:"김후민", review:"2024학년도 인하공업전문대학 외 3개 대학 합격을 축하드립니다!", data:"2025-08-03"},
    {loca:"강남", num:"115", name:"김상민", review:"2024학년도 인하공업전문대학 외 3개 대학 합격을 축하드립니다!", data:"2025-08-04"},

]

const airline_cl = () => {
    const [search, setSearch] = useState("title");
    return (
        <div id="wrap" className="sub community review">
            <GNB isMain={false} />
            <div className="academy-main sub-pt">
                <div className="sub-title-area">
                    <div className="text01">Pass Review</div>
                    <h3>합격생이 직접 작성한 리얼성공후기</h3>
                    <div className="text02">꿈이 아닌 현실에 한걸음 다가선 당신을 응원합니다.</div>
                </div>
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
                    <ul className='postList'>
                        {reviewInfo.map((p,i) => (
                            <li key={p.num}>
                                <a href="#">
                                    <span className='loca'>{p.loca}</span>
                                    <h6>No. <span>{p.num}</span></h6>
                                    <em><img src={Thumn} alt="" /></em>
                                    <h5>
                                        <div>{p.name}<span>수강생</span></div>
                                        {p.review}
                                    </h5>
                                    <dl>
                                        <dd className='date'>{p.data}</dd>
                                    </dl>
                                </a>
                            </li>
                        ))};
                    </ul>
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

export default airline_cl;