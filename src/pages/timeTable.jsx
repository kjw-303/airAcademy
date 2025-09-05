import React, { useState } from 'react';
import GNB from "../components/common/Gnb";
import TuitionForm from "../components/common/TuitionForm";
import Footer from "../components/common/Footer";
import CustomBanner from '../components/common/CustomBanner';

const timeTable = () => {
    return (
        <div id="wrap" className="sub vacation">
            <GNB isMain={false} />
            
            <div className="academy-main sub-pt">
                <div className="sub-title-area">
                    <div className="text01">Timetable Inquiry</div>
                    <h3>시간표조회</h3>
                    <div className="text02">간편한 시간표조회를 위해 관심 있는 과정을 체크해주세요.<br/>코리아항공과학원 수강생이 되신다면 이 모든 혜택을 누릴 수 있습니다.</div>
                </div>
                {/* 커스텀 배너 */}
                <CustomBanner/>
            </div>
            <div className='container-tuition'>
            {/* 간편수강료 조회 */}
            <TuitionForm />
            </div>
            {/* 푸터 */}
            <Footer />
        </div>
    );
};

export default timeTable;