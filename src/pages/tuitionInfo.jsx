import React, { useState } from 'react';
import GNB from "../components/common/Gnb";
import Footer from "../components/common/Footer";

const tuitionData = [
  { subject: "항공운항 정규과정", capacity: 20, period: "2개월", minutes: "8,400", detail: "2,300,000" },
  { subject: "항공운항수시/정시대비A", capacity: 20, period: "2개월", minutes: "7,200", detail: "1,800,000" },
  { subject: "항공운항수시/정시대비B", capacity: 20, period: "2개월", minutes: "3,600", detail: "800,000" },
  { subject: "항공운항수시/정시대비C", capacity: 20, period: "2개월", minutes: "4,200", detail: "600,000" },
  { subject: "국내과외코칭집중반", capacity: 20, period: "1,2개월", minutes: "2,160", detail: "1,800,000" },
  { subject: "국외과외코칭집중반", capacity: 20, period: "1,2개월", minutes: "2,160", detail: "1,800,000" },
  { subject: "승무원종합과정", capacity: 20, period: "1,2개월", minutes: "2,160", detail: "2,600,000" },
  { subject: "승무지상고급과정", capacity: 20, period: "1,2개월", minutes: "2,160", detail: "2,600,000" },
  { subject: "승무원코칭과정A", capacity: 20, period: "1개월", minutes: "600", detail: "800,000" },
  { subject: "승무원코칭과정B", capacity: 20, period: "1개월", minutes: "600", detail: "500,000" },
  { subject: "승무원코칭과정C", capacity: 20, period: "1개월", minutes: "600", detail: "400,000" },
  { subject: "승무원과외코칭D", capacity: 20, period: "1개월", minutes: "60", detail: "100,000" },
];

const timeTable = () => {
    return (
        <div id="wrap" className="sub customer vacation">
            <GNB isMain={false} />
            
            <div className="academy-main sub-pt">
                <div className="sub-title-area">
                    <div className="text01">Tuition Information</div>
                    <h3>수강료안내</h3>
                    <div className="text02">코리아항공운항과학원 수강료 안내 입니다.</div>
                </div>
                <div className="cont-box mt">
                    <table className="tuitionTable tuitionInfo">
                        <colgroup>
                            <col width="30%" />
                            <col width="10%" />
                            <col width="20%" />
                            <col width="20%" />
                            <col width="20%" />
                        </colgroup>
                        <thead>
                            <tr>
                            <th>교습과목</th>
                            <th>정원</th>
                            <th>교습기간</th>
                            <th>총교습시간(분)</th>
                            <th>교습비 등 세부내역</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tuitionData.map((row, i) => (
                            <tr key={row.subject + i}>
                                <td>{row.subject}</td>
                                <td>{row.capacity}</td>
                                <td>{row.period}</td>
                                <td>{row.minutes}</td>
                                <td>{row.detail}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* 푸터 */}
            <Footer />
        </div>
    );
};

export default timeTable;