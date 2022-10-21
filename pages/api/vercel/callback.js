export default function handler(req, res) {
    if(req.method === 'GET') {
        if(!req.query.code || !req.query.next) {
            return res.redirect('/signup/signup');
        }
        res.render('/signing/signing')
    }else if(req.method === 'POST'){

    }
}