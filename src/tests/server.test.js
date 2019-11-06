require('dotenv').config();
const request = require('request');

require('../index');
require('isomorphic-fetch');

const HOST = 'http://localhost:4000/graphql';
let token;

function clearDataBAse() {
    console.log('limpiando base de datos');
    return new Promise(resolve => {
        let count = 0;
        const max = Object.keys(mongoose.connection.collections).length;
        for(const i  in  mongoose.connection.collections) {
            mongoose.connection.collections[i].remove(function(){
                count++;
                if(count >= max) {resolve()};
            });
        }
    });
};

describe('server on', () => {
    beforeEach(function(done) {
        clearDataBAse()
        .then(() => done())
        .catch(() => done());
    });

    it('should register a user', function(done) {
        const json = {
            query: "mutation($data:UserInput){ addUser(data:$data){token}}",
            variables: {
                "data": {
                    "name": "otro name",
                    "lastName": "otro lastname",
                    "gender": "H",
                    "password": "123",
                    "email": "test@test.com"
                }
            }
        };

        request.post({
            url: HOST,
            json: json
        }, function(err, res, body){
            expect(res.statusCode).toBe(200);
            token = body.data.addUser.token;
            done();
        })
    });

    it('should show the books', function(done) {
        const json = {
            query: "{books {title}}"
        }

        request.post({
            url: HOST,
            json: json,
            headers: {
                "Authorization": token
            }
        }, function(err, res, body) {
            expect(res.statusCode).toBe(200);
            const books = body.data.books;
            console.log(books);
            done();
        })
    })
})