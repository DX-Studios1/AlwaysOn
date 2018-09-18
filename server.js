const http = require('http');
const express = require('express');
const app = express();

app.listen(8080);

setInterval(() => {
http.get(`${process.env.bot1}`);
}, 120000);


setInterval(() => {
http.get(`${process.env.bot2}`);
}, 120000);


setInterval(() => {
http.get(`${process.env.bot3}`);
}, 120000);


setInterval(() => {
http.get(`${process.env.bot4}`);
}, 120000);


setInterval(() => {
http.get(`${process.env.bot5}`);
}, 120000);


setInterval(() => {
http.get(`${process.env.bot6}`);
}, 120000);


setInterval(() => {
http.get(`${process.env.bot7}`);
}, 120000);


setInterval(() => {
http.get(`${process.env.bot8}`);
}, 120000);


setInterval(() => {
http.get(`${process.env.bot9}`);
}, 120000);


setInterval(() => {
http.get(`${process.env.bot10}`);
}, 120000);


setInterval(() => {
http.get(`${process.env.bot11}`);
}, 120000);


setInterval(() => {
http.get(`${process.env.bot12}`);
}, 120000);
