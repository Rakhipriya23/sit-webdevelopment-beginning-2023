const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function add(){
    if(inputbox.value === ''){
        alert("please write something");
    }
    else{
        
        let li =document.createElement("li");
        li.innerHTML=`${inputbox.value}<button id="don">Done</button><button id="del">Delete</button>`;   
        listcontainer.appendChild(li);//display
        
        
        //for deleting the list
        li.querySelector("#del").addEventListener("click",remove);
        function remove(){
            li.remove();
        }

        //for mark as done
        li.querySelector("#don").addEventListener("click",done);
        function done(){
            li.style.textDecoration="line-through";
        }
        
    }
    inputbox.value="";
    
}
    //storing in local storage

    // function save(){
    //     localStorage.setItem("data",listcontainer.innerHTML);
    // }
    // function showtask(){
    //     listcontainer.innerHTML=localStorage.getItem("data");
    // }
    // showtask();


