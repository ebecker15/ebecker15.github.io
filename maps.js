var ourLocation;
var view;
var map;

function init(){
  ourLocation = ol.proj.fromLonLat([-122.1215, 47.6740]);

  view = new ol.View({
    center: ourLocation,
    zoom: 10
  });

  map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    loadTilesWhileAnimating: true,
    view: view
  });
}
window.onload = init;
