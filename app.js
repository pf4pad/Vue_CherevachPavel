//method
//v-on:change="changeInput"
//v-on:change="changeInput()"
//v-on:change="changeInput($event)"
//Сокращения
//v-bind:value="name" - :value="name"  ;     v-on:click="name = $event.target.value"    -   @click="name = $event.target.value"
//v-bind:value="name" v-on:click="name = $event.target.value"  ===   v-model = "name"
Vue.createApp({
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      },
      guests: [],
      formInvitation: false,
      btnText: 'Send'
    }
  },
  computed: {
    fullName() {
      return this.formData.firstName + ' ' + this.formData.lastName
    },
    formReady() {

      return Object.values(this.formData).every(item => item.length > 0)
    },

  },
  methods: {


    addNewGuest() {
      console.log(this.guests);
      this.guests.push('')
    },
    removeGuest(index) {
      this.guests.splice(index, 1)
    },
    getInvitation() {
      console.log(this.guests);
      this.formInvitation = true
      this.guests = this.guests.filter(item => item.length > 0)
    },


  }
}).mount(".homework");
