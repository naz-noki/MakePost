<template>
    <form class="CreatePost__modal">
        <div class="CreatePost">
            <slot name="closeForm" />
            <div class="closeForm__title">Создание поста</div>
            <div class="CreatePost__inpS">
                <input 
                    type="text"
                    class="CreatePost__inp"
                    placeholder="Ваш ник"
                    v-model="userName">
                <input 
                    type="text"
                    class="CreatePost__inp"
                    placeholder="Ваше сообщение"
                    v-model="userText">
            </div>
            <button class="create" @click.prevent="createNewUser">Создать!</button>
        </div>
    </form>
</template>

<script>
import { ref, } from 'vue'
import { useStore } from 'vuex';

export default{
setup(){
    const store = useStore()

    const userName = ref('');
    const userText = ref('');

    const createNewUser = ()=>{
        if(userName.value != '' && userText.value != ''){
            const newUser = {
                profilePicture: require(`../img/test${Math.floor(Math.random() * (9 - 1) + 1)}.jpg`),
                name: userName.value,
                text: userText.value
            }
            store.dispatch('actCreateNewUser', newUser)
            userName.value = ''
            userText.value = ''
        }   
    }

    return {userName, userText, createNewUser}
}
}
</script>