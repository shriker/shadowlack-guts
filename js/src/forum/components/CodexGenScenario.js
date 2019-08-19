import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/helpers/listItems';

export default class AboutPage extends Page {
  init() {
    super.init();
  }

  view() {

    app.history.push('codex/scenario', 'Plot Scenario Generator');
    app.setTitle('Plot Scenario Generator');
    $('meta[name=description]').attr('content', 'Want to write but don\'t know where to start?');

    return (
      <div className="Pages">
        {IndexPage.prototype.hero()}
        <div className="Pages-container container">
          <div className="sideNavContainer">
            <nav className="IndexPage-nav sideNav" config={IndexPage.prototype.affixSidebar}>
            </nav>
            <article className="Pages-content IndexPage-results sideNavOffset">

              <h1>Plot Scenario Generator</h1>

              <p>The Scenario Generator will generate Shadowlack-themed plot scenarios for your use and reading pleasure. It exists to act as a writing prompt for starting new threads (and to make you laugh or cry). Simply refresh the page in order to get a new scenario.</p>


            </article>
          </div>
        </div>
      </div>
      );
  }
}
