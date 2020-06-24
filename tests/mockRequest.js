async function mockRequest() {
    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: 'test message' })
    };
    // POST request to Express server
    const aylien = async () => {
        const response = await fetch('http://localhost:8080/aylien', requestOptions);
        return response.json();
    };

    return aylien();
}

module.exports = mockRequest;
