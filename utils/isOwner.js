/**
 * Checks if user is owner
 * @param server
 * @param user
 * @returns {boolean}
 */
function isOwner(server, user) {

  let ownerID = server.ownerID;
  let userID = user.id;

  //console.log( "ownerID: " + ownerID );
  //console.log( "userID: " + userID );
  if( ownerID === userID ){
    return true
  }else {
    return false
  }

}
module.exports = isOwner;
