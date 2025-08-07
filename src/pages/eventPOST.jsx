import React, { useState } from 'react';
import GNB from "../components/common/Gnb";
import TeacherSlider from "../components/common/TeacherSlider";
import Facility from "../components/common/Facility";
import TuitionForm from "../components/common/TuitionForm";
import Footer from "../components/common/Footer";

const eventPOST = () => {
    const [search, setSearch] = useState("title");
    return (
       <div id="wrap" className="sub community">
            <GNB isMain={false} />
            <div className="academy-main sub-pt">
                <div className="sub-title-area">
                    <div className="text01">Student Review</div>
                    <h3>수강생후기</h3>
                    <div className="text02">코리아항공운항과학원 수강생들의 생생한 100% 리얼후기 입니다.</div>
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

export default eventPOST;