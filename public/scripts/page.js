function Page() {
  this.db = firebase.database();
  this.auth = firebase.auth();

  this.auth.onAuthStateChanged(on_auth_state_change);
}

/**
 * Firebase function to log a user in
 *
 * @param user The Firebase.User object
 */
Page.prototype.on_auth_state_change = function(user) {
  if (user) {
    window.user = user
    once_authenicated(user);
  } else {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    window.user = null;
  }
}

/**
 * Called if an authenticated user logs in
 *
 * @param user The Firebase.User object
 */
Page.prototype.once_authenicated = function(user) {
  console.error('Not implementation')
}
