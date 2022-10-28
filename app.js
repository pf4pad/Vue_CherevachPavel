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
      tabs: [
        { message: "All" },
        { message: "Trending" },
        { message: "Featured" },
        { message: "Genres" },
        { message: "Workout" },
        { message: "Most Played" }

      ],

      content: [
        {
          id: 0,
          title: "Judas",
          artist: "Lady Gaga",
          category: ["Trending"],
        },
        {
          id: 1,
          title: "Paparazzi",
          artist: "Lady Gaga",
          category: ["Featured", "Genres"],
        },
        {
          id: 2,
          title: "Just Dance",
          artist: "Lady Gaga",
          category: ["Featured", "Trending"],
        },
        {
          id: 3,
          title: "Meet Me Halfway",
          artist: "The Black Eye Peace",
          category: ["Workout"],
        },
        {
          id: 4,
          title: "Can't Hold Us",
          artist: "Macklemore & Ryan Lewis",
          category: ["Most Played", "Trending"],
        },
        {
          id: 4,
          title: "Dark Horse",
          artist: "Katy Perry",
          category: ["Most Played", "New Releases"],
        },
      ],

    }
  },
  methods: {
    getElement(tab) {
      console.log(tab.message);
      // this.content = this.content.map(elem => elem = elem.category.includes(tab.message));
      console.log(this.content)
      if (tab.message === 'All') {
        this.content = this.content
      }
      this.content = this.content.filter(elem => tab.message != "All" ? elem.category.includes(tab.message) : elem)
      if (tab.message === 'All') {
        this.content = this.content
      }

    }
  },
  watch: {
    tab() {
      this.getElement()
    }
  },
  computed: {
  }
}).mount(".homework2");
