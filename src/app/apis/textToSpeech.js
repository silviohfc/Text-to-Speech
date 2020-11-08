const WatsonTextToSpeech = require('ibm-watson/text-to-speech/v1')
const { IamAuthenticator } = require('ibm-watson/auth')

const textToSpeech = new WatsonTextToSpeech({
    authenticator: new IamAuthenticator({
        apikey: 'your_key'
    }),
    serviceUrl: 'your_url'
})



module.exports = textToSpeech