
import { FilterModule } from './modules/FilterModule'
import { SearchModule } from './modules/SearchModule'

/* eslint-disable-next-line: no-unused-vars */
class initApp {
    static init() {
        const filterComponent = new FilterModule()
        const searchResults = new SearchModule()
    }
}

initApp.init();

// initalize on history changes
window.onpopstate = function(event) {
    initApp.init();
};
