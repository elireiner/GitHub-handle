'use strict';

function displayRepos(responseJson, handle) {
    $('#user-header').empty();
    $('#results-list').empty();
    if (responseJson.length > 0) {
        if (responseJson.length === 1) {
            $('#user-header').append(`This is ${handle}'s repo`)
        }
        else {
            $('#user-header').append(`These are ${handle}'s repos`)
        }
        for (let i = 0; i < responseJson.length; i++) {
            $('#results-list').append(`<li><h3>${handle} created a repo named: '${responseJson[i].name}
        '</h3><a href="${responseJson[i].html_url}" 
        target="_blank">Here is a link to it.</a></li>`)
        }
    }
    else {
        $('#user-header').append(`${handle} does not have repos yet`)
    }


    $('#results').removeClass('hidden')
}

function getRepos(handle) {

    const url = `https://api.github.com/users/${handle}/repos`
    console.log(url)
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                ///why is this not working?
                $('#user-header').empty();
                $('#results-list').empty();
                throw new Error(response.statusText);
            }
        })
        .then(responseJson => displayRepos(responseJson, handle))
        .catch(err => alert(`error:` + err))
}
function handleSubmit() {
    $('form').submit(function (event) {
        event.preventDefault();
        const handle = $('input').val();
        getRepos(handle);
    })
}

$(handleSubmit);