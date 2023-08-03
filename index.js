// Add your code here
document.addEventListener(`DOMContentLoaded`, initialize);


function handleUserInfoSubmit(e) {
    e.preventDefault();
    submitData(e.target.name.value, e.target.email.value);
}



function submitData (userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    })
    .then(resp => resp.json())
    .then(data => addingInputToDOM(data))
    .catch(error => document.body.innerHTML = error.message)
}

function addingInputToDOM(userObj) {
    const div = document.createElement(`div`);

    const h4 = document.createElement(`h4`);
    h4.textContent = userObj[`name`];

    const pId = document.createElement(`p`)
    pId.textContent = userObj[`id`];

    const pEmail = document.createElement(`p`);
    pEmail.textContent = userObj[`email`];

    div.id = `user-${userObj[`name`]}`;

    div.append(h4, pId, pEmail);
    document.querySelector(`body`).append(div);
}


function initialize(){
    document.querySelector(`#userInfoForm`).addEventListener(`submit`, handleUserInfoSubmit);
}
