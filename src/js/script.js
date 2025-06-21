import {changeMenu} from "./modules/menu.js"
import {fillLines} from "./modules/used.js"


changeMenu('.hamburger', '.menu', '.menu__close', 'active');

fillLines('.used__percent', '.used__slider span');