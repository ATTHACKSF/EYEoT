var express = require('express');
var router = express.Router();
var sttRequest = require('sync-request');


router.post('/voice', function(request, response) {
    // voice wav
    var voice = request.body;

    // speech to text API
    var sstResponse = sttRequest(
        'POST',
        'https://api.att.com/speech/v3/speechToText',
        {
            headers: {
                'Authorization': 'Bearer BF-ACSI~3~20160103022809~4i9xH68ePEFIu8edMCjaQoF8qXE37z1v',
                'Accept': 'application/json',
                'Content-Type': 'audio/wav',
                'Transfer-Encoding': 'chunked'
            },
            body: voice
        }
    );
    var sstResponseJSON = JSON.parse(sstResponse.getBody('utf8'));
    if (sstResponseJSON.Recognition.Status != 'OK') {
        response.send({ 'application_code': 400, 'resultText': '' });
        return;
    }

    var resultText = sstResponseJSON.Recognition.NBest[0].ResultText;
    response.send({ 'application_code' : 200, 'resultText': resultText });
});


module.exports = router;
