<template>
    <div class="container features">
        <div class="row">
            <h1>Contact us here.</h1>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.6700195047615!2d21.15093531533199!3d42.64715497916858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549e8d5d607f25%3A0xa31dd05b21bd09de!2sUniversiteti%20p%C3%ABr%20Biznes%20dhe%20Teknologji!5e0!3m2!1sen!2s!4v1616898746472!5m2!1sen!2s" width="500" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <form @submit.prevent="onSubmit">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Name" required v-model="contacts.name">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Email" required v-model="contacts.email">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" rows="4" placeholder="Enter your comments" required v-model="contacts.description">
                        </textarea>
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
import { mapGetters } from 'vuex'

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
                router.push({
                    name:'Home'
                })
            })
        }
    }
}
</script>
