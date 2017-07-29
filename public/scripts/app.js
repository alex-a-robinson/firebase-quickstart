Page.prototype.once_authenicated = function(user) {
  // this.db.ref('/users/info').on('child_added', add_info);
  // this.db.ref('/users/info').on('child_changed', add_info);
  // this.db.ref('/users/info').on('child_removed', remove_info);
}

$(document).ready(function() {
  new Page();
});
