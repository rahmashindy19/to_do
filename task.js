var back = document.createElement("div") ;
back.className = "back" ;
document.body.append(back) ;

var back1 = document.createElement("div") ;
back1.className = "back1" ;
document.body.append(back1) ;

var text = document.createElement("h1") ;
text.className = "text"
text.innerHTML = "Teame Meating"
back1.append(text) ;

var check = document.createElement("div") ;
check.className = "check" ;
back1.append(check) ;

var text1 = document.createElement("P") ; 
text1.className = "text1" ; 
text1.innerHTML = "checklist"
check.append(text1) ;

var date = document.createElement("p") ; 
date.className = "date" ; 
date.innerHTML = "04/01/2020 . ML - 1321";
back1.append(date) ;

fetchData() ;

async function fetchData() {
  try {
    res = (
      await fetch("https://jsonplaceholder.typicode.com/todos")
    ).json();

    console.log(res);

    const data = await res ;

    var arr = [data[1] , data[2] , data[3] ,data[4] ,data[5]] ; 
    console.log(arr)
    
    // var container1 = document.createElement("input")
    // container1.type = "checkbox" ;
    //   container1.id = "checkboxs1";
    //   container1.checked = "mm"
    //   container1.disabled = "nnnn";
    //   back1.append(container1) ;


    //   var text3 = document.createElement("label") ; 
    //   text3.className = "label1" ; 
    //   text3.innerHTML = data[1].title ;
    //   back1.append(text3)
    //   var ll = document.createElement("br") ;
    //   back1.append(ll) ;


    

    for(let i = 0; i < arr.length ; i++){

        var container = document.createElement("input") ;
        container.type = "checkbox" ; 
        container.className = 'checkboxs'
      
        container.disabled = "nn"
        back1.append(container) ;


        var text2 = document.createElement("label") ;
        if(arr[i].completed)
        text2.className = "label1";
      else 
      text2.className = "label";

        text2.innerHTML = arr[i].title ;
        back1.append(text2)
        
        var br = document.createElement("br") ; 
        back1.append(br)

    }

    
} 
 catch (err) {}

}


var hr = document.createElement("hr") ;
hr.className = "ll"
back1.append(hr) ;

var share = document.createElement("div") ; 
share.className = "ooo";

back1.append(share) ;

var ppp = document.createElement("p") ; 
ppp.className = "ppp" ; 
share.append(ppp) ; 
ppp.innerHTML = "shared with"


 