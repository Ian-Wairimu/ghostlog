import config from "../utils/config";

const Token = async (code) => {
    const url = "https://api.vercel.com/v2/oauth/access_token"
    const response = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            client_id: config.CLIENT_ID,
            client_secret: config.CLIENT_SECRET,
            code,
            redirect_uri: config.REDIRECT_URL
        })
    })
    if(!response.ok) {
        throw new Error(`${url} responded with ${response.status}`)
    }
    const json = await response.json();
    return json.access_token;
}
module.exports = Token;