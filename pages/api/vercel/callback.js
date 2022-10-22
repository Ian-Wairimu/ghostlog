import {Token} from "../../../lib/token";
import {CreateLogDrain} from "../../../lib/createlogdrain";

export default async function handler (req, res) {
    if(req.method === 'GET') {
        if(!req.query.code || !req.query.next) {
            return res.redirect('/signup/signup');
        }
        res.render('/signing/signing')
    }else if(req.method === 'POST'){
        if (!req.query.code || !req.query.next || !req.body.type || !req.body.url) {
            return res.code(400)
        }

        const token = await Token(req.query.code)
        await CreateLogDrain(token, {
            name: 'ghostLog',
            type: req.body.type,
            url: req.body.url
        })

        res.redirect(req.query.next)
    }
}