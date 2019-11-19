
function returnRepos(handle) {

    const url = `https://api.github.com/users/${handle}/repos`
    fetch(url)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(err => console.log(`error:`, err))
}
function handleSubmit() {
    $('form').on('click', 'button', function (event) {
        event.preventDefualt;
        const handle = $('input').val();
        returnRepos(handle);
    })
}

$(handleSubmit);