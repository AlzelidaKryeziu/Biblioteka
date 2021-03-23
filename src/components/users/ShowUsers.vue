<template>
    <b-row>
        <b-col cols="12">
            <h2>
                Edit User
                <b-link href="#/user-list">(user List)</b-link>
            </h2>
            <b-jumbotron>
                <template slot="header">{{user.name}}</template>
                <template slot="lead">
                    Name: {{user.name}}<br>
                    Description: {{user.description}}<br>
                    Email: {{user.email}}<br>
                </template>
                <hr class="my-4">
                <b-btn class="edit-btn" variant="success" @click.stop="edituser(key)">Edit</b-btn>
                <b-btn variant="danger" @click.stop="deleteuser(key)">Delete</b-btn>
            </b-jumbotron>
        </b-col>
    </b-row>
</template>

<script>
    import firebase from '../../Firebase'

    export default {
        name: 'ShowUser',
        data(){
            return {
                key:'',
                user: {}
            }
        }, created(){
            const ref = firebase.firestore().collection('users').doc(this.$route.params.id);
            ref.get().then((doc) => {
            if (doc.exists) {
                this.key = doc.id;
                this.user = doc.data();
            } else {
                alert("No such document!");
            }
            });
        }, methods: {
            edituser (id){
                this.$router.push({
                    name: 'EditUser',
                    params: {id: id}
                })
            },
            deleteuser (id) {
                firebase.firestore().collection('users').doc(id).delete().then(() =>{
                    this.$router.push({
                        name: 'UsersList'
                    })
                }).catch((error) => {
                    alert("Error removing document: ", error);
                });
            }
        }
    }
</script>

