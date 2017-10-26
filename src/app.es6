import 'riot';
import route from "riot-route";
import Riotcontrol from 'riotcontrol';
riot.control = Riotcontrol;

import './components/s-input.tag'
import './components/s-wizard-container.tag'

document.addEventListener('DOMContentLoaded', function (evt) {
    console.log(123);

    riot.mount('*');
});