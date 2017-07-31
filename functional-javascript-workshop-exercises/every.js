function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(user => goodUsers.some(u => u.id === user.id))
  };
}

module.exports = checkUsersValid
