// Computed
vm2 = new Vue({
  el: "#test2",
  data: {
    scores: [10, 20, 30]
  },
  computed: {
    totalScore: function() {
      return this.scores.reduce(function(total, score) {
        return total + score;
      })
    }
  }
});

console.log(vm2.totalScore);
