import formatUser from "./formatUser";

// /**
//  * @param {Object[]} users
//  * @param {String}   [lsKey]
//  *
//  * @return {Object}
//  */
export default function getAuthentication(users, lsKey = "user") {
    return {
        // /**
        //  * @return {?Object}
        //  */
        getConnectedUser() {
            const user = localStorage.getItem(lsKey);

            return user ? JSON.parse(user) : null;
        },

        // /**
        //  * @param {String} username
        //  * @param {String} lastname
        //  * @param {String} password
        //  *
        //  * @return {?Object}
        //  */
        login(name, firstname, password) {
            let user = users.find(user => user.name === name && user.firstname === firstname && user.password === password);

            if (user) {
                user = formatUser(user);
                localStorage.setItem(lsKey, JSON.stringify(user));
            }

            return user || null;
        },

        logout() {
            localStorage.removeItem(lsKey);
        }
    };
}