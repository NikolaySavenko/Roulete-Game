// Перечисление зависимостей:
var path = require('path');
var express = require('express');

// Описание настроек:
var staticSiteOptions = {
   portnum: 3000, // слушать порт 80
   maxAge: 1000 * 60 * 30 // хранить страницы в кэше пятнадцать минут
};

// Запуск сайта:
express().use(express.static(
   path.join(__dirname, 'static'),
   staticSiteOptions
)).listen(staticSiteOptions.portnum);