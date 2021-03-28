<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Contact List
      </h2>
      <b-table striped hover :items="contacts" :fields="fields">
        <template v-slot:cell(actions)="data">
            <b-button @click.stop="details(data.item)" variant="primary">Details</b-button>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>
/*eslint-disable*/
import axios from 'axios'
export default {
  name: 'ContactList',
  data () {
    return {
      fields: [
        {key:'name', label: 'Name', sortable: true, 'class': 'text-center' },
        {key:'email', label: 'Email', sortable: true },
        {key:'actions', label: 'Action', 'class': 'text-center' }
      ],
      contacts: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:4000/contacts`)
    .then(response => {
      this.contacts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    details (contact) {
      this.$router.push({
        name: 'ContactDetails',
        params: { id: contact._id }
      })
    }
  }
}
</script>