import {changeMenu} from "./modules/menu.js";
import {fillLines} from "./modules/used.js";
import modal from "./modules/modal.js";
import forms from "./modules/forms.js";

document.addEventListener('DOMContentLoaded', () => { 

    changeMenu('.hamburger', '.menu', '.menu__overlay', 'active');
    fillLines('.used__percent', '.used__slider span');
    
    forms('form');
    modal('[data-modalbtn]', '.modal');
});
