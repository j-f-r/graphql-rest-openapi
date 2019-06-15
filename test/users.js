const { expect } = require("chai");
const request = require("request");
// TODO: Get from env
const baseUrl = "http://localhost:3000";

describe("[REST] Users test", function () {
    describe("Queries", function () {
        describe("Me", function () {
            var url = `${baseUrl}/me`;
            it("should return 200 code", function (done) {
                // TODO: Get users endpoint dynamically?
                request(url, function (error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    done();
                });
            });

            it("should return the first user", function (done) {
                // TODO: Get users endpoint dynamically?
                request(url, function (error, response, body) {
                    var user = JSON.parse(response.body);
                    expect(user.id).to.equal('1');
                    expect(user.name).to.equal('User A');
                    done();
                });
            });
        });
        describe("List", function () {
            var url = `${baseUrl}/users`;
            it("should return 200 code", function (done) {
                // TODO: Get users endpoint dynamically?
                request(url, function (error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    done();
                });
            });

            it("should return a list of users", function (done) {
                // TODO: Get users endpoint dynamically?
                request(url, function (error, response, body) {
                    var users = JSON.parse(response.body);
                    expect(users[0].id).to.equal('1');
                    expect(users[0].name).to.equal('User A');
                    done();
                });
            });
        });

        describe("Find", function () {
            var url = `${baseUrl}/user/1`;
            it("should return 200 code", function (done) {
                // TODO: Get users endpoint dynamically?
                request(url, function (error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    done();
                });
            });

            it("should return a user of id 1", function (done) {
                // TODO: Get users endpoint dynamically?
                request(url, function (error, response, body) {
                    var user = JSON.parse(response.body);
                    expect(user.id).to.equal('1');
                    expect(user.name).to.equal('User A');
                    done();
                });
            });


            it("should return not find an user", function (done) {
                var url = `${baseUrl}/user/2`;
                // TODO: Get user endpoint dynamically?
                request(url, function (error, response, body) {
                    var user = JSON.parse(response.body);
                    expect(user).to.equal(null);
                    done();
                });
            });
        });
    });

    describe("Mutations", function () {
        it("create an user", function (done) {
            var uri = `${baseUrl}/create-user`;
            // TODO: Get user endpoint dynamically?
            request({
                uri,
                method: 'POST',
                json: {
                    "name": "Tester"
                }
            }, function (error, response, body) {
                var user = response.body;
                expect(user.name).to.equal("Tester");
                done();
            });
        });
    });
});