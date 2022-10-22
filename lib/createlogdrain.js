const CreateLogDrain = async (token, body) => {
    const url = "https://api.vercel.com/v1/integrations/log-drains";
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body)
    });
    if (!response.ok) {
        throw new Error(`${url} responded with ${response.status}`);
    }
}

module.exports = {CreateLogDrain};