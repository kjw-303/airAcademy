import React, { useState } from 'react';
import GNB from "../components/common/Gnb";
import Footer from "../components/common/Footer";
import OnlineForm from "../components/common/OnlineForm";

const online = () => {
    return (
        <div id="wrap" className="sub customer vacation">
            <GNB isMain={false} />
            <div className='container-tuition'>
            <div className="academy-main sub-pt">
                <div className="sub-title-area">
                    <div className="text01">Online Consulting</div>
                    <h3>입시컨설팅</h3>
                    <div className="text02">코리아항공운항과학원의 입시컨설팅 및 진로상담은 무료로 진행됩니다.<br/>정확한 컨설팅을 위해 자신의 현재 상태를 정확히 선택해 주세요.</div>
                </div>
            </div>
            {/* 온라인폼 */}
            <OnlineForm/>
            </div>
            {/* 푸터 */}
            <Footer />
        </div>
    );
};

export default online;
