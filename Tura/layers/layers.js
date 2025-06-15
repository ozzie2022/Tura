ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([16958317.799190, -491644.067953, 16958468.279776, -491553.835386]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PNG_Province_1 = new ol.format.GeoJSON();
var features_PNG_Province_1 = format_PNG_Province_1.readFeatures(json_PNG_Province_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PNG_Province_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNG_Province_1.addFeatures(features_PNG_Province_1);
var lyr_PNG_Province_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNG_Province_1, 
                style: style_PNG_Province_1,
                popuplayertitle: 'PNG_Province',
                interactive: false,
                title: '<img src="styles/legend/PNG_Province_1.png" /> PNG_Province'
            });
var format_OwnerLocation_2 = new ol.format.GeoJSON();
var features_OwnerLocation_2 = format_OwnerLocation_2.readFeatures(json_OwnerLocation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OwnerLocation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OwnerLocation_2.addFeatures(features_OwnerLocation_2);
var lyr_OwnerLocation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OwnerLocation_2, 
                style: style_OwnerLocation_2,
                popuplayertitle: 'OwnerLocation',
                interactive: true,
                title: '<img src="styles/legend/OwnerLocation_2.png" /> OwnerLocation'
            });
var format_LandArea_3 = new ol.format.GeoJSON();
var features_LandArea_3 = format_LandArea_3.readFeatures(json_LandArea_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandArea_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandArea_3.addFeatures(features_LandArea_3);
var lyr_LandArea_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandArea_3, 
                style: style_LandArea_3,
                popuplayertitle: 'Land Area',
                interactive: true,
                title: '<img src="styles/legend/LandArea_3.png" /> Land Area'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PNG_Province_1.setVisible(true);lyr_OwnerLocation_2.setVisible(true);lyr_LandArea_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PNG_Province_1,lyr_OwnerLocation_2,lyr_LandArea_3];
lyr_PNG_Province_1.set('fieldAliases', {'id': 'id', 'ProvID': 'ProvID', 'ProvNAME': 'ProvNAME', 'Dists': 'Dists', 'LLGs': 'LLGs', 'Wards': 'Wards', 'CUs': 'CUs', 'Recd_CUs': 'Recd_CUs', 'EAs': 'EAs', 'Tot_NPD': 'Tot_NPD', 'Tot_Hhold': 'Tot_Hhold', 'Person': 'Person', 'Male': 'Male', 'Female': 'Female', 'Person_u18': 'Person_u18', 'Person_o17': 'Person_o17', 'k20_p_Head': 'k20_p_Head', });
lyr_OwnerLocation_2.set('fieldAliases', {'id': 'id', 'FirstName': 'FirstName', 'LastName': 'LastName', 'Address': 'Address', 'field_5': 'field_5', 'Contact': 'Contact', 'Email': 'Email', 'Profile': 'Profile', 'Zone': 'Zone', 'AMG_E': 'AMG_E', 'AMG_N': 'AMG_N', 'Map_Ref_10': 'Map_Ref_10', 'Source_Dat': 'Source_Dat', 'Supplied_B': 'Supplied_B', });
lyr_LandArea_3.set('fieldAliases', {'id': 'id', 'Parcel_ID': 'Parcel_ID', 'Owner': 'Owner', });
lyr_PNG_Province_1.set('fieldImages', {'id': 'TextEdit', 'ProvID': 'TextEdit', 'ProvNAME': 'TextEdit', 'Dists': 'TextEdit', 'LLGs': 'TextEdit', 'Wards': 'TextEdit', 'CUs': 'TextEdit', 'Recd_CUs': 'TextEdit', 'EAs': 'TextEdit', 'Tot_NPD': 'TextEdit', 'Tot_Hhold': 'TextEdit', 'Person': 'TextEdit', 'Male': 'TextEdit', 'Female': 'TextEdit', 'Person_u18': 'TextEdit', 'Person_o17': 'TextEdit', 'k20_p_Head': 'TextEdit', });
lyr_OwnerLocation_2.set('fieldImages', {'id': 'TextEdit', 'FirstName': 'TextEdit', 'LastName': 'TextEdit', 'Address': 'TextEdit', 'field_5': 'TextEdit', 'Contact': 'TextEdit', 'Email': 'TextEdit', 'Profile': 'TextEdit', 'Zone': 'TextEdit', 'AMG_E': 'TextEdit', 'AMG_N': 'TextEdit', 'Map_Ref_10': 'TextEdit', 'Source_Dat': 'TextEdit', 'Supplied_B': 'TextEdit', });
lyr_LandArea_3.set('fieldImages', {'id': 'TextEdit', 'Parcel_ID': 'TextEdit', 'Owner': 'TextEdit', });
lyr_PNG_Province_1.set('fieldLabels', {'id': 'no label', 'ProvID': 'no label', 'ProvNAME': 'no label', 'Dists': 'no label', 'LLGs': 'no label', 'Wards': 'no label', 'CUs': 'no label', 'Recd_CUs': 'no label', 'EAs': 'no label', 'Tot_NPD': 'no label', 'Tot_Hhold': 'no label', 'Person': 'no label', 'Male': 'no label', 'Female': 'no label', 'Person_u18': 'no label', 'Person_o17': 'no label', 'k20_p_Head': 'no label', });
lyr_OwnerLocation_2.set('fieldLabels', {'id': 'no label', 'FirstName': 'no label', 'LastName': 'no label', 'Address': 'no label', 'field_5': 'no label', 'Contact': 'no label', 'Email': 'no label', 'Profile': 'no label', 'Zone': 'no label', 'AMG_E': 'no label', 'AMG_N': 'no label', 'Map_Ref_10': 'no label', 'Source_Dat': 'no label', 'Supplied_B': 'no label', });
lyr_LandArea_3.set('fieldLabels', {'id': 'inline label - visible with data', 'Parcel_ID': 'no label', 'Owner': 'inline label - visible with data', });
lyr_LandArea_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});