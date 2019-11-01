new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue ninja',
    name: 'Ryu',
    showName: true
  },
  methods: {
    updateName(e){
      // console.log(e.target.value)
      this.name = e.target.value
    },
    logMessage() {
      console.log('hello')
    },
    toggleName() {
      this.showName = !this.showName
    }
  }
})