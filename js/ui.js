// UI Class Create
class UI{
    constructor(){
        this.profile = document.querySelector('#profile');
        this.repos = document.querySelector('#repos');
    }
    showProfile(user){
        this.clearAlert();
        this.profile.className = 'card';
        this.profile. innerHTML = `
          <div class="card-header text-center">
                <b>${user.name}</b>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" alt="${user.name}" class="img-fluid">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mt-2">See Profile</a>
                    </div>
                    <div class="col-md-9 mt-4">
                        <span class="badge badge-pill badge-primary p-2">Follower: ${user.followers}</span>
                        <span class="badge badge-pill badge-success p-2">Following: ${user.following}</span>
                        <span class="badge badge-pill badge-warning p-2">Public Repos: ${user.public_repos} </span>
                        <span class="badge badge-pill badge-info p-2 mt-1">Public Gists: ${user.public_gists}</span>
                        <div class="card mt-1">
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item"><b>company Name: </b> ${user.company}</li>
                              <li class="list-group-item"><b>Website/Blog: </b>${user.blog}</li>
                              <li class="list-group-item"><b>Location: </b>${user.location}</li>
                              <li class="list-group-item"><b>Member Since: </b>${user.created_at}</li>
                            </ul>
                          </div>
                    </div>
                </div>
            </div>
        `;
    }
    noRepos(){
        this.repos.className = 'card mt-2 mb-3';
        this.repos.innerHTML = `
        <div class="card-body">
            <h5 class="card-text text-center text-warning">This organization/user has no public repositories.</h5>
        </div>
        `;
    }
    showRepos(repos){
        let singleRepos ='';
        this.repos.className = 'card mt-2 mb-3';
        let ch = document.createElement('div');
        ch.className = 'card-header text-center';
        let b = document.createElement('b');
        b.appendChild(document.createTextNode('Public Repositories'));
        ch.appendChild(b);
        this.repos.appendChild(ch);
        let row = document.createElement('div');
        row.className = 'row p-3';
        this.repos.appendChild(row);
        repos.forEach(data => {    
            singleRepos += `
            <div class="col-md-4 p-2">
                <div class="card m-1 p-2">
                    <div class="card-text">
                        <a href="${data.html_url}"><b>${data.name}</b></a>
                    </div>
                    <div class="card-text">${data.description}</div>
                    <div class="card-text"><span style="display:inline-block;width:10px;height:10px;background:green;margin-right:10px;border-radius:50%;marging-top:5px;"></span>${data.language}</div>
                </div>
            </div>
            `
        });
        row.innerHTML = singleRepos;
    }
    showAlert(message,className){
        this.clearAlert();
        let div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.alert_container');
        container.insertBefore(div,searchForm);
    }
    clearAlert(){
        let alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }
    clearProfile(){
        this.profile.innerHTML = '';
        this.profile.className = '';
        this.repos.innerHTML = '';
        this.repos.className = '';
    }
    clearSearchInput(){
        document.querySelector('#search_user').value = '';
    }
}