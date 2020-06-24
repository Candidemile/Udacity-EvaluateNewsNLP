// GET update from Express server
const getUpdate = async () => {
    const response = await fetch('http://localhost:8080/update');
    // console.log('getUpdate:\n', response);
    return response.json();
};
// Update website UI
const updateUI = (res) => {
    if (!res) {
        return;
    }
    let text = `initial text - "${res.text}"<br>
    polarity - ${res.polarity}<br>
    subjectivity - ${res.subjectivity}<br>
    polarity_confidence - ${res.polarity_confidence.toFixed(3)}<br>
    subjectivity_confidence - ${res.subjectivity_confidence.toFixed(3)}`;
    document.getElementById('results').innerHTML = text;
};

// Check for new results on Express server every sec
const check = () => {
    getUpdate().then((res) => updateUI(res));
};
setInterval(check, 1000);
