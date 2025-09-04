// src/data/teacherList.js

import logoKorean from "../assets/img/logo/img_logo_korean.png";
import logoEstar from "../assets/img/logo/img_logo_estar.png";
import logoAsiana from "../assets/img/logo/img_logo_asiana.png";
import logoEmirates from "../assets/img/logo/img_logo_emirates.png";
import logoCathay from "../assets/img/logo/img_logo_cathay.png";
import logoJeju from "../assets/img/logo/img_logo_jeju.svg";
import logoHainan from "../assets/img/logo/img_logo_hainan.png";
import logoBusan from "../assets/img/logo/img_logo_busan.png";
import logo from "../assets/img/logo/img_logo.svg";
import logoKbs from "../assets/img/logo/img_logo_kbs.png";
import logoQatar from "../assets/img/logo/img_logo_qatar.png";



export const teacherList = [
  // 강남캠퍼스
  {
    id: "thgn-01",
    campus: "gangnam",
    name: "양은경",
    job: "강사님",
    description: ["대한항공 객실훈련원", "최연소 교육강사 출신", "실무면접관"],
    logo: logoKorean,
    profileImg: "/public/teacher/tch-thgn-01.png",
    logoAlt: "korean",
    career1:[
      "대한항공 객실 훈련원 강사 과정 수료",
      "대한항공 객실 훈련원 신입승무원 교육강사",
      "(객실훈련원 강사 중 최연소)",
      "대한항공 교육용 기내 비상탈출 데모비디오 촬영"
    ],
    career2:[
      "백석문화대학 서비스인성 프로그램 강의",
      "성삼정보통신 임원 서비스 매너 교육",
      "호서대 항공과 특강 강의"
    ],
    career3:[
      "SK텔레콤 사내방송 서비스 교육촬영",
      "SBS출발 모닝와이드 면접 관련촬영",
      "CS 서비스 1급 전문강사",
      "SMAT (서비스경영자격)"
    ],
  },
  {
    id: "thgn-02",
    campus: "gangnam",
    name: "신해리",
    job: "강사님",
    description: ["대한항공", "아시아나 승무원", "최다 합격생 배출"],
    logo: logoKorean,
    profileImg: "/public/teacher/tch-thgn-02.png",
    logoAlt: "korean",
    career1:[
      "대한항공 국내선 국제선 사무장 (경력 5년)",
      "인천 국제공항 대한항공 First class lounge 매니저 근무"
    ],
    career2:[
      "용인대학교 한신대학교 한국외국어대학교 등",
      "승무원 취업면접 강의",
      "호서대학교 3,4학년 대상 취업면접강의",
      "H대학교 면접관",
      "백석문화대학교 서비스인성 담당교수"
    ],
    career3:[
      "SMAT 실무자 관리자 자격"
    ],
  },
  {
    id: "thgn-03",
    campus: "gangnam",
    name: "한경주",
    job: "강사님",
    description: ["주요대학 항공과", "최다 합격생 배출"],
    logo: logoKorean,
    profileImg: "/public/teacher/tch-thgn-03.png",
    logoAlt: "korean",
    career1:[
     "대한항공 객실승무원 (비행경력 3년)",
     "대한항공 국제여객운송 근무"
    ],
    career2:[
     "혜천대학, 천안연암대학, 강남대학교 출장",
     "경희대, 조선대, 부산대, 한국해양대 등 취업캠프",
     "한국외대, 인천대, 대진대 등 승무원 양성과정",
     "고려대, 한신대 등 항공사 직무 특강 특강",
     "대전고, 충남고 등 직업체험 특강",
     "강원대병원, 원광대병원, 새마을, 농협 CS 강의"
    ],
    career3:[
     "매너컨설턴트 과정 수료, 테이블매너 과정 수료",
     "스트레스 관리 과정 수료, Disc 과정 수료"
    ],
  },
  {
    id: "thgn-04",
    campus: "gangnam",
    name: "정은영",
    job: "강사님",
    description: ["대한항공 객실승무원", "15년 경력"],
    logo: logoKorean,
    profileImg: "/public/teacher/tch-thgn-04.png",
    logoAlt: "korean"
  },
  {
    id: "thgn-05",
    campus: "gangnam",
    name: "임선경",
    job: "강사님",
    description: ["각 항공사 분석 및", "이미지메이킹", "전문강사"],
    logo: logoKorean,
    profileImg: "/public/teacher/tch-thgn-05.png",
    logoAlt: "korean"
  },
  {
    id: "thgn-06",
    campus: "gangnam",
    name: "이진민",
    job: "강사님",
    description: ["대한항공", "객실승무원(경력7년)"],
    logo: logoKorean,
    profileImg: "/public/teacher/tch-thgn-06.png",
    logoAlt: "korean"
  },
  {
    id: "thgn-07",
    campus: "gangnam",
    name: "허정인",
    job: "강사님",
    description: ["이스타항공", "객실승무원"],
    logo: logoEstar,
    profileImg: "/public/teacher/tch-thgn-07.png",
    logoAlt: "eastar"
  },
  {
    id: "thgn-18",
    campus: "gangnam",
    name: "김태인",
    job: "강사님",
    description: ["아시아나항공", "진에어 동시합격"],
    logo: logoAsiana,
    profileImg: "/public/teacher/tch-thgn-18.png",
    logoAlt: "asiana"
  },
  {
    id: "thgn-08",
    campus: "gangnam",
    name: "정혜선",
    job: "강사님",
    description: ["대한항공", "객실승무원(경력16년)"],
    logo: logoKorean,
    profileImg: "/public/teacher/tch-thgn-08.png",
    logoAlt: "korean"
  },
  {
    id: "thgn-09",
    campus: "gangnam",
    name: "오선주",
    job: "강사님",
    description: ["그랜드하얏트", "5성급호텔 호텔리어,", "대한항공 객실승무원"],
    logo: logoKorean,
    profileImg: "/public/teacher/tch-thgn-09.png",
    logoAlt: "korean"
  },
  {
    id: "thgn-10",
    campus: "gangnam",
    name: "윤경숙",
    job: "강사님",
    description: ["항공사리더쉽", "스피치", "전문강사"],
    logo: logoKorean,
    profileImg: "/public/teacher/tch-thgn-10.png",
    logoAlt: "korean"
  },
  {
    id: "thgn-11",
    campus: "gangnam",
    name: "정은주",
    job: "강사님",
    description: ["취업면접 컨설턴트", "스피치", "전문강사"],
    logo: logoJeju,
    profileImg: "/public/teacher/tch-thgn-11.png",
    logoAlt: "jeju"
  },
  {
    id: "thgn-12",
    campus: "gangnam",
    name: "심유란",
    job: "교육실장",
    description: ["에메레이트항공", "사무장"],
    logo: logoEmirates,
    profileImg: "/public/teacher/tch-thgn-12.png",
    logoAlt: "emirates"
  },
  {
    id: "thgn-13",
    campus: "gangnam",
    name: "이효정",
    job: "강사님",
    description: ["케세이퍼시픽항공사", "객실승무원 경력 31년"],
    logo: logoCathay,
    profileImg: "/public/teacher/tch-thgn-13.png",
    logoAlt: "cathay"
  },
  {
    id: "thgn-14",
    campus: "gangnam",
    name: "권정연",
    job: "강사님",
    description: ["케세이퍼시픽항공사", "객실승무원 경력 28년"],
    logo: logoCathay,
        profileImg: "/public/teacher/tch-thgn-14.png",
    logoAlt: "cathay"
  },
  {
    id: "thgn-15",
    campus: "gangnam",
    name: "임현선",
    job: "강사님",
    description: ["외항사 취업전략과", "실전 1:1피드백", "전문 강사"],
    logo: logoEmirates,
        profileImg: "/public/teacher/tch-thgn-15.png",
    logoAlt: "emirates"
  },
  {
    id: "thgn-16",
    campus: "gangnam",
    name: "장효주",
    job: "강사님",
    description: ["영어인터뷰 및", "영어자문읽기", "전문 강사"],
    logo: logoHainan,
        profileImg: "/public/teacher/tch-thgn-16.png",
    logoAlt: "hainan"
  },
  {
    id: "thgn-17",
    campus: "gangnam",
    name: "이선미",
    job: "강사님",
    description: ["KBS강릉방송국", "아나운서"],
    logo: logoKbs,
        profileImg: "/public/teacher/tch-thgn-17.png",
    logoAlt: "KBS"
  },

  // 부산캠퍼스
  {
    id: "thbs-01",
    campus: "busan",
    name: "권하나",
    job: "강사님",
    description: ["Live the dream"],
    logo: logoBusan,
    profileImg: "/public/teacher/tch-thbs-01.png",
    logoAlt: "airbusan"
  },
  {
    id: "thbs-02",
    campus: "busan",
    name: "김개요",
    job: "강사님",
    description: ["노력과 성실함은", "배신하지 않는다"],
    logo: logoKorean,
    profileImg: "/public/teacher/tch-thbs-02.png",
    logoAlt: "korean",
    isDefault:true
  },
  {
    id: "thbs-03",
    campus: "busan",
    name: "김미현",
    job: "강사님",
    description: ["어제와 다른 오늘이", "내일을 만든다"],
    logo: logoKorean,
    profileImg: "/public/teacher/tch-thbs-03.png",
    logoAlt: "korean"
  },
  {
    id: "thbs-04",
    campus: "busan",
    name: "이선주",
    job: "강사님",
    description: ["You are going to", "have yourself", "awesome filghts!"],
    logo: logoQatar,
    profileImg: "/public/teacher/tch-thbs-04.png",
    logoAlt: "qatar"
  },
  {
    id: "thbs-05",
    campus: "busan",
    name: "배윤미",
    job: "강사님",
    description: ["꿈을 꾸고", "간절이 원하면", "꿈은 이루어진다"],
    logo: logoAsiana,
    profileImg: "/public/teacher/tch-thbs-05.png",
    logoAlt: "asiana"
  },
  {
    id: "thbs-06",
    campus: "busan",
    name: "강서영",
    job: "강사님",
    description: ["If you dream it,", "you can do it"],
    logo: logoKorean,
    profileImg: "/public/teacher/tch-thbs-06.png",
    logoAlt: "korean"
  },
  {
    id: "thbs-07",
    campus: "busan",
    name: "황숙현",
    job: "강사님",
    description: ["할 수 있다.", "안 하니까", "안 되는 거다."],
    logo: logo,
    profileImg: "/public/teacher/tch-thbs-07.png",
    logoAlt: "kcrew",
    isDefault:true
  },
  {
    id: "thbs-08",
    campus: "busan",
    name: "최진",
    job: "강사님",
    description: [
      "삶의 목적은 자기계발이다.",
      "바로 그 목적을",
      "실현하기 위해",
      "지금 여기 존재한다."
    ],
    logo: logo,
    profileImg: "/public/teacher/tch-thbs-08.png",    
    logoAlt: "kcrew"
  },
  {
    id: "thbs-09",
    campus: "busan",
    name: "남정화",
    job: "강사님",
    description: ["Moting will work", "unless you do"],
    logo: logoEmirates,
    profileImg: "/public/teacher/tch-thbs-09.png",    
    logoAlt: "emirates",
    isDefault:true
  },
  {
    id: "thbs-10",
    campus: "busan",
    name: "양선화",
    job: "강사님",
    description: [
      "너에게 두 손이 있는",
      "이유는 하나는",
      "너 자신 다른 하나는",
      "남을 돕기 위해서이다."
    ],
    logo: logoEmirates,
    profileImg: "/public/teacher/tch-thbs-10.png",    
    logoAlt: "emirates",
    isDefault:true
  },
  {
    id: "thbs-11",
    campus: "busan",
    name: "정은하",
    job: "강사님",
    description: [
      "당신에게 그 꿈을 실현하는데",
      "필요한 자질이 없었다면",
      "애초에 그런 꿈을 품게 되지도",
      "않았을 것이다."
    ],
    logo: logoEmirates,
    profileImg: "/public/teacher/tch-thbs-11.png",    
    logoAlt: "emirates",
    isDefault:true
  },
  {
    id: "thbs-12",
    campus: "busan",
    name: "송지예",
    job: "강사님",
    description: ["꾸준함도 재능이다.", "될 때까지 해보자."],
    logo: logoBusan,
    profileImg: "/public/teacher/tch-thbs-12.png",    
    logoAlt: "airbusan"
  },
  {
    id: "thbs-13",
    campus: "busan",
    name: "이세빈",
    job: "강사님",
    description: ["Real", "recognize", "real"],
    logo: logo,
    profileImg: "/public/teacher/tch-thbs-13.png",    
    logoAlt: "kcrew"
  },
  {
    id: "thbs-14",
    campus: "busan",
    name: "성은주",
    job: "강사님",
    description: [
      "내 앞을 가로막고",
      "있는 것은 벽이 아니라",
      "문 일지도 모른다."
    ],
    logo: logoAsiana,
    profileImg: "/public/teacher/tch-thbs-14.png",    
    logoAlt: "asiana",
    isDefault:true
  }
];
