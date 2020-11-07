const fs = require('fs')

const Comment = require('../models/Comment')
const textToSpeech = require('../apis/textToSpeech')

module.exports = {
    async index(req, res) {
        try {
            let [results] = await Comment.all()
            results = results.map(comment => ({
                ...comment,
                path: `${req.protocol}://${req.hostname}/${comment.path}`
            }))

            console.log(results)

            return res.render('index', { comments: results })
        }
        catch(err) {
            console.log(err)
        }
    },

    async create(req, res) {
        const { comment, audio_name } = req.body

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
            audio.result.pipe(fs.createWriteStream(`public/audios/${audio_name}.wav`))

            const results = await Comment.find(insertId)
            let resData = results[0][0]

            resData = {
                ...resData,
                path: `${req.protocol}://${req.hostname}/${resData.path}`
            }
            
            return res.json(resData)
        }
        catch(err) {
            console.log(err)
        }
        
    }
}