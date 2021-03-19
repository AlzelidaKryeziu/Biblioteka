<template>
    <b-row>
        <b-col cols="12">
            <h2>
                Add User
                <b-link href="#/users-list">(Users in the list)</b-link>
            </h2>
            <b-jumbotron>
                <b-form @submit="onSubmit">
                    <b-form-group id="nameGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Name">
                    <b-form-input id="name" v-model.trim="user.name"></b-form-input>
                    </b-form-group>
                    <b-form-group id="descGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Description">
                    <b-form-textarea id="description" v-model="user.description" placeholder="Enter Description Here" 
                    :rows="2" :max-rows="6">{{user.description}}</b-form-textarea>
                    </b-form-group>
                    <b-form-group id="emailGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Email">
                    <b-form-input id="email" v-model.trim="user.email"></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Save</b-button>
                </b-form>
            </b-jumbotron>
        </b-col>
    </b-row>
</template>

<script>
    import firebase from '../../Firebase'
    import router from '../../router/index'

    export default{
        data(){
            return{
                ref:firebase.firestore().collection('users'),
                user:{}
            }
        }, methods:{
            onSubmit(evt){
                evt.preventDefault()

                this.ref.add(this.user).then(() =>{
                    this.user.name=''
                    this.user.description=''
                    this.user.email=''
                    this.$router.push({
                        name:'UserList'
                    })
                })
            }
        }
    }
</script>