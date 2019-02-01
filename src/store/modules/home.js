import api from "../../api";

const state = {
  newsTiles: [],
  newsCards: []
}

const getters = {
  newsCards: state => state.newsCards
}

const mutations = {
  UPDATE_NEWS_CARDS(state, cards) {
    state.newsCards = cards;
  }
}

const actions = {
  loadNewsCards({commit}) {
    api.getNewsCards()
      .then(cards => commit("UPDATE_NEWS_CARDS", cards))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}