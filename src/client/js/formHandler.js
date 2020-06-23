function handleSubmit(event) {
    event.preventDefault();
    // console.log(document.getElementById('name').value);

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    Client.checkForName(formText);

    console.log('::: Form Submitted :::');
    // fetch test
    // fetch('http://localhost:8080/test').then((res) => res.json()).then(function(res) {
    //     document.getElementById('results').innerHTML = res.message;
    // });
    // fetch aylien API with input
    const input = {
        text: formText
    };
    console.log(JSON.stringify(input));
    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    };

    const aylien = async () => {
        const response = await fetch('http://localhost:8080/aylien', requestOptions);
        return response.json();
    };

    aylien().then((res) => {
        console.log(res);
        document.getElementById('results').textContent = res.text;
    });
}

export { handleSubmit };
