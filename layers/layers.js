var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Megawon_1 = new ol.format.GeoJSON();
var features_Megawon_1 = format_Megawon_1.readFeatures(json_Megawon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Megawon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Megawon_1.addFeatures(features_Megawon_1);
var lyr_Megawon_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Megawon_1, 
                style: style_Megawon_1,
                interactive: true,
                title: '<img src="styles/legend/Megawon_1.png" /> Megawon'
            });
var format_MegawonUMKM_2 = new ol.format.GeoJSON();
var features_MegawonUMKM_2 = format_MegawonUMKM_2.readFeatures(json_MegawonUMKM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MegawonUMKM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MegawonUMKM_2.addFeatures(features_MegawonUMKM_2);
var lyr_MegawonUMKM_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MegawonUMKM_2, 
                style: style_MegawonUMKM_2,
                interactive: true,
                title: '<img src="styles/legend/MegawonUMKM_2.png" /> Megawon UMKM'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Megawon_1.setVisible(true);lyr_MegawonUMKM_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Megawon_1,lyr_MegawonUMKM_2];
lyr_Megawon_1.set('fieldAliases', {'id': 'id', });
lyr_MegawonUMKM_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'origin_id': 'origin_id', 'title': 'title', 'label': 'label', 'distance': 'distance', 'categories': 'categories', });
lyr_Megawon_1.set('fieldImages', {'id': '', });
lyr_MegawonUMKM_2.set('fieldImages', {'fid': '', 'id': '', 'origin_id': '', 'title': '', 'label': '', 'distance': '', 'categories': '', });
lyr_Megawon_1.set('fieldLabels', {'id': 'no label', });
lyr_MegawonUMKM_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'origin_id': 'no label', 'title': 'no label', 'label': 'no label', 'distance': 'no label', 'categories': 'no label', });
lyr_MegawonUMKM_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});