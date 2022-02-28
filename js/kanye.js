const loadQoust = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then (data => displayQuote(data))
}

function displayQuote (qoute){
    
    const qouteElement = document.getElementById('quote');
    qouteElement.innerText = qoute.quote;
}