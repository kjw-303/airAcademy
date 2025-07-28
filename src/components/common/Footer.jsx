import React from "react";
import "../../assets/css/main.css"; // footer 스타일 포함한 css import

const Footer = ({
  campusClass = "",
  bn_title3 = "1588-2095", // 대표문의전화
  bn_office = "서울특별시 강남구",
  bn_address = "역삼동 123-45",
  bn_officeNum = "12345",
  bn_title2 = "02-1234-5678", // Fax
  bn_title6 = "제2025-서울강남-0001호", // 통신판매번호
  bn_title5 = "123-45-67890", // 사업자번호
  user_name = "홍길동",
  user_email = "info@koreaairacademy.com",
  bn_ceo = "김철수",
  bn_admin = "관리자",
  bn_title7 = "KOREA AIR ACADEMY", // COPYRIGHT
}) => {
  return (
    <div id="footer">
      <div className="container">
        <h4 className={`footerLogo ${campusClass}`}>코리아항공운항과학원</h4>
        <div>
          <ul>
            <li>
              <a href="/2025/member/join.asp">이용약관</a>
            </li>
            <li>
              <a href="/2025/member/privacy_info.asp">
                <span>개인정보처리방침</span>
              </a>
            </li>
            <li>
              <a href="/2025/univerinfo/collegePartner.asp">산학협력 현황</a>
            </li>
            <li>
              <a href="/2025/customer/online.asp">고객상담센터</a>
            </li>
            <li>
              <a href="/2025/about/location.asp">오시는 길</a>
            </li>
            <li>
              <a href="/2025/customer/tuition_info.asp">수강료안내</a>
            </li>
            <li>
              대표문의전화&nbsp;&nbsp;<span>{bn_title3}</span>
            </li>
          </ul>
          <p>
            {bn_office}&nbsp;&nbsp;{bn_address}
          </p>
          <p>
            학원등록번호 : {bn_officeNum} | TEL. {bn_title3} | FAX. {bn_title2} |
            통신판매번호 : {bn_title6} | 사업자번호 : {bn_title5}
          </p>
          <p>
            교육담당 : {user_name} | 대표이메일: {user_email}
          </p>
          <p>
            대표이사 : {bn_ceo} | 개인정보관리책임자: {bn_admin}
          </p>
          <address>
            <p>COPYRIGHT(C) {bn_title7}. ALL RIGHTS RESERVED.</p>
          </address>
        </div>
      </div>
    </div>
  );
};

export default Footer;
