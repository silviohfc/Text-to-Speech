const fs = require('fs')

const Comment = require('../models/Comment')
const textToSpeech = require('../apis/textToSpeech')

module.exports = {
    async index(req, res) {
        try {
            let [results] = await Comment.all()
            results = results.map(comment => ({
                ...comment,
                path: comment.path.replace('public', '')
            }))

            return res.render('index', { comments: results })
        }
        catch(err) {
            console.log(err)
        }
    },

    async create(req, res) {
        const { comment, audio_name } = req.body
        
        if (comment === "") return console.log("The comment cannot be empty!")

        const data = {
            comment,
            path: `public/audios/${audio_name}.wav`
        }

        const speechConfig = {
            text: comment,
            voice: "pt-BR_IsabelaVoice",
            accept: 'audio/wav'
        }

        try {
            const [{ insertId }] = await Comment.create(data)

            const audio = await textToSpeech.synthesize(speechConfig)
            await audio.result.pipe(fs.createWriteStream(`public/audios/${audio_name}.wav`))

            const results = await Comment.find(insertId)
            let resData = results[0][0]

            resData = {
                ...resData,
                path: `${req.protocol}://${req.headers.host}/${resData.path}`
            }
            
            return res.json(resData)
        }
        catch(err) {
            console.log(err)
        }
        
    }
}