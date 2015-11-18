// $Id: delete_all.js,v 1.2 2008/08/04 00:20:55 kbahey Exp $ if (Drupal.jsEnabled) {
  $(document).ready(function () {
    function check_buttons() {
      if ($('#drush-demo-command-content .drush-demo-command').is(':checked')) {
        $('#drush-demo-command-content .form-checkboxes input').attr('checked', 'checked').attr('disabled', 'disabled');
      }
      else {
        $('#drush-demo-command-content .form-checkboxes input').removeAttr('checked').removeAttr('disabled');
        if ($('#drush-demo-command-content fieldset').is('.collapsed')) {
          Drupal.toggleFieldset($('#drush-demo-command-content fieldset'));
        }
      }
    }
    $('#drush-demo-command-content .drush-demo-command').click(function () {
      check_buttons();
    });
    check_buttons();
  });
}
