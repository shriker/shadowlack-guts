import HeaderPrimary from 'flarum/components/HeaderPrimary';
import IndexPage from 'flarum/components/IndexPage';
import LinkButton from 'flarum/components/LinkButton';
import { extend } from 'flarum/extend';
import AboutPage from './components/AboutPage';
import AntiHPage from './components/AntiHPage';
import CodexGenName from './components/CodexGenName';
import CodexGenScenario from './components/CodexGenScenario';
import ShadowIndexPage from './components/extShadowIndexPage';
import LegalPage from './components/LegalPage';
import ParentsPage from './components/ParentsPage';
import PrivacyPage from './components/PrivacyPage';
import RatingPage from './components/RatingPage';
import RulesPage from './components/RulesPage';
import StaffHandbookPage from './components/StaffHandbookPage';

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
    items.add('staff-handbook', LinkButton.component({
        parent: 'about',
        children: 'Staff Handbook',
        href: app.route('staff'),
    }));
  // }

});

/**
 * Initialize custom pages with their routes
 */
app.initializers.add('shriker/shadowlack-guts', () => {
  ShadowIndexPage();
  app.routes.about = {path: '/about', component: AboutPage.component()};
  app.routes.rules = {path: '/rules', component: RulesPage.component()};
  app.routes.antih = {path: '/anti-harassment-policy', component: AntiHPage.component()};
  app.routes.parents = {path: '/parents', component: ParentsPage.component()};
  app.routes.rating = {path: '/rating', component: RatingPage.component()};
  app.routes.staff = {path: '/staff-handbook', component: StaffHandbookPage.component()};
  app.routes.privacy = {path: '/privacy', component: PrivacyPage.component()};
  app.routes.legal = {path: '/legal', component: LegalPage.component()};

  app.routes.codexscenario = {path: '/codex/scenario', component: CodexGenScenario.component()};
  app.routes.codexname = {path: '/codex/random-name-generator', component: CodexGenName.component()};
});
