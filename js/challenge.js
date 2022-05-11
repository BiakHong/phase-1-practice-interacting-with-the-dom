
let counter = document.getElementById("counter")
let current = 0;
let pause = document.getElementById("pause")
let add = document.getElementById("plus")
let minus = document.getElementById("minus")
let heart = document.getElementById("heart")
let submitBt = document.getElementById("submit")

function incrementSeconds() {
  
    let timerId = setInterval(function() {
    counter.innerText = current;
      current++;
    }, 1000);
    pause.addEventListener("click",()=> {
        if( pause.innerHTML === " pause "){
            pause.innerHTML = "Resume"
            add.disabled= true;
            minus.disabled=true;
            heart.disabled=true;

        clearInterval(timerId)}
    else if(pause.innerHTML === "Resume"){
        pause.innerHTML = " pause "
        add.disabled= false;
            minus.disabled=false;
            heart.disabled=false;
        timerId = setInterval(function() {
            counter.innerText = current;
              current++;
            }, 1000);
    }})
  }


  add.addEventListener("click",()=> current++)
  minus.addEventListener("click", ()=>current--)
 
  let myLikes = document.querySelector(".likes")

  heart.addEventListener("click", ()=> {
    const likeCounts = `${current} has been liked`
      const myList = document.createElement("ul")
      myList.append( `${current} has been liked`)
      console.log(myList)

      myLikes.appendChild(myList)
     
    
    })

    
   let form = document.querySelector("form")
   form.addEventListener("submit", (e)=>{
    let comments = document.getElementById("list")
    e.preventDefault()
     let cmtText = document.getElementById("comment-input");
     let theText = cmtText.value
     let p = document.createElement('p')
     p.textContent = theText
     comments.appendChild(p)
     form.reset()
    })

  incrementSeconds();

  
 