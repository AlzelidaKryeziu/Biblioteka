<template>
    <b-row>
        <b-col cols="12">
            <h2>
                Add Book
                <b-link href="#/book-list">(Books in the list)</b-link>
            </h2>
            <b-jumbotron>
                <b-form @submit="onSubmit">
                    <b-form-group id="titleGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Title">
                    <b-form-input id="title" v-model.trim="book.title"></b-form-input>
                    </b-form-group>
                    <b-form-group id="authorGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Author">
                    <b-form-input id="author" v-model="book.author" placeholder="Enter Author Here" 
                    :rows="2" :max-rows="6">{{book.author}}</b-form-input>
                    </b-form-group>
                    <b-form-group id="yearGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Year">
                    <b-form-datepicker id="year" v-model.trim="book.year"></b-form-datepicker>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Save</b-button>
                </b-form>
            </b-jumbotron>
        </b-col>
    </b-row>
</template>

<script>
    import firebase from '../../Firebase'

    export default{
        name: 'AddBook',
        data(){
            return{
                ref:firebase.firestore().collection('books'),
                book:{}
            }
        }, methods:{
            onSubmit(evt){
                evt.preventDefault()

                this.ref.add(this.books).then(() =>{
                    this.book.title=''
                    this.book.author=''
                    this.book.year=''
                    this.$router.push({
                        name:'BookList'
                    })
                })
            }
        }
    }
</script>