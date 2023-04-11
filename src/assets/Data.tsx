import React from "react";

interface DATA {
  id: number;
  name: string;
  content: string;
  link: string;
  src: string;
}

const Data: DATA[] = [
  {
    id: 1,
    name: "피지컬갤러리",
    content:
      "재밌고 유익한 체형교정과 재활 정보를 알려주는 빡빡이 아저씨를 볼 수 있는 채널. 제공되는 정보들은 의학적 진단, 진료 혹은 치료를 대신하려는 목적이 아니며, 건강상태에 관한 의문점이나 걱정이 있다면 실제 전문의사/전문가를 찾아 진단을 받아야 합니다.",
    link: "https://www.youtube.com/channel/UCdtRAcd3L_UpV4tMXCw63NQ",
    src: "/images/physicalGallery.png",
  },
  {
    id: 2,
    name: "김종국 GYM JONG KOOK ",
    content:
      "안녕하세요 김종국.. 아니 GYM 종국 ㅎ 입니다 ㅎ자격증 이라곤 이 몸땡이 뿐인 ㅎ그냥 운동 좋아하고 오래 한 ㅎ 동네 아저씨 ㅎ우리 다함께 건강한 대한민국을 위해서 쭉 함 달려봅시다!! 💪",
    link: "https://www.youtube.com/channel/UCoe-0EVDJnjlSoPK8ygcGwQ",
    src: "/images/gymjongkook.png",
  },
  {
    id: 3,
    name: "핏블리 FITVELY",
    content:
      "'운동독학, 누구나 쉽고 전문적으로' 국제트레이너 / 스포츠영양코치 / BJ치즈볼 / 타락헬창40여개국 세계여행&전문 자격증으로 탄생한 핏블리어느덧 50명의 팀원과 함께하는 운동교육 벤처기업(주)핏블리",
    link: "https://www.youtube.com/@fitvely/about",
    src: "/images/fitvely.png",
  },
  {
    id: 4,
    name: "힙으뜸",
    content:
      "🥇국내 1위 여성 운동 크리에이터 🥇국내 최초 100만 여성 운동 크리에이터",
    link: "https://www.youtube.com/channel/UC4yq3FWEWqMvFNFBsV3gbKQ",
    src: "/images/hipettum.png",
  },
];

export default Data;
