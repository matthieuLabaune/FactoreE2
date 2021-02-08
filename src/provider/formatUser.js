//   /**
//  * @param {Object} user
//  *
//  * @return {String}
//  */
function getDisplayName(user) {
    if (user.name) {
        return user.name;
    }

    if (user.name && user.firstname) {
        return user.name + " " + user.firstname;
    }

    return user.name;
}

// /**
//  * @param {Object} user
//  *
//  * @return {Object}
//  */
export default function formatUser(user) {
    return {
        name: user.name,
        displayName: getDisplayName(user)
    };
}