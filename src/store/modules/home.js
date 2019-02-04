import api from "../../api";

const state = {
  articles: []
}

const getters = {
  articles: state => state.articles
}

const mutations = {
  UPDATE_ARTICLES(state, articles) {
    state.articles = articles;
  }
}

const actions = {
  loadNews({commit}) {
    api.getTopArticles()
      .then(articles => commit("UPDATE_ARTICLES", articles))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}