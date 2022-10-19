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
      requiredInputs: [
        {
          label: 'Email',
          value: ''
        },
        {
          label: 'Phone',
          value: ''
        },
        {
          label: 'First name',
          value: ''
        },
        {
          label: 'Last name',
          value: ''
        }
      ],
      valueRequiredInputs: [],
      guests: [],
      formInvitation: false,
      isButtonDisabled: true,
      btnText: 'Send'

    }
  },
  computed() {


  },
  methods: {
    getValueRequiredInputs(e) {
      this.valueRequiredInputs.push(e.target.value)
      this.isButtonDisabled = !this.valueRequiredInputs.every(elem => { elem.length > 0 })

      console.log(this.valueRequiredInputs.value)
    },

    addNewGuest() {
      this.guests.push(this.guest)
    },
    removeGuest(index) {
      this.guests.splice(index, 1)
    },
    getInvitation() {
      this.formInvitation = true
    },


  }
}).mount(".homework");
