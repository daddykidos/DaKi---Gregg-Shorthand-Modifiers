function id(a) {
    return document.getElementById(a)
}

function goTo(a){
    a = id(a)
window.scrollTo(0,a.offsetTop)
}

//quick go to function (since idk how to hyperlink)
let buttons = ['intro1','altsymbols','altchars','afterword','helpful','briefs']

buttons.forEach(element => {
    
    document.getElementById(element+'link').onclick = (e)=>{
        if (element!='briefs'){
    goTo(element)
        }else {window.open('briefs.html')}
}
});

