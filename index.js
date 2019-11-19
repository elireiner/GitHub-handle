
function returnRepos(handle) {

    const url = `https://api.github.com/users/${handle}/repos`
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(err => alert(`error:`+ err))
}
function handleSubmit() {
    $('form').on('click', 'button', function (event) {
        event.preventDefault();
        const handle = $('input').val();
        returnRepos(handle);
   })
}

$(handleSubmit);