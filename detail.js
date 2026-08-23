/* =========================
   URL에서 지역 가져오기
========================= */

const params =
    new URLSearchParams(
        window.location.search
    );


const region =
    params.get("region") || "평창";

const selectedTab =
    params.get("tab") || "status";



/* =========================
   쉼터 데이터
========================= */

const shelterData = {

    평창: {

        name:
            "평창 소통쉼터",

        address:
            "강원특별자치도 평창군 평창읍 문화길 14-6",

        hours:
            "운영시간 확인 중",

        phone:
            "전화번호 확인 중",

        route:
            "평창읍 중심부에서 차량으로 이동 가능합니다.",

        lat:
            37.3708,

        lng:
            128.3900,

        overview:
            "평창 지역 주민과 소통하기 위한 공간입니다.",

        jurisdiction:
            "평창군 및 인근 지역",

        statusTitle:
            "평창 소통쉼터 조성 사업",

        statusText:
            "평창 지역 주민과의 소통을 강화하고 다양한 의견을 듣기 위해 운영되는 소통 공간입니다.",

        phase:
            "운영 중",

        openDate:
            "확인 중",

        operator:
            "운영기관 확인 중"

    },


    태백: {

        name:
            "태백 소통쉼터",

        address:
            "강원특별자치도 태백시 평화길 15",

        hours:
            "운영시간 확인 중",

        phone:
            "전화번호 확인 중",

        route:
            "태백시 중심부에서 차량으로 이동 가능합니다.",

        lat:
            37.1641,

        lng:
            128.9856,

        overview:
            "태백 지역 주민과 소통하기 위한 공간입니다.",

        jurisdiction:
            "태백시 및 인근 지역",

        statusTitle:
            "태백 소통쉼터 조성 사업",

        statusText:
            "태백 지역 주민과의 소통을 강화하고 다양한 의견을 듣기 위해 운영되는 소통 공간입니다.",

        phase:
            "운영 중",

        openDate:
            "확인 중",

        operator:
            "운영기관 확인 중"

    },

    홍천: {

        name:
            "홍천 소통쉼터",

        address:
            "강원특별자치도 홍천군 홍천읍 홍천로 376",

        hours:
            "09:00 ~ 18:00",

        lat:
            37.6972,

        lng:
            127.8889,

        overview:
            "홍천 지역 주민과 소통하기 위한 공간입니다.",

        jurisdiction:
            "홍천군 및 인근 지역",

        phone:
            "전화번호 확인 중",

        route:
            "홍천읍 중심부에서 차량으로 이동 가능합니다.",

        statusTitle:
            "홍천 소통쉼터 조성 사업",

        statusText:
            "홍천 지역 주민과의 소통을 강화하고 다양한 의견을 듣기 위해 운영되는 소통 공간입니다.",

        phase:
            "운영 중",

        openDate:
            "확인 중",

        operator:
            "운영기관 확인 중"

    },


    괴산: {

        name:
            "괴산 소통쉼터",

        address:
            "충청북도 괴산군 괴산읍 임꺽정로 90",

        hours:
            "운영시간 확인 중",

        lat:
            36.8153,

        lng:
            127.7867,

        overview:
            "괴산 지역 주민과 소통하기 위한 공간입니다.",

        jurisdiction:
            "괴산군 및 인근 지역",

        phone:
            "전화번호 확인 중",

        route:
            "괴산읍 중심부에서 차량으로 이동 가능합니다.",

        statusTitle:
            "괴산 소통쉼터 조성 사업",

        statusText:
            "괴산 지역 주민과의 소통을 강화하고 다양한 의견을 듣기 위해 운영되는 소통 공간입니다.",

        phase:
            "운영 중",

        openDate:
            "확인 중",

        operator:
            "운영기관 확인 중"

    },


    전주: {

        name:
            "전주 소통쉼터",

        address:
            "전북특별자치도 전주시 덕진구 백제대로 832",

        hours:
            "운영시간 확인 중",

        lat:
            35.8242,

        lng:
            127.1480,

        overview:
            "전주 지역 주민과 소통하기 위한 공간입니다.",

        jurisdiction:
            "전주시 및 인근 지역",

        phone:
            "전화번호 확인 중",

        route:
            "전주시 중심부에서 차량으로 이동 가능합니다.",

        statusTitle:
            "전주 소통쉼터 조성 사업",

        statusText:
            "전주 지역 주민과의 소통을 강화하고 다양한 의견을 듣기 위해 운영되는 소통 공간입니다.",

        phase:
            "운영 중",

        openDate:
            "확인 중",

        operator:
            "운영기관 확인 중"

    },


    고창: {

        name:
            "고창 소통쉼터",

        address:
            "전북특별자치도 고창군 고창읍 보릿골로 85",

        hours:
            "운영시간 확인 중",

        lat:
            35.4358,

        lng:
            126.7019,

        overview:
            "고창 지역 주민과 소통하기 위한 공간입니다.",

        jurisdiction:
            "고창군 및 인근 지역",

        phone:
            "전화번호 확인 중",

        route:
            "고창읍 중심부에서 차량으로 이동 가능합니다.",

        statusTitle:
            "고창 소통쉼터 조성 사업",

        statusText:
            "고창 지역 주민과의 소통을 강화하고 다양한 의견을 듣기 위해 운영되는 소통 공간입니다.",

        phase:
            "운영 중",

        openDate:
            "확인 중",

        operator:
            "운영기관 확인 중"

    }

};



const shelter =
    shelterData[region] ||
    shelterData["평창"];

    /* =========================
        비어 있는 정보 기본값
    ========================= */

    function getValue(
        value,
        fallback
    ) {

        return value &&
            value.trim() !== ""
            ? value
            : fallback;

    }

    /* =========================
        지역 선택
    ========================= */

    const regionSelect =
        document.getElementById(
            "regionSelect"
        );


    if (regionSelect) {

        regionSelect.value =
            region;


        regionSelect.addEventListener(
            "change",
            function () {

                const newRegion =
                    regionSelect.value;


                const currentTab =
                    new URLSearchParams(
                        window.location.search
                    ).get("tab") || "status";


                window.location.href =
                    "detail.html?region=" +
                    encodeURIComponent(newRegion) +
                    "&tab=" +
                    encodeURIComponent(currentTab);

            }
        );

    }



/* =========================
   화면 정보 변경
========================= */

document.getElementById(
    "detailTitle"
).textContent =
    shelter.name;


document.getElementById(
    "overviewText"
).textContent =
    shelter.overview;


document.getElementById(
    "jurisdictionText"
).textContent =
    shelter.jurisdiction;


document.getElementById(
    "detailHours"
).textContent =
    getValue(
        shelter.hours,
        "운영시간 확인 중"
    );

document.getElementById(
    "detailAddress"
).textContent =
    shelter.address;

const detailPhone =
    document.getElementById(
        "detailPhone"
    );

const routeText =
    document.getElementById(
        "routeText"
    );


if (detailPhone) {

    detailPhone.textContent =
        getValue(
            shelter.phone,
            "전화번호 확인 중"
        );

}


if (routeText) {

    routeText.textContent =
        getValue(
            shelter.route,
            "방문 경로 정보 확인 중"
        );

}

/* =========================
   사업현황 정보
========================= */

const statusOverviewTitle =
    document.getElementById(
        "statusOverviewTitle"
    );

const statusOverviewText =
    document.getElementById(
        "statusOverviewText"
    );

const statusPhase =
    document.getElementById(
        "statusPhase"
    );

const statusArea =
    document.getElementById(
        "statusArea"
    );

const statusOpenDate =
    document.getElementById(
        "statusOpenDate"
    );

const statusOperator =
    document.getElementById(
        "statusOperator"
    );


if (statusOverviewTitle) {
    statusOverviewTitle.textContent =
        shelter.statusTitle ||
        "소통쉼터 조성 사업";
}

if (statusOverviewText) {
    statusOverviewText.textContent =
        shelter.statusText ||
        shelter.overview;
}

if (statusPhase) {
    statusPhase.textContent =
        shelter.phase ||
        "운영 중";
}

if (statusArea) {
    statusArea.textContent =
        shelter.jurisdiction;
}

if (statusOpenDate) {
    statusOpenDate.textContent =
        shelter.openDate ||
        "확인 중";
}

if (statusOperator) {
    statusOperator.textContent =
        shelter.operator ||
        "운영기관 확인 중";
}


/* =========================
   상세페이지 메뉴
========================= */

const detailButtons =
    document.querySelectorAll(
        ".detail-nav-button"
    );


const detailPanels =
    document.querySelectorAll(
        ".detail-panel"
    );


detailButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {


                detailButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                detailPanels.forEach(
                    function (panel) {

                        panel.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                const target =
                    button.dataset.detail;


                document.getElementById(
                    target
                ).classList.add(
                    "active"
                );

            }
        );

    }
);

/* =========================
   URL에 따라 처음 열릴 탭 설정
========================= */

const allowedTabs = [
    "status",
    "support",
    "operation",
    "facility",
    "reservation",
    "suggestion"
];


const initialTab =
    allowedTabs.includes(selectedTab)
        ? selectedTab
        : "status";


/* 모든 탭 선택 해제 */

detailButtons.forEach(
    function (button) {

        button.classList.remove(
            "active"
        );

    }
);


/* 모든 내용 숨기기 */

detailPanels.forEach(
    function (panel) {

        panel.classList.remove(
            "active"
        );

    }
);


/* 선택된 메뉴 활성화 */

const initialButton =
    document.querySelector(
        `.detail-nav-button[data-detail="${initialTab}"]`
    );


/* 선택된 내용 활성화 */

const initialPanel =
    document.getElementById(
        initialTab
    );


if (initialButton) {

    initialButton.classList.add(
        "active"
    );

}


if (initialPanel) {

    initialPanel.classList.add(
        "active"
    );

}



/* =========================
   상세페이지 지도
========================= */

const mapContainer =
    document.getElementById(
        "detailMap"
    );


const mapOptions = {

    center:
        new kakao.maps.LatLng(
            shelter.lat,
            shelter.lng
        ),

    level: 6

};


const detailMap =
    new kakao.maps.Map(
        mapContainer,
        mapOptions
    );


const markerPosition =
    new kakao.maps.LatLng(
        shelter.lat,
        shelter.lng
    );


new kakao.maps.Marker({

    position:
        markerPosition,

    map:
        detailMap

});

/* =========================
   지도에서 보기 버튼
========================= */

const mapLinkButton =
    document.getElementById(
        "mapLinkButton"
    );


if (mapLinkButton) {

    mapLinkButton.addEventListener(
        "click",
        function () {


            /* 지도 중심을 쉼터 위치로 이동 */

            detailMap.setCenter(

                new kakao.maps.LatLng(
                    shelter.lat,
                    shelter.lng
                )

            );


            /* 페이지 위쪽 지도까지 이동 */

            document
                .getElementById("detailMap")
                .scrollIntoView({

                    behavior: "smooth",

                    block: "center"

                });

        }
    );

}

/* =========================
   상담예약
========================= */

const reservationDate =
    document.getElementById(
        "reservationDate"
    );

const timeButtons =
    document.querySelectorAll(
        ".time-button"
    );

const selectedDateText =
    document.getElementById(
        "selectedDateText"
    );

const selectedTimeText =
    document.getElementById(
        "selectedTimeText"
    );

const reservationSubmit =
    document.getElementById(
        "reservationSubmit"
    );


let selectedTime = null;

/* 날짜 선택 전 시간 버튼 비활성화 */

timeButtons.forEach(
    function (button) {

        button.disabled = true;

    }
);


/* =========================
   오늘 이전 날짜 선택 방지
========================= */

if (reservationDate) {

    const today =
        new Date();

    const year =
        today.getFullYear();

    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            today.getDate()
        ).padStart(2, "0");


    const todayString =
        `${year}-${month}-${day}`;


    reservationDate.min =
        todayString;


    reservationDate.addEventListener(
        "change",
        function () {

            if (
                selectedDateText
            ) {

                selectedDateText.textContent =
                    reservationDate.value ||
                    "선택 안됨";

            }


            /* 기존 시간 선택 초기화 */

            selectedTime = null;


            timeButtons.forEach(
                function (button) {

                    button.classList.remove(
                        "active"
                    );


                    button.disabled =
                        !reservationDate.value;

                }
            );


            if (
                selectedTimeText
            ) {

                selectedTimeText.textContent =
                    "선택 안됨";

            }

        }
    );

}


/* =========================
   시간 선택
========================= */

timeButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                timeButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                selectedTime =
                    button.dataset.time;


                if (
                    selectedTimeText
                ) {

                    selectedTimeText.textContent =
                        selectedTime;

                }

            }
        );

    }
);


/* =========================
   예약하기
========================= */

if (reservationSubmit) {

    reservationSubmit.addEventListener(
        "click",
        function () {

            const selectedDate =
                reservationDate.value;


            if (!selectedDate) {

                alert(
                    "상담 날짜를 선택해주세요."
                );

                return;

            }


            if (!selectedTime) {

                alert(
                    "상담 시간을 선택해주세요."
                );

                return;

            }


            alert(
                `${shelter.name}\n\n` +
                `예약 날짜 : ${selectedDate}\n` +
                `예약 시간 : ${selectedTime}\n\n` +
                `상담예약이 접수되었습니다.`
            );

        }
    );

}

/* =========================
   주민제안·경청
========================= */

const suggestionForm =
    document.getElementById(
        "suggestionForm"
    );


if (suggestionForm) {

    suggestionForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "suggestionName"
                ).value.trim();


            const phone =
                document.getElementById(
                    "suggestionPhone"
                ).value.trim();


            const category =
                document.getElementById(
                    "suggestionCategory"
                ).value;


            const title =
                document.getElementById(
                    "suggestionTitle"
                ).value.trim();


            const content =
                document.getElementById(
                    "suggestionContent"
                ).value.trim();


            /* 필수값 확인 */

            if (!name) {

                alert(
                    "이름을 입력해주세요."
                );

                return;

            }


            if (!category) {

                alert(
                    "제안 유형을 선택해주세요."
                );

                return;

            }


            if (!title) {

                alert(
                    "제안 제목을 입력해주세요."
                );

                return;

            }


            if (!content) {

                alert(
                    "제안 내용을 입력해주세요."
                );

                return;

            }


            /* 현재는 테스트용 */

            alert(
                "주민제안이 등록되었습니다.\n\n" +
                "지역 : " +
                shelter.name +
                "\n" +
                "유형 : " +
                category +
                "\n" +
                "제목 : " +
                title
            );


            /* 입력 초기화 */

            suggestionForm.reset();

        }
    );

}

/* =========================
   TOP 버튼
========================= */

const topButton =
    document.getElementById(
        "topButton"
    );


if (topButton) {

    topButton.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}