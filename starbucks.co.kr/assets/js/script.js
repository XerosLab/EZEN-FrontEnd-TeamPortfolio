const menus = document.querySelectorAll(".menu-bar-category");
const dropdownWrapper = document.querySelector("#dropdown-wrapper");
const dropdownInner = document.querySelectorAll(".dropdown-wrapper-inner");

// 메뉴바에 mouseover 이벤트 발생시 드롭다운 메뉴 출력
for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener("mouseover", e => {
        // 다른 dropdownInner 비활성화
        for (const inner of dropdownInner) inner.style.display = "none";
        // 선택된 dropdownInner만 활성화
        dropdownInner[i].style.display = "grid";
        // 드롭다운 메뉴 높이를 내부 div의 길이를 자동으로 인식하여 자동조정함
        // 아래 변수를 조정하여 자동조정 이외에 수동으로 높이 추가 역시 가능함
        const customPlusHeight = 200;
        dropdownWrapper.style.height = String(dropdownInner[i].scrollHeight + customPlusHeight) + "px";
    })
}

// 메인 컨테이너로 마우스 진입시 드롭다운 비활성화
const container = document.querySelector("#container");
container.addEventListener("mouseover", e => {
    dropdownWrapper.style.height = "0px";
})