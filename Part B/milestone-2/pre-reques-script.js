var req = pm.request.toJSON();
var jsonData = JSON.parse(req.body.raw)

const email = jsonData['email'], 
    fname = jsonData['first_name'];

// set env variables
postman.setEnvironmentVariable("user-fname", fname)
postman.setEnvironmentVariable("user-email", email)