const supertest = require('supertest');
const { app } = require("../server");
const api = supertest(app);


const createUser = async () => {

    const user = {
        username: "Edgar",
        password: "Test"
    }

    const resp = await api.post('/users/add').send(user);
    const id = resp.body._id;

    return {
        user: resp.body,
        id
    }
}

/**
 * 
 * @param {*} id User Id to be found
 * @returns Object response containing the body of the User
 */

const getUser = async (id) => await api.get(`/users/find/${id}`);

const getUsers = async () => await api.get(`/users/findAll`);

module.exports = {
    api,
    createUser,
    getUser,
    getUsers,
}