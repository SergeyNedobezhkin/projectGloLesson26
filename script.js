const addUser = () => {
    function getData() {
        let users = fetch('db.json');
        users
        .then(response => response.json())
        .then(user => {
            console.log(user);
            return sendData(user);
        })
        .catch(error => {
            console.log(error);
        });
    }

    function sendData(user) {

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        });
    }
    getData();
};
addUser();

