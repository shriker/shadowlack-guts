import app from 'flarum/app';
import Button from 'flarum/components/Button';
import IndexPage from 'flarum/components/IndexPage';
import SignUpModal from 'flarum/components/SignUpModal';
import { extend } from 'flarum/extend';

export default function() {
  extend(IndexPage.prototype, 'sidebarItems', function(items) {

    // Add sidebar guest register button
    if (typeof app.session.user === 'undefined') {
        items.add('shadowLogin', Button.component({
          children: app.translator.trans('core.forum.sign_up.submit_button'),
          className: 'Button Button--primary',
          onclick: function() {app.modal.show(new SignUpModal())}
          }), 110);

      // Remove new discussion button because it's confusing to guests
      items.remove('newDiscussion');
    }
  });
}
