const request = require('supertest');
const app = require("./app");

describe('Teste de requests',()=>{
    const originalDate = Date;

    afterEach(() => {
        global.Date = originalDate;
    });




    it('Retorna bom dia',async()=>{
        const originalDate = Date;
        global.Date=jest.fn(()=> new originalDate("2024-07-05T10:42:51.522Z"));
        // const mockDate=new Date("2024-07-05T10:42:51.522Z");
        const response= await request(app).get('/hora-atual');
        expect(response.body).toBe("Bom dia");
    });

    it('Retorna boa tarde',async()=>{
        const originalDate = Date;
        global.Date=jest.fn(()=> new originalDate("2024-07-05T15:42:51.522Z"));
        const response= await request(app).get('/hora-atual');
        expect(response.body).toBe("Boa tarde");
    });

    it('Retorna boa noite',async()=>{
        const originalDate = Date;
        global.Date=jest.fn(()=> new originalDate("2024-07-05T22:42:51.522Z"));
        const response= await request(app).get('/hora-atual');
        expect(response.body).toBe("Boa noite");
    });
});