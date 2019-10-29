import Vue from '../../../axios--01-start/node_modules/vue';
import Vuex from '../../../axios--01-start/node_modules/vuex';
import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

import * as actions from './actions';
Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio
    }
});