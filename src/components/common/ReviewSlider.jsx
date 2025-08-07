import React from "react";
import reviewInha from "../../assets/img/review_inha.png";
import reviewHanseo from "../../assets/img/review_hanseo.png";
import reviewTrans from "../../assets/img/review_transportation.png";
import "../../assets/css/main.css"; // CSS 그대로 사용

// 리뷰 데이터 배열
const reviews = [
  {
    img: reviewInha,
    alt: "인하공전대학교",
    name: "김은서",
    text: "정재학 선생님, 제가 준비를 늦게 시작해서 걱정이 많고 혼란스러울때가 많았는데 그때마다 묵묵히 옆에서 조언해 주시고,모르는 부분도 잘 설명해 주셔서 입시에 집중해서 준비할 수 있었습니다. 정말 감사합니다!",
  },
  {
    img: reviewHanseo,
    alt: "한서대학교",
    name: "유승민",
    text: "저는 항공과 준비를 몇개월 되지 않는 짧은 시간에 준비한 것이라 남들보다 늦게 시작하는 것 같아 초조할 때도 있었고, 면접을 준비하는 과정이 결코 쉽지 않고 힘들 때도 있었지만 제가 오랫동안 꿈꿔왔던 것을 시도할 수 있다는 것이 큰 힘이 되었습니다.",
  },
  {
    img: reviewTrans,
    alt: "한국교통대학교",
    name: "홍준표",
    text: "코리아에 오니 정말 좋으신 선생님분들과 멘토쌤을 만나면서 자신감을 키워갔습니다 때로는 날카로운 피드백으로 더욱 성장하게 해주시고 때로는 정말 따수운 말들도 많이 해주셨습니다",
  },
];

const ReviewSlider = () => {
  // 원래 스크립트는 review-track 내용을 반복해서 붙여 무한 루프 효과를 냈음
  // React에서는 map으로 repeatCount만큼 반복 배열 생성
  const repeatCount = 4;
  const repeatedReviews = Array.from({ length: repeatCount }, () => reviews).flat();

  return (
    <section className="section review-slider">
      <div className="wrap">
        <div className="title-box">
          <h2>Dreams Come True</h2>
          <p className="pc-show">
            코리아항공운항과에서 미리 준비를 시작한 학생들은 대학별 지원유형에 따라 <br />
            합격률을 높일 수 있는 가능성을 대비할 수 있습니다.
          </p>
          <p className="mo-show">
            코리아항공운항과에서 미리 준비를 시작한 학생들은 대학별 지원유형에 따라 합격률을 높일 수 있는 가능성을 대비할 수 있습니다.
          </p>
        </div>

        <div className="cont-box reviewSlide">
          <div className="review-track">
            {repeatedReviews.map((review, idx) => (
              <div className="slide" key={idx}>
                <em>
                  <img src={review.img} alt={review.alt} />
                </em>
                <div className="txts">
                  <div className="name">
                    <span>{review.name}</span> 수강생
                  </div>
                  <p>{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <a href="/searchAirline.asp" className="link-btn">
          지원가능한 대학 조회하기<span className="arrow"></span>
        </a>
      </div>
    </section>
  );
};

export default ReviewSlider;
