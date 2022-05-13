// Tests

// Basic HTTP Code Test
pm.test("Check status Code: 200", () => {
    pm.expect(pm.response.code).equals(200)
})

// Basic HTTP Res Header Test
pm.test("Content-Type header is present", () => {
  pm.response.to.have.header("Content-Type");
});

// Basic HTTP Res Time Test
pm.test("Response time is less than 200ms", () => {
  pm.expect(pm.response.responseTime).to.be.below(1000);
});

var req = pm.request.toJSON();
var req_jsonData = JSON.parse(req.body.raw);
var res_jsonData = pm.response.json();


// test first name
pm.test("Verify 'first_name' updated with correct values.", () => {
    const req_fname = req_jsonData['first_name'],
    res_fname = res_jsonData['first_name']
    pm.expect(req_fname).equals(res_fname);
    postman.setEnvironmentVariable("user-fname", res_fname)
})

// test last name
pm.test("Verify 'last_name' updated with correct values.", () => {
    const req_lname = req_jsonData['last_name'],
    res_lname = res_jsonData['last_name']
    pm.expect(req_lname).equals(res_lname);
    postman.setEnvironmentVariable("user-lname", res_lname)
})

// test email
pm.test("Verify 'email' updated with correct values.", () => {
    const req_email = req_jsonData['email'],
    res_email = res_jsonData['email']
    pm.expect(req_email).equals(res_email);
    postman.setEnvironmentVariable("user-email", res_email)
})

// check for field `updatedAt`
pm.test("Check whether the field “updatedAt” is present in the response body", () => {
    pm.expect(res_jsonData).to.haveOwnProperty('updatedAt')
})
