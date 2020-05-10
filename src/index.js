'use strict';
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import elementClosest from 'element-closest';
elementClosest(window);

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import imagesMouse from './modules/imagesMouse';

//Таймер
countTimer('April 23, 2020');
//меню
toggleMenu();
//popup модальное окно
togglePopUp();
//табы
tabs();
//пишем слайдер
slider();

imagesMouse();

calc(100);

//форма отправки на сервер ajax
sendForm();