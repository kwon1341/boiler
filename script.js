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
