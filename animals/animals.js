import { animals } from '../data.js';
import { findById } from '../utils.js';

const params = new URLSearchParams(window.location.search);

const animal = findById(params.get('id'), animals);

const animalName = document.getElementById('animal-name');
animalName.textContent = animal.name;

const animalImg = document.getElementById('animal-img');
animalImg.src = `../assets/${animal.type}.svg`;

const animalP = document.getElementById('animal-p');
animalP.textContent = animal.says;