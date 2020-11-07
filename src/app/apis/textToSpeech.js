const WatsonTextToSpeech = require('ibm-watson/text-to-speech/v1')
const { IamAuthenticator } = require('ibm-watson/auth')

const textToSpeech = new WatsonTextToSpeech({
    authenticator: new IamAuthenticator({
        apikey: 'KJGsEuDH6awFJBSOUs3BYGmUy2XBTyPl9xbRDo-_FV7W'
    }),
    serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/46f2d136-0183-49f8-ae4d-5a538f424cc1'
})



module.exports = textToSpeech