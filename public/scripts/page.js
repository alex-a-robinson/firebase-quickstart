function Page() {}

Page.prototype.init = function() {
  firebase.auth().onAuthStateChanged(this.on_auth_state_change.bind(this));
}

/**
 * Firebase function to log a user in
 *
 * @param user The Firebase.User object
 */
Page.prototype.on_auth_state_change = function(user) {
  if (user) {
    window.user = user
    this.once_authenicated(user);
  } else {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
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
