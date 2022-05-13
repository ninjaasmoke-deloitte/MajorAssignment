// Tests

// Basic HTTP Code Test
pm.test("Check status Code: 201", () => {
    pm.expect(pm.response.code).equals(201)
})

// Basic HTTP Res Header Test
pm.test("Content-Type header is present", () => {
  pm.response.to.have.header("Content-Type");
});

// Basic HTTP Res Time Test
pm.test("Response time is less than 200ms", () => {
  pm.expect(pm.response.responseTime).to.be.below(1000);
});

// Major Test
pm.test("Verify the `email’ and ‘first_name’ values match with response", () => {
    const env_email = pm.environment.get("user-email"); 
    const env_fname = pm.environment.get("user-fname");

    var jsonData = pm.response.json()

    const res_email = jsonData.email
    const res_fname = jsonData.first_name
    
    pm.expect(res_email).eql(env_email)
    pm.expect(res_fname).eql(env_fname)
})