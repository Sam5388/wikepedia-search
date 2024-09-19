let searchElment=document.getElementById("searchid");
let resultcont=document.getElementById("resultcont");
let spinnerelement=document.getElementById('spinnerid');

resultcont.classList.add('container')

function creteandappendresult(result){
    
    let {title,link,description}=result;
    let resulttitle=document.createElement('a');
    resulttitle.textContent=title;
    resulttitle.classList.add('resulttitlecss');
    resulttitle.href=link;
    resulttitle.target="_blank"
    resultcont.appendChild(resulttitle)
    
    let breakel=document.createElement('br');
    resultcont.appendChild(breakel);
    let resultlink=document.createElement('a');
    resultlink.textContent=link;
    resultlink.href=link;
    resultlink.classList.add('resultlinkcss')
    resultlink.target="_blank";

    resultcont.appendChild(resultlink);
    let breakel1=document.createElement('br');
    resultcont.appendChild(breakel1);
    let resultdescr=document.createElement('p');
    resultdescr.textContent=description;
    resultcont.appendChild(resultdescr)
    
}

function displayresults(search_results){
    spinnerelement.classList.toggle('d-none')
    for (let i of search_results){
        creteandappendresult(i)
        
    }
    
    
}


searchElment.addEventListener('keydown',function(event){
    if (event.key==='Enter'){
        spinnerelement.classList.toggle('d-none')
        resultcont.textContent="";
        let searchText=searchElment.value;
        let url="https://apis.ccbp.in/wiki-search?search="+searchText;
        let options={
            method:'GET'
        }
        fetch(url,options)
        .then(function(response){
            return response.json()

        })
        .then(function(jsonData){
            console.log(jsonData)
            let {search_results}=jsonData;
            displayresults(search_results);
            
        });
    }
})