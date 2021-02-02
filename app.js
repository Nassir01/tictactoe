console.log("hahahaha");
var count = 0;
var idoftd;
// $("td").on("click", function (e) {
//   var data = $(this).attr("id");
//   alert(data);
//   idoftd = data;
// });
var array = document.getElementsByClassName("td");
function liste() {
  for (var i = 0; i < array.length; i++) {
    array[i].addEventListener("click", myturn);
  }
}
liste();

function myturn($event) {
  
  var selectedCase=$event.target

  if (selectedCase.innerHTML === "") {
   
    if (count % 2 !== 0) {
      selectedCase.innerHTML = "X";
      
    }
    if (count % 2 === 0) {
      selectedCase.innerHTML = "O";
     
    }
    count++
  }
  console.log(count);
 
}
