document.querySelector('.add').addEventListener("click",function(){
  if (document.querySelector(".text").value != "") {
    document.querySelector('.list').innerHTML += `
    <div class="item">
      <p>${document.querySelector('.text').value}</p>
      <button class="remove">Remove</button>
    </div>
    `;
    document.querySelector(".text").value = "";
  }
  buttons = document.querySelectorAll('.remove')
  if (buttons.length != 0) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        this.parentElement.remove();
      });
    }
  }
});
