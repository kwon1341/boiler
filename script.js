// 클릭 시 active 효과
document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.header-menu > li > a');

    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // 모든 항목에서 'active' 클래스 제거
            menuItems.forEach(function (item) {
                item.parentElement.classList.remove('active');
            });

            // 클릭한 항목에 'active' 클래스 추가
            item.parentElement.classList.add('active');
        });
    });
});

// sticky header 스크롤 감지 hide 효과
document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.header');
    var lastScrollY = window.scrollY;

    window.addEventListener('scroll', function () {
        var currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            // 아래로 스크롤할 때
            header.classList.add('hide');
        } else {
            // 위로 스크롤할 때
            header.classList.remove('hide');
        }

        lastScrollY = currentScrollY; // 스크롤 위치 업데이트
    });
});

