    var myMap;
    var myPlacemark;
    ymaps.ready(init);
    function init () {
        myMap = new ymaps.Map('map-id', {
        center: [59.9394,30.33],
        zoom: 16,
        controls: ["zoomControl", "fullscreenControl"]
    });

    myPlacemark = new ymaps.Placemark([59.938631, 30.323055],{
                    balloonContentBody: '',
                    },{
                    iconLayout: 'default#image',
                    iconImageHref: 'img/pin.svg',
                    // Размер по ширине и высоте
                    iconImageSize: [80, 140],
                    iconImageOffset: [-40, -140]
    });

        myMap.geoObjects.add(myPlacemark);
}