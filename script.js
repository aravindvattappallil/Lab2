
function add(){
    var title = document.getElementById("title").value;
    var artist = document.getElementById("artist").value;
    
    if(!title||!artist)
    {
        alert("please enter the input")
    }
    else{
         
        
        printvalue(title,artist);
    }
    
} 

function printvalue(title,artist){
    console.log("sending to dom")
        const listadd=document.createElement("div");

    
        listadd.classList.add("list_add");

        const titleh3=document.createElement("h3");
        
        titleh3.innerText=title;
        
        const artisth3=document.createElement("p");
        
        artisth3.innerText=artist;
        
        document.getElementById("content").appendChild(listadd);
        
        listadd.appendChild(titleh3)
        
        listadd.appendChild(artisth3)
}
// register
if('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register('./serviceworker.js',{scope:"."})
        
    })
}
