import {Deck} from '@deck.gl/core';
import {GeoJsonLayer, ArcLayer, ScatterplotLayer} from '@deck.gl/layers';
import data from './data.json';
// source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
const COUNTRIES =
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson'; //eslint-disable-line
const AIR_PORTS =
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';

const INITIAL_VIEW_STATE = {
  latitude: 43.1,
  longitude: -75.2,
  zoom: 4,
  bearing: 0,
  pitch: 30
};

const baseMap =  new GeoJsonLayer({
    id: 'base-map',
    data: COUNTRIES,
    // Styles
    stroked: true,
    filled: true,
    lineWidthMinPixels: 2,
    opacity: 0.4,
    getLineColor: [60, 60, 60],
    getFillColor: [200, 200, 200]
  });
console.log(data)
const scatterPlotLayer = new ScatterplotLayer({
    id: 'scatterplot-layer',
    data,
    pickable: true,
    opacity: 0.8,
    stroked: true,
    filled: true,
    radiusScale: 10,
    radiusMinPixels: 5,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 1,
    getPosition: d => d.coordinates,
    getFillColor: d => [255, 140, 0],
    getLineColor: d => [0, 0, 0]
})

const COLOR = [0, 128, 255];

export const deck = new Deck({
  initialViewState: INITIAL_VIEW_STATE,
  controller: true,
  layers: [
    baseMap,
    scatterPlotLayer
  ]
});

// For automated test cases
/* global document */
document.body.style.margin = '0px';



