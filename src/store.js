import Vue from 'vue';
import Vuex from 'vuex';

import actions from '@/store/actions';
import getters from '@/store/getters';
import mutations from '@/store/mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state: {
    armyList: '',
    armyRules: undefined,
    errors: [],
    jsonPath: '',
    label: '',
    magic: undefined,
    specialRules: {},
    spells: [],
    units: {},
    upgradeConstraints: [],
    upgrades: {},
    version: ''
  }
});
