//on load
$(function () {
    
    mapboxgl.accessToken = 'pk.eyJ1Ijoia3VsaW5iYW4iLCJhIjoiY2s2dGx3cGJkMDBocTNsbXV6MTB0d2tkciJ9.cje2jmfYq3ONJGmmEXbQqg';
   
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [13.42, 55.56],
        zoom: 9
    });


    var geojson = {
        'type': 'FeatureCollection',
        'features': [
            {
            'type': 'Feature',
                'properties': {
                'message': 'här finns abborre',
                'iconSize': [60, 60],
                'fishtype' :'abborre.jfif'
                },
                'geometry': {
                'type': 'Point',
                'coordinates': [12.912359, 55.530807]
                }
            },
            {
            'type': 'Feature',
                'properties': {
                'message': 'här finns torsk',
                'iconSize': [60, 60],
                'fishtype' :'torsk.jfif'
                },
                'geometry': {
                'type': 'Point',
                'coordinates': [12.916797,55.586650]
                }
                },
             //klipp start
            {
            'type': 'Feature',
                'properties': {
                'message': 'här finns gädda',
                'iconSize': [60, 60],
                'fishtype' :'gadda.jfif'
                    },
                'geometry': {
                'type': 'Point',
                'coordinates': [13.171526,55.565340]
                }
            }, 
            //klipp slut
            {
                'type': 'Feature',
                    'properties': {
                    'message': 'här finns makrill',
                    'iconSize': [60, 60],
                    'fishtype' :'Makrill.jpg'
                        },
                    'geometry': {
                    'type': 'Point',
                    'coordinates': [12.903737,55.570921]
                    }
                }, 

                {
                    'type': 'Feature',
                        'properties': {
                        'message': 'här finns havsöring',
                        'iconSize': [60, 60],
                        'fishtype' :'havsoring.jpg'
                            },
                        'geometry': {
                        'type': 'Point',
                        'coordinates': [12.986344,55.620036]
                        }
                    }, 
        ]
        }; 
      
        geojson.features.forEach(function(marker) { 
            var el = document.createElement('div'); 
            el.className = 'marker';
            el.style.backgroundImage = 'url(css/images/' +  marker.properties.fishtype + ')';
            el.style.width = marker.properties.iconSize[0] + 'px';
            el.style.height = marker.properties.iconSize[1] + 'px';
         
            el.addEventListener('click', function() {
                alert(marker.properties.message);
            });
          
            new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
        });
}); 