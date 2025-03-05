document.getElementById('discover-btn')
.addEventListener('click', function(){
       window.location.href="./a6.html";
})


     function chagecoor (){
       let randomClor = "#"+
       Math.floor(Math.random()*16444).
       toString(16);
       document.body.style.backgroundColor =randomClor
     }

    const d= new Date();
    let text =d.toDateString()
    document.getElementById('date-btn').innerText=text




 