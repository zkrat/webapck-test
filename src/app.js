import './scss/app.scss';
import boostrap from 'bootstrap'
// import plugin from './../node_modules/jquery-plugin/dist/foo';
var $ = require('jquery');
var jQuery = require('jquery');

global.$ = $;
global.jQuery = jQuery;
global.Nette = Nette;
global.naja = naja;


$(function () {
   alert('ahoj')
});