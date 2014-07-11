// Templates and replacing
vm3 = new Vue({
  el: "#test3",
  replace: true,
  data: {
    name: 'alice'
  },
  template: '<div v-text="name"></div>'
});
