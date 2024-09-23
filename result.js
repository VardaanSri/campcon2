window.addEventListener('load', () => {

    // Via Query parameters - GET
    const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const cont = params.get('cont');
    const author = params.get('author_name');
    
    
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-cont').innerHTML = cont;
    document.getElementById('result-author_name').innerHTML = author;

})