var size = 0;
var placement = 'point';

var style_LandArea_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#fbf9fc";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Owner") !== null) {
        labelText = String(feature.get("Owner"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(198,187,33,0.7803921568627451)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4.787999999999999}),fill: new ol.style.Fill({color: 'rgba(195,214,43,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
