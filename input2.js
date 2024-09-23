function handleSubmit () {
    const name = document.getElementById('name').value;
    const cont = document.getElementById('const').value;
    const author_name = document.getElementById('Author').value;
    
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("const", cont);
    sessionStorage.setItem("Author", author_name);

    return;
}

function main_menu(){
    
}