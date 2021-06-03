import Vue from "vue";

Vue.filter("capitalize", val => val.toUpperCase());

Vue.filter("formatDate", function(value) {
  if (value) {
    value = value * 1000;
    return (
      ("00" + new Date(value).getDate()).slice(-2) +
      "/" +
      ("00" + (new Date(value).getMonth() + 1)).slice(-2)
    );
  }
});
