
import './scss/app.scss';

const $ = require( "jquery" )( window );
global.$ = $;
global.jQuery = jQuery;

global.Nette = Nette;
global.naja = naja;

import boostrap from 'bootstrap'

//import boostrap from 'bootstrap';

import plugin from './../node_modules/jquery-plugin/dist/foo';



$(function () {
   alert('ahoj')
});