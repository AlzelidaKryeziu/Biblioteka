<template>
    <b-row>
        <b-col cols="12">
            <h2>
                Book List
                <b-link href="#/book-list">Add Book</b-link>
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
    name:'BookList',
    data(){
        return{
            fields:[
                { key: 'ame', label:'Name', sortable:true, 'class':'text-left'},
                { key: 'author', label:'Author', sortable:true, 'class':'text-left'},
                { key: 'actions', label:'Actions', 'class':'text-center'}
            ],
            books:[],
            errors:[],
            ref:firebase.firestore().collection('books')
        }
    }, created(){
        this.ref.onSnapshot((querySnapshot)=>{
            this.books = [];
            querySnapshot.forEach((doc) =>{
                this.books.push({
                    key:doc.id,
                    name:doc.data().name
                })
            })
        })
    }, methods:{
        details(book){
            this.$router.push({name:'ShowBooks', params:{id:book.key}})
        }
    }
}
</script>