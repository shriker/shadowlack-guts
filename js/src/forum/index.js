
import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';
import HeaderPrimary from 'flarum/components/HeaderPrimary';
import Separator from 'flarum/components/Separator';
import LinkButton from 'flarum/components/LinkButton';

import AntiHPage from './components/AntiHPage';
import AboutPage from './components/AboutPage';
import RulesPage from './components/RulesPage';
import ParentsPage from './components/ParentsPage';

/**
 * Extend top primary navigation
 */
extend(HeaderPrimary.prototype, 'items', function(items) {
  items.add('about', LinkButton.component({ children: 'About', href: app.route('about') }));
  items.add('wiki', LinkButton.component({ children: 'Wiki', href: 'https://shadowlack.com/wiki' }));
});

/**
 * Extend sidebar navigation
 */
extend(IndexPage.prototype, 'navItems', function(items) {

  items.add('about', LinkButton.component({
      icon: 'fas fa-info',
      children: 'About',
      href: app.route('about'),
  }));

  // if (items.items.about.content.props.active === true) {
    items.add('rules', LinkButton.component({
        parent: 'about',
        children: 'Rules & Regulations',
        href: app.route('rules'),
    }));
    items.add('anti-harassment-policy', LinkButton.component({
        parent: 'about',
        children: 'Anti-Harassment Policy',
        href: app.route('antih'),
    }));
    items.add('parents', LinkButton.component({
        parent: 'about',
        children: 'For Parents',
        href: app.route('parents'),
    }));
  // }

  console.log(items);

});

/**
 * Initialize custom pages with their routes
 */
app.initializers.add('shriker/shadowlack-guts', () => {
  app.routes.about = {path: '/about', component: AboutPage.component()};
  app.routes.rules = {path: '/rules', component: RulesPage.component()};
  app.routes.antih = {path: '/anti-harassment-policy', component: AntiHPage.component()};
  app.routes.parents = {path: '/parents', component: ParentsPage.component()};
});
