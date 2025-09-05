import React, { useState } from 'react';
import GNB from "../components/common/Gnb";
import Footer from "../components/common/Footer";
import SearchUniForm from "../components/common/SearchUniForm";
import CustomBanner from '../components/common/CustomBanner';

const searchAirline = () => {
    return (
        <div id="wrap" className="sub vacation">
            <GNB isMain={false} />

            <div className="academy-main sub-pt">
                <div className="sub-title-area">
                    <div className="text01">Possibility</div>
                    <h3>지원가능한 대학조회</h3>
                    <div className="text02">지금 나의 스펙으로 갈 수 있는 항공운항과 대학은 어디일까?</div>
                </div>
                {/* 커스텀 배너 */}
                <CustomBanner/>
            </div>
            <div className='container-tuition'>
            {/* 온라인폼 */}
            <SearchUniForm/>
            </div>
            {/* 푸터 */}
            <Footer />
        </div>
    );
};

export default searchAirline;
