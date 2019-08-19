import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/helpers/listItems';

export default class RatingPage extends Page {
  init() {
    super.init();
  }

  view() {

    app.history.push('rating', 'Universal RPG Rating');
    app.setTitle('Universal RPG Rating');

    return (
      <div className="Pages">
        {IndexPage.prototype.hero()}
        <div className="Pages-container container">
          <div className="sideNavContainer">
            <nav className="IndexPage-nav sideNav" config={IndexPage.prototype.affixSidebar}>
              <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
            </nav>
            <article className="Pages-content IndexPage-results sideNavOffset">

              <h1>Universal RPG Rating</h1>

              <h2>What is the Universal RPG Rating System?</h2>
              <p>The <a href="http://rpgrating.com/" rel="nofollow">Universal RPG Rating</a> system is a way of classifying and categorizing the content in online roleplaying games. It is an opt-in rating, meaning that every game owner who adds it is the one who rates their own content.</p>

              <h2>Shadowlack's Rating</h2>
              <p><img src="https://shadowlack.com/images/l3_s2_v2.gif" alt="Universal RPG Rating" width="88" height="31"/></p>
              <p><b>Language 3:</b> Objectionable and mature language is permitted.</p>

              <p><b>Sexual Content 2:</b> Sexual content is permitted. References and writing about genitalia and sex acts are permitted, but explicit detail is not. Fade to black, or mature tagging are recommended.</p>

              <p><b>Violence 2:</b> Graphic violence is permitted. Explicit description or in-game narration violence is allowed.</p>

              <h2>Our Interpretation</h2>
              <p>Shadowlack is a very non-restrictive game. Our players tend to be very mature, regardless of their actual age. As a result, our 3:2:2 rating is to be thought of as a <u>guideline</u> only. Players are allowed to create plots that are more explicit than the guideline &mdash; provided that they mark their threads as being "Mature."</p>

            </article>
          </div>
        </div>
      </div>
      );
  }
}
