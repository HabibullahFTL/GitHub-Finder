// UI Element Selector
let searchForm = document.querySelector('#search_form');
let searchUser = document.querySelector('#search_user');

// Add Event
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let user = searchUser.value;
    let ui = new UI();
    if (user != '') {
        ui.clearProfile();
        // For Showing Profile
        fetch( `https://api.github.com/users/${user}`)
        .then(result => result.json())
        .then(data=>{
            if (data.message == 'Not Found') {
                ui.showAlert('Invalid username. Enter a valid username to find!','alert alert-danger');
            }else{
                ui.showProfile(data);
                // For showing repositoris
                fetch( `https://api.github.com/users/${user}/repos`)
                .then(result => result.json())
                .then(data=>{
                    if (data.length == 0) {
                        ui.noRepos();
                    }else{
                        ui.showRepos(data);
                    }
                })
                ui.showAlert('Successfully found the user!','alert alert-success');
            }
        });
        ui.clearSearchInput();
    }else{
        ui.showAlert('Enter a username to find!','alert alert-danger');
        ui.clearProfile();
    }
})