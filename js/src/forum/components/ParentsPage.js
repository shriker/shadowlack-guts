import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/helpers/listItems';

export default class ParentsPage extends Page {
  init() {
    super.init();
  }

  view() {

    app.history.push('parents', 'For Parents');
    app.setTitle('For Parents');
    $('meta[name=description]').attr('content', 'A Message for Parents, Guardians, and Teachers.');

    return (
      <div className="Pages">
        {IndexPage.prototype.hero()}
        <div className="Pages-container container">
          <div className="sideNavContainer">
            <nav className="IndexPage-nav sideNav" config={IndexPage.prototype.affixSidebar}>
              <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
            </nav>
            <article className="Pages-content IndexPage-results sideNavOffset">
              <h1>For Parents</h1>
              <p>So you’ve caught your child or student on Shadowlack? Don’t panic! Hear us out first.</p>

              <p>Shadowlack is a non-commercial site dedicated to the following core principles:</p>

              <h2>Literary Improvement</h2>
              <p>Shadowlack is a creative writing game. Our primary means of “game-play” is through the written word. As a result, many of our players experience significant improvement in regards to their writing skills and typing abilities while actively participating on the site.</p>

              <h2>Creativity</h2>
              <p>Running alongside the writing aspect of the site is a full-fledged World Building project. Players are not only encouraged to create well-thought-out characters, they are also invited to help contribute and build our ever-expanding fantasy universe. This collaborative environment encourages player’s to work together and create a place that is uniquely for themselves.</p>

              <h2>Community</h2>
              <p>To many people, Shadowlack is an “internet home.” Players have formed significant bonds throughout the years during the course of regular game-play. It has been a safe-haven for players worldwide for over a decade (since 2002!). Shadowlack strives to maintain this uniquely open and friendly atmosphere.</p>

              <h2>Internationalism</h2>
              <p>While Shadowlack is an English writing site, we welcome players from all over the world. We have players from France, Canada, India, United States, United Kingdom, Australia, and Germany, to name a small handful. A textual based game is a great way to learn, practise and improve upon English as a second language.</p>

              <p>Shadowlack is recommended for individuals who are thirteen years of age and older. Shadowlack often contains mature themes, discussions, and language. We cannot be held accountable for language or another player’s actions that some younger players may find offensive. As the child’s legal guardian, it is up to you to determine whether or not this site is suitable for your child.</p>

              <p>If you find your child (who is under-age) has become a member without your permission, please feel free to contact <a href="mailto:graders@shadowlack.com">graders@shadowlack.com</a> with your child's account details and the account may be frozen upon request.</p>

              <h2>Privacy</h2>
              <p>While Shadowlack will not transmit any of your child’s personal data
              to third parties, as per our <a href="/privacy">Privacy Policy</a>, it is up to you to educate your
              child in regards to internet safety. Make sure that they know to not give out
              any personal information such as their mailing address, phone number, school, or even their
              real names to strangers. It is a very common and highly recommended
              practise on Shadowlack to have an alias (screen name) or nickname to be
              used instead of the player’s real name.</p>

              <p>If you have any other questions or concerns please feel free to contact
              us at <a href="mailto:graders@shadowlack.com">graders@shadowlack.com</a> and we’ll try to get back to you in a timely
              manner!</p>
            </article>
          </div>
        </div>
      </div>
      );
  }
}
