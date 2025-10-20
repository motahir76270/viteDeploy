const AiService = require('../services/AiService')

const getReview = async (req,res) => {
    const code= req.body.code;

    if(!code){
        return res.status(400).send("prompt is require");
    }

    const response = await AiService(code)

    res.send(response);
}

module.exports = getReview;