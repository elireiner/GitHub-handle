
function returnRepos(handle) {

    const url = `https://api.github.com/users/${handle}/repos`
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(err => alert(`error:`+ err))
}
function handleSubmit() {
    $('form').on('submit', 'button', function (event) {
        event.preventDefualt;
        const handle = $('input').val();
        returnRepos(handle);
    })
}

$(handleSubmit);