import React, { useState } from 'react';
import GNB from "../components/common/Gnb";
import TuitionFormVacation from "../components/common/TuitionForm_vacation";
import Footer from "../components/common/Footer";
import CustomBanner from '../components/common/CustomBanner';

const prices_vacation = () => {
    return (
        <div id="wrap" className="sub customer vacation">
            <GNB isMain={false} />
            <div className='container-tuition'>
            <div className="academy-main sub-pt">
                <div className="sub-title-area">
                    <div className="text01">Tuition Inquiry</div>
                    <h3>새학기 특강 조회</h3>
                    <div className="text02">새학기특강 수강료조회를 위해 관심 있는 과정을 체크해주세요.<br/>코리아항공과학원 수강생이 되신다면 이 모든 혜택을 누릴 수 있습니다.</div>
                </div>
            </div>
            {/* 커스텀 배너 */}
            <CustomBanner/>

            {/* 간편수강료 조회 */}
            <TuitionFormVacation />
            </div>
            {/* 푸터 */}
            <Footer />
        </div>
    );
};

export default prices_vacation;