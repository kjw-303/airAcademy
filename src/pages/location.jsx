import React, { useState } from "react";
import GNB from "../components/common/Gnb";
import TeacherSlider from "../components/common/TeacherSlider";
import Facility from "../components/common/Facility";
import TuitionForm from "../components/common/TuitionForm";
import Footer from "../components/common/Footer";

// 각 캠퍼스 지도 iframe URL
const MAPS = [
  {
    campus: "gangnam",
    label: "강남캠퍼스",
    iframeSrc: "https://map.kakao.com/?urlX=506150&urlY=1109986&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false",
    address: "서울시 서초구 서초동 1327-7번지 선인빌딩 11-13층",
    subway: "강남역 2호선 7번출구 (100m), 강남역 신분당선 5번출구 (30m)",
    bus: <>
      <p className="locationBus busGreen">서초03, 서초09, 500-5</p>
      <p className="locationBus busBlue">N37, 140, 402, 420, 440, 441, 541, 470, 471, 407, 408, 462, 145, 421</p>
      <p className="locationBus busRed">3030, 3100, 3101, 6501, 3200, 1121, 5100, 1550-3, 500-2, 1551, 1550-1, 1005-1, 1560,<br />1005, 1151, 5006, 1551B, 5001, 5001-1, 5002, 5003, 3100, 3100-1, 3003, 3000, 3002, 3007</p>
    </>,
    express: "9711, 9100, 9200, 9300, 9201, 9503, 9404, 9408, M6410, M6405, M5422, M5414, M4403",
    city: "700",
    airport: "6009",
    car: <>
      분당 14km 약 17분 / 안양 18km 약 30분 / 수원 37km 약 30분 / 부천 38Km 약 30분<br />
      신사 3Km 약2분 / 대치 3Km 약2분 / 논현 3Km 약2분 / 압구정 3Km 약2분 / 사당 3Km 약2분<br />
      왕십리 10Km 약10분 / 영등포 14Km 약17분 / 홍대 14Km 약17분 / 노원 21Km 약20분<br />
    </>
  },
  {
    campus: "gangnam2",
    label: "강남2캠퍼스",
    iframeSrc: "https://map.kakao.com/?urlX=506130&urlY=1109896&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false",
    address: "서울시 서초구 서초동 1327-20번지 시원빌딩 4~5층",
    subway: "강남역 2호선 7번출구 (100m), 강남역 신분당선 5번출구 (30m), CU편의점 뒷 건물",
    bus: <>
      <p className="locationBus busGreen">서초03, 서초09, 500-5</p>
      <p className="locationBus busBlue">N37, 140, 402, 420, 440, 441, 541, 470, 471, 407, 408, 462, 145, 421</p>
      <p className="locationBus busRed">3030, 3100, 3101, 6501, 3200, 1121, 5100, 1550-3, 500-2, 1551, 1550-1, 1005-1, 1560,<br />1005, 1151, 5006, 1551B, 5001, 5001-1, 5002, 5003, 3100, 3100-1, 3003, 3000, 3002, 3007</p>
    </>,
    express: "9711, 9100, 9200, 9300, 9201, 9503, 9404, 9408, M6410, M6405, M5422, M5414, M4403",
    city: "700",
    airport: "6009",
    car: <>
      분당 14km 약 17분 / 안양 18km 약 30분 / 수원 37km 약 30분 / 부천 38Km 약 30분<br />
      신사 3Km 약2분 / 대치 3Km 약2분 / 논현 3Km 약2분 / 압구정 3Km 약2분 / 사당 3Km 약2분<br />
      왕십리 10Km 약10분 / 영등포 14Km 약17분 / 홍대 14Km 약17분 / 노원 21Km 약20분<br />
    </>
  },
  {
    campus: "busan",
    label: "부산캠퍼스",
    iframeSrc: "https://map.kakao.com/?urlX=969045&urlY=466640&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false",
    address: "부산광역시 부산진구 부전동 112-3 번지 삼한골든게이트 8층",
    subway: "서면역 8번 출구 (200m), 미니스톱 앞에서 왼쪽길로 89m 이동",
    bus: <>
      <p className="busanBus"><span className="bbGreen">일반</span>138-1, 160, 85, 24</p>
      <p className="busanBus"><span className="bbYeondoo">마을</span>남구10, 부산진구11, 부산진구12</p>
    </>,
  }
];

const Location = () => {
  const [selectedCampus, setSelectedCampus] = useState("gangnam");

  return (
    <div id="wrap" className="sub">
      <GNB isMain={false} />

      <div>
        <div className="academy-main sub-pt">
          <div className="sub-title-area">
            <div className="text01">Location</div>
            <h3>코리아항공운항과 오시는 길</h3>
            <div className="text02">차별화된 커리큘럼과 1:1컨설팅으로 새로운 길을 열어 드리겠습니다.</div>
          </div>
          <div className="teacher-list">
            {/* 캠퍼스 선택 버튼 */}
            <div className="location-filter map">
              {MAPS.map(map => (
                <button
                  key={map.campus}
                  type="button"
                  className={selectedCampus === map.campus ? "on" : ""}
                  onClick={() => setSelectedCampus(map.campus)}
                  data-campus={map.campus}
                >
                  {map.label}
                </button>
              ))}
            </div>

            {/* 캠퍼스별 정보 */}
            {MAPS.map(map => (
              <div
                className="teacher-info"
                data-campus={map.campus}
                key={map.campus}
                style={{ display: selectedCampus === map.campus ? "block" : "none" }}
              >
                {/* 지도 영역 (iframe) */}
                <div className="map-iframe" style={{ width: "100%", height: "530px", marginBottom: 40 }}>
                  <iframe
                    title={map.label + " 지도"}
                    src={map.iframeSrc}
                    width="100%"
                    height="530"
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>

                {/* 정보영역 */}
                <div className="locationInfo">
                  <h3>주소 및 교통편 안내</h3>
                  <table>
                    <colgroup>
                      <col width="15%" />
                      <col width="*" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th>주소</th>
                        <td>{map.address}</td>
                      </tr>
                      <tr>
                        <th>지하철</th>
                        <td>{map.subway}</td>
                      </tr>
                      <tr>
                        <th>시내버스</th>
                        <td>{map.bus}</td>
                      </tr>
                      {map.express && (
                        <tr>
                          <th>광역버스</th>
                          <td>{map.express}</td>
                        </tr>
                      )}
                      {map.city && (
                        <tr>
                          <th>시외버스</th>
                          <td>{map.city}</td>
                        </tr>
                      )}
                      {map.airport && (
                        <tr>
                          <th>공항버스</th>
                          <td>{map.airport}</td>
                        </tr>
                      )}
                      {map.car && (
                        <tr>
                          <th>자가용</th>
                          <td>{map.car}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 시설 슬라이더 */}
      <Facility isMain={false}/>

      {/* 강사진 슬라이더 */}
      <TeacherSlider />

      {/* 간편수강료 조회 */}
      <TuitionForm/>

      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default Location;
