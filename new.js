const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";




let ncontain=document.querySelector(".cotainer");
let ncont1=document.querySelector(".cont1");
let ndropdown=document.querySelectorAll(".dropdown select ");


//generating the dropdown of all the list of the country name
for(let select of ndropdown){
    for( code in countryList){ //we don't need to define the varible with let before them
        let newoption=document.createElement("option"); //adding the countrylist to the option

        newoption.innerText=code;
        newoption.value=code;
        // select.append( newoption)
        if(select.name==="from" && code==="USD" )
        {
            newoption.selected=true;
        }
        else if(select.name==="to" && code==="INR" )
        {
                newoption.selected=true;
        }
        select.append( newoption) //we created choose variable for the loop so


    }
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target)
     })
    
}




let updateflag=(element)=>{
    let code=element.value;
    // console.log(code)
    let countrycode=countryList[code];
    let nesrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img1=element.parentElement.querySelector("img")
    img1.src=nesrc;
}

