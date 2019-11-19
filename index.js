
function returnRepos(handle) {

    const url = `https://api.github.com/users/${handle}/repos`
    fetch(url)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(err => alert(`there was an error`))
}
function handleSubmit() {
    $('form').on('click', 'button', function (event) {
        event.preventDefualt;
        const handle = $('input').val();
        returnRepos(handle);
    })
}

$(handleSubmit);