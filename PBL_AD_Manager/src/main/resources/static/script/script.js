var ADList = []
let AD = {
    title: '제목',
    text: '설명'
}
function clickADDButton() {
    // 레이어 팝업 열기
    document.getElementById('ADDButton').
    addEventListener('click', function () {
        document.getElementById('popupContainer').style.display = 'block';
    });
}
function closePopup() {
    // 레이어 팝업 닫기
    document.getElementById('closePopup').addEventListener('click', function () {
        document.getElementById('popupContainer').style.display = 'none';
    });
}
function confirmAdd() {
    var titleValue = document.getElementById('addTitle').value;
    var textValue = document.getElementById('addText').value;
    if (titleValue === "" || textValue === "") {
        alert("값을 입력하지 않았습니다.");
    }
    else {
        AD.title = titleValue;
        AD.text = textValue;
        ADList.push(AD);
        alert(ADList.length);
        document.getElementById('confirmAdd').addEventListener('click', function () {
            document.getElementById('popupContainer').style.display = 'none';
        });
    }
}