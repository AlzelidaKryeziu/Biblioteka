<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Contact Details
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{contacts.name}}
        </template>
        <template slot="lead">
          ISBN: {{contacts.name}}<br>
          Author: {{contacts.email}}<br>
          Description: {{contacts.description}}<br>
        </template>
        <hr class="my-4">
        <p>
          Updated Date: {{contacts.updated_date}}
        </p>
        <b-btn variant="danger" @click.stop="deletebook(contacts._id)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ContactDetails',
  data () {
    return {
      contacts: []
    }
  },
  created () {
    axios.get(`http://localhost:4000/contacts/` + this.$route.params.id)
    .then(response => {
      this.contacts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    deletebook (contactsid) {
      axios.delete('http://localhost:3000/book/' + contactsid)
      .then((result) => {
        this.$router.push({
          name: 'ContactList'
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>