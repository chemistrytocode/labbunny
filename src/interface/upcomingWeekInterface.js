document.addEventListener("DOMContentLoaded", function(event) {

  function getReqs() {
    this.state = {
      practicals: []
    };
    fetch("http://localhost:5000/reqs")
      .then(response => response.json())
      .then(practicals => {
        this.setState({ practicals: practicals });
      });
    return this.state;
  }

  function getWeek() {
    // return var document.getElementById("weekSelection").value;
  }

  var practicals = getReqs();
  var selectedWeek = getWeek();
  // var selectedWeek = document.getElementById("weekSelection").value;

  console.log(practicals.teacher);
  console.log(selectedWeek);
  console.log("Hello World");

  //do workdocument.getElementById(idToChange).innerHTML = number;
});
