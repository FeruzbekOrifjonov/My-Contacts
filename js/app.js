
let searchInput=document.getElementById('search');

searchInput.addEventListener('keyup', filterNames);

function filterNames(){
  let Input=document.getElementById('search').value.toUpperCase();
  

  let names=document.getElementById('names');
  let items=names.querySelectorAll('li.collection-names')
  
  for(let i=0; i< items.length; i++){
    let a=items[i].getElementsByTagName('a') [0];
    
    if (a.innerHTML.toUpperCase().indexOf(Input) > -1) {
      items[i].style.display="";
    }else{
      items[i].style.display="none";
      


    }
  }
  
}