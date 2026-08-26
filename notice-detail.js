/* =========================
   공지사항 데이터
========================= */

const noticeData = {

    1: {
        category: "공지",
        title: "월간 1호 전력망 사업 바로알기",
        date: "2026.08.20",

        content:
            "전력망 사업의 추진 배경과 주요 내용, 관련 정보를 이해하기 쉽게 정리하여 안내드립니다.\n\n자세한 내용은 첨부파일을 확인해주세요.",

        file: "files/월간 1호 전력망 사업 바로알기.pdf",
        fileName: "월간 1호 전력망 사업 바로알기.pdf"
    },


    2: {
        category: "안내",
        title: "소통쉼터 홈페이지 이용 안내",
        date: "2026.08.19",

        content:
            "소통쉼터 홈페이지 이용과 관련된 주요 기능을 안내드립니다.\n\n지역별 소통쉼터 정보와 사업현황, 운영안내, 시설안내 등 다양한 정보를 홈페이지에서 편리하게 확인하실 수 있습니다.",

        file: null,
        fileName: null
    },


    3: {
        category: "공지",
        title: "지역별 소통쉼터 운영 안내",
        date: "2026.08.18",

        content:
            "지역별 소통쉼터 운영에 관한 주요 사항을 안내드립니다.\n\n각 지역의 소통쉼터를 통해 사업 관련 정보를 확인하고 상담 및 주민 소통 서비스를 이용하실 수 있습니다.",

        file: null,
        fileName: null
    },


    4: {
        category: "안내",
        title: "상담예약 서비스 이용 안내",
        date: "2026.08.17",

        content:
            "소통쉼터 상담예약 서비스 이용 방법을 안내드립니다.\n\n상담이 필요한 주민께서는 상담예약 서비스를 통해 원하는 상담 내용을 접수하고 편리하게 상담을 이용하실 수 있습니다.",

        file: null,
        fileName: null
    },


    5: {
        category: "안내",
        title: "소통쉼터 시설 이용 안내",
        date: "2026.08.16",

        content:
            "소통쉼터 내 시설 이용과 관련된 사항을 안내드립니다.\n\n상담실, 주민 소통 공간, 안내 공간 및 휴식 공간 등 소통쉼터에서 제공하는 시설을 편리하게 이용하실 수 있습니다.",

        file: null,
        fileName: null
    },


    6: {
        category: "안내",
        title: "주민제안·경청 서비스 안내",
        date: "2026.08.15",

        content:
            "주민제안·경청 서비스 이용 방법을 안내드립니다.\n\n지역 및 사업과 관련된 의견이나 제안사항을 전달할 수 있으며, 주민의 다양한 목소리를 가까이에서 듣고 더 나은 소통을 만들어가기 위해 운영됩니다.",

        file: null,
        fileName: null
    },


    7: {
        category: "안내",
        title: "주민지원사업 이용 안내",
        date: "2026.08.18",

        content:
            "주민지원사업의 주요 내용과 이용 방법을 안내드립니다.\n\n지역 주민을 위한 지원사업의 내용과 관련 정보를 확인할 수 있으며, 자세한 사항은 주민지원사업 페이지에서 확인하실 수 있습니다.",

        file: null,
        fileName: null
    }

};



/* =========================
   URL에서 공지 ID 가져오기
========================= */

const params =
    new URLSearchParams(
        window.location.search
    );

const noticeId =
    params.get("id") || "1";

const notice =
    noticeData[noticeId];



/* =========================
   존재하지 않는 공지 처리
========================= */

if (!notice) {

    window.location.href =
        "notice.html";

}



/* =========================
   HTML 요소
========================= */

const category =
    document.getElementById(
        "noticeDetailCategory"
    );

const title =
    document.getElementById(
        "noticeDetailTitle"
    );

const date =
    document.getElementById(
        "noticeDetailDate"
    );

const content =
    document.getElementById(
        "noticeDetailContent"
    );

const fileBox =
    document.getElementById(
        "noticeDetailFile"
    );

const fileLink =
    document.getElementById(
        "noticeDetailFileLink"
    );



/* =========================
   공지 내용 출력
========================= */

if (notice) {

    category.textContent =
        notice.category;

    title.textContent =
        notice.title;

    date.textContent =
        notice.date;

    content.textContent =
        notice.content;


    /* 브라우저 제목도 변경 */

    document.title =
        notice.title +
        " | 소통쉼터";


    /* =========================
       첨부파일
    ========================= */

    if (
        notice.file &&
        notice.fileName
    ) {

        fileBox.style.display =
            "flex";

        fileLink.href =
            notice.file;

        fileLink.textContent =
            notice.fileName;

    }

    else {

        fileBox.style.display =
            "none";

    }

}