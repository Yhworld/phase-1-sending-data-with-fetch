// Add your code here

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ name, email })
        })
        .then(function(res) { return res.json() })
        .then(function(object) {
            document.body.innerHTML = object["id"]
        })
        .catch(function(error) {
            document.body.innerHTML = error.message
        })
} 

/*function SubmitData() {
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value

    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
        "Accept" :'application/json, text/plain',
        "content-type": 'application/json',
    },
    body: JSON.stringify({name : name, email: email})
    
})
.then((res) => res.json())
.then((data => {
    console.log(data)
}))
})
}
submitData() */