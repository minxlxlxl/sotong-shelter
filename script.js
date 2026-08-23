/* =========================
   메뉴
========================= */

const menuButton =
    document.getElementById("menuButton");

const closeMenu =
    document.getElementById("closeMenu");

const sideMenu =
    document.getElementById("sideMenu");

const menuOverlay =
    document.getElementById("menuOverlay");


function openMenu() {

    sideMenu.classList.add("active");

    menuOverlay.classList.add("active");

    menuButton.classList.add("active");

}


function closeSideMenu() {

    sideMenu.classList.remove("active");

    menuOverlay.classList.remove("active");

    menuButton.classList.remove("active");

}

/* =========================
   사이드 메뉴 링크 클릭 시 닫기
========================= */

const sideMenuLinks =
    document.querySelectorAll(
        ".side-menu a"
    );


sideMenuLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                closeSideMenu();

            }
        );

    }
);


menuButton.addEventListener(
    "click",
    openMenu
);


closeMenu.addEventListener(
    "click",
    closeSideMenu
);


menuOverlay.addEventListener(
    "click",
    closeSideMenu
);


/* =========================
   지역 데이터
========================= */

const regionData = {

    평창: {
        description: "평창 지역의 소통쉼터 위치입니다.",
        shelters: [
            {
                name: "평창愛 빛나눔쉼터",
                address: "강원특별자치도 평창군 평창읍 문화길 14-6",
                hours: "운영시간 확인 중"
            }
        ]
    },

    태백: {
        description: "태백 지역의 소통쉼터 위치입니다.",
        shelters: [
            {
                name: "태백 다가가는 소통쉼터",
                address: "강원특별자치도 태백시 평화길 15",
                hours: "운영시간 확인 중"
            }
        ]
    },

    홍천: {
        description: "홍천 지역의 소통쉼터 위치입니다.",
        shelters: [
            {
                name: "홍천 다가가는 소통쉼터",
                address: "강원특별자치도 홍천군 홍천읍 홍천로 376",
                detail: "방주빌딩 1층",
                hours: "09:00 ~ 18:00"
            }
        ]
    },

    괴산: {
        description: "괴산 지역의 소통쉼터 위치입니다.",
        shelters: [
            {
                name: "괴산 소통쉼터",
                address: "충청북도 괴산군 괴산읍 임꺽정로 90",
                hours: "운영시간 확인 중"
            }
        ]
    },

    전주: {
        description: "전주 지역의 소통쉼터 위치입니다.",
        shelters: [
            {
                name: "전북지역 다가가는 소통쉼터",
                address: "전북특별자치도 전주시 덕진구 백제대로 832",
                hours: "운영시간 확인 중"
            }
        ]
    },

    고창: {
        description: "고창 지역의 소통쉼터 위치입니다.",
        shelters: [
            {
                name: "고창군 다가가는 소통쉼터",
                address: "전북특별자치도 고창군 고창읍 보릿골로 85",
                detail: "3층",
                hours: "운영시간 확인 중"
            }
        ]
    }

};


/* =========================
   지역 요소
========================= */

const regionTabs =
    document.querySelectorAll(
        ".region-tab"
    );

const selectedRegion =
    document.getElementById(
        "selectedRegion"
    );

const regionDescription =
    document.getElementById(
        "regionDescription"
    );


/* =========================
   카카오맵 변수
========================= */

let kakaoMap = null;

let kakaoMarkers = [];


/* =========================
   지역 변경
========================= */

function changeRegion(regionName) {

    const region =
        regionData[regionName];


    if (!region) {
        return;
    }


    /* 지역 이름 */

    if (selectedRegion) {

        selectedRegion.textContent =
            regionName;

    }

    const desktopRegionStatus =
        document.getElementById(
            "desktopRegionStatus"
        );

    if (desktopRegionStatus) {

        desktopRegionStatus.textContent =
            regionName;

    }

    const headerReservationButton =
        document.querySelector(
            ".header-reservation-button"
        );

    if (headerReservationButton) {

        headerReservationButton.href =
            "detail.html?region=" +
            encodeURIComponent(regionName) +
            "&tab=reservation";

        headerReservationButton.textContent =
            regionName + " 상담예약";

    }

    const desktopReservationButton =
        document.querySelector(
            ".desktop-reservation-button"
        );

    if (desktopReservationButton) {

        desktopReservationButton.href =
            "detail.html?region=" +
            encodeURIComponent(regionName) +
            "&tab=reservation";

        const reservationText =
            desktopReservationButton.querySelector(
                "span"
            );

        if (reservationText) {

            reservationText.textContent =
                regionName + " 상담예약";

        }

    }

    const headerRegionName =
        document.getElementById(
            "headerRegionName"
        );

    if (headerRegionName) {

        headerRegionName.textContent =
            regionName;

    }

    desktopRegionButtons.forEach(
        function (button) {

            button.classList.toggle(
                "active",
                button.dataset.region === regionName
            );

        }
    );


    /* 지역 설명 */

    if (regionDescription) {

        regionDescription.textContent =
            regionName + " 지역의 사업지역과 관련 정보를 확인할 수 있습니다.";

    }


    /* 카카오맵 */

    if (kakaoMap) {

        updateKakaoMap(
            regionName
        );

    }

}


/* =========================
   지역 버튼 클릭
========================= */

regionTabs.forEach(
    function (tab) {

        tab.addEventListener(
            "click",
            function () {


                /* 모든 버튼 비활성화 */

                regionTabs.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                /* 현재 버튼 활성화 */

                tab.classList.add(
                    "active"
                );


                /* 지역 이름 */

                const regionName =
                    tab.dataset.region;


                /* 지역 변경 */

                changeRegion(
                    regionName
                );

            }
        );

    }
);


/* =========================
   기존 쉼터 마커
========================= */

const markers =
    document.querySelectorAll(
        ".marker"
    );

const shelterModal =
    document.getElementById(
        "shelterModal"
    );

const modalClose =
    document.getElementById(
        "modalClose"
    );

const modalName =
    document.getElementById(
        "modalName"
    );

const modalAddress =
    document.getElementById(
        "modalAddress"
    );


/* 기존 HTML 마커가 있을 경우 */

markers.forEach(
    function (marker) {

        marker.addEventListener(
            "click",
            function () {

                const name =
                    marker.dataset.name;

                const address =
                    marker.dataset.address;


                if (modalName) {

                    modalName.textContent =
                        name;

                }


                if (modalAddress) {

                    modalAddress.textContent =
                        address;

                }


                if (shelterModal) {

                    shelterModal.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =========================
   팝업 닫기
========================= */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        function () {

            shelterModal.classList.remove(
                "active"
            );

        }
    );

}


/* =========================
   팝업 바깥쪽 클릭
========================= */

if (shelterModal) {

    shelterModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                shelterModal
            ) {

                shelterModal.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* =========================
   ESC 키
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeSideMenu();


            if (shelterModal) {

                shelterModal.classList.remove(
                    "active"
                );

            }

        }

    }
);


/* =========================
   메인 사진 슬라이더
========================= */

const slides =
    document.querySelectorAll(
        ".slide"
    );

const dots =
    document.querySelectorAll(
        ".dot"
    );

let currentSlide = 0;


/* 슬라이드 변경 */

function showSlide(index) {

    if (
        slides.length === 0
    ) {

        return;

    }


    slides.forEach(
        function (slide) {

            slide.classList.remove(
                "active"
            );

        }
    );


    dots.forEach(
        function (dot) {

            dot.classList.remove(
                "active"
            );

        }
    );


    slides[index].classList.add(
        "active"
    );


    if (dots[index]) {

        dots[index].classList.add(
            "active"
        );

    }


    currentSlide = index;

}

/* 아래 점 클릭 */

dots.forEach(
    function (dot) {

        dot.addEventListener(
            "click",
            function () {

                const index =
                    Number(
                        dot.dataset.slide
                    );


                showSlide(index);

            }
        );

    }
);


/* 자동 슬라이드 */

if (
    slides.length > 0
) {

    setInterval(
        function () {

            let next =
                currentSlide + 1;


            if (
                next >= slides.length
            ) {

                next = 0;

            }


            showSlide(next);

        },
        5000
    );

}


/* =========================
   카카오맵 지역 정보
========================= */

const regionMapData = {

    평창: {
        lat: 37.3708,
        lng: 128.3900,
        level: 10
    },

    태백: {
        lat: 37.1641,
        lng: 128.9856,
        level: 10
    },

    홍천: {
        lat: 37.6972,
        lng: 127.8889,
        level: 10
    },

    괴산: {
        lat: 36.8153,
        lng: 127.7867,
        level: 10
    },

    전주: {
        lat: 35.8242,
        lng: 127.1480,
        level: 10
    },

    고창: {
        lat: 35.4358,
        lng: 126.7019,
        level: 10
    }

};


/* =========================
   카카오맵 지역 변경
========================= */

function updateKakaoMap(regionName) {

    if (!kakaoMap) {
        return;
    }


    const mapData =
        regionMapData[regionName];


    if (!mapData) {
        return;
    }


    /* 기존 마커 삭제 */

    kakaoMarkers.forEach(
        function (marker) {

            marker.setMap(null);

        }
    );


    kakaoMarkers = [];


    /* 지도 중심 이동 */

    const movePosition =
        new kakao.maps.LatLng(
            mapData.lat,
            mapData.lng
        );


    kakaoMap.setCenter(
        movePosition
    );


    kakaoMap.setLevel(
        mapData.level
    );


    /* 지역 데이터 */

    const region =
        regionData[regionName];


    if (!region) {
        return;
    }


    /* 주소 검색 객체 */

    const geocoder =
        new kakao.maps.services.Geocoder();


    /* 쉼터별 주소 검색 */

    region.shelters.forEach(
        function (shelter) {

            geocoder.addressSearch(
                shelter.address,

                function (
                    result,
                    status
                ) {

                    if (
                        status ===
                        kakao.maps.services.Status.OK
                    ) {

                        /* 주소 → 좌표 */

                        const position =
                            new kakao.maps.LatLng(
                                result[0].y,
                                result[0].x
                            );


                        /* 마커 생성 */

                        const marker =
                            new kakao.maps.Marker({

                                map:
                                    kakaoMap,

                                position:
                                    position

                            });


                        kakaoMarkers.push(
                            marker
                        );


                        /* 정보창 */

                        const infoWindow =
                            new kakao.maps.InfoWindow({

                                content: `

                                    <div style="
                                        padding:14px;
                                        min-width:230px;
                                        line-height:1.6;
                                        font-size:13px;
                                    ">

                                        <strong style="
                                            font-size:15px;
                                        ">
                                            ${shelter.name}
                                        </strong>

                                        <br>

                                        <span>
                                            ${shelter.address}
                                        </span>

                                        <br>

                                        <span>
                                            운영시간 :
                                            ${shelter.hours || "정보 없음"}
                                        </span>

                                    </div>

                                `

                            });


                        /* 마커 클릭 */

                        kakao.maps.event.addListener(
                            marker,
                            "click",
                            function () {

                                const url =
                                    "detail.html?region=" +
                                    encodeURIComponent(
                                        regionName
                                    );


                                moveWithLoading(
                                    url
                                );

                            }
                        );


                    } else {

                        console.warn(
                            "주소 검색 실패:",
                            shelter.address
                        );

                    }

                }
            );

        }
    );

}


/* =========================
   카카오맵 초기화
========================= */

function initKakaoMap() {

    /*
        SDK 확인
    */

    if (
        typeof window.kakao ===
        "undefined"
    ) {

        console.error(
            "카카오맵 SDK가 로드되지 않았습니다."
        );

        return;

    }


    if (
        !window.kakao.maps
    ) {

        console.error(
            "카카오맵 Maps SDK가 없습니다."
        );

        return;

    }


    /*
        지도 영역
    */

    const container =
        document.getElementById(
            "kakaoMap"
        );


    if (!container) {

        console.error(
            "#kakaoMap 요소를 찾을 수 없습니다."
        );

        return;

    }


    /*
        카카오맵 SDK 로드 완료 후
        실제 지도 생성
    */

    kakao.maps.load(
        function () {

            const mapData =
                regionMapData[
                    "평창"
                ];


            const options = {

                center:
                    new kakao.maps.LatLng(

                        mapData.lat,

                        mapData.lng

                    ),

                level:
                    mapData.level

            };


            /*
                지도 생성
            */

            kakaoMap =
                new kakao.maps.Map(

                    container,

                    options

                );


            updateKakaoMap(
                "평창"
            );

        }
    );

}


/* =========================
   카카오맵 SDK 실행
========================= */

if (
    typeof window.kakao !==
    "undefined" &&
    window.kakao.maps
) {

    initKakaoMap();

} else {

    console.error(
        "카카오맵 SDK를 찾을 수 없습니다."
    );

}

/* =========================
   메인 서비스 버튼
========================= */

const serviceButtons =
    document.querySelectorAll(
        ".service-button"
    );


serviceButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const service =
                    button.dataset.service;


                const activeRegion =
                    document.querySelector(
                        ".region-tab.active"
                    );


                const region =
                    activeRegion
                        ? activeRegion.dataset.region
                        : "평창";


                const url =
                    "detail.html?region=" +
                    encodeURIComponent(region) +
                    "&tab=" +
                    encodeURIComponent(service);


                moveWithLoading(
                    url
                );
            }
        );

    }
);

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

/* =========================
   스크롤 등장 애니메이션
========================= */

const revealElements =
    document.querySelectorAll(
        ".about-section, " +
        ".service-section, " +
        ".section-heading, " +
        ".region-section, " +
        ".notice-section, " +
        ".related-section"
    );


revealElements.forEach(
    function (element) {

        element.classList.add(
            "scroll-reveal"
        );

    }
);


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    function (element) {

        revealObserver.observe(
            element
        );

    }
);

/* =========================
   페이지 전환 로딩
========================= */

function moveWithLoading(url) {

    const pageLoader =
        document.getElementById(
            "pageLoader"
        );


    if (pageLoader) {

        pageLoader.classList.add(
            "active"
        );

    }


    setTimeout(
        function () {

            window.location.href =
                url;

        },

        650
    );

}

/* =========================
   공지사항 팝업
========================= */

const noticeItems =
    document.querySelectorAll(
        ".notice-item"
    );


const noticeModal =
    document.getElementById(
        "noticeModal"
    );


const noticeModalClose =
    document.getElementById(
        "noticeModalClose"
    );


const noticeModalCategory =
    document.getElementById(
        "noticeModalCategory"
    );


const noticeModalTitle =
    document.getElementById(
        "noticeModalTitle"
    );


const noticeModalDate =
    document.getElementById(
        "noticeModalDate"
    );


const noticeModalContent =
    document.getElementById(
        "noticeModalContent"
    );


noticeItems.forEach(
    function (item) {

        item.addEventListener(
            "click",
            function () {

                noticeModalCategory.textContent =
                    item.dataset.category;

                noticeModalTitle.textContent =
                    item.dataset.title;

                noticeModalDate.textContent =
                    item.dataset.date;

                noticeModalContent.textContent =
                    item.dataset.content;


                noticeModal.classList.add(
                    "active"
                );

            }
        );

    }
);


function closeNoticeModal() {

    noticeModal.classList.remove(
        "active"
    );

}


if (noticeModalClose) {

    noticeModalClose.addEventListener(
        "click",
        closeNoticeModal
    );

}


if (noticeModal) {

    noticeModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === noticeModal
            ) {

                closeNoticeModal();

            }

        }
    );

}

/* =========================
   공지사항 전체보기
========================= */

const noticeMore =
    document.getElementById(
        "noticeMore"
    );


const noticeExtra =
    document.getElementById(
        "noticeExtra"
    );


if (
    noticeMore &&
    noticeExtra
) {

    noticeMore.addEventListener(
        "click",
        function () {

            const isOpen =
                noticeExtra.classList.toggle(
                    "active"
                );


            noticeMore.classList.toggle(
                "active",
                isOpen
            );


            if (isOpen) {

                noticeMore.childNodes[0].textContent =
                    "접기 ";

            } else {

                noticeMore.childNodes[0].textContent =
                    "전체보기 ";

            }

        }
    );

}

/* =========================
   FAQ 아코디언
========================= */

const faqItems =
    document.querySelectorAll(
        ".faq-item"
    );


faqItems.forEach(
    function (item) {

        const question =
            item.querySelector(
                ".faq-question"
            );


        question.addEventListener(
            "click",
            function () {

                const isActive =
                    item.classList.contains(
                        "active"
                    );


                /* 열려 있는 FAQ 모두 닫기 */

                faqItems.forEach(
                    function (otherItem) {

                        otherItem.classList.remove(
                            "active"
                        );

                    }
                );


                /* 기존에 닫혀 있던 질문이면 열기 */

                if (!isActive) {

                    item.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);

/* =========================
   PC 사이드바 현재 섹션 표시
========================= */

const desktopSidebarLinks =
    document.querySelectorAll(
        ".desktop-sidebar-menu a[href^='#']"
    );


const sidebarSections = [];


desktopSidebarLinks.forEach(
    function (link) {

        const targetId =
            link.getAttribute("href");


        const section =
            document.querySelector(
                targetId
            );


        if (section) {

            sidebarSections.push({
                link: link,
                section: section
            });

        }

    }
);


function updateDesktopSidebarActive() {

    const scrollPosition =
        window.scrollY + 180;


    let currentItem = null;


    sidebarSections.forEach(
        function (item) {

            if (
                item.section.offsetTop <=
                scrollPosition
            ) {

                currentItem = item;

            }

        }
    );


    desktopSidebarLinks.forEach(
        function (link) {

            link.classList.remove(
                "active"
            );

        }
    );


    if (currentItem) {

        currentItem.link.classList.add(
            "active"
        );

    }

}


window.addEventListener(
    "scroll",
    updateDesktopSidebarActive
);


window.addEventListener(
    "load",
    updateDesktopSidebarActive
);

/* =========================
   PC 사이드바 지역 선택
========================= */

const desktopRegionButtons =
    document.querySelectorAll(
        ".desktop-region-button"
    );


desktopRegionButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const region =
                    button.dataset.region;


                const targetTab =
                    document.querySelector(
                        `.region-tab[data-region="${region}"]`
                    );


                if (targetTab) {

                    targetTab.click();

                    const regionSection =
                        document.querySelector(
                            ".region-section"
                        );

                    if (regionSection) {

                        regionSection.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }


                desktopRegionButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );

            }
        );

    }
);

/* =========================================
   메인 배너 지역 검색
========================================= */

const heroProvince =
    document.getElementById("heroProvince");

const heroCity =
    document.getElementById("heroCity");

const heroRegionSearchButton =
    document.getElementById("heroRegionSearchButton");


const heroRegionData = {

    강원: [
        "평창",
        "태백",
        "홍천"
    ],

    충북: [
        "괴산"
    ],

    전북: [
        "전주",
        "고창"
    ]

};


/* 광역시·도 선택 */

heroProvince.addEventListener(
    "change",
    function () {

        const province =
            heroProvince.value;


        /* 시·군 초기화 */

        heroCity.innerHTML =
            `<option value="">
                시·군 선택
            </option>`;


        if (!province) {
            return;
        }


        const cities =
            heroRegionData[province];


        cities.forEach(
            function (city) {

                const option =
                    document.createElement("option");

                option.value = city;
                option.textContent = city;

                heroCity.appendChild(option);

            }
        );

    }
);


/* 찾아보기 */

heroRegionSearchButton.addEventListener(
    "click",
    function () {

        const regionName =
            heroCity.value;


        if (!regionName) {

            alert("시·군을 선택해주세요.");

            return;
        }


        /*
            기존 지역 버튼 찾기

            기존 지도 기능을 새로 만들지 않고
            현재 작동하는 지역 버튼을 대신 클릭
        */

        const regionButton =
            document.querySelector(
                `.region-tab[data-region="${regionName}"]`
            );


        if (regionButton) {

            regionButton.click();

        }


        /* 지도까지 부드럽게 이동 */

        const mapContainer =
            document.querySelector(
                ".map-container"
            );


        if (mapContainer) {

            mapContainer.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }
);