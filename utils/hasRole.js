/**
 * Checks if user is owner
 * @param msg
 * @param rolename
 * @returns {boolean}
 */
function hasRole(msg,name) {

    return msg.member.roles.some(role => role.name === name);

}
module.exports = hasRole;
