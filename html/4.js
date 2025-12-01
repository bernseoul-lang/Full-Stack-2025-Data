// btn 이라는 아이디를 가진 버튼을 클릭하면," You clicked the Button." 라는 얼럿창이 뜨도록 하는 자바스크립트 코드 
window.onload = function(){
    this.document.querySelector('#btn').addEventListener('click', function(){
        alert('You clicked the Button.');
    });
    };