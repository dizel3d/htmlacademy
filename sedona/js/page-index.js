// анимация появления формы по клику на .form-toggle-btn
;(function() {
    var formBox = document.querySelector('.form-box');
    var toggleBtn = document.querySelector('.form-toggle-btn');

    formBox.classList.add('closed');

    toggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        formBox.classList.toggle('closed');
    });
})();
