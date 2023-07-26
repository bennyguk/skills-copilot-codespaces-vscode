function skillsMember() {
  var member = {
    name: "John",
    age: 34,
    calculateNumbers: function(var1, var2) {
      return var1 + var2;
    }
  };
  console.log(member.calculateNumbers(1, 2));
}