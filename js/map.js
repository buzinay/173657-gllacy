       ymaps.ready(init);
       var customMap;     // ������� ���������� ��� �����
       function init () { // ������� �������������
           customMap = new ymaps.Map("map1", { // �������� ����� ������� �� � ��� � id="customMap"
                center: [59.938631, 30.323055],             // ������ �����
                behaviors: ['default', 'scrollZoom'], // ������ �����
                zoom: 9, // ������� �����
                controls: ["zoomControl", "fullscreenControl"]
           });
       } 
	   
	   customPlacemark0 = new ymaps.Placemark([59.938631, 30.323055], { // ������� ����� � ������������ �����
              balloonContent: '<h4> ��������� �����</h4><p>�������� �����.</p>
                               <a class="customMapClose" onclick="customMap.balloon.close()">X</a>
                              ' // ���������� ������ � ������� html, ��� ����� � css
        }, {          
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg', // �������� ������
          iconImageSize: [36, 36], // ������ ������ � ��������
          iconImageOffset: [-18, -36], // ������� ������ � ��������(��������� �� �������� ������ ����)
          balloonContentSize: [270, 99], // ������ ������ ���������� ������ � ��������
          balloonLayout: "default#imageWithContent", // ��������� ��� ���������� ������ - �����������
          balloonImageHref: 'img/baloon.jpg', // �������� ��������� ������
          balloonImageOffset: [-36, -90], // �������� ������, ��� ���������� ���������
          balloonImageSize: [270, 90], // ������ ��������-���������� ������
          balloonShadow: true
        });
        
        // ��������� ����� �� �����
        customMap.geoObjects.add(customPlacemark0);           