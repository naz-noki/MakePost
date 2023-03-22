<template>
    <div class="app_wrapper">
        <button class="header__btn" @click="closeForm">Создать пост!</button>
        <CreatePost v-if="visibaleForm">
            <template #closeForm>
                <div class="closeForm__btn" @click="closeForm">
                    X
                </div>
            </template>
        </CreatePost>
        <postsList />
    </div>
</template>

<script>
import { ref } from 'vue';
import CreatePost from './CreatePost.vue'
import postsList from './postsList.vue'

export default{
    components:{
        CreatePost, postsList
    },
    setup(){
        
        const visibaleForm = ref(false)
        const closeForm = ()=>{
            visibaleForm.value == false ? visibaleForm.value = true : visibaleForm.value = false
        }

        return {closeForm, visibaleForm,}
    }
}
</script>

<style>

</style>