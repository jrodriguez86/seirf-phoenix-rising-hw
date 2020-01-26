$(()=>{

const list = [];
const $toDoList = $("#to-do-list");

const render = () =>{
  $("ul").empty();
  list.forEach((item)=>{
    $("ul").append("<li>" + item + "</li>")
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
  
});