new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue ninja',
    name: 'Ryu',
    showName: true,
    items: ["aaa", "bbb", "ccc"],
    ninjas: [
      { name: 'Crystal', age: 25, belt: 'Black'},
      { name: 'Ryu', age: 30, belt: 'Brown'},
      { name: 'Ken', age: 35, belt: 'Orange'} 
    ]
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