import { createStore } from 'vuex'

export const store = createStore({
    state:{
        Users: []
    },

    mutations:{
        mutCreateNewUser(state, newUser){
            state.Users.push(newUser)
        },
        mutDelElement(state, id){
            state.Users.splice( id,  1)
        }
    },

    actions:{
        actCreateNewUser({ commit }, newUser){
            commit('mutCreateNewUser', newUser)
        },
        actDelElement({ commit }, id){
            commit('mutDelElement', id)
        }
    },

    getters:{
        getUsers(state){
            return state.Users
        }
    }
})