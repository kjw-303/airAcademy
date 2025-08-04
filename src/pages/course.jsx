import React from "react";
import GNB from "../components/common/Gnb";
import ReviewSlider from "../components/common/ReviewSlider";
import TeacherSlider from "../components/common/TeacherSlider";
import Facility from "../components/common/Facility";
import TuitionForm from "../components/common/TuitionForm";
import Footer from "../components/common/Footer";

const Course = () => (
  <div id="wrap" className="sub">
    <GNB isMain={false} />

    <div>
      <div className="academy-main sub-pt">
            <div className="sub-title-area">
                <div className="text01">Aviation Operations Department</div>
                <h3>항공운항과 소개</h3>
                <div className="text02">국제화 시대에 맞춰 전 세계의 항공시장은 물론 항공사들의 규모가 점차 커지고 있고 해를 거듭할수록 항공승무원 채용 인력을 늘리고 있습니다. 인하공전 항공운항과, 한서대학교 항공관광학과를 비롯해 수원과학대 항공관광과, 연성대학교 항공서비스과 등 다양한 대학들이 항공승무원 관련 전공을 지속적으로 추가 개설하고 있으며, 체계적인 교육을 바탕으로 스튜어디스 전문인력 양성에 주력하고 있습니다.</div>
                <div className="text02 mt">항공운항과는 항공승무원 이외에도 전문서비스를 필요로하는 관광, 여행, 호텔분야에 이르기까지 높은 취업률을 보이고 있어  학생들에게 인지도가 높은 전공분야입니다. 전공 특성상 대다수의 항공운항과 대학들의 면접 반영비율이 높기 때문에 완벽한  면접준비가 합격을 좌우하게 됩니다.</div>
                <div className="text02 mt">코리아항공운항과학원의 교육 과정은 승무원학과(항공운항과, 항공관광학과, 항공관광과, 항공서비스학과, 항공서비스과,  항공운항서비스학과)들의 대학별(2년제, 4년제) 입시 모집요강, 학생부(내신)와 면접 반영비율, 학과별 경쟁률 등 기본 입시 정보의  이해를 돕고 있습니다. 그리고 승무원 출신의 항공운항과 전문강사님들이 이미지메이킹, 면접매너, 영어면접, 스피치훈련, 면접  예상기출문제 대처능력, 대학별 메이크업 방법 등 전문적이고 체계적인 노하우를 바탕으로 완성도 높은 면접 준비로 보다 빠르고  쉽게 합격의 꿈을 이룰 수 있도록 탄탄한 구성의 교육을 진행하고 있습니다.</div>
            </div>
            <div className="univers-contents mt">
                <div className="box left">
                    <h4>주요 대학교</h4>
                </div>
                <div>
                    <div className="box">
                        <h4>인하공전 항공운항과 <span className="badge">2년제</span></h4>
                        <div className="text">인하공전 항공운항과는 36년 역사의 국내 최초 항공객실 승무원 양성대학, 대한항공과 동일한 "한진그룹" 재단에서 운영하는 명성이 높고, 단연 최고라 불리울 만큼 인지도가 높은 곳입니다. 항공서비스매너, 객실구조 및 비행안전, 객실서비스실무, 다양한 외국어기초, 실용회화등 전문교육을 통해 항공사 승무원 분야 뿐만 아니라 호텔, 외식, 금융, 비서, 의료, 법률 사무소등 여러 방면에 취업이 이루어지고 있습니다.</div>
                        <div className="text mt">성적반영 (수시)면접60%, 내신40%, (정시)면접60%, 수능40% 경쟁률 70 : 1 이상</div>
                    </div>
                    <div className="box">
                        <h4>한서대학교 항공관광학과 <span className="badge">4년제</span></h4>
                        <div className="text">인하공전 항공운항과는 36년 역사의 국내 최초 항공객실 승무원 양성대학, 대한항공과 동일한 "한진그룹" 재단에서 운영하는 명성이 높고, 단연 최고라 불리울 만큼 인지도가 높은 곳입니다. 항공서비스매너, 객실구조 및 비행안전, 객실서비스실무, 다양한 외국어기초, 실용회화등 전문교육을 통해 항공사 승무원 분야 뿐만 아니라 호텔, 외식, 금융, 비서, 의료, 법률 사무소등 여러 방면에 취업이 이루어지고 있습니다.</div>
                        <div className="text mt">성적반영 (수시)면접60%, 내신40%, (정시)면접60%, 수능40% 경쟁률 70 : 1 이상</div>
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

export default Course;
