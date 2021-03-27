<template>
    <div class="container features">
        <div class="row">
            <h1>Contact</h1>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <iframe src="">
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <form @submit.prevent="onSubmit">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Name" v-model="contacts.name">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Email" v-model="contacts.email">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" rows="4" placeholder="Enter your comments" v-model="contacts.description">
                    </div>
                    <input type="submit" class="btn btn-secondary btn-block" value="Send">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
/*eslint-disable*/
import axios from 'axios'
import router from '@/router'

export default {
    name: 'CreateContacts',
    data() {
        return {
            contacts:{}
        }
    }, methods: {
        onSubmit(){
            axios.post('http://localhost:4000/contacts', this.contacts)
            .then(response => {
                this.$router.push({
                    name:'user'
                })
            })
        }
    }
}
</script>
