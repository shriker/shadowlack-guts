import { extend } from 'flarum/extend';
import HeaderPrimary from 'flarum/components/HeaderPrimary';
import AboutPage from './components/AboutPage';

extend(HeaderPrimary.prototype, 'items', function(items) {
  items.add('about', <a href="/about" class="Button Button--link">About</a>);
  items.add('wiki', <a href="https://shadowlack.com/wiki" class="Button Button--link">Wiki</a>);
});

app.initializers.add('shriker/shadowlack-guts', () => {
  app.routes.about = {path: '/about', component: AboutPage.component()};
});
