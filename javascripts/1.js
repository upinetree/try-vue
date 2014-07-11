// data and methods
vm1 = new Vue({
  el: "#test1",
  data: {
    name: "bob",
  },
  methods: {
    notify: function(message) {
      alert(message + " by " + this.name);
      vm2.scores.push(10);
    }
  }
});
