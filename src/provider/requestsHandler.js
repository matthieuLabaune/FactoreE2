import { restdb } from './helper';

export default {
  getUsers() {
    return restdb
      .get('/rest/userfactore')
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getUser(name) {
    return restdb
      .get(`/rest/userfactore/?q={"name": "${name}"}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  postUser(user) {
    return restdb
      .post('/rest/userfactore', {
        name: user.name,
        firstname: user.firstname,
        password: user.password,
      })
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  postTemplate(template) {
    return restdb
      .post('/rest/templates', {
        template: {
          body: template.body,
          counters: template.counters,
          schemaVersion: template.schemaVersion,
        },
        // TODO : user_id
      })
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
