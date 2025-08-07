import React from "react";
import GNB from "../components/common/Gnb";
import ReviewSlider from "../components/common/ReviewSlider";
import TeacherSlider from "../components/common/TeacherSlider";
import Facility from "../components/common/Facility";
import TuitionForm from "../components/common/TuitionForm";
import Footer from "../components/common/Footer";
import supportImg01 from "../assets/img/interview01.jpg"
import supportImg02 from "../assets/img/interview02.jpg"
import supportImg03 from "../assets/img/interview03.jpg"
import supportImg04 from "../assets/img/interview04.jpg"

const Support = () => (
  <div id="wrap" className="sub">
    <GNB isMain={false} />

    <div>
       <div className="academy-main">
            <div className="bg-top">
                <h3>항공운항과 면접지원</h3>
                <div className="bar"></div>
                <div className="text">
                    <div>코리아항공운항과입시학원은 메이크업 지원, 헤어셋팅 지원, 차량 지원등<br/>면접 지원을 위해 최선을 다합니다.</div>
                </div>
            </div>
            <div className="contents column">
                <div className="img"><img src={supportImg01} alt="항공운항" /></div>
                <div className="info">
                    <h3 className="mt">Support</h3>
                    <ul className="mt">
                        <li>항공운항과 전공 대학들은 면접 시 대학별로 면접 복장과 메이크업 방법에 차이가 있어 많은 학생들이 혼란스러워하고 있습니다. 그리고 대부분의 학생들이 처음 면접을 접하기 때문에 낯선 면접장 분위기에 극도의 긴장감과 스트레스로 충분한 실력 발휘를못하는경우가 많습니다. 이러한점들을 고려하여 항공운항과 면접 시 코리아항공운항과 입시학원의 담당 선생님들과 메이크업, 헤어 전문팀이 차량 지원과 함께 면접 준비를 도와드리고 있습니다.</li>
                        <li>한서대학교 항공관광학과, 인하공전 항공운항과, 수원과학대 항공관광학과, 연성대학교 항공서비스학과 등 대부분의 주요 대학들의 면접을 지원하고 있습니다.</li>
                    </ul>
                    <div className="support-list">
                        <img src={supportImg02} alt=""/>
                        <img src={supportImg03} alt=""/>
                        <div className="text">
                            형식적인 지원이 아닌<br/>
                            수험생분들의 세심한부분까지 배려하는<br/>
                            코리아항공운항과에서<br/>
                            <span>클래스가 다른 자부심을 가져보세요!</span>
                        </div>
                        <img src={supportImg04} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* 수강생 후기 */}
    <div className="sub-review">
      <ReviewSlider />
    </div>

    {/* benefit */}
    {/* <Benefit /> */}

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

export default Support;
