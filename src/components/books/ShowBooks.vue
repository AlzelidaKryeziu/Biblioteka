<template>
    <b-row>
        <b-col cols="12">
            <h2>
                Edit Book
                <b-link href="#/book-list">(book List)</b-link>
            </h2>
            <b-jumbotron>
                <template slot="header">{{book.title}}</template>
                <template slot="lead">
                    Title: {{book.title}}<br>
                    Author: {{book.author}}<br>
                    Year: {{book.year}}<br>
                </template>
                <hr class="my-4">
                <b-btn class="edit-btn" variant="success" @click.stop="editbook(key)">Edit</b-btn>
                <b-btn variant="danger" @click.stop="deletebook(key)">Delete</b-btn>
            </b-jumbotron>
        </b-col>
    </b-row>
</template>

<script>
    import firebase from '../../Firebase'

    export default {
        name: 'ShowBooks',
        data(){
            return {
                key:'',
                book: {}
            }
        }, created(){
            const ref = firebase.firestore().collection('books').doc(this.$route.params.id);
            ref.get().then((doc) => {
            if (doc.exists) {
                this.key = doc.id;
                this.book = doc.data();
            } else {
                alert("No such document!");
            }
            });
        }, methods: {
            editbook (id){
                this.$router.push({
                    name: 'EditBook',
                    params: {id: id}
                })
            },
            deletebook (id) {
                firebase.firestore().collection('books').doc(id).delete().then(() =>{
                    this.$router.push({
                        name: 'BookList'
                    })
                }).catch((error) => {
                    alert("Error removing document: ", error);
                });
            }
        }
    }
</script>

