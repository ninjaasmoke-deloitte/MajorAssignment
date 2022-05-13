// Global Variables
var jsonData = pm.response.json()

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


// Test - 1
pm.test("User with 'id' 40 has 'userId'=4", () => {
    _.each(jsonData, (v) => {
        let id = v['id']
        let userId = v['userId']

        if(id === 40) {
            pm.expect(userId).equals(4)
        }
    })
})

// Test - 2
pm.test("Every 'title' field in the response has the type is String.", () => {
    _.each(jsonData, (v) => {
        pm.expect(typeof v['title']).equals('string')
    })
})