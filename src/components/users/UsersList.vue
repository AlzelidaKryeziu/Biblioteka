<template>
    <b-row>
        <b-col cols="12">
            <h2>
                User List
                <b-link href="#/add-user">Add User</b-link>
            </h2>
            <b-table striped hover :items="users" :fields="fields">
                <template>
                    <b-button @click.stop="details(data.item)" variant="primary">Details</b-button>
                </template>
            </b-table>
        </b-col>
    </b-row>
</template>
<script>
import firebase from '../../Firebase'
import router from '../../router'

export default {
    name:'UsersList',
    data(){
        return{
            fields:[
                
            ]
        }
    }
}
</script>