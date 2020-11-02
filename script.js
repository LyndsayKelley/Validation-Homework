var Content = document.body.querySelector(".Content")
var HomeHeader = document.body.querySelector(".HomeHeader")
var UserLogin = document.body.querySelector(".UserLogin")
var SubmitLogin = document.body.querySelector(".SubmitLogin")
var ErrorMessage = document.body.querySelector(".ErrorMessage")


var NextPageView = document.body.querySelector(".NextPageView")
var ViewNotes = document.body.querySelector(".NextPage")

var AddingNotes = document.body.querySelector(".AddingNotes")
var Error = document.body.querySelector(".Error")

var list = []

NextPageView.style.display = "none"

function NextView(){
  Content.style.display = "none"
  NextPageView.style.display = "block"
}

function renderList(){
  document.body.querySelector(".list").innerHTML ="";
  for(var i=0; i<list.length; i++){
    var itmEle = document.createElement("h6");
    itmEle.innerHTML=list[i]
    document.body.querySelector(".list").appendChild(itmEle)
  }
}


document.body.querySelector(".SubmitLogin").addEventListener("click",function(){
  if(UserLogin.value == "coolStudent123"){
    NextView()
  }else{
    document.body.querySelector(".ErrorMessage").innerHTML = "Incorrect Username"
  }
})

document.body.querySelector(".ViewNotes").addEventListener("click",function(){
  if(!isNaN(AddingNotes.length>=1)){
   list.push(AddingNotes.value) 
    renderList() 
  }else{
    Error.innerHTML = "Not Enough Characters"  
  }
})