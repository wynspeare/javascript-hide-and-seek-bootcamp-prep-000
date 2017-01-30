function getFirstSelector(selector){
return document.querySelector(selector)
}

function nestedTarget(){
return document.querySelector('#nested .target')
}



function increaseRankBy(n){
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = list.length; i < l; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML, 10) + n
  }
return list
}


function deepestChild(){
return document.querySelector('#grand-node div div div div')
}
