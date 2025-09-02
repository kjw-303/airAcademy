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
                <div className="text01">Career and vision</div>
                <h3>진로와 비전</h3>
                <div className="text02">항공운항과 관련 직업과 비전에 대해 소개해드립니다.</div>
            </div>
            <div className="univers-contents mt">
                <div className="box left">
                    <h4>승무원</h4>
                </div>
                <div>
                    <div className="box">
                        <h4>스튜어디스</h4>
                        <div className="text">스튜어디스는 많은 여성들의 선망의 대상이자 여성직업으로 사회적 인지도가 높은 직업으로 잘 알려져 있습니다. 직업 특성상 세계 여러나라를 여행할 수 있고, 만족스t러운 보수를 받는다는 장점이 있어 많은 여성들이 꿈꾸는 직업입니다. 국제화에 따른 항공산업의 발전, 항공기의 대중교통화로 수요가 급증하면서 스튜어디스라는 직업 또한 대중화가 되어가는추세입니다.</div>
                        <div className="text mt">스튜어디스는 세계 각국의 사람들을 접하는 만큼 깔끔한 이미지와 국제적인 매너 감각이 필요하고, 다양한 외국어실력을 갖추는 것이 중요합니다. 그리고 승객이 탑승전 기내 체크부터 기내 서비스, 기내보안, 안전활동, 착륙전 입국서류 작성 등을 승객이 편하고 안전하게 목적지까지 도착할 수 있게 도움을 주는 역할을 수행하게 됩니다. 다양한 서비스와 안전업무를 수행해야 하기 때문에 투철한 서비스마인드, 침착한 대처능력, 강한 정신력과 체력 등 철저한 자기 관리가 필요합니다.</div>
                    </div>
                    <div className="box">
                        <h4>스튜어드</h4>
                        <div className="text">스튜어드는 남자승무원을 말합니다. 과거에 일부 외국항공사들만의 스튜어드 채용이 최근 항공시장의 활성화로 국내 항공사들의 스튜어드 채용도 시작되었습니다. 최근들어 남성들 사이에 관심을 갖는 직업으로 스튜어디스 정도의 경쟁률은 아니지만 점차 경쟁이 치열해질것으로 전망되는 유망 직업입니다. 업무는 스튜어디스와 비슷하지만 기내 보안과 안전 업무에 더욱 비중을 두고 있습니다. 스튜어드 역시 스튜어디스와 비슷한 근무형태, 급여 조건이지만 장기근속이 가능하다는 점, 꾸준한 자기계발로 진급시험을 거친다면 스튜어디스에 비해 빠른 진급을 할 수 있다는 장점이 있습니다.</div>
                        <div className="text mt d-flex">
                            <div className="title">PERSONNER</div>
                            <div>스튜어디스 10~13명. 스튜어드 3~4명 팀 구성. 한달 평균 60~80시간 많게는 100시간 이상의 근무를 하게됩니다.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="univers-contents">
                <div className="box left">
                    <h4>객실승무원 복지</h4>
                </div>
                <div>
                    <div className="box">
                        <div className="text mt d-flex">
                            <div className="title">연봉</div>
                            <div>2,800만원 ~ 4,000만원 (항공사에 따라서, 비행스케줄에 따라서 급여 변동이 있습니다.)</div>
                        </div>
                        <div className="text d-flex">
                            <div className="title">복지</div>
                            <div>4대보험, 휴가(결혼, 출산), 휴직(육아), 주택보조, 기타 의료서비스등의 다양한 지원</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="univers-contents">
                <div className="box left">
                    <h4>직급분류</h4>
                </div>
                <div>
                    <div className="box">
                        <div className="text mt d-flex">
                            <div className="title w89">인턴</div>
                            <div>대한항공은 2년, 아시아나항공은 1년의 인턴과정 후 심사를 거쳐 정규직으로 전환됩니다.</div>
                        </div>
                        <div className="text d-flex">
                            <div className="title w89">승무원</div>
                            <div>승무원을 구분하게 되면 선임승무원으로 구분됩니다.</div>
                        </div>
                        <div className="text d-flex">
                            <div className="title w89">부사무장</div>
                            <div>사무장 업무 보좌, 일반 승무원업무 진행과 관리를 하게 되며 수습 승무원의 훈련과 지도 평가를 하게됩니다.</div>
                        </div>
                        <div className="text d-flex">
                            <div className="title w89">사무장</div>
                            <div>기내 모든 사항을 지휘 감독하는 업무를 맡고 있습니다.</div>
                        </div>
                        <div className="text d-flex">
                            <div className="title w89">선임사무장</div>
                            <div>사무장이되고 2년이 지나면 자격심사의 대상이 됩니다.</div>
                        </div>
                        <div className="text d-flex">
                            <div className="title w89">수석사무장</div>
                            <div>승무원의 최고 직급인 수석 사무장은 승무원의 모든 업무를 주관, 업무할당 등 총괄 관리 감독을 합니다.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="univers-contents">
                <div className="box left">
                    <h4>항공사지상직</h4>
                </div>
                <div>
                    <div className="box">
                        <div className="text mt">항공사 지상직은 공항에서 직접 승객서비스를 담당하는 근무자를 말합니다. 크게 공항여객서비스(티켓발권, 출입국 게이트, VIP라운지, 수화물처리 등), 항공여객서비스 외 업무 (정비업무, 승무원 스케줄러, CARGO업무), 사무직(관리, 인사, 교육, 마케팅, 영업 등)으로 분류되고 승객의 항공기 탑승을 위해 수반되는 모든 영역의 서비를 파트별로 구분되어 제공하게 됩니다.</div>
                        <div className="text mt d-flex">
                            <div className="title">연봉</div>
                            <div>한진,금호 그룹공채 3600만원, 아시아나서비스인턴 2000만원(1년뒤 정규직전환 2800만원) 외항사 2200~3400만원, 아웃소싱 1800~2400만원</div>
                        </div>
                        <div className="text d-flex">
                            <div className="title">복지</div>
                            <div>항공권, 4대보험, 수당, 휴가, 휴직, 기타의료서비스 등의 다양한지원</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="univers-contents">
                <div className="box left">
                    <h4>기타 서비스직</h4>
                </div>
                <div>
                    <div className="box">
                        <div className="text mt">최근 전국의 많은 대학들이 관광, 호텔, 항공관련 전공을 개설하는 이유중에 하나로 대기업 비서직, 특급호텔, 백화점, 리조트 등 다양한 서비스 관련 기업에서 유창한 어학실력, 사무관리, 프리젠테이션, 리셉션, 스케줄관리, 전화응대, 고객응대 등의 능력을 갖춘 다양한 인재를 필요로 하고 있습니다. 특히 항공운항과는 항공관광학과, 항공서비스학과 등 항공승무원 이외에도 관광, 서비스 분야의 영역까지 학생들에게 다양한 취업 교육을 제공하고 있어 다른 전공에 비해 실무 교육에 중심을 두고 있다는 강점이 있습니다.</div>
                        <div className="text mt d-flex">
                            <div className="title">연봉</div>
                            <div>기타 일반기업체 서비스직 1,800~3,000만원</div>
                        </div>
                        <div className="text d-flex">
                            <div className="title">복지</div>
                            <div>4대보험, 휴가(결혼, 출산), 휴직(육아), 기타 의료 서비스 등의 다양한 지원</div>
                        </div>
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
