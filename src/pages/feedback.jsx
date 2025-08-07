import React, { useState } from 'react';
import GNB from "../components/common/Gnb";
import Footer from "../components/common/Footer";
import FeedbackForm from "../components/common/FeedbackForm";

const feedback = () => {
    return (
        <div id="wrap" className="sub customer vacation">
            <GNB isMain={false} />
            <div className='container-tuition'>
            <div className="academy-main sub-pt">
                <div className="sub-title-area">
                    <div className="text01">For Parents</div>
                    <h3>1:1 학부모상담</h3>
                    <div className="text02">진로 진학 전문가 선생님들이 풍부한 경험과 다양한 자료를 바탕으로 여러분의 궁금증을 바로 해결해 드립니다.<br/>또, 면접시 꼭 알아두어야 할 세부적인 노하우까지 알려드립니다.</div>
                </div>
            </div>
            {/* 온라인폼 */}
            <FeedbackForm/>
            </div>
            {/* 푸터 */}
            <Footer />
        </div>
    );
};

export default feedback;
