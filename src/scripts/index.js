'use strict';

import {Person} from '@scripts/app-module1';
import '@styles/main.scss';

const first = new Person('Dmytro', 'Olexandrovich', 'Bezvershuk');

const value = first.getFullName();

console.log(value);
console.log(first.toString());
console.log('all works fine');
