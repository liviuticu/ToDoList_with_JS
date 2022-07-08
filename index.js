let form = document.getElementById("form");
let input = document.getElementById("input");
let activity = document.getElementById("activity");
let activities = document.getElementById("activities");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
  
    formValidation();
});
  
let formValidation = () => {
    if (input.value === "") {
        activity.innerHTML = "Activity cannot be blank";
        console.log("failure");
      } else {
        console.log("successs");
        activity.innerHTML = "";
        acceptData();
      }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = () => {
    activities.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    input.value = "";
  };


  let deletePost = (e) => {
    e.parentElement.parentElement.remove();
  };

  let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };

