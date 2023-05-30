<template>
    <div>      
        <Header :user="user" />
        <div class="increments">
            <h1>Increments in Application</h1>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Header from './Header.vue'

export default {
    name: 'Increments',
    components: {
        Header
    },
    data() {
        return {
            user: {},
        }
    },
    mounted() {
        let user = sessionStorage.getItem("user");
        console.log("user:", user);
        if(!user) {
            this.$router.push({ name: 'login' })
        } else {       
            user = JSON.parse(user)
            this.user = user[0]
        }
    }
}
</script>