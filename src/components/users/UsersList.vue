<template>
    <b-row>
        <b-col cols="12">
            <h2>
                User List
                <b-link href="#/add-user">Add User</b-link>
            </h2>
            <b-table striped hover :items="users" :fields="fields">
                <template v-slot:cell(actions)="data">
                    <b-button @click.stop="details(data.item)" variant="primary">Details</b-button>
                </template>
            </b-table>
        </b-col>
    </b-row>
</template>
<script>
import firebase from '../../Firebase'

export default {
    name:'UsersList',
    data(){
        return{
            fields:[
                { key: 'name', label:'name', sortable:true, 'class':'text-left'},
                { key: 'actions', label:'Actions', 'class':'text-center'}
            ],
            users:[],
            errors:[],
            ref:firebase.firestore().collection('users')
        }
    }, created(){
        this.ref.onSnapshot((querySnapshot)=>{
            this.users = [];
            querySnapshot.forEach((doc) =>{
                this.users.push({
                    key:doc.id,
                    name:doc.data().name
                })
            })
        })
    }, methods:{
        details(user){
            this.$router.push({name:'ShowUsers', params:{id:user.key}})
        }
    }
}
</script>