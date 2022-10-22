const CreateLogDrain = async (token, body) => {
    const URL = "https://api.vercel.com/v1/integrations/log-drains";
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
    });
    if (!response.ok) {
        throw new Error(`${URL} responded with ${response.status}`);
    }
}

module.exports = CreateLogDrain