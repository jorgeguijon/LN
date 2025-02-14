var wms_layers = [];


        var lyr_Mapa_0 = new ol.layer.Tile({
            'title': 'Mapa',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_SITLOG_1 = new ol.format.GeoJSON();
var features_SITLOG_1 = format_SITLOG_1.readFeatures(json_SITLOG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SITLOG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SITLOG_1.addFeatures(features_SITLOG_1);
var lyr_SITLOG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SITLOG_1, 
                style: style_SITLOG_1,
                popuplayertitle: 'SIT-LOG',
                interactive: true,
                title: '<img src="styles/legend/SITLOG_1.png" /> SIT-LOG'
            });
var format_SEDEAM_2 = new ol.format.GeoJSON();
var features_SEDEAM_2 = format_SEDEAM_2.readFeatures(json_SEDEAM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEDEAM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEDEAM_2.addFeatures(features_SEDEAM_2);
var lyr_SEDEAM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEDEAM_2, 
                style: style_SEDEAM_2,
                popuplayertitle: 'SEDEAM',
                interactive: true,
                title: '<img src="styles/legend/SEDEAM_2.png" /> SEDEAM'
            });
var format_PlanTECC_3 = new ol.format.GeoJSON();
var features_PlanTECC_3 = format_PlanTECC_3.readFeatures(json_PlanTECC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanTECC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanTECC_3.addFeatures(features_PlanTECC_3);
var lyr_PlanTECC_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanTECC_3, 
                style: style_PlanTECC_3,
                popuplayertitle: 'PlanTECC',
                interactive: true,
                title: '<img src="styles/legend/PlanTECC_3.png" /> PlanTECC'
            });
var format_NANOTECH_4 = new ol.format.GeoJSON();
var features_NANOTECH_4 = format_NANOTECH_4.readFeatures(json_NANOTECH_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NANOTECH_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NANOTECH_4.addFeatures(features_NANOTECH_4);
var lyr_NANOTECH_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NANOTECH_4, 
                style: style_NANOTECH_4,
                popuplayertitle: 'NANOTECH',
                interactive: true,
                title: '<img src="styles/legend/NANOTECH_4.png" /> NANOTECH'
            });
var format_MADiT_5 = new ol.format.GeoJSON();
var features_MADiT_5 = format_MADiT_5.readFeatures(json_MADiT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MADiT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MADiT_5.addFeatures(features_MADiT_5);
var lyr_MADiT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MADiT_5, 
                style: style_MADiT_5,
                popuplayertitle: 'MADiT',
                interactive: true,
                title: '<img src="styles/legend/MADiT_5.png" /> MADiT'
            });
var format_LNVCS_6 = new ol.format.GeoJSON();
var features_LNVCS_6 = format_LNVCS_6.readFeatures(json_LNVCS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNVCS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNVCS_6.addFeatures(features_LNVCS_6);
var lyr_LNVCS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNVCS_6, 
                style: style_LNVCS_6,
                popuplayertitle: 'LNVCS',
                interactive: true,
                title: '<img src="styles/legend/LNVCS_6.png" /> LNVCS'
            });
var format_LNunT_7 = new ol.format.GeoJSON();
var features_LNunT_7 = format_LNunT_7.readFeatures(json_LNunT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNunT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNunT_7.addFeatures(features_LNunT_7);
var lyr_LNunT_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNunT_7, 
                style: style_LNunT_7,
                popuplayertitle: 'LNunT',
                interactive: true,
                title: '<img src="styles/legend/LNunT_7.png" /> LNunT'
            });
var format_LNS_8 = new ol.format.GeoJSON();
var features_LNS_8 = format_LNS_8.readFeatures(json_LNS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNS_8.addFeatures(features_LNS_8);
var lyr_LNS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNS_8, 
                style: style_LNS_8,
                popuplayertitle: 'LNS',
                interactive: true,
                title: '<img src="styles/legend/LNS_8.png" /> LNS'
            });
var format_LNPAMMB_9 = new ol.format.GeoJSON();
var features_LNPAMMB_9 = format_LNPAMMB_9.readFeatures(json_LNPAMMB_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNPAMMB_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNPAMMB_9.addFeatures(features_LNPAMMB_9);
var lyr_LNPAMMB_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNPAMMB_9, 
                style: style_LNPAMMB_9,
                popuplayertitle: 'LNPAMMB',
                interactive: true,
                title: '<img src="styles/legend/LNPAMMB_9.png" /> LNPAMMB'
            });
var format_LNOV_10 = new ol.format.GeoJSON();
var features_LNOV_10 = format_LNOV_10.readFeatures(json_LNOV_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNOV_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNOV_10.addFeatures(features_LNOV_10);
var lyr_LNOV_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNOV_10, 
                style: style_LNOV_10,
                popuplayertitle: 'LNOV',
                interactive: true,
                title: '<img src="styles/legend/LNOV_10.png" /> LNOV'
            });
var format_LNMG_11 = new ol.format.GeoJSON();
var features_LNMG_11 = format_LNMG_11.readFeatures(json_LNMG_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNMG_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNMG_11.addFeatures(features_LNMG_11);
var lyr_LNMG_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNMG_11, 
                style: style_LNMG_11,
                popuplayertitle: 'LNMG',
                interactive: true,
                title: '<img src="styles/legend/LNMG_11.png" /> LNMG'
            });
var format_LNMA_12 = new ol.format.GeoJSON();
var features_LNMA_12 = format_LNMA_12.readFeatures(json_LNMA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNMA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNMA_12.addFeatures(features_LNMA_12);
var lyr_LNMA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNMA_12, 
                style: style_LNMA_12,
                popuplayertitle: 'LNMA',
                interactive: true,
                title: '<img src="styles/legend/LNMA_12.png" /> LNMA'
            });
var format_LNETEE_13 = new ol.format.GeoJSON();
var features_LNETEE_13 = format_LNETEE_13.readFeatures(json_LNETEE_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNETEE_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNETEE_13.addFeatures(features_LNETEE_13);
var lyr_LNETEE_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNETEE_13, 
                style: style_LNETEE_13,
                popuplayertitle: 'LNETEE',
                interactive: true,
                title: '<img src="styles/legend/LNETEE_13.png" /> LNETEE'
            });
var format_LND_14 = new ol.format.GeoJSON();
var features_LND_14 = format_LND_14.readFeatures(json_LND_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LND_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LND_14.addFeatures(features_LND_14);
var lyr_LND_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LND_14, 
                style: style_LND_14,
                popuplayertitle: 'LND',
                interactive: true,
                title: '<img src="styles/legend/LND_14.png" /> LND'
            });
var format_LNCyTA_15 = new ol.format.GeoJSON();
var features_LNCyTA_15 = format_LNCyTA_15.readFeatures(json_LNCyTA_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNCyTA_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNCyTA_15.addFeatures(features_LNCyTA_15);
var lyr_LNCyTA_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNCyTA_15, 
                style: style_LNCyTA_15,
                popuplayertitle: 'LNCyTA',
                interactive: true,
                title: '<img src="styles/legend/LNCyTA_15.png" /> LNCyTA'
            });
var format_LNCRTM_16 = new ol.format.GeoJSON();
var features_LNCRTM_16 = format_LNCRTM_16.readFeatures(json_LNCRTM_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNCRTM_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNCRTM_16.addFeatures(features_LNCRTM_16);
var lyr_LNCRTM_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNCRTM_16, 
                style: style_LNCRTM_16,
                popuplayertitle: 'LNCRTM',
                interactive: true,
                title: '<img src="styles/legend/LNCRTM_16.png" /> LNCRTM'
            });
var format_LNCIBi_17 = new ol.format.GeoJSON();
var features_LNCIBi_17 = format_LNCIBi_17.readFeatures(json_LNCIBi_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNCIBi_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNCIBi_17.addFeatures(features_LNCIBi_17);
var lyr_LNCIBi_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNCIBi_17, 
                style: style_LNCIBi_17,
                popuplayertitle: 'LNCIBi',
                interactive: true,
                title: '<img src="styles/legend/LNCIBi_17.png" /> LNCIBi'
            });
var format_LNCEREN_18 = new ol.format.GeoJSON();
var features_LNCEREN_18 = format_LNCEREN_18.readFeatures(json_LNCEREN_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNCEREN_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNCEREN_18.addFeatures(features_LNCEREN_18);
var lyr_LNCEREN_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNCEREN_18, 
                style: style_LNCEREN_18,
                popuplayertitle: 'LNCEREN',
                interactive: true,
                title: '<img src="styles/legend/LNCEREN_18.png" /> LNCEREN'
            });
var format_LNCC_19 = new ol.format.GeoJSON();
var features_LNCC_19 = format_LNCC_19.readFeatures(json_LNCC_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNCC_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNCC_19.addFeatures(features_LNCC_19);
var lyr_LNCC_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNCC_19, 
                style: style_LNCC_19,
                popuplayertitle: 'LNCC',
                interactive: true,
                title: '<img src="styles/legend/LNCC_19.png" /> LNCC'
            });
var format_LNCBioCC_20 = new ol.format.GeoJSON();
var features_LNCBioCC_20 = format_LNCBioCC_20.readFeatures(json_LNCBioCC_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNCBioCC_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNCBioCC_20.addFeatures(features_LNCBioCC_20);
var lyr_LNCBioCC_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNCBioCC_20, 
                style: style_LNCBioCC_20,
                popuplayertitle: 'LNCBioCC',
                interactive: true,
                title: '<img src="styles/legend/LNCBioCC_20.png" /> LNCBioCC'
            });
var format_LNCAE_21 = new ol.format.GeoJSON();
var features_LNCAE_21 = format_LNCAE_21.readFeatures(json_LNCAE_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNCAE_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNCAE_21.addFeatures(features_LNCAE_21);
var lyr_LNCAE_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNCAE_21, 
                style: style_LNCAE_21,
                popuplayertitle: 'LNCAE',
                interactive: true,
                title: '<img src="styles/legend/LNCAE_21.png" /> LNCAE'
            });
var format_LNCRBSP_22 = new ol.format.GeoJSON();
var features_LNCRBSP_22 = format_LNCRBSP_22.readFeatures(json_LNCRBSP_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNCRBSP_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNCRBSP_22.addFeatures(features_LNCRBSP_22);
var lyr_LNCRBSP_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNCRBSP_22, 
                style: style_LNCRBSP_22,
                popuplayertitle: 'LNC-RBSP',
                interactive: true,
                title: '<img src="styles/legend/LNCRBSP_22.png" /> LNC-RBSP'
            });
var format_LNCMexFlux_23 = new ol.format.GeoJSON();
var features_LNCMexFlux_23 = format_LNCMexFlux_23.readFeatures(json_LNCMexFlux_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNCMexFlux_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNCMexFlux_23.addFeatures(features_LNCMexFlux_23);
var lyr_LNCMexFlux_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNCMexFlux_23, 
                style: style_LNCMexFlux_23,
                popuplayertitle: 'LNC-MexFlux',
                interactive: true,
                title: '<img src="styles/legend/LNCMexFlux_23.png" /> LNC-MexFlux'
            });
var format_LNCIACD_24 = new ol.format.GeoJSON();
var features_LNCIACD_24 = format_LNCIACD_24.readFeatures(json_LNCIACD_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNCIACD_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNCIACD_24.addFeatures(features_LNCIACD_24);
var lyr_LNCIACD_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNCIACD_24, 
                style: style_LNCIACD_24,
                popuplayertitle: 'LNC-IACD',
                interactive: true,
                title: '<img src="styles/legend/LNCIACD_24.png" /> LNC-IACD'
            });
var format_LNCGVD_25 = new ol.format.GeoJSON();
var features_LNCGVD_25 = format_LNCGVD_25.readFeatures(json_LNCGVD_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNCGVD_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNCGVD_25.addFeatures(features_LNCGVD_25);
var lyr_LNCGVD_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNCGVD_25, 
                style: style_LNCGVD_25,
                popuplayertitle: 'LNC-GVD',
                interactive: true,
                title: '<img src="styles/legend/LNCGVD_25.png" /> LNC-GVD'
            });
var format_LNCFICOTOX_26 = new ol.format.GeoJSON();
var features_LNCFICOTOX_26 = format_LNCFICOTOX_26.readFeatures(json_LNCFICOTOX_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNCFICOTOX_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNCFICOTOX_26.addFeatures(features_LNCFICOTOX_26);
var lyr_LNCFICOTOX_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNCFICOTOX_26, 
                style: style_LNCFICOTOX_26,
                popuplayertitle: 'LNC-FICOTOX',
                interactive: true,
                title: '<img src="styles/legend/LNCFICOTOX_26.png" /> LNC-FICOTOX'
            });
var format_LNCBIOSAA_27 = new ol.format.GeoJSON();
var features_LNCBIOSAA_27 = format_LNCBIOSAA_27.readFeatures(json_LNCBIOSAA_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNCBIOSAA_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNCBIOSAA_27.addFeatures(features_LNCBIOSAA_27);
var lyr_LNCBIOSAA_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNCBIOSAA_27, 
                style: style_LNCBIOSAA_27,
                popuplayertitle: 'LNC-BIOSAA',
                interactive: true,
                title: '<img src="styles/legend/LNCBIOSAA_27.png" /> LNC-BIOSAA'
            });
var format_BiomeCH_28 = new ol.format.GeoJSON();
var features_BiomeCH_28 = format_BiomeCH_28.readFeatures(json_BiomeCH_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BiomeCH_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BiomeCH_28.addFeatures(features_BiomeCH_28);
var lyr_BiomeCH_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BiomeCH_28, 
                style: style_BiomeCH_28,
                popuplayertitle: 'BiomeCH',
                interactive: true,
                title: '<img src="styles/legend/BiomeCH_28.png" /> BiomeCH'
            });
var format_LNCBILDEMo_29 = new ol.format.GeoJSON();
var features_LNCBILDEMo_29 = format_LNCBILDEMo_29.readFeatures(json_LNCBILDEMo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNCBILDEMo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNCBILDEMo_29.addFeatures(features_LNCBILDEMo_29);
var lyr_LNCBILDEMo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNCBILDEMo_29, 
                style: style_LNCBILDEMo_29,
                popuplayertitle: 'LNC BIL-DEMo',
                interactive: true,
                title: '<img src="styles/legend/LNCBILDEMo_29.png" /> LNC BIL-DEMo'
            });
var format_LNATCG_30 = new ol.format.GeoJSON();
var features_LNATCG_30 = format_LNATCG_30.readFeatures(json_LNATCG_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNATCG_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNATCG_30.addFeatures(features_LNATCG_30);
var lyr_LNATCG_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNATCG_30, 
                style: style_LNATCG_30,
                popuplayertitle: 'LNATCG',
                interactive: true,
                title: '<img src="styles/legend/LNATCG_30.png" /> LNATCG'
            });
var format_LNASPM_31 = new ol.format.GeoJSON();
var features_LNASPM_31 = format_LNASPM_31.readFeatures(json_LNASPM_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNASPM_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNASPM_31.addFeatures(features_LNASPM_31);
var lyr_LNASPM_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNASPM_31, 
                style: style_LNASPM_31,
                popuplayertitle: 'LNASPM',
                interactive: true,
                title: '<img src="styles/legend/LNASPM_31.png" /> LNASPM'
            });
var format_LNAGUA_32 = new ol.format.GeoJSON();
var features_LNAGUA_32 = format_LNAGUA_32.readFeatures(json_LNAGUA_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNAGUA_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNAGUA_32.addFeatures(features_LNAGUA_32);
var lyr_LNAGUA_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNAGUA_32, 
                style: style_LNAGUA_32,
                popuplayertitle: 'LNAGUA',
                interactive: true,
                title: '<img src="styles/legend/LNAGUA_32.png" /> LNAGUA'
            });
var format_LNAGAF_33 = new ol.format.GeoJSON();
var features_LNAGAF_33 = format_LNAGAF_33.readFeatures(json_LNAGAF_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNAGAF_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNAGAF_33.addFeatures(features_LNAGAF_33);
var lyr_LNAGAF_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNAGAF_33, 
                style: style_LNAGAF_33,
                popuplayertitle: 'LNAGAF',
                interactive: true,
                title: '<img src="styles/legend/LNAGAF_33.png" /> LNAGAF'
            });
var format_LNINGEA_34 = new ol.format.GeoJSON();
var features_LNINGEA_34 = format_LNINGEA_34.readFeatures(json_LNINGEA_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNINGEA_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNINGEA_34.addFeatures(features_LNINGEA_34);
var lyr_LNINGEA_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNINGEA_34, 
                style: style_LNINGEA_34,
                popuplayertitle: 'LN-INGEA',
                interactive: true,
                title: '<img src="styles/legend/LNINGEA_34.png" /> LN-INGEA'
            });
var format_LNFESI_35 = new ol.format.GeoJSON();
var features_LNFESI_35 = format_LNFESI_35.readFeatures(json_LNFESI_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LNFESI_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNFESI_35.addFeatures(features_LNFESI_35);
var lyr_LNFESI_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNFESI_35, 
                style: style_LNFESI_35,
                popuplayertitle: 'LN-FESI',
                interactive: true,
                title: '<img src="styles/legend/LNFESI_35.png" /> LN-FESI'
            });
var format_LMCMN_36 = new ol.format.GeoJSON();
var features_LMCMN_36 = format_LMCMN_36.readFeatures(json_LMCMN_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LMCMN_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LMCMN_36.addFeatures(features_LMCMN_36);
var lyr_LMCMN_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LMCMN_36, 
                style: style_LMCMN_36,
                popuplayertitle: 'LMCMN',
                interactive: true,
                title: '<img src="styles/legend/LMCMN_36.png" /> LMCMN'
            });
var format_LINAN_37 = new ol.format.GeoJSON();
var features_LINAN_37 = format_LINAN_37.readFeatures(json_LINAN_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LINAN_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LINAN_37.addFeatures(features_LINAN_37);
var lyr_LINAN_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LINAN_37, 
                style: style_LINAN_37,
                popuplayertitle: 'LINAN',
                interactive: true,
                title: '<img src="styles/legend/LINAN_37.png" /> LINAN'
            });
var format_LIFYCS_38 = new ol.format.GeoJSON();
var features_LIFYCS_38 = format_LIFYCS_38.readFeatures(json_LIFYCS_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIFYCS_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIFYCS_38.addFeatures(features_LIFYCS_38);
var lyr_LIFYCS_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIFYCS_38, 
                style: style_LIFYCS_38,
                popuplayertitle: 'LIFYCS',
                interactive: true,
                title: '<img src="styles/legend/LIFYCS_38.png" /> LIFYCS'
            });
var format_LIDTRA_39 = new ol.format.GeoJSON();
var features_LIDTRA_39 = format_LIDTRA_39.readFeatures(json_LIDTRA_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIDTRA_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIDTRA_39.addFeatures(features_LIDTRA_39);
var lyr_LIDTRA_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIDTRA_39, 
                style: style_LIDTRA_39,
                popuplayertitle: 'LIDTRA',
                interactive: true,
                title: '<img src="styles/legend/LIDTRA_39.png" /> LIDTRA'
            });
var format_LEMA_40 = new ol.format.GeoJSON();
var features_LEMA_40 = format_LEMA_40.readFeatures(json_LEMA_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LEMA_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEMA_40.addFeatures(features_LEMA_40);
var lyr_LEMA_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEMA_40, 
                style: style_LEMA_40,
                popuplayertitle: 'LEMA',
                interactive: true,
                title: '<img src="styles/legend/LEMA_40.png" /> LEMA'
            });
var format_LAVIS_41 = new ol.format.GeoJSON();
var features_LAVIS_41 = format_LAVIS_41.readFeatures(json_LAVIS_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAVIS_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAVIS_41.addFeatures(features_LAVIS_41);
var lyr_LAVIS_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAVIS_41, 
                style: style_LAVIS_41,
                popuplayertitle: 'LAVIS',
                interactive: true,
                title: '<img src="styles/legend/LAVIS_41.png" /> LAVIS'
            });
var format_LaNTI_42 = new ol.format.GeoJSON();
var features_LaNTI_42 = format_LaNTI_42.readFeatures(json_LaNTI_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaNTI_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaNTI_42.addFeatures(features_LaNTI_42);
var lyr_LaNTI_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaNTI_42, 
                style: style_LaNTI_42,
                popuplayertitle: 'LaNTI',
                interactive: true,
                title: '<img src="styles/legend/LaNTI_42.png" /> LaNTI'
            });
var format_LaNSBioDyT_43 = new ol.format.GeoJSON();
var features_LaNSBioDyT_43 = format_LaNSBioDyT_43.readFeatures(json_LaNSBioDyT_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaNSBioDyT_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaNSBioDyT_43.addFeatures(features_LaNSBioDyT_43);
var lyr_LaNSBioDyT_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaNSBioDyT_43, 
                style: style_LaNSBioDyT_43,
                popuplayertitle: 'LaNSBioDyT',
                interactive: true,
                title: '<img src="styles/legend/LaNSBioDyT_43.png" /> LaNSBioDyT'
            });
var format_LANRESC_44 = new ol.format.GeoJSON();
var features_LANRESC_44 = format_LANRESC_44.readFeatures(json_LANRESC_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANRESC_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANRESC_44.addFeatures(features_LANRESC_44);
var lyr_LANRESC_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANRESC_44, 
                style: style_LANRESC_44,
                popuplayertitle: 'LANRESC',
                interactive: true,
                title: '<img src="styles/legend/LANRESC_44.png" /> LANRESC'
            });
var format_LaNReGen_45 = new ol.format.GeoJSON();
var features_LaNReGen_45 = format_LaNReGen_45.readFeatures(json_LaNReGen_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaNReGen_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaNReGen_45.addFeatures(features_LaNReGen_45);
var lyr_LaNReGen_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaNReGen_45, 
                style: style_LaNReGen_45,
                popuplayertitle: 'LaNReGen',
                interactive: true,
                title: '<img src="styles/legend/LaNReGen_45.png" /> LaNReGen'
            });
var format_LANPLAM_46 = new ol.format.GeoJSON();
var features_LANPLAM_46 = format_LANPLAM_46.readFeatures(json_LANPLAM_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANPLAM_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANPLAM_46.addFeatures(features_LANPLAM_46);
var lyr_LANPLAM_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANPLAM_46, 
                style: style_LANPLAM_46,
                popuplayertitle: 'LANPLAM',
                interactive: true,
                title: '<img src="styles/legend/LANPLAM_46.png" /> LANPLAM'
            });
var format_LANOT_47 = new ol.format.GeoJSON();
var features_LANOT_47 = format_LANOT_47.readFeatures(json_LANOT_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANOT_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANOT_47.addFeatures(features_LANOT_47);
var lyr_LANOT_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANOT_47, 
                style: style_LANOT_47,
                popuplayertitle: 'LANOT',
                interactive: true,
                title: '<img src="styles/legend/LANOT_47.png" /> LANOT'
            });
var format_LANNBio_48 = new ol.format.GeoJSON();
var features_LANNBio_48 = format_LANNBio_48.readFeatures(json_LANNBio_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANNBio_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANNBio_48.addFeatures(features_LANNBio_48);
var lyr_LANNBio_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANNBio_48, 
                style: style_LANNBio_48,
                popuplayertitle: 'LANNBio',
                interactive: true,
                title: '<img src="styles/legend/LANNBio_48.png" /> LANNBio'
            });
var format_LaNNaFab_49 = new ol.format.GeoJSON();
var features_LaNNaFab_49 = format_LaNNaFab_49.readFeatures(json_LaNNaFab_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaNNaFab_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaNNaFab_49.addFeatures(features_LaNNaFab_49);
var lyr_LaNNaFab_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaNNaFab_49, 
                style: style_LaNNaFab_49,
                popuplayertitle: 'LaNNaFab',
                interactive: true,
                title: '<img src="styles/legend/LaNNaFab_49.png" /> LaNNaFab'
            });
var format_LANMO_50 = new ol.format.GeoJSON();
var features_LANMO_50 = format_LANMO_50.readFeatures(json_LANMO_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANMO_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANMO_50.addFeatures(features_LANMO_50);
var lyr_LANMO_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANMO_50, 
                style: style_LANMO_50,
                popuplayertitle: 'LANMO',
                interactive: true,
                title: '<img src="styles/legend/LANMO_50.png" /> LANMO'
            });
var format_LaNMiSe_51 = new ol.format.GeoJSON();
var features_LaNMiSe_51 = format_LaNMiSe_51.readFeatures(json_LaNMiSe_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaNMiSe_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaNMiSe_51.addFeatures(features_LaNMiSe_51);
var lyr_LaNMiSe_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaNMiSe_51, 
                style: style_LaNMiSe_51,
                popuplayertitle: 'LaNMiSe',
                interactive: true,
                title: '<img src="styles/legend/LaNMiSe_51.png" /> LaNMiSe'
            });
var format_LaNMiB_52 = new ol.format.GeoJSON();
var features_LaNMiB_52 = format_LaNMiB_52.readFeatures(json_LaNMiB_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaNMiB_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaNMiB_52.addFeatures(features_LaNMiB_52);
var lyr_LaNMiB_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaNMiB_52, 
                style: style_LaNMiB_52,
                popuplayertitle: 'LaNMiB',
                interactive: true,
                title: '<img src="styles/legend/LaNMiB_52.png" /> LaNMiB'
            });
var format_LANMDA_53 = new ol.format.GeoJSON();
var features_LANMDA_53 = format_LANMDA_53.readFeatures(json_LANMDA_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANMDA_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANMDA_53.addFeatures(features_LANMDA_53);
var lyr_LANMDA_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANMDA_53, 
                style: style_LANMDA_53,
                popuplayertitle: 'LANMDA',
                interactive: true,
                title: '<img src="styles/legend/LANMDA_53.png" /> LANMDA'
            });
var format_LanMac_54 = new ol.format.GeoJSON();
var features_LanMac_54 = format_LanMac_54.readFeatures(json_LanMac_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LanMac_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LanMac_54.addFeatures(features_LanMac_54);
var lyr_LanMac_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LanMac_54, 
                style: style_LanMac_54,
                popuplayertitle: 'LanMac',
                interactive: true,
                title: '<img src="styles/legend/LanMac_54.png" /> LanMac'
            });
var format_LaniVeg_55 = new ol.format.GeoJSON();
var features_LaniVeg_55 = format_LaniVeg_55.readFeatures(json_LaniVeg_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaniVeg_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaniVeg_55.addFeatures(features_LaniVeg_55);
var lyr_LaniVeg_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaniVeg_55, 
                style: style_LaniVeg_55,
                popuplayertitle: 'LaniVeg',
                interactive: true,
                title: '<img src="styles/legend/LaniVeg_55.png" /> LaniVeg'
            });
var format_LANITEM_56 = new ol.format.GeoJSON();
var features_LANITEM_56 = format_LANITEM_56.readFeatures(json_LANITEM_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANITEM_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANITEM_56.addFeatures(features_LANITEM_56);
var lyr_LANITEM_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANITEM_56, 
                style: style_LANITEM_56,
                popuplayertitle: 'LANITEM',
                interactive: true,
                title: '<img src="styles/legend/LANITEM_56.png" /> LANITEM'
            });
var format_LANITeF_57 = new ol.format.GeoJSON();
var features_LANITeF_57 = format_LANITeF_57.readFeatures(json_LANITeF_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANITeF_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANITeF_57.addFeatures(features_LANITeF_57);
var lyr_LANITeF_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANITeF_57, 
                style: style_LANITeF_57,
                popuplayertitle: 'LANITeF',
                interactive: true,
                title: '<img src="styles/legend/LANITeF_57.png" /> LANITeF'
            });
var format_LANITED_58 = new ol.format.GeoJSON();
var features_LANITED_58 = format_LANITED_58.readFeatures(json_LANITED_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANITED_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANITED_58.addFeatures(features_LANITED_58);
var lyr_LANITED_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANITED_58, 
                style: style_LANITED_58,
                popuplayertitle: 'LANITED',
                interactive: true,
                title: '<img src="styles/legend/LANITED_58.png" /> LANITED'
            });
var format_LANISAF_59 = new ol.format.GeoJSON();
var features_LANISAF_59 = format_LANISAF_59.readFeatures(json_LANISAF_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANISAF_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANISAF_59.addFeatures(features_LANISAF_59);
var lyr_LANISAF_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANISAF_59, 
                style: style_LANISAF_59,
                popuplayertitle: 'LANISAF',
                interactive: true,
                title: '<img src="styles/legend/LANISAF_59.png" /> LANISAF'
            });
var format_Lanirem_60 = new ol.format.GeoJSON();
var features_Lanirem_60 = format_Lanirem_60.readFeatures(json_Lanirem_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lanirem_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lanirem_60.addFeatures(features_Lanirem_60);
var lyr_Lanirem_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lanirem_60, 
                style: style_Lanirem_60,
                popuplayertitle: 'Lanirem',
                interactive: true,
                title: '<img src="styles/legend/Lanirem_60.png" /> Lanirem'
            });
var format_LANIMFE_61 = new ol.format.GeoJSON();
var features_LANIMFE_61 = format_LANIMFE_61.readFeatures(json_LANIMFE_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANIMFE_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANIMFE_61.addFeatures(features_LANIMFE_61);
var lyr_LANIMFE_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANIMFE_61, 
                style: style_LANIMFE_61,
                popuplayertitle: 'LANIMFE',
                interactive: true,
                title: '<img src="styles/legend/LANIMFE_61.png" /> LANIMFE'
            });
var format_LANIIA_62 = new ol.format.GeoJSON();
var features_LANIIA_62 = format_LANIIA_62.readFeatures(json_LANIIA_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANIIA_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANIIA_62.addFeatures(features_LANIIA_62);
var lyr_LANIIA_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANIIA_62, 
                style: style_LANIIA_62,
                popuplayertitle: 'LANIIA',
                interactive: true,
                title: '<img src="styles/legend/LANIIA_62.png" /> LANIIA'
            });
var format_LANIFLUMAR_63 = new ol.format.GeoJSON();
var features_LANIFLUMAR_63 = format_LANIFLUMAR_63.readFeatures(json_LANIFLUMAR_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANIFLUMAR_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANIFLUMAR_63.addFeatures(features_LANIFLUMAR_63);
var lyr_LANIFLUMAR_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANIFLUMAR_63, 
                style: style_LANIFLUMAR_63,
                popuplayertitle: 'LANIFLUMAR',
                interactive: true,
                title: '<img src="styles/legend/LANIFLUMAR_63.png" /> LANIFLUMAR'
            });
var format_LANIF_64 = new ol.format.GeoJSON();
var features_LANIF_64 = format_LANIF_64.readFeatures(json_LANIF_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANIF_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANIF_64.addFeatures(features_LANIF_64);
var lyr_LANIF_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANIF_64, 
                style: style_LANIF_64,
                popuplayertitle: 'LANIF',
                interactive: true,
                title: '<img src="styles/legend/LANIF_64.png" /> LANIF'
            });
var format_LANIESE_65 = new ol.format.GeoJSON();
var features_LANIESE_65 = format_LANIESE_65.readFeatures(json_LANIESE_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANIESE_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANIESE_65.addFeatures(features_LANIESE_65);
var lyr_LANIESE_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANIESE_65, 
                style: style_LANIESE_65,
                popuplayertitle: 'LANIESE',
                interactive: true,
                title: '<img src="styles/legend/LANIESE_65.png" /> LANIESE'
            });
var format_LANIES_66 = new ol.format.GeoJSON();
var features_LANIES_66 = format_LANIES_66.readFeatures(json_LANIES_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANIES_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANIES_66.addFeatures(features_LANIES_66);
var lyr_LANIES_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANIES_66, 
                style: style_LANIES_66,
                popuplayertitle: 'LANIES',
                interactive: true,
                title: '<img src="styles/legend/LANIES_66.png" /> LANIES'
            });
var format_LANIBIOC_67 = new ol.format.GeoJSON();
var features_LANIBIOC_67 = format_LANIBIOC_67.readFeatures(json_LANIBIOC_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANIBIOC_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANIBIOC_67.addFeatures(features_LANIBIOC_67);
var lyr_LANIBIOC_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANIBIOC_67, 
                style: style_LANIBIOC_67,
                popuplayertitle: 'LANIBIOC',
                interactive: true,
                title: '<img src="styles/legend/LANIBIOC_67.png" /> LANIBIOC'
            });
var format_LANIAUTO_68 = new ol.format.GeoJSON();
var features_LANIAUTO_68 = format_LANIAUTO_68.readFeatures(json_LANIAUTO_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANIAUTO_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANIAUTO_68.addFeatures(features_LANIAUTO_68);
var lyr_LANIAUTO_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANIAUTO_68, 
                style: style_LANIAUTO_68,
                popuplayertitle: 'LANIAUTO',
                interactive: true,
                title: '<img src="styles/legend/LANIAUTO_68.png" /> LANIAUTO'
            });
var format_LANH2_69 = new ol.format.GeoJSON();
var features_LANH2_69 = format_LANH2_69.readFeatures(json_LANH2_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANH2_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANH2_69.addFeatures(features_LANH2_69);
var lyr_LANH2_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANH2_69, 
                style: style_LANH2_69,
                popuplayertitle: 'LANH2',
                interactive: true,
                title: '<img src="styles/legend/LANH2_69.png" /> LANH2'
            });
var format_LANGTM_70 = new ol.format.GeoJSON();
var features_LANGTM_70 = format_LANGTM_70.readFeatures(json_LANGTM_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANGTM_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANGTM_70.addFeatures(features_LANGTM_70);
var lyr_LANGTM_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANGTM_70, 
                style: style_LANGTM_70,
                popuplayertitle: 'LANGTM',
                interactive: true,
                title: '<img src="styles/legend/LANGTM_70.png" /> LANGTM'
            });
var format_LANGEM_71 = new ol.format.GeoJSON();
var features_LANGEM_71 = format_LANGEM_71.readFeatures(json_LANGEM_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANGEM_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANGEM_71.addFeatures(features_LANGEM_71);
var lyr_LANGEM_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANGEM_71, 
                style: style_LANGEM_71,
                popuplayertitle: 'LANGEM',
                interactive: true,
                title: '<img src="styles/legend/LANGEM_71.png" /> LANGEM'
            });
var format_LANEM_72 = new ol.format.GeoJSON();
var features_LANEM_72 = format_LANEM_72.readFeatures(json_LANEM_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANEM_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANEM_72.addFeatures(features_LANEM_72);
var lyr_LANEM_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANEM_72, 
                style: style_LANEM_72,
                popuplayertitle: 'LANEM',
                interactive: true,
                title: '<img src="styles/legend/LANEM_72.png" /> LANEM'
            });
var format_LaNDACBio_73 = new ol.format.GeoJSON();
var features_LaNDACBio_73 = format_LaNDACBio_73.readFeatures(json_LaNDACBio_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaNDACBio_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaNDACBio_73.addFeatures(features_LaNDACBio_73);
var lyr_LaNDACBio_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaNDACBio_73, 
                style: style_LaNDACBio_73,
                popuplayertitle: 'LaNDACBio',
                interactive: true,
                title: '<img src="styles/legend/LaNDACBio_73.png" /> LaNDACBio'
            });
var format_LANCYTT_74 = new ol.format.GeoJSON();
var features_LANCYTT_74 = format_LANCYTT_74.readFeatures(json_LANCYTT_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANCYTT_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANCYTT_74.addFeatures(features_LANCYTT_74);
var lyr_LANCYTT_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANCYTT_74, 
                style: style_LANCYTT_74,
                popuplayertitle: 'LANCYTT',
                interactive: true,
                title: '<img src="styles/legend/LANCYTT_74.png" /> LANCYTT'
            });
var format_LANCTOXS_75 = new ol.format.GeoJSON();
var features_LANCTOXS_75 = format_LANCTOXS_75.readFeatures(json_LANCTOXS_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANCTOXS_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANCTOXS_75.addFeatures(features_LANCTOXS_75);
var lyr_LANCTOXS_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANCTOXS_75, 
                style: style_LANCTOXS_75,
                popuplayertitle: 'LANCTOXS',
                interactive: true,
                title: '<img src="styles/legend/LANCTOXS_75.png" /> LANCTOXS'
            });
var format_LaNCTIGeSSR_76 = new ol.format.GeoJSON();
var features_LaNCTIGeSSR_76 = format_LaNCTIGeSSR_76.readFeatures(json_LaNCTIGeSSR_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaNCTIGeSSR_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaNCTIGeSSR_76.addFeatures(features_LaNCTIGeSSR_76);
var lyr_LaNCTIGeSSR_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaNCTIGeSSR_76, 
                style: style_LaNCTIGeSSR_76,
                popuplayertitle: 'LaNCTIGeSSR',
                interactive: true,
                title: '<img src="styles/legend/LaNCTIGeSSR_76.png" /> LaNCTIGeSSR'
            });
var format_LANCoCoME_77 = new ol.format.GeoJSON();
var features_LANCoCoME_77 = format_LANCoCoME_77.readFeatures(json_LANCoCoME_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANCoCoME_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANCoCoME_77.addFeatures(features_LANCoCoME_77);
var lyr_LANCoCoME_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANCoCoME_77, 
                style: style_LANCoCoME_77,
                popuplayertitle: 'LANCoCoME',
                interactive: true,
                title: '<img src="styles/legend/LANCoCoME_77.png" /> LANCoCoME'
            });
var format_LANCOBI_78 = new ol.format.GeoJSON();
var features_LANCOBI_78 = format_LANCOBI_78.readFeatures(json_LANCOBI_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANCOBI_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANCOBI_78.addFeatures(features_LANCOBI_78);
var lyr_LANCOBI_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANCOBI_78, 
                style: style_LANCOBI_78,
                popuplayertitle: 'LANCOBI',
                interactive: true,
                title: '<img src="styles/legend/LANCOBI_78.png" /> LANCOBI'
            });
var format_LANCO_79 = new ol.format.GeoJSON();
var features_LANCO_79 = format_LANCO_79.readFeatures(json_LANCO_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANCO_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANCO_79.addFeatures(features_LANCO_79);
var lyr_LANCO_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANCO_79, 
                style: style_LANCO_79,
                popuplayertitle: 'LANCO',
                interactive: true,
                title: '<img src="styles/legend/LANCO_79.png" /> LANCO'
            });
var format_LaNCISProCam_80 = new ol.format.GeoJSON();
var features_LaNCISProCam_80 = format_LaNCISProCam_80.readFeatures(json_LaNCISProCam_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaNCISProCam_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaNCISProCam_80.addFeatures(features_LaNCISProCam_80);
var lyr_LaNCISProCam_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaNCISProCam_80, 
                style: style_LaNCISProCam_80,
                popuplayertitle: 'LaNCISProCam',
                interactive: true,
                title: '<img src="styles/legend/LaNCISProCam_80.png" /> LaNCISProCam'
            });
var format_LANCIS_81 = new ol.format.GeoJSON();
var features_LANCIS_81 = format_LANCIS_81.readFeatures(json_LANCIS_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANCIS_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANCIS_81.addFeatures(features_LANCIS_81);
var lyr_LANCIS_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANCIS_81, 
                style: style_LANCIS_81,
                popuplayertitle: 'LANCIS',
                interactive: true,
                title: '<img src="styles/legend/LANCIS_81.png" /> LANCIS'
            });
var format_LANCIRA_82 = new ol.format.GeoJSON();
var features_LANCIRA_82 = format_LANCIRA_82.readFeatures(json_LANCIRA_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANCIRA_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANCIRA_82.addFeatures(features_LANCIRA_82);
var lyr_LANCIRA_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANCIRA_82, 
                style: style_LANCIRA_82,
                popuplayertitle: 'LANCIRA',
                interactive: true,
                title: '<img src="styles/legend/LANCIRA_82.png" /> LANCIRA'
            });
var format_LANCIDI_83 = new ol.format.GeoJSON();
var features_LANCIDI_83 = format_LANCIDI_83.readFeatures(json_LANCIDI_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANCIDI_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANCIDI_83.addFeatures(features_LANCIDI_83);
var lyr_LANCIDI_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANCIDI_83, 
                style: style_LANCIDI_83,
                popuplayertitle: 'LANCIDI',
                interactive: true,
                title: '<img src="styles/legend/LANCIDI_83.png" /> LANCIDI'
            });
var format_LANCIC_84 = new ol.format.GeoJSON();
var features_LANCIC_84 = format_LANCIC_84.readFeatures(json_LANCIC_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANCIC_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANCIC_84.addFeatures(features_LANCIC_84);
var lyr_LANCIC_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANCIC_84, 
                style: style_LANCIC_84,
                popuplayertitle: 'LANCIC',
                interactive: true,
                title: '<img src="styles/legend/LANCIC_84.png" /> LANCIC'
            });
var format_LANCEVSA_85 = new ol.format.GeoJSON();
var features_LANCEVSA_85 = format_LANCEVSA_85.readFeatures(json_LANCEVSA_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANCEVSA_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANCEVSA_85.addFeatures(features_LANCEVSA_85);
var lyr_LANCEVSA_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANCEVSA_85, 
                style: style_LANCEVSA_85,
                popuplayertitle: 'LANCEVSA',
                interactive: true,
                title: '<img src="styles/legend/LANCEVSA_85.png" /> LANCEVSA'
            });
var format_LANCER_86 = new ol.format.GeoJSON();
var features_LANCER_86 = format_LANCER_86.readFeatures(json_LANCER_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANCER_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANCER_86.addFeatures(features_LANCER_86);
var lyr_LANCER_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANCER_86, 
                style: style_LANCER_86,
                popuplayertitle: 'LANCER',
                interactive: true,
                title: '<img src="styles/legend/LANCER_86.png" /> LANCER'
            });
var format_LANCEI_87 = new ol.format.GeoJSON();
var features_LANCEI_87 = format_LANCEI_87.readFeatures(json_LANCEI_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANCEI_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANCEI_87.addFeatures(features_LANCEI_87);
var lyr_LANCEI_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANCEI_87, 
                style: style_LANCEI_87,
                popuplayertitle: 'LANCEI',
                interactive: true,
                title: '<img src="styles/legend/LANCEI_87.png" /> LANCEI'
            });
var format_LANCE_88 = new ol.format.GeoJSON();
var features_LANCE_88 = format_LANCE_88.readFeatures(json_LANCE_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANCE_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANCE_88.addFeatures(features_LANCE_88);
var lyr_LANCE_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANCE_88, 
                style: style_LANCE_88,
                popuplayertitle: 'LANCE',
                interactive: true,
                title: '<img src="styles/legend/LANCE_88.png" /> LANCE'
            });
var format_LANCAPFEMUGUAA_89 = new ol.format.GeoJSON();
var features_LANCAPFEMUGUAA_89 = format_LANCAPFEMUGUAA_89.readFeatures(json_LANCAPFEMUGUAA_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANCAPFEMUGUAA_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANCAPFEMUGUAA_89.addFeatures(features_LANCAPFEMUGUAA_89);
var lyr_LANCAPFEMUGUAA_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANCAPFEMUGUAA_89, 
                style: style_LANCAPFEMUGUAA_89,
                popuplayertitle: 'LANCAPFEM-UG-UAA',
                interactive: true,
                title: '<img src="styles/legend/LANCAPFEMUGUAA_89.png" /> LANCAPFEM-UG-UAA'
            });
var format_LaNCaM_90 = new ol.format.GeoJSON();
var features_LaNCaM_90 = format_LaNCaM_90.readFeatures(json_LaNCaM_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaNCaM_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaNCaM_90.addFeatures(features_LaNCaM_90);
var lyr_LaNCaM_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaNCaM_90, 
                style: style_LaNCaM_90,
                popuplayertitle: 'LaNCaM',
                interactive: true,
                title: '<img src="styles/legend/LaNCaM_90.png" /> LaNCaM'
            });
var format_LANCAD_91 = new ol.format.GeoJSON();
var features_LANCAD_91 = format_LANCAD_91.readFeatures(json_LANCAD_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANCAD_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANCAD_91.addFeatures(features_LANCAD_91);
var lyr_LANCAD_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANCAD_91, 
                style: style_LANCAD_91,
                popuplayertitle: 'LANCAD',
                interactive: true,
                title: '<img src="styles/legend/LANCAD_91.png" /> LANCAD'
            });
var format_LaNCAC_92 = new ol.format.GeoJSON();
var features_LaNCAC_92 = format_LaNCAC_92.readFeatures(json_LaNCAC_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaNCAC_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaNCAC_92.addFeatures(features_LaNCAC_92);
var lyr_LaNCAC_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaNCAC_92, 
                style: style_LaNCAC_92,
                popuplayertitle: 'LaNCAC',
                interactive: true,
                title: '<img src="styles/legend/LaNCAC_92.png" /> LaNCAC'
            });
var format_LaNCa_93 = new ol.format.GeoJSON();
var features_LaNCa_93 = format_LaNCa_93.readFeatures(json_LaNCa_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaNCa_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaNCa_93.addFeatures(features_LaNCa_93);
var lyr_LaNCa_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaNCa_93, 
                style: style_LaNCa_93,
                popuplayertitle: 'LaNCa',
                interactive: true,
                title: '<img src="styles/legend/LaNCa_93.png" /> LaNCa'
            });
var format_LANBIOBAN_94 = new ol.format.GeoJSON();
var features_LANBIOBAN_94 = format_LANBIOBAN_94.readFeatures(json_LANBIOBAN_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANBIOBAN_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANBIOBAN_94.addFeatures(features_LANBIOBAN_94);
var lyr_LANBIOBAN_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANBIOBAN_94, 
                style: style_LANBIOBAN_94,
                popuplayertitle: 'LANBIOBAN',
                interactive: true,
                title: '<img src="styles/legend/LANBIOBAN_94.png" /> LANBIOBAN'
            });
var format_LANBAMA_95 = new ol.format.GeoJSON();
var features_LANBAMA_95 = format_LANBAMA_95.readFeatures(json_LANBAMA_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANBAMA_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANBAMA_95.addFeatures(features_LANBAMA_95);
var lyr_LANBAMA_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANBAMA_95, 
                style: style_LANBAMA_95,
                popuplayertitle: 'LANBAMA',
                interactive: true,
                title: '<img src="styles/legend/LANBAMA_95.png" /> LANBAMA'
            });
var format_LANAVEX_96 = new ol.format.GeoJSON();
var features_LANAVEX_96 = format_LANAVEX_96.readFeatures(json_LANAVEX_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANAVEX_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANAVEX_96.addFeatures(features_LANAVEX_96);
var lyr_LANAVEX_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANAVEX_96, 
                style: style_LANAVEX_96,
                popuplayertitle: 'LANAVEX',
                interactive: true,
                title: '<img src="styles/legend/LANAVEX_96.png" /> LANAVEX'
            });
var format_LANASE_97 = new ol.format.GeoJSON();
var features_LANASE_97 = format_LANASE_97.readFeatures(json_LANASE_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANASE_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANASE_97.addFeatures(features_LANASE_97);
var lyr_LANASE_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANASE_97, 
                style: style_LANASE_97,
                popuplayertitle: 'LANASE',
                interactive: true,
                title: '<img src="styles/legend/LANASE_97.png" /> LANASE'
            });
var format_LANALIMSA_98 = new ol.format.GeoJSON();
var features_LANALIMSA_98 = format_LANALIMSA_98.readFeatures(json_LANALIMSA_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANALIMSA_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANALIMSA_98.addFeatures(features_LANALIMSA_98);
var lyr_LANALIMSA_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANALIMSA_98, 
                style: style_LANALIMSA_98,
                popuplayertitle: 'LANALIMSA',
                interactive: true,
                title: '<img src="styles/legend/LANALIMSA_98.png" /> LANALIMSA'
            });
var format_LANAFQB_99 = new ol.format.GeoJSON();
var features_LANAFQB_99 = format_LANAFQB_99.readFeatures(json_LANAFQB_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANAFQB_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANAFQB_99.addFeatures(features_LANAFQB_99);
var lyr_LANAFQB_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANAFQB_99, 
                style: style_LANAFQB_99,
                popuplayertitle: 'LANAFQB',
                interactive: true,
                title: '<img src="styles/legend/LANAFQB_99.png" /> LANAFQB'
            });
var format_LANAEPBI_100 = new ol.format.GeoJSON();
var features_LANAEPBI_100 = format_LANAEPBI_100.readFeatures(json_LANAEPBI_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANAEPBI_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANAEPBI_100.addFeatures(features_LANAEPBI_100);
var lyr_LANAEPBI_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANAEPBI_100, 
                style: style_LANAEPBI_100,
                popuplayertitle: 'LANAEPBI',
                interactive: true,
                title: '<img src="styles/legend/LANAEPBI_100.png" /> LANAEPBI'
            });
var format_LANABIO_101 = new ol.format.GeoJSON();
var features_LANABIO_101 = format_LANABIO_101.readFeatures(json_LANABIO_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANABIO_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANABIO_101.addFeatures(features_LANABIO_101);
var lyr_LANABIO_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANABIO_101, 
                style: style_LANABIO_101,
                popuplayertitle: 'LANABIO',
                interactive: true,
                title: '<img src="styles/legend/LANABIO_101.png" /> LANABIO'
            });
var format_LANCONAHCYTEVIESAD_102 = new ol.format.GeoJSON();
var features_LANCONAHCYTEVIESAD_102 = format_LANCONAHCYTEVIESAD_102.readFeatures(json_LANCONAHCYTEVIESAD_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANCONAHCYTEVIESAD_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANCONAHCYTEVIESAD_102.addFeatures(features_LANCONAHCYTEVIESAD_102);
var lyr_LANCONAHCYTEVIESAD_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANCONAHCYTEVIESAD_102, 
                style: style_LANCONAHCYTEVIESAD_102,
                popuplayertitle: 'LAN CONAHCYT-EVIESAD',
                interactive: true,
                title: '<img src="styles/legend/LANCONAHCYTEVIESAD_102.png" /> LAN CONAHCYT-EVIESAD'
            });
var format_LAMPER_103 = new ol.format.GeoJSON();
var features_LAMPER_103 = format_LAMPER_103.readFeatures(json_LAMPER_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAMPER_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAMPER_103.addFeatures(features_LAMPER_103);
var lyr_LAMPER_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAMPER_103, 
                style: style_LAMPER_103,
                popuplayertitle: 'LAMPER',
                interactive: true,
                title: '<img src="styles/legend/LAMPER_103.png" /> LAMPER'
            });
var format_LACYQS_104 = new ol.format.GeoJSON();
var features_LACYQS_104 = format_LACYQS_104.readFeatures(json_LACYQS_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LACYQS_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LACYQS_104.addFeatures(features_LACYQS_104);
var lyr_LACYQS_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LACYQS_104, 
                style: style_LACYQS_104,
                popuplayertitle: 'LACYQS',
                interactive: true,
                title: '<img src="styles/legend/LACYQS_104.png" /> LACYQS'
            });
var format_LaBTAA_105 = new ol.format.GeoJSON();
var features_LaBTAA_105 = format_LaBTAA_105.readFeatures(json_LaBTAA_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaBTAA_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaBTAA_105.addFeatures(features_LaBTAA_105);
var lyr_LaBTAA_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaBTAA_105, 
                style: style_LaBTAA_105,
                popuplayertitle: 'LaBTAA',
                interactive: true,
                title: '<img src="styles/legend/LaBTAA_105.png" /> LaBTAA'
            });
var format_LabNalCit_106 = new ol.format.GeoJSON();
var features_LabNalCit_106 = format_LabNalCit_106.readFeatures(json_LabNalCit_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LabNalCit_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LabNalCit_106.addFeatures(features_LabNalCit_106);
var lyr_LabNalCit_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LabNalCit_106, 
                style: style_LabNalCit_106,
                popuplayertitle: 'LabNalCit',
                interactive: true,
                title: '<img src="styles/legend/LabNalCit_106.png" /> LabNalCit'
            });
var format_LABNACE_107 = new ol.format.GeoJSON();
var features_LABNACE_107 = format_LABNACE_107.readFeatures(json_LABNACE_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LABNACE_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LABNACE_107.addFeatures(features_LABNACE_107);
var lyr_LABNACE_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LABNACE_107, 
                style: style_LABNACE_107,
                popuplayertitle: 'LABNACE',
                interactive: true,
                title: '<img src="styles/legend/LABNACE_107.png" /> LABNACE'
            });
var format_LABMYN_108 = new ol.format.GeoJSON();
var features_LABMYN_108 = format_LABMYN_108.readFeatures(json_LABMYN_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LABMYN_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LABMYN_108.addFeatures(features_LABMYN_108);
var lyr_LABMYN_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LABMYN_108, 
                style: style_LABMYN_108,
                popuplayertitle: 'LABMYN',
                interactive: true,
                title: '<img src="styles/legend/LABMYN_108.png" /> LABMYN'
            });
var format_INNTESILCO_109 = new ol.format.GeoJSON();
var features_INNTESILCO_109 = format_INNTESILCO_109.readFeatures(json_INNTESILCO_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INNTESILCO_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INNTESILCO_109.addFeatures(features_INNTESILCO_109);
var lyr_INNTESILCO_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INNTESILCO_109, 
                style: style_INNTESILCO_109,
                popuplayertitle: 'INNTE-SILCO',
                interactive: true,
                title: '<img src="styles/legend/INNTESILCO_109.png" /> INNTE-SILCO'
            });
var format_HAWC_110 = new ol.format.GeoJSON();
var features_HAWC_110 = format_HAWC_110.readFeatures(json_HAWC_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HAWC_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAWC_110.addFeatures(features_HAWC_110);
var lyr_HAWC_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HAWC_110, 
                style: style_HAWC_110,
                popuplayertitle: 'HAWC',
                interactive: true,
                title: '<img src="styles/legend/HAWC_110.png" /> HAWC'
            });
var format_GeoInt_111 = new ol.format.GeoJSON();
var features_GeoInt_111 = format_GeoInt_111.readFeatures(json_GeoInt_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeoInt_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeoInt_111.addFeatures(features_GeoInt_111);
var lyr_GeoInt_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeoInt_111, 
                style: style_GeoInt_111,
                popuplayertitle: 'GeoInt',
                interactive: true,
                title: '<img src="styles/legend/GeoInt_111.png" /> GeoInt'
            });
var format_EICAR_112 = new ol.format.GeoJSON();
var features_EICAR_112 = format_EICAR_112.readFeatures(json_EICAR_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EICAR_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EICAR_112.addFeatures(features_EICAR_112);
var lyr_EICAR_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EICAR_112, 
                style: style_EICAR_112,
                popuplayertitle: 'EICAR',
                interactive: true,
                title: '<img src="styles/legend/EICAR_112.png" /> EICAR'
            });
var format_CNS_113 = new ol.format.GeoJSON();
var features_CNS_113 = format_CNS_113.readFeatures(json_CNS_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CNS_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CNS_113.addFeatures(features_CNS_113);
var lyr_CNS_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CNS_113, 
                style: style_CNS_113,
                popuplayertitle: 'CNS',
                interactive: true,
                title: '<img src="styles/legend/CNS_113.png" /> CNS'
            });
var format_CI3M_114 = new ol.format.GeoJSON();
var features_CI3M_114 = format_CI3M_114.readFeatures(json_CI3M_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CI3M_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CI3M_114.addFeatures(features_CI3M_114);
var lyr_CI3M_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CI3M_114, 
                style: style_CI3M_114,
                popuplayertitle: 'CI3M',
                interactive: true,
                title: '<img src="styles/legend/CI3M_114.png" /> CI3M'
            });
var format_CENAPROT_115 = new ol.format.GeoJSON();
var features_CENAPROT_115 = format_CENAPROT_115.readFeatures(json_CENAPROT_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENAPROT_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENAPROT_115.addFeatures(features_CENAPROT_115);
var lyr_CENAPROT_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENAPROT_115, 
                style: style_CENAPROT_115,
                popuplayertitle: 'CENAPROT',
                interactive: true,
                title: '<img src="styles/legend/CENAPROT_115.png" /> CENAPROT'
            });
var format_BIOENER_116 = new ol.format.GeoJSON();
var features_BIOENER_116 = format_BIOENER_116.readFeatures(json_BIOENER_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BIOENER_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BIOENER_116.addFeatures(features_BIOENER_116);
var lyr_BIOENER_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BIOENER_116, 
                style: style_BIOENER_116,
                popuplayertitle: 'BIOENER',
                interactive: true,
                title: '<img src="styles/legend/BIOENER_116.png" /> BIOENER'
            });
var format_Vivienda_117 = new ol.format.GeoJSON();
var features_Vivienda_117 = format_Vivienda_117.readFeatures(json_Vivienda_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vivienda_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vivienda_117.addFeatures(features_Vivienda_117);
var lyr_Vivienda_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vivienda_117, 
                style: style_Vivienda_117,
                popuplayertitle: 'Vivienda',
                interactive: true,
                title: '<img src="styles/legend/Vivienda_117.png" /> Vivienda'
            });
var format_SoberaniaAlimentaria_118 = new ol.format.GeoJSON();
var features_SoberaniaAlimentaria_118 = format_SoberaniaAlimentaria_118.readFeatures(json_SoberaniaAlimentaria_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SoberaniaAlimentaria_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoberaniaAlimentaria_118.addFeatures(features_SoberaniaAlimentaria_118);
var lyr_SoberaniaAlimentaria_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SoberaniaAlimentaria_118, 
                style: style_SoberaniaAlimentaria_118,
                popuplayertitle: 'Soberania Alimentaria',
                interactive: true,
                title: '<img src="styles/legend/SoberaniaAlimentaria_118.png" /> Soberania Alimentaria'
            });
var format_SeguridadHumana_119 = new ol.format.GeoJSON();
var features_SeguridadHumana_119 = format_SeguridadHumana_119.readFeatures(json_SeguridadHumana_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SeguridadHumana_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeguridadHumana_119.addFeatures(features_SeguridadHumana_119);
var lyr_SeguridadHumana_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SeguridadHumana_119, 
                style: style_SeguridadHumana_119,
                popuplayertitle: 'Seguridad Humana',
                interactive: true,
                title: '<img src="styles/legend/SeguridadHumana_119.png" /> Seguridad Humana'
            });
var format_SistemasSocioecolgicos_120 = new ol.format.GeoJSON();
var features_SistemasSocioecolgicos_120 = format_SistemasSocioecolgicos_120.readFeatures(json_SistemasSocioecolgicos_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SistemasSocioecolgicos_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemasSocioecolgicos_120.addFeatures(features_SistemasSocioecolgicos_120);
var lyr_SistemasSocioecolgicos_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemasSocioecolgicos_120, 
                style: style_SistemasSocioecolgicos_120,
                popuplayertitle: 'Sistemas Socioecológicos',
                interactive: true,
                title: '<img src="styles/legend/SistemasSocioecolgicos_120.png" /> Sistemas Socioecológicos'
            });
var format_EyCClimtico_121 = new ol.format.GeoJSON();
var features_EyCClimtico_121 = format_EyCClimtico_121.readFeatures(json_EyCClimtico_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EyCClimtico_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EyCClimtico_121.addFeatures(features_EyCClimtico_121);
var lyr_EyCClimtico_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EyCClimtico_121, 
                style: style_EyCClimtico_121,
                popuplayertitle: 'EyCClimático',
                interactive: true,
                title: '<img src="styles/legend/EyCClimtico_121.png" /> EyCClimático'
            });
var format_Salud_122 = new ol.format.GeoJSON();
var features_Salud_122 = format_Salud_122.readFeatures(json_Salud_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Salud_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Salud_122.addFeatures(features_Salud_122);
var lyr_Salud_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Salud_122, 
                style: style_Salud_122,
                popuplayertitle: 'Salud',
                interactive: true,
                title: '<img src="styles/legend/Salud_122.png" /> Salud'
            });
var format_Educacin_123 = new ol.format.GeoJSON();
var features_Educacin_123 = format_Educacin_123.readFeatures(json_Educacin_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Educacin_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Educacin_123.addFeatures(features_Educacin_123);
var lyr_Educacin_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Educacin_123, 
                style: style_Educacin_123,
                popuplayertitle: 'Educación',
                interactive: true,
                title: '<img src="styles/legend/Educacin_123.png" /> Educación'
            });
var format_Cultura_124 = new ol.format.GeoJSON();
var features_Cultura_124 = format_Cultura_124.readFeatures(json_Cultura_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cultura_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cultura_124.addFeatures(features_Cultura_124);
var lyr_Cultura_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cultura_124, 
                style: style_Cultura_124,
                popuplayertitle: 'Cultura',
                interactive: true,
                title: '<img src="styles/legend/Cultura_124.png" /> Cultura'
            });
var format_Cmputo_125 = new ol.format.GeoJSON();
var features_Cmputo_125 = format_Cmputo_125.readFeatures(json_Cmputo_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cmputo_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cmputo_125.addFeatures(features_Cmputo_125);
var lyr_Cmputo_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cmputo_125, 
                style: style_Cmputo_125,
                popuplayertitle: 'Cómputo',
                interactive: true,
                title: '<img src="styles/legend/Cmputo_125.png" /> Cómputo'
            });
var format_CienciaBsica_126 = new ol.format.GeoJSON();
var features_CienciaBsica_126 = format_CienciaBsica_126.readFeatures(json_CienciaBsica_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CienciaBsica_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CienciaBsica_126.addFeatures(features_CienciaBsica_126);
var lyr_CienciaBsica_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CienciaBsica_126, 
                style: style_CienciaBsica_126,
                popuplayertitle: 'Ciencia Básica',
                interactive: true,
                title: '<img src="styles/legend/CienciaBsica_126.png" /> Ciencia Básica'
            });
var format_AgentesTxicos_127 = new ol.format.GeoJSON();
var features_AgentesTxicos_127 = format_AgentesTxicos_127.readFeatures(json_AgentesTxicos_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgentesTxicos_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgentesTxicos_127.addFeatures(features_AgentesTxicos_127);
var lyr_AgentesTxicos_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AgentesTxicos_127, 
                style: style_AgentesTxicos_127,
                popuplayertitle: 'Agentes Tóxicos',
                interactive: true,
                title: '<img src="styles/legend/AgentesTxicos_127.png" /> Agentes Tóxicos'
            });
var format_Agua_128 = new ol.format.GeoJSON();
var features_Agua_128 = format_Agua_128.readFeatures(json_Agua_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agua_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agua_128.addFeatures(features_Agua_128);
var lyr_Agua_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agua_128, 
                style: style_Agua_128,
                popuplayertitle: 'Agua',
                interactive: true,
                title: '<img src="styles/legend/Agua_128.png" /> Agua'
            });
var format_116LNC_129 = new ol.format.GeoJSON();
var features_116LNC_129 = format_116LNC_129.readFeatures(json_116LNC_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_116LNC_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_116LNC_129.addFeatures(features_116LNC_129);
var lyr_116LNC_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_116LNC_129, 
                style: style_116LNC_129,
                popuplayertitle: '116 LNC',
                interactive: true,
                title: '<img src="styles/legend/116LNC_129.png" /> 116 LNC'
            });
var format_Representantes_130 = new ol.format.GeoJSON();
var features_Representantes_130 = format_Representantes_130.readFeatures(json_Representantes_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Representantes_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Representantes_130.addFeatures(features_Representantes_130);
var lyr_Representantes_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Representantes_130, 
                style: style_Representantes_130,
                popuplayertitle: 'Representantes',
                interactive: true,
                title: '<img src="styles/legend/Representantes_130.png" /> Representantes'
            });
var group_Representantesyasociadas = new ol.layer.Group({
                                layers: [lyr_116LNC_129,lyr_Representantes_130,],
                                fold: "open",
                                title: 'Representantes y asociadas'});
var group_reatemtica = new ol.layer.Group({
                                layers: [lyr_Vivienda_117,lyr_SoberaniaAlimentaria_118,lyr_SeguridadHumana_119,lyr_SistemasSocioecolgicos_120,lyr_EyCClimtico_121,lyr_Salud_122,lyr_Educacin_123,lyr_Cultura_124,lyr_Cmputo_125,lyr_CienciaBsica_126,lyr_AgentesTxicos_127,lyr_Agua_128,],
                                fold: "open",
                                title: 'Área temática'});
var group_LaboratoriosNacionales = new ol.layer.Group({
                                layers: [lyr_SITLOG_1,lyr_SEDEAM_2,lyr_PlanTECC_3,lyr_NANOTECH_4,lyr_MADiT_5,lyr_LNVCS_6,lyr_LNunT_7,lyr_LNS_8,lyr_LNPAMMB_9,lyr_LNOV_10,lyr_LNMG_11,lyr_LNMA_12,lyr_LNETEE_13,lyr_LND_14,lyr_LNCyTA_15,lyr_LNCRTM_16,lyr_LNCIBi_17,lyr_LNCEREN_18,lyr_LNCC_19,lyr_LNCBioCC_20,lyr_LNCAE_21,lyr_LNCRBSP_22,lyr_LNCMexFlux_23,lyr_LNCIACD_24,lyr_LNCGVD_25,lyr_LNCFICOTOX_26,lyr_LNCBIOSAA_27,lyr_BiomeCH_28,lyr_LNCBILDEMo_29,lyr_LNATCG_30,lyr_LNASPM_31,lyr_LNAGUA_32,lyr_LNAGAF_33,lyr_LNINGEA_34,lyr_LNFESI_35,lyr_LMCMN_36,lyr_LINAN_37,lyr_LIFYCS_38,lyr_LIDTRA_39,lyr_LEMA_40,lyr_LAVIS_41,lyr_LaNTI_42,lyr_LaNSBioDyT_43,lyr_LANRESC_44,lyr_LaNReGen_45,lyr_LANPLAM_46,lyr_LANOT_47,lyr_LANNBio_48,lyr_LaNNaFab_49,lyr_LANMO_50,lyr_LaNMiSe_51,lyr_LaNMiB_52,lyr_LANMDA_53,lyr_LanMac_54,lyr_LaniVeg_55,lyr_LANITEM_56,lyr_LANITeF_57,lyr_LANITED_58,lyr_LANISAF_59,lyr_Lanirem_60,lyr_LANIMFE_61,lyr_LANIIA_62,lyr_LANIFLUMAR_63,lyr_LANIF_64,lyr_LANIESE_65,lyr_LANIES_66,lyr_LANIBIOC_67,lyr_LANIAUTO_68,lyr_LANH2_69,lyr_LANGTM_70,lyr_LANGEM_71,lyr_LANEM_72,lyr_LaNDACBio_73,lyr_LANCYTT_74,lyr_LANCTOXS_75,lyr_LaNCTIGeSSR_76,lyr_LANCoCoME_77,lyr_LANCOBI_78,lyr_LANCO_79,lyr_LaNCISProCam_80,lyr_LANCIS_81,lyr_LANCIRA_82,lyr_LANCIDI_83,lyr_LANCIC_84,lyr_LANCEVSA_85,lyr_LANCER_86,lyr_LANCEI_87,lyr_LANCE_88,lyr_LANCAPFEMUGUAA_89,lyr_LaNCaM_90,lyr_LANCAD_91,lyr_LaNCAC_92,lyr_LaNCa_93,lyr_LANBIOBAN_94,lyr_LANBAMA_95,lyr_LANAVEX_96,lyr_LANASE_97,lyr_LANALIMSA_98,lyr_LANAFQB_99,lyr_LANAEPBI_100,lyr_LANABIO_101,lyr_LANCONAHCYTEVIESAD_102,lyr_LAMPER_103,lyr_LACYQS_104,lyr_LaBTAA_105,lyr_LabNalCit_106,lyr_LABNACE_107,lyr_LABMYN_108,lyr_INNTESILCO_109,lyr_HAWC_110,lyr_GeoInt_111,lyr_EICAR_112,lyr_CNS_113,lyr_CI3M_114,lyr_CENAPROT_115,lyr_BIOENER_116,],
                                fold: "open",
                                title: 'Laboratorios Nacionales '});

lyr_Mapa_0.setVisible(true);lyr_SITLOG_1.setVisible(true);lyr_SEDEAM_2.setVisible(true);lyr_PlanTECC_3.setVisible(true);lyr_NANOTECH_4.setVisible(true);lyr_MADiT_5.setVisible(true);lyr_LNVCS_6.setVisible(true);lyr_LNunT_7.setVisible(true);lyr_LNS_8.setVisible(true);lyr_LNPAMMB_9.setVisible(true);lyr_LNOV_10.setVisible(true);lyr_LNMG_11.setVisible(true);lyr_LNMA_12.setVisible(true);lyr_LNETEE_13.setVisible(true);lyr_LND_14.setVisible(true);lyr_LNCyTA_15.setVisible(true);lyr_LNCRTM_16.setVisible(true);lyr_LNCIBi_17.setVisible(true);lyr_LNCEREN_18.setVisible(true);lyr_LNCC_19.setVisible(true);lyr_LNCBioCC_20.setVisible(true);lyr_LNCAE_21.setVisible(true);lyr_LNCRBSP_22.setVisible(true);lyr_LNCMexFlux_23.setVisible(true);lyr_LNCIACD_24.setVisible(true);lyr_LNCGVD_25.setVisible(true);lyr_LNCFICOTOX_26.setVisible(true);lyr_LNCBIOSAA_27.setVisible(true);lyr_BiomeCH_28.setVisible(true);lyr_LNCBILDEMo_29.setVisible(true);lyr_LNATCG_30.setVisible(true);lyr_LNASPM_31.setVisible(true);lyr_LNAGUA_32.setVisible(true);lyr_LNAGAF_33.setVisible(true);lyr_LNINGEA_34.setVisible(true);lyr_LNFESI_35.setVisible(true);lyr_LMCMN_36.setVisible(true);lyr_LINAN_37.setVisible(true);lyr_LIFYCS_38.setVisible(true);lyr_LIDTRA_39.setVisible(true);lyr_LEMA_40.setVisible(true);lyr_LAVIS_41.setVisible(true);lyr_LaNTI_42.setVisible(true);lyr_LaNSBioDyT_43.setVisible(true);lyr_LANRESC_44.setVisible(true);lyr_LaNReGen_45.setVisible(true);lyr_LANPLAM_46.setVisible(true);lyr_LANOT_47.setVisible(true);lyr_LANNBio_48.setVisible(true);lyr_LaNNaFab_49.setVisible(true);lyr_LANMO_50.setVisible(true);lyr_LaNMiSe_51.setVisible(true);lyr_LaNMiB_52.setVisible(true);lyr_LANMDA_53.setVisible(true);lyr_LanMac_54.setVisible(true);lyr_LaniVeg_55.setVisible(true);lyr_LANITEM_56.setVisible(true);lyr_LANITeF_57.setVisible(true);lyr_LANITED_58.setVisible(true);lyr_LANISAF_59.setVisible(true);lyr_Lanirem_60.setVisible(true);lyr_LANIMFE_61.setVisible(true);lyr_LANIIA_62.setVisible(true);lyr_LANIFLUMAR_63.setVisible(true);lyr_LANIF_64.setVisible(true);lyr_LANIESE_65.setVisible(true);lyr_LANIES_66.setVisible(true);lyr_LANIBIOC_67.setVisible(true);lyr_LANIAUTO_68.setVisible(true);lyr_LANH2_69.setVisible(true);lyr_LANGTM_70.setVisible(true);lyr_LANGEM_71.setVisible(true);lyr_LANEM_72.setVisible(true);lyr_LaNDACBio_73.setVisible(true);lyr_LANCYTT_74.setVisible(true);lyr_LANCTOXS_75.setVisible(true);lyr_LaNCTIGeSSR_76.setVisible(true);lyr_LANCoCoME_77.setVisible(true);lyr_LANCOBI_78.setVisible(true);lyr_LANCO_79.setVisible(true);lyr_LaNCISProCam_80.setVisible(true);lyr_LANCIS_81.setVisible(true);lyr_LANCIRA_82.setVisible(true);lyr_LANCIDI_83.setVisible(true);lyr_LANCIC_84.setVisible(true);lyr_LANCEVSA_85.setVisible(true);lyr_LANCER_86.setVisible(true);lyr_LANCEI_87.setVisible(true);lyr_LANCE_88.setVisible(true);lyr_LANCAPFEMUGUAA_89.setVisible(true);lyr_LaNCaM_90.setVisible(true);lyr_LANCAD_91.setVisible(true);lyr_LaNCAC_92.setVisible(true);lyr_LaNCa_93.setVisible(true);lyr_LANBIOBAN_94.setVisible(true);lyr_LANBAMA_95.setVisible(true);lyr_LANAVEX_96.setVisible(true);lyr_LANASE_97.setVisible(true);lyr_LANALIMSA_98.setVisible(true);lyr_LANAFQB_99.setVisible(true);lyr_LANAEPBI_100.setVisible(true);lyr_LANABIO_101.setVisible(true);lyr_LANCONAHCYTEVIESAD_102.setVisible(true);lyr_LAMPER_103.setVisible(true);lyr_LACYQS_104.setVisible(true);lyr_LaBTAA_105.setVisible(true);lyr_LabNalCit_106.setVisible(true);lyr_LABNACE_107.setVisible(true);lyr_LABMYN_108.setVisible(true);lyr_INNTESILCO_109.setVisible(true);lyr_HAWC_110.setVisible(true);lyr_GeoInt_111.setVisible(true);lyr_EICAR_112.setVisible(true);lyr_CNS_113.setVisible(true);lyr_CI3M_114.setVisible(true);lyr_CENAPROT_115.setVisible(true);lyr_BIOENER_116.setVisible(true);lyr_Vivienda_117.setVisible(true);lyr_SoberaniaAlimentaria_118.setVisible(true);lyr_SeguridadHumana_119.setVisible(true);lyr_SistemasSocioecolgicos_120.setVisible(true);lyr_EyCClimtico_121.setVisible(true);lyr_Salud_122.setVisible(true);lyr_Educacin_123.setVisible(true);lyr_Cultura_124.setVisible(true);lyr_Cmputo_125.setVisible(true);lyr_CienciaBsica_126.setVisible(true);lyr_AgentesTxicos_127.setVisible(true);lyr_Agua_128.setVisible(true);lyr_116LNC_129.setVisible(true);lyr_Representantes_130.setVisible(true);
var layersList = [lyr_Mapa_0,group_LaboratoriosNacionales,group_reatemtica,group_Representantesyasociadas];
lyr_SITLOG_1.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_SEDEAM_2.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_PlanTECC_3.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_NANOTECH_4.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_MADiT_5.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNVCS_6.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNunT_7.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNS_8.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNPAMMB_9.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNOV_10.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNMG_11.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNMA_12.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNETEE_13.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LND_14.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNCyTA_15.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNCRTM_16.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNCIBi_17.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNCEREN_18.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNCC_19.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNCBioCC_20.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNCAE_21.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNCRBSP_22.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNCMexFlux_23.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNCIACD_24.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNCGVD_25.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNCFICOTOX_26.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNCBIOSAA_27.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_BiomeCH_28.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNCBILDEMo_29.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNATCG_30.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNASPM_31.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNAGUA_32.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNAGAF_33.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNINGEA_34.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LNFESI_35.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LMCMN_36.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LINAN_37.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LIFYCS_38.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LIDTRA_39.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LEMA_40.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LAVIS_41.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LaNTI_42.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LaNSBioDyT_43.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANRESC_44.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LaNReGen_45.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANPLAM_46.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANOT_47.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANNBio_48.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LaNNaFab_49.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANMO_50.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LaNMiSe_51.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LaNMiB_52.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANMDA_53.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LanMac_54.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LaniVeg_55.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANITEM_56.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANITeF_57.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANITED_58.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANISAF_59.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asocidas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_Lanirem_60.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANIMFE_61.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANIIA_62.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANIFLUMAR_63.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANIF_64.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANIESE_65.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANIES_66.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANIBIOC_67.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANIAUTO_68.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANH2_69.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANGTM_70.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANGEM_71.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANEM_72.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LaNDACBio_73.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANCYTT_74.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANCTOXS_75.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LaNCTIGeSSR_76.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANCoCoME_77.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANCOBI_78.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANCO_79.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LaNCISProCam_80.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANCIS_81.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANCIRA_82.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANCIDI_83.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANCIC_84.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANCEVSA_85.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANCER_86.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANCEI_87.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANCE_88.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANCAPFEMUGUAA_89.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LaNCaM_90.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANCAD_91.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LaNCAC_92.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LaNCa_93.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANBIOBAN_94.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANBAMA_95.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANAVEX_96.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANASE_97.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANALIMSA_98.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANAFQB_99.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANAEPBI_100.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANABIO_101.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LANCONAHCYTEVIESAD_102.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LAMPER_103.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LACYQS_104.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LaBTAA_105.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LabNalCit_106.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LABNACE_107.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_LABMYN_108.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_INNTESILCO_109.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_HAWC_110.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_GeoInt_111.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_EICAR_112.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_CNS_113.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_CI3M_114.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_CENAPROT_115.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_BIOENER_116.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Nombre', 'Siglas LNC': 'Siglas', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de la institución asociada seleccionada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia predominante en la que busca incidir', });
lyr_Vivienda_117.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Laboratorio Nacional Conahcyt', 'Siglas LNC': 'Siglas LNC', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de institución asociada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia', });
lyr_SoberaniaAlimentaria_118.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Laboratorio Nacional Conahcyt', 'Siglas LNC': 'Siglas LNC', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de institución asociada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia', });
lyr_SeguridadHumana_119.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Laboratorio Nacional Conahcyt', 'Siglas LNC': 'Siglas LNC', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de institución asociada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia', });
lyr_SistemasSocioecolgicos_120.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Laboratorio Nacional Conahcyt', 'Siglas LNC': 'Siglas LNC', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de institución asociada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia', });
lyr_EyCClimtico_121.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Laboratorio Nacional Conahcyt', 'Siglas LNC': 'Siglas LNC', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de institución asociada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia', });
lyr_Salud_122.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Laboratorio Nacional Conahcyt', 'Siglas LNC': 'Siglas LNC', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de institución asociada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia', });
lyr_Educacin_123.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Laboratorio Nacional Conahcyt', 'Siglas LNC': 'Siglas LNC', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de institución asociada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia', });
lyr_Cultura_124.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Laboratorio Nacional Conahcyt', 'Siglas LNC': 'Siglas LNC', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de institución asociada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia', });
lyr_Cmputo_125.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Laboratorio Nacional Conahcyt', 'Siglas LNC': 'Siglas LNC', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de institución asociada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia', });
lyr_CienciaBsica_126.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Laboratorio Nacional Conahcyt', 'Siglas LNC': 'Siglas LNC', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de institución asociada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia', });
lyr_AgentesTxicos_127.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Laboratorio Nacional Conahcyt', 'Siglas LNC': 'Siglas LNC', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de institución asociada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia', });
lyr_Agua_128.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Laboratorio Nacional Conahcyt', 'Siglas LNC': 'Siglas LNC', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de institución asociada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia', });
lyr_116LNC_129.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Laboratorio Nacional Conahcyt', 'Siglas LNC': 'Siglas LNC', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de institución asociada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia', });
lyr_Representantes_130.set('fieldAliases', {'Consecutivo': 'Consecutivo', 'Id_Laboratorio': 'Id_Laboratorio', 'Laboratorio Nacional Conahcyt': 'Laboratorio Nacional Conahcyt', 'Siglas LNC': 'Siglas LNC', 'Campo de conocimiento': 'Campo de conocimiento', 'Nombre de institución asociada': 'Nombre de institución asociada', 'Siglas_IA': 'Siglas_IA', 'País': 'País', 'Entidad Federativa IA': 'Entidad Federativa IA', 'Clave_entidad': 'Clave_entidad', 'Municipio': 'Municipio', 'Clave_municipio': 'Clave_municipio', 'Vinculo de Google maps': 'Vinculo de Google maps', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Dirección': 'Dirección', 'Institución representante': 'Institución representante', 'Instituciones asociadas': 'Instituciones asociadas', 'Área de incidencia': 'Área de incidencia', });
lyr_SITLOG_1.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_SEDEAM_2.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_PlanTECC_3.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_NANOTECH_4.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_MADiT_5.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNVCS_6.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNunT_7.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNS_8.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNPAMMB_9.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNOV_10.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNMG_11.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNMA_12.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNETEE_13.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LND_14.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNCyTA_15.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNCRTM_16.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNCIBi_17.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNCEREN_18.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNCC_19.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNCBioCC_20.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNCAE_21.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNCRBSP_22.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNCMexFlux_23.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNCIACD_24.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNCGVD_25.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNCFICOTOX_26.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNCBIOSAA_27.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_BiomeCH_28.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNCBILDEMo_29.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNATCG_30.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNASPM_31.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNAGUA_32.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNAGAF_33.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNINGEA_34.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LNFESI_35.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LMCMN_36.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LINAN_37.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LIFYCS_38.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LIDTRA_39.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LEMA_40.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LAVIS_41.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LaNTI_42.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LaNSBioDyT_43.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANRESC_44.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LaNReGen_45.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANPLAM_46.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANOT_47.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANNBio_48.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LaNNaFab_49.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANMO_50.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LaNMiSe_51.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LaNMiB_52.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANMDA_53.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LanMac_54.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LaniVeg_55.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANITEM_56.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANITeF_57.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANITED_58.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANISAF_59.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_Lanirem_60.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANIMFE_61.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANIIA_62.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANIFLUMAR_63.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANIF_64.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANIESE_65.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANIES_66.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANIBIOC_67.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANIAUTO_68.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANH2_69.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANGTM_70.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANGEM_71.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANEM_72.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LaNDACBio_73.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANCYTT_74.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANCTOXS_75.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LaNCTIGeSSR_76.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANCoCoME_77.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANCOBI_78.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANCO_79.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LaNCISProCam_80.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANCIS_81.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANCIRA_82.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANCIDI_83.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANCIC_84.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANCEVSA_85.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANCER_86.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANCEI_87.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANCE_88.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANCAPFEMUGUAA_89.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LaNCaM_90.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANCAD_91.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LaNCAC_92.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LaNCa_93.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANBIOBAN_94.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANBAMA_95.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANAVEX_96.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANASE_97.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANALIMSA_98.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANAFQB_99.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANAEPBI_100.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANABIO_101.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LANCONAHCYTEVIESAD_102.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LAMPER_103.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LACYQS_104.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LaBTAA_105.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LabNalCit_106.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LABNACE_107.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_LABMYN_108.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_INNTESILCO_109.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_HAWC_110.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_GeoInt_111.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_EICAR_112.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_CNS_113.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_CI3M_114.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_CENAPROT_115.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_BIOENER_116.set('fieldImages', {'Consecutivo': 'Hidden', 'Id_Laboratorio': 'Hidden', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'Hidden', 'País': 'Hidden', 'Entidad Federativa IA': 'Hidden', 'Clave_entidad': 'Hidden', 'Municipio': 'Hidden', 'Clave_municipio': 'Hidden', 'Vinculo de Google maps': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_Vivienda_117.set('fieldImages', {'Consecutivo': 'Range', 'Id_Laboratorio': 'Range', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'TextEdit', 'País': 'TextEdit', 'Entidad Federativa IA': 'TextEdit', 'Clave_entidad': 'Range', 'Municipio': 'TextEdit', 'Clave_municipio': 'Range', 'Vinculo de Google maps': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_SoberaniaAlimentaria_118.set('fieldImages', {'Consecutivo': 'Range', 'Id_Laboratorio': 'Range', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'TextEdit', 'País': 'TextEdit', 'Entidad Federativa IA': 'TextEdit', 'Clave_entidad': 'Range', 'Municipio': 'TextEdit', 'Clave_municipio': 'Range', 'Vinculo de Google maps': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_SeguridadHumana_119.set('fieldImages', {'Consecutivo': 'Range', 'Id_Laboratorio': 'Range', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'TextEdit', 'País': 'TextEdit', 'Entidad Federativa IA': 'TextEdit', 'Clave_entidad': 'Range', 'Municipio': 'TextEdit', 'Clave_municipio': 'Range', 'Vinculo de Google maps': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_SistemasSocioecolgicos_120.set('fieldImages', {'Consecutivo': 'Range', 'Id_Laboratorio': 'Range', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'TextEdit', 'País': 'TextEdit', 'Entidad Federativa IA': 'TextEdit', 'Clave_entidad': 'Range', 'Municipio': 'TextEdit', 'Clave_municipio': 'Range', 'Vinculo de Google maps': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_EyCClimtico_121.set('fieldImages', {'Consecutivo': 'Range', 'Id_Laboratorio': 'Range', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'TextEdit', 'País': 'TextEdit', 'Entidad Federativa IA': 'TextEdit', 'Clave_entidad': 'Range', 'Municipio': 'TextEdit', 'Clave_municipio': 'Range', 'Vinculo de Google maps': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_Salud_122.set('fieldImages', {'Consecutivo': 'Range', 'Id_Laboratorio': 'Range', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'TextEdit', 'País': 'TextEdit', 'Entidad Federativa IA': 'TextEdit', 'Clave_entidad': 'Range', 'Municipio': 'TextEdit', 'Clave_municipio': 'Range', 'Vinculo de Google maps': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_Educacin_123.set('fieldImages', {'Consecutivo': 'Range', 'Id_Laboratorio': 'Range', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'TextEdit', 'País': 'TextEdit', 'Entidad Federativa IA': 'TextEdit', 'Clave_entidad': 'Range', 'Municipio': 'TextEdit', 'Clave_municipio': 'Range', 'Vinculo de Google maps': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_Cultura_124.set('fieldImages', {'Consecutivo': 'Range', 'Id_Laboratorio': 'Range', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'TextEdit', 'País': 'TextEdit', 'Entidad Federativa IA': 'TextEdit', 'Clave_entidad': 'Range', 'Municipio': 'TextEdit', 'Clave_municipio': 'Range', 'Vinculo de Google maps': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_Cmputo_125.set('fieldImages', {'Consecutivo': 'Range', 'Id_Laboratorio': 'Range', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'TextEdit', 'País': 'TextEdit', 'Entidad Federativa IA': 'TextEdit', 'Clave_entidad': 'Range', 'Municipio': 'TextEdit', 'Clave_municipio': 'Range', 'Vinculo de Google maps': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_CienciaBsica_126.set('fieldImages', {'Consecutivo': 'Range', 'Id_Laboratorio': 'Range', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'TextEdit', 'País': 'TextEdit', 'Entidad Federativa IA': 'TextEdit', 'Clave_entidad': 'Range', 'Municipio': 'TextEdit', 'Clave_municipio': 'Range', 'Vinculo de Google maps': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_AgentesTxicos_127.set('fieldImages', {'Consecutivo': 'Range', 'Id_Laboratorio': 'Range', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'TextEdit', 'País': 'TextEdit', 'Entidad Federativa IA': 'TextEdit', 'Clave_entidad': 'Range', 'Municipio': 'TextEdit', 'Clave_municipio': 'Range', 'Vinculo de Google maps': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_Agua_128.set('fieldImages', {'Consecutivo': 'Range', 'Id_Laboratorio': 'Range', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'TextEdit', 'País': 'TextEdit', 'Entidad Federativa IA': 'TextEdit', 'Clave_entidad': 'Range', 'Municipio': 'TextEdit', 'Clave_municipio': 'Range', 'Vinculo de Google maps': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_116LNC_129.set('fieldImages', {'Consecutivo': 'Range', 'Id_Laboratorio': 'Range', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'TextEdit', 'País': 'TextEdit', 'Entidad Federativa IA': 'TextEdit', 'Clave_entidad': 'Range', 'Municipio': 'TextEdit', 'Clave_municipio': 'Range', 'Vinculo de Google maps': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_Representantes_130.set('fieldImages', {'Consecutivo': 'Range', 'Id_Laboratorio': 'Range', 'Laboratorio Nacional Conahcyt': 'TextEdit', 'Siglas LNC': 'TextEdit', 'Campo de conocimiento': 'TextEdit', 'Nombre de institución asociada': 'TextEdit', 'Siglas_IA': 'TextEdit', 'País': 'TextEdit', 'Entidad Federativa IA': 'TextEdit', 'Clave_entidad': 'Range', 'Municipio': 'TextEdit', 'Clave_municipio': 'Range', 'Vinculo de Google maps': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Dirección': 'TextEdit', 'Institución representante': 'TextEdit', 'Instituciones asociadas': 'Range', 'Área de incidencia': 'TextEdit', });
lyr_SITLOG_1.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_SEDEAM_2.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_PlanTECC_3.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_NANOTECH_4.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_MADiT_5.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNVCS_6.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNunT_7.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNS_8.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNPAMMB_9.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNOV_10.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNMG_11.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNMA_12.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNETEE_13.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LND_14.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNCyTA_15.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNCRTM_16.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNCIBi_17.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNCEREN_18.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNCC_19.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNCBioCC_20.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNCAE_21.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNCRBSP_22.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNCMexFlux_23.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNCIACD_24.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNCGVD_25.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNCFICOTOX_26.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNCBIOSAA_27.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_BiomeCH_28.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNCBILDEMo_29.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNATCG_30.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNASPM_31.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNAGUA_32.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNAGAF_33.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNINGEA_34.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LNFESI_35.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LMCMN_36.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LINAN_37.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LIFYCS_38.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LIDTRA_39.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LEMA_40.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LAVIS_41.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LaNTI_42.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LaNSBioDyT_43.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANRESC_44.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LaNReGen_45.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANPLAM_46.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANOT_47.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANNBio_48.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LaNNaFab_49.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANMO_50.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LaNMiSe_51.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LaNMiB_52.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANMDA_53.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LanMac_54.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LaniVeg_55.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANITEM_56.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANITeF_57.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANITED_58.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANISAF_59.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_Lanirem_60.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANIMFE_61.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANIIA_62.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANIFLUMAR_63.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANIF_64.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANIESE_65.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANIES_66.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANIBIOC_67.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANIAUTO_68.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANH2_69.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANGTM_70.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANGEM_71.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANEM_72.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LaNDACBio_73.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANCYTT_74.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANCTOXS_75.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LaNCTIGeSSR_76.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANCoCoME_77.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANCOBI_78.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANCO_79.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LaNCISProCam_80.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANCIS_81.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANCIRA_82.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANCIDI_83.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANCIC_84.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANCEVSA_85.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANCER_86.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANCEI_87.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANCE_88.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANCAPFEMUGUAA_89.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LaNCaM_90.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANCAD_91.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LaNCAC_92.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LaNCa_93.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANBIOBAN_94.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANBAMA_95.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANAVEX_96.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANASE_97.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANALIMSA_98.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANAFQB_99.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANAEPBI_100.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANABIO_101.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LANCONAHCYTEVIESAD_102.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LAMPER_103.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LACYQS_104.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LaBTAA_105.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LabNalCit_106.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LABNACE_107.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_LABMYN_108.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_INNTESILCO_109.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_HAWC_110.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_GeoInt_111.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_EICAR_112.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_CNS_113.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_CI3M_114.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_CENAPROT_115.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_BIOENER_116.set('fieldLabels', {'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_Vivienda_117.set('fieldLabels', {'Consecutivo': 'hidden field', 'Id_Laboratorio': 'hidden field', 'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Siglas_IA': 'hidden field', 'País': 'hidden field', 'Entidad Federativa IA': 'hidden field', 'Clave_entidad': 'hidden field', 'Municipio': 'hidden field', 'Clave_municipio': 'hidden field', 'Vinculo de Google maps': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_SoberaniaAlimentaria_118.set('fieldLabels', {'Consecutivo': 'hidden field', 'Id_Laboratorio': 'hidden field', 'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Siglas_IA': 'hidden field', 'País': 'hidden field', 'Entidad Federativa IA': 'hidden field', 'Clave_entidad': 'hidden field', 'Municipio': 'hidden field', 'Clave_municipio': 'hidden field', 'Vinculo de Google maps': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_SeguridadHumana_119.set('fieldLabels', {'Consecutivo': 'hidden field', 'Id_Laboratorio': 'hidden field', 'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Siglas_IA': 'hidden field', 'País': 'hidden field', 'Entidad Federativa IA': 'hidden field', 'Clave_entidad': 'hidden field', 'Municipio': 'hidden field', 'Clave_municipio': 'hidden field', 'Vinculo de Google maps': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_SistemasSocioecolgicos_120.set('fieldLabels', {'Consecutivo': 'hidden field', 'Id_Laboratorio': 'hidden field', 'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Siglas_IA': 'hidden field', 'País': 'hidden field', 'Entidad Federativa IA': 'hidden field', 'Clave_entidad': 'hidden field', 'Municipio': 'hidden field', 'Clave_municipio': 'hidden field', 'Vinculo de Google maps': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_EyCClimtico_121.set('fieldLabels', {'Consecutivo': 'hidden field', 'Id_Laboratorio': 'hidden field', 'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Siglas_IA': 'hidden field', 'País': 'hidden field', 'Entidad Federativa IA': 'hidden field', 'Clave_entidad': 'hidden field', 'Municipio': 'hidden field', 'Clave_municipio': 'hidden field', 'Vinculo de Google maps': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_Salud_122.set('fieldLabels', {'Consecutivo': 'hidden field', 'Id_Laboratorio': 'hidden field', 'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Siglas_IA': 'hidden field', 'País': 'hidden field', 'Entidad Federativa IA': 'hidden field', 'Clave_entidad': 'hidden field', 'Municipio': 'hidden field', 'Clave_municipio': 'hidden field', 'Vinculo de Google maps': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_Educacin_123.set('fieldLabels', {'Consecutivo': 'hidden field', 'Id_Laboratorio': 'hidden field', 'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Siglas_IA': 'hidden field', 'País': 'hidden field', 'Entidad Federativa IA': 'hidden field', 'Clave_entidad': 'hidden field', 'Municipio': 'hidden field', 'Clave_municipio': 'hidden field', 'Vinculo de Google maps': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_Cultura_124.set('fieldLabels', {'Consecutivo': 'hidden field', 'Id_Laboratorio': 'hidden field', 'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Siglas_IA': 'hidden field', 'País': 'hidden field', 'Entidad Federativa IA': 'hidden field', 'Clave_entidad': 'hidden field', 'Municipio': 'hidden field', 'Clave_municipio': 'hidden field', 'Vinculo de Google maps': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_Cmputo_125.set('fieldLabels', {'Consecutivo': 'hidden field', 'Id_Laboratorio': 'hidden field', 'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Siglas_IA': 'hidden field', 'País': 'hidden field', 'Entidad Federativa IA': 'hidden field', 'Clave_entidad': 'hidden field', 'Municipio': 'hidden field', 'Clave_municipio': 'hidden field', 'Vinculo de Google maps': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_CienciaBsica_126.set('fieldLabels', {'Consecutivo': 'hidden field', 'Id_Laboratorio': 'hidden field', 'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Siglas_IA': 'hidden field', 'País': 'hidden field', 'Entidad Federativa IA': 'hidden field', 'Clave_entidad': 'hidden field', 'Municipio': 'hidden field', 'Clave_municipio': 'hidden field', 'Vinculo de Google maps': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_AgentesTxicos_127.set('fieldLabels', {'Consecutivo': 'hidden field', 'Id_Laboratorio': 'hidden field', 'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Siglas_IA': 'hidden field', 'País': 'hidden field', 'Entidad Federativa IA': 'hidden field', 'Clave_entidad': 'hidden field', 'Municipio': 'hidden field', 'Clave_municipio': 'hidden field', 'Vinculo de Google maps': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_Agua_128.set('fieldLabels', {'Consecutivo': 'hidden field', 'Id_Laboratorio': 'hidden field', 'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Siglas_IA': 'hidden field', 'País': 'hidden field', 'Entidad Federativa IA': 'hidden field', 'Clave_entidad': 'hidden field', 'Municipio': 'hidden field', 'Clave_municipio': 'hidden field', 'Vinculo de Google maps': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_116LNC_129.set('fieldLabels', {'Consecutivo': 'hidden field', 'Id_Laboratorio': 'hidden field', 'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Siglas_IA': 'hidden field', 'País': 'hidden field', 'Entidad Federativa IA': 'hidden field', 'Clave_entidad': 'hidden field', 'Municipio': 'hidden field', 'Clave_municipio': 'hidden field', 'Vinculo de Google maps': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_Representantes_130.set('fieldLabels', {'Consecutivo': 'hidden field', 'Id_Laboratorio': 'hidden field', 'Laboratorio Nacional Conahcyt': 'inline label - always visible', 'Siglas LNC': 'inline label - always visible', 'Campo de conocimiento': 'inline label - always visible', 'Nombre de institución asociada': 'inline label - always visible', 'Siglas_IA': 'hidden field', 'País': 'hidden field', 'Entidad Federativa IA': 'hidden field', 'Clave_entidad': 'hidden field', 'Municipio': 'hidden field', 'Clave_municipio': 'hidden field', 'Vinculo de Google maps': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Dirección': 'inline label - always visible', 'Institución representante': 'inline label - always visible', 'Instituciones asociadas': 'inline label - always visible', 'Área de incidencia': 'inline label - always visible', });
lyr_Representantes_130.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});