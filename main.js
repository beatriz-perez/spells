'use strict';

const head = document.querySelector('.head');
const face = document.querySelector('.face');

const getSurprised = () => face.innerHTML = ':·';
const wink = () => face.innerHTML = ';)';
const getNormal = () => face.innerHTML = ':)';




head.addEventListener('mouseover', getSurprised)
head.addEventListener('click', wink)
head.addEventListener('mouseout', getNormal)
