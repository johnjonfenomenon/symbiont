const request = require('co-supertest');
const expect = require('chai').expect;

describe('Testing endpoints', function(){
    describe('Testing /restaurants endpoints', function(){
        it('should get restaurants list', function *(){
            yield request(strapi.config.url)
                .get('/restaurants')
                .expect(200)
                .expect('Content-Type', /json/)
        })
        it('should make sure the reuslt is instance of an Array',function *(){
            yield request(strapi.config.url)
            .get('/restaurants')
            .expect('Content-Type', /json/)
            .then(res =>{
                expect(res.body).to.be.instanceOf(Array)
            })

        })
        it('should make sure you have restaurant entries ',function *(){
            yield request(strapi.config.url)
            .get('/restaurants')
            .expect('Content-Type', /json/)
            .then(res =>{
                expect(res.body).to.be.instanceOf(Array)
                expect(res.body).to.have.length.gt(0)
            })

        })
        it('should return 404 as this directory is not available', function *(){
            yield request(strapi.config.url)
                .get('/not-available')
                .expect(404)
                .expect('Content-Type', /json/)
                .end()
        })
    })

    describe('Testing /categories endpoint', function(){
        it('should get category list', function *(){
            yield request(strapi.config.url)
                .get('/categories')
                .expect(200)
                .expect('Content-Type', /json/)
                .then(res => {
                    expect(res.body).to.be.instanceOf(Array)
                    expect(res.body).to.have.length.gt(0)
                })
        })
    })
    
})