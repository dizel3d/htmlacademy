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

// интерактивная карта
google.maps.event.addDomListener(window, 'load', function initialize() {
    var myLatlng = new google.maps.LatLng(34.865717, -111.763553);
    var mapOptions = {
        zoom: 9,
        center: myLatlng
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Седона'
    });
});
