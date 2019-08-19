import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/helpers/listItems';

export default class AboutPage extends Page {
  init() {
    super.init();
  }

  view() {

    app.history.push('about', 'About');
    app.setTitle('About');

    return (
      <div className="Pages">
        {IndexPage.prototype.hero()}
        <div className="Pages-container container">
          <div className="sideNavContainer">
            <nav className="AboutPage-nav IndexPage-nav sideNav" config={IndexPage.prototype.affixSidebar}>
              <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
            </nav>
            <article className="Pages-content IndexPage-results sideNavOffset">

              <h1>About</h1>

              <img src="https://shadowlack.com/images/bunglebearz-cayson.png" alt="Cayson" width="250" style="float:right;margin: 0 0 16px 16px" />

              <p>
                Shadowlack is a free dice-less <b>Play-by-Post</b> game as well an ongoing <b>World-Building Project</b>. When you join, you become an author in our collaborative story. You get to make up your own characters, select their race, trades, and write up descriptions for them. Then you start writing and other authors will join in, adding their own characters and help in developing the plot. Eventually you have a small piece of a story. Shadowlack is a collection of many story pieces written by many authors who have made up many characters. In short, Shadowlack is simply an continuous collaborative story.
              </p>

              <h2>Genre</h2>
              <p>
                Shadowlack is wedged tightly between two genres: low Science Fiction and Fantasy, making it a <b>Science Fantasy</b> game. Science Fiction because it takes place after the destruction of what we know of as Earth, and on a completely different planet called Ramath-lehi. Humans no longer exist and the inhabitants of Ramath-lehi are capable of faster-than-light space travel. The Fantasy element is present in the underlying form of magic, which draws itself from what Ramathians refer to as Fronima (the Spirit World).
              </p>

              <h2>What is Play-by-Post Roleplaying?</h2>
              <p>
                Play-by-Post (PbP) roleplaying is just one of many methods of online roleplaying. Play-by-Post roleplaying is traditionally done using a forum or a bulletin board as the main medium of game-play. Players will create threads with their character, and then other players will reply to that thread with responses from the perspectives of their characters. In essence, it is a collaborative story writing endeavour.
              </p>

              <h2>The Planet Ramath-lehi</h2>
              <p>
                Shadowlack is an original fictional world setting (geofiction) that revolves around the planet Ramath-lehi. Through the regular course of game-play, players are encouraged to help build and expand upon the world alongside developing their original characters.
              </p>

              <p>
                Ramath-lehi is a magical and fantastical world. It runs directly alongside an invisible spirit world called Fronima. Fronima is the primary source of all magic on Ramath-lehi. Nearly all of Ramath-lehi's advanced technology uses Fronima (known as "magicka" when being used as a power source) to some extent. Fronima is also where the souls of Ramathians go when they die, as well as the place that some inhabitants visit during their dreams when the barrier between the two dimensions is at its thinnest.
              </p>

              <p>
                The most dominant beings on the planet Ramath-lehi are a race called the <a href="/wiki/Pendragon">Pendragons</a>. While the Ramathians are capable of faster-than-light travel, they prefer sticking to their own solar system where the link to Fronima is the strongest. As a result, trade between neighboring alien races and travel is limited.
              </p>

              <h2>LGBTQ+ Inclusive Safer Space</h2>
              <p>
                Shadowlack has a proven track record of being a safer space for LGBTQ+ individuals. This is one of our core values. We also have an <a href="/anti-harassment-policy/">Anti-Harassment Policy</a> that we strictly follow and enforce.
              </p>

              <h2>Interested in Joining?</h2>
              <p>
                Has Shadowlack piqued your interest? If not, that&#8217;s okay. Text-based games aren&#8217;t everyone&#8217;s cup of tea, and it is a bit of a niche market. If you are interested in joining however, I&#8217;d like to direct your attention to our <a href="/wiki/New_Player_Guide">New Player Guide</a>. They have been constructed to assist newcomers make their transition into our world. If you have any questions, please do not hesitate to ask them at the <a href="/t/hatchlings">Hatchling Central</a> board. Just be sure to check the <a href="/faq/">FAQ Database</a> to see if your question has already been answered.
              </p>

              <h2>We Welcome Lurkers</h2>
              <p>
                Perhaps you don&#8217;t have time to roleplay. Perhaps you simply like to read.
                Or perhaps you just wish to learn more about Shadowlack and its inhabitants before you go ahead and create a character to throw into the fray. Whatever your reasoning, Shadowlack has a designated <em>Lurker</em> member group. Those in the Lurker member group are granted the privilege to post in all of the Out of Character sections on our forums. You can then contribute to Out of Character discussions and matters that relate to game development&#8230; or just lurk.
              </p>

              </article>
          </div>
        </div>
      </div>
      );
  }
}
