import Vue from 'vue'
import Vuex from 'vuex'
import {axiosConfig} from '../main.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        lang: 'de',
        loading: false,
        homePage: [],
        heimPage: {},
        qs: {},
        aktiven: {},
        historias: {}
    },
    mutations: {
        setLang (state){
            if (state.lang == 'de'){
                state.lang = 'es'
            }
            else {
                state.lang = 'de'
            }
        },
        setHomePage (state, payload){
            state.homePage = payload
        },
        setLoading (state, payload) {
            state.loading = payload
        }
    },
    actions: {
        setLanguage ({commit}){
            commit('setLang')
        },
        getHomePage ({commit, getters}){
            commit('setLoading', true)
            axiosConfig.get('/homepage')
            .then(response => {
                let lang = getters.lang
                let pageTitleIn, pageSubTitleIn, names, cardQuantity
                var homePages = {}
                var cards = []

                pageTitleIn = response.data.item.elements.title.value
                pageSubTitleIn = response.data.item.elements.subtitle.value.slice(3,-4)
                cardQuantity = response.data.item.elements.cards.value.length
                names = Object.keys(response.data.modular_content)
                for (let i = 0; i < cardQuantity; i++){
                    cards.push({
                        icon: response.data.modular_content[names[i]].elements.icon.value,
                        title: response.data.modular_content[names[i]].elements.title.value,
                        description: response.data.modular_content[names[i]].elements.description.value.slice(3,-4)
                    })
                }
                homePages['pageTitle'] = pageTitleIn
                homePages['pageSubTitle'] = pageSubTitleIn
                homePages['cards'] = cards
                commit('setHomePage', homePages)
                commit('setLoading', false)
            }) 
            .catch(error =>{
                commit('setLoading', false)
                console.log(error)
            })
        }
    },
    getters: {
        lang(state){
            return state.lang
        },
        homePage(state){
            return state.homePage
        },
        loading (state){
            return state.loading
        }
    }
})