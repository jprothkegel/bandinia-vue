import Vue from 'vue'
import Vuex from 'vuex'
import {axiosConfig} from '../main.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        lang: 'de',
        loading: false,
        homePage: [],
        heimPage: [],
        qs: [],
        aktiven: [],
        historias: []
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
        },
        setHeimPage (state, payload) {
            state.heimPage = payload
        },
        setHistories (state, payload) {
            state.historias = payload
        },
        setQS (state, payload) {
            state.qs = payload 
        },
        setAktiven (state, payload) {
            state.aktiven = payload
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
        },
        getHeimPage ({commit, getters}){
            commit('setLoading', true)
            axiosConfig.get('/heimpage')
            .then(response => {
                let title, desc1, desc2, desc3, names
                var pictures = []

                title = response.data.item.elements.title.value
                desc1 = response.data.item.elements.desc1.value.slice(3,-4)
                desc2 = response.data.item.elements.desc2.value.slice(3,-4)
                desc3 = response.data.item.elements.desc3.value.slice(3,-4)
                names = Object.keys(response.data.modular_content)
                for (let i = 0; i<names.length;i++){
                    pictures.push({
                        src: response.data.modular_content[names[i]].elements.picture.value[0].url
                    })
                }
                var heimPage ={}
                heimPage['title'] = title
                heimPage['desc1'] = desc1
                heimPage['desc2'] = desc2
                heimPage['desc3'] = desc3
                heimPage['pictures'] = pictures
                commit('setHeimPage', heimPage)
                commit('setLoading', false)
            })
        },
        getHistories ({commit, getters}){
            commit('setLoading', true)
            axiosConfig.get('/historypage')
            .then(response => {
                let title, names
                var cards = []
                
                title = response.data.item.elements.title.value
                names = Object.keys(response.data.modular_content)
                for (let i = 0; i<names.length;i++){
                    cards.push({
                        image: response.data.modular_content[names[i]].elements.image.value[0].url,
                        title: response.data.modular_content[names[i]].elements.title.value,
                        description: response.data.modular_content[names[i]].elements.description.value.slice(3,-4)
                    })
                }
                var histories = {}
                histories['title'] = title
                histories['cards'] = cards
                commit('setHistories', histories)
                commit('setLoading', false)
            })
        },
        getQS ({commit, getters}){
            commit('setLoading', true)
            axiosConfig.get('/whowearepage')
            .then(response => {
                let title, desc1, desc2, desc3, desc4, desc5
                var qs = {}
                qs['title'] = response.data.item.elements.title.value
                qs['desc1'] = response.data.item.elements.description1.value.slice(3,-4)
                qs['desc2'] = response.data.item.elements.description2.value.slice(3,-4)
                qs['desc3'] = response.data.item.elements.description3.value.slice(3,-4)
                qs['desc4'] = response.data.item.elements.description4.value.slice(3,-4)
                qs['desc5'] = response.data.item.elements.description5.value.slice(3,-4)
                commit('setQS', qs)
                commit('setLoading', false)
            })
        },
        getAktiven({commit, getters}){
            commit('setLoading', true)
            var nvorstand = []
            var vorstand = []
            var nburschen = []
            var burschen = []
            var nfuxen = []
            var fuxen = []

            axiosConfig.get('/vorstand')
            .then(response => {
                nvorstand = Object.keys(response.data.modular_content)
                for(let i = 0; i<nvorstand.length;i++){
                    vorstand.push({
                        title: response.data.modular_content[nvorstand[i]].elements.title.value,
                        name: response.data.modular_content[nvorstand[i]].elements.name.value,
                        desc: response.data.modular_content[nvorstand[i]].elements.desc.value,
                        picture: response.data.modular_content[nvorstand[i]].elements.picture.value[0].url
                    })
                }
            })

            axiosConfig.get('/burschen')
            .then(response => {
                nburschen = Object.keys(response.data.modular_content)
                for(let i = 0;i<nburschen.length;i++){
                    burschen.push({
                        title: response.data.modular_content[nburschen[i]].elements.title.value,
                        name: response.data.modular_content[nburschen[i]].elements.name.value,
                        desc: response.data.modular_content[nburschen[i]].elements.desc.value,
                        picture: response.data.modular_content[nburschen[i]].elements.picture.value[0].url
                    })
                }
            })

            axiosConfig.get('/fuxen')
            .then(response => {
                
                nfuxen = Object.keys(response.data.modular_content)
                for(let i = 0;i<nfuxen.length;i++){
                    fuxen.push({
                        title: response.data.modular_content[nfuxen[i]].elements.title.value,
                        name: response.data.modular_content[nfuxen[i]].elements.name.value,
                        desc: response.data.modular_content[nfuxen[i]].elements.desc.value,
                        picture: response.data.modular_content[nfuxen[i]].elements.picture.value[0].url
                    })
                }
            })

            var aktiven = {}
            aktiven['vorstand'] = vorstand
            aktiven['burschen'] = burschen
            aktiven['fuxen'] = fuxen
            commit('setAktiven', aktiven)
            commit('setLoading', false)
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
        },
        heimPage(state){
            return state.heimPage
        },
        historias(state){
            return state.historias
        },
        qs(state) {
            return state.qs
        },
        aktiven(state){
            return state.aktiven
        }
    }
})