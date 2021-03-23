<template>
    <div class="container">
        <div class="col-md-8">
            <div class="card">Login</div>
            <div v-if="error" class="alert alert-danger">{{ error }}</div>
            <form action="#" @submit.prevent="submit">
                Email:
                <input id="email" type="email" name="email" value required autofocus v-model="form.email"/><br>
                Password:
                <input id="password" type="text" name="password" required v-model="form.password"/><br>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
/*eslint-disable*/
import firebase from 'firebase'
export default {
    data(){
        return{
            form:{
                email:"",
                password:""
            }, error:null
        };
    }, methods:{
        submit(){
            firebase.auth()
            .signInWithEmailAndPassword(this.form.email, this.form.password)
            .then(data=>{
                this.$router.push({name:'home',})
            })
            .catch(err=>{
                this.error = err.message;
            })
        }
    }
}
</script>