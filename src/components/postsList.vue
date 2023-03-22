<template>
    <div class="postsList">
        <div class="filterBlock">
            <input 
                v-model="searchInp"
                type="text" 
                class="postsList__searchPost"
                placeholder="Поиск по содержимому">
            <select v-model="sortUsers">
                <option value="" hidden disabled selected>Cортировать</option>
                <option>по сообщению</option>
                <option>по нику</option>
            </select>   
        </div>
        
        <ul class="postsList__ul">
        <transition-group name="list" tag="p">    
            <li class="postsList__li list-item" v-for="(user, id) in searchUsers()" :key="id">
                <div class="postsList__li_del" @click="DelElement(id)">X</div>
                <div class="post__Name">
                    <img :src="user.profilePicture" alt="">
                    <span>{{ user.name }}</span>
                </div>
                <div class="post__Text">{{ user.text }}</div>
            </li>
        </transition-group>
        </ul>
    </div>    
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default{
    setup(){
        const store = useStore()
        const Users = computed(()=>{return store.getters.getUsers})

        const sortUsers = ref('');
        const searchInp = ref('');
        const searchUsers = ()=>{
        /// sort by text element
            if(sortUsers.value == 'по сообщению'){
                Users.value.sort((a, b) => {
                    const textA = a.text.toUpperCase(); // ignore upper and lowercase
                    const textB = b.text.toUpperCase(); // ignore upper and lowercase
                    if (textA < textB) {
                      return -1;
                    }
                    if (textA > textB) {
                      return 1;
                    }
                
                    // names must be equal
                    return 0;
                });
            }
        /// sort by name element
            if(sortUsers.value == 'по нику'){
                Users.value.sort((a, b) => {
                    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                
                    // names must be equal
                    return 0;
                });
            }
        ///
            return Users.value.filter(el => el.text.toLowerCase().includes(searchInp.value.toLowerCase()))
        }
        
        const DelElement = (id) => {
            store.dispatch('actDelElement', id)
        }

        return{ Users, DelElement, searchInp, searchUsers, sortUsers }
    }
}
</script>