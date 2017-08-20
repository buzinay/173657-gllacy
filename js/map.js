       ymaps.ready(init);
       var customMap;     // объявим переменную для карты
       function init () { // функция инициализации
           customMap = new ymaps.Map("map1", { // создадим карту выведем ее в див с id="customMap"
                center: [59.938631, 30.323055],             // центра карты
                behaviors: ['default', 'scrollZoom'], // скролл мышью
                zoom: 9, // масштаб карты
                controls: ["zoomControl", "fullscreenControl"]
           });
       } 
	   
	   customPlacemark0 = new ymaps.Placemark([59.938631, 30.323055], { // Создаем метку с координатами точки
              balloonContent: '<h4> Заголовок метки</h4><p>Описание метки.</p>
                               <a class="customMapClose" onclick="customMap.balloon.close()">X</a>
                              ' // содержимое балуна в формате html, все стили в css
        }, {          
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg', // картинка иконки
          iconImageSize: [36, 36], // размер иконки в пикселях
          iconImageOffset: [-18, -36], // позиция иконки в пикселях(считается от верхнего левого угла)
          balloonContentSize: [270, 99], // размер нашего кастомного балуна в пикселях
          balloonLayout: "default#imageWithContent", // указываем что содержимое балуна - стилизовано
          balloonImageHref: 'img/baloon.jpg', // Картинка бэкграунд балуна
          balloonImageOffset: [-36, -90], // смещание балуна, его необходимо подогнать
          balloonImageSize: [270, 90], // размер картинки-бэкграунда балуна
          balloonShadow: true
        });
        
        // Добавляем метки на карту
        customMap.geoObjects.add(customPlacemark0);           