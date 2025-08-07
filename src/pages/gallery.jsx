import React, { useState } from 'react';
import GNB from "../components/common/Gnb";
import TeacherSlider from "../components/common/TeacherSlider";
import Facility from "../components/common/Facility";
import TuitionForm from "../components/common/TuitionForm";
import Footer from "../components/common/Footer";



const galleryInfo = [
    {title:"2021 초당대학교 입시설명회&예비승무원대회 개최", data:"2025-07-30"},
    {title:"2022 초당대학교 입시설명회&예비승무원대회 개최", data:"2025-07-30"},
    {title:"2023 초당대학교 입시설명회&예비승무원대회 개최", data:"2025-07-30"},
    {title:"2024 초당대학교 입시설명회&예비승무원대회 개최", data:"2025-07-30"},
    {title:"2025 초당대학교 입시설명회&예비승무원대회 개최", data:"2025-07-30"},
    {title:"2026 초당대학교 입시설명회&예비승무원대회 개최", data:"2025-07-30"},
]

const gallery = () => {
    const [search, setSearch] = useState("title");
    return (
    <>  
        <div id="wrap" className="sub community">
            <GNB isMain={false} />
            <div className="academy-main sub-pt">
                <div className="sub-title-area">
                    <div className="text01">Photo Story</div>
                    <h3>포토스토리</h3>
                    <div className="text02">코리아항공운항과학원에서는 어떤 일들이 있을까요? 수강생들의 생생한 현장이야기를 보여드립니다.</div>
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
                            {galleryInfo.map((p,i) => (
                                <li key={p.title}>
                                    <a href="#">
                                        <div><em></em></div>
                                        <h5>{p.title}</h5>
                                        <h6>{p.data}</h6>
                                    </a>
                                </li>
                            ))};
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
    </>
    )
}

export default gallery;