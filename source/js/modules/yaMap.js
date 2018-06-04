module.exports = function () {
    if (window.map) {
        ymaps.ready(init);
        var myMap;

        function init() {
            myMap = new ymaps.Map("map", {
                    center: [57.624058, 39.893706],
                    zoom: 16,
                    controls: []
                }),

                myPlacemark = new ymaps.Placemark([57.624058, 39.893706], {
                    // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
                    balloonContentHeader: "ООО Эверест",
                    balloonContentBody: "ул. Революционная,18",
                    hintContent: "ООО Эверест"
                });
            myMap.geoObjects.add(myPlacemark);

            myMap.behaviors.disable('scrollZoom');
            myMap.behaviors.disable('drag');
        }
    }
}