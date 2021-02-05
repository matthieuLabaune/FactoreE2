import { restdb } from './helper';

export default {
    getUsers() {
        return restdb
            .get("/rest/userfactore").then((response) => {
                return response.data;
            }).catch((err) => {
                console.log(err);
            })
    },
    postUser(user) {
        return restdb
            .post("/rest/userfactore", {
                name: user.name,
                firstname: user.firstname,
                password: user.password
            }).then((response) => {
                console.log(response);
                return response;
            }).catch((err) => {
                console.log(err);
            })
    }
}