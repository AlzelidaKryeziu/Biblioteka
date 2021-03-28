<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit book
        <router-link :to="{ name: 'ShowBooks', params: { id: key } }">(Show Book Data)</router-link>
      </h2>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group id="titleGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter title">
            <b-form-input id="title" required v-model.trim="book.title"></b-form-input>
          </b-form-group>
          <b-form-group id="authorGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Author">
              <b-form-input id="author" required v-model="book.author" placeholder="Enter Author Here" 
                    :rows="2" :max-rows="6">{{book.author}}</b-form-input>
          </b-form-group>
          <b-form-group id="yearGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter year">
            <b-form-datepicker id="year" v-model.trim="book.year"></b-form-datepicker>
          </b-form-group>
          <b-button type="submit" variant="primary">Update</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import firebase from '../../Firebase'

export default {
  name: 'EditBooks',
  data () {
    return {
      key: this.$route.params.id,
      book: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('books').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.book = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const updateRef = firebase.firestore().collection('books').doc(this.$route.params.id);
      updateRef.set(this.book).then(() => {
        this.key = ''
        this.book.title = ''
        this.book.author = ''
        this.book.year = ''
        this.$router.push({ name: 'ShowBooks', params: { id: this.$route.params.id }})
      })
      .catch((error) => {
        alert("Error adding document: ", error);
      });
    }
  }
}
</script>