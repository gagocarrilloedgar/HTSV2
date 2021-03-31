const { api, createUser, getUser, getUsers } = require("./helpers")
require("./jest.config");


const initState = [
    {
        username: "Edgar",
        password: "Test"
    },
    {
        username: "Edgar2",
        password: "Test2"
    },

]

describe("/GET /api/users", () => {

    test('/findAll Users are returned as json', async () => {

        await api
            .get('/users/findAll')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    });

    test('/find Not find user shuold return 404', async () => {

        await api
            .get('/users/find/test')
            .expect(404);
    });

    test('Users lenght should be 0 before starting', async () => {
        const response = await api.get('/users/findAll');
        const expectedLenght = 0;

        expect(response.body).toHaveLength(expectedLenght);
    });

    test("find/:id should return the object", async () => {

        await api.post('/users/addList').send(initState)

        const response = await api.get('/users/findAll');
        const id = response.body[0]._id;

        const resp = await api
            .get(`/users/find/${id}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)

        expect(response.body[0]).toStrictEqual(resp.body)

    })


});

describe("/POST /api/users", () => {

    test('A user should be able to be added', async () => {

        //New mock users
        const user = {
            username: "Edgar",
            password: "Test"
        }

        await api
            .post('/users/add')
            .send(user)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);

        const response = await api.get('/users/findAll');

        const usernames = response.body.map(user => user.username);

        expect(response.body).toHaveLength(1);
        expect(usernames).toContain(user.username);


    })


    test('A user wihtouh username should return 400', async () => {
        //New mock users
        const user = {
            password: "Test"
        }

        await api
            .post('/users/add')
            .send(user)
            .expect(400);

        const response = await getUsers();

        expect(response.body).toHaveLength(0);

    });

    test('Add a user list should be able to be added', async () => {

        //New mock users
        await api
            .post('/users/addList')
            .send(initState)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);

        const response = await getUsers();

        expect(response.body).toHaveLength(2);
    });

    test('List with at least wihtout one wrong key should add anything to the list', async () => {
        //New mock users
        const users = [
            {
                password: "Test"
            },
            {
                username: "Edgar2",
                password: "Test2"
            },

        ]
        await api
            .post('/users/addList')
            .send(users)
            .expect(400);

        const response = await getUsers();

        expect(response.body).toHaveLength(0);
    });

});

describe("/PUT /api/users", () => {

    test("Already created users should be able to be updated", async () => {

        // Inits
        const { id } = await createUser();

        const udpatedUser = {
            username: "Edgar3",
            age: 10
        }
        // Test to be passed
        await api
            .put(`/users/update/${id}`)
            .send(udpatedUser)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);

        const response = await getUser(id);

        expect(response.body).toMatchObject(udpatedUser);
    })

    test("Empty update should leave the object intact", async () => {

        const { user, id } = await createUser();

        await api
            .put(`/users/update/${id}`)
            .send({})
            .expect(200);

        const response = await getUser(id);

        expect(response.body).toStrictEqual(user);

    })


});

describe("/DELETE /api/users", () => {


    test("A users should be able to be deleted by their user Id", async () => {

        const { id } = await createUser();

        // First we check whether the response is good or not
        await api
            .delete(`/users/delete/${id}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);

        // We double check if the
        const response = await getUsers();

        expect(response.body).toHaveLength(0);
    });

});





