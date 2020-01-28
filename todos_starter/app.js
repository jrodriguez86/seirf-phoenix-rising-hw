$(()=>{

const list = [];
const $toDoList = $("#to-do-list");

const render = () =>{
  $("ul").empty();
  list.forEach((item)=>{
    $("#to-do-list").append("<li>" + item + "</li>")
    // how to apply the CSS portion to the ID to do list
  });
}

const handleSubmit = (event) => {
    const inputBoxValue = $("#input-box").val()
  
    console.log(inputBoxValue);
    
    list.push(inputBoxValue)
    
    event.preventDefault();
    $(event.currentTarget).trigger("reset")
    
    render();
  };



    
  $("form").on("submit", handleSubmit)
  $("button").on("click", handleSubmit)
  
});