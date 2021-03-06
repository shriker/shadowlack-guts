import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/helpers/listItems';

export default class RulesPage extends Page {
  init() {
    super.init();
  }

  view() {

    app.history.push('rules', 'Rules & Regulations');
    app.setTitle('Rules & Regulations');

    return (
      <div className="Pages">
        {IndexPage.prototype.hero()}
        <div className="Pages-container container">
          <div className="sideNavContainer">
            <nav className="AboutPage-nav IndexPage-nav sideNav" config={IndexPage.prototype.affixSidebar}>
              <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
            </nav>
            <article className="Pages-content IndexPage-results sideNavOffset">

              <h1>Rules & Regulations</h1>

              <h2>Age</h2>
              <p>It is <em>highly recommended</em> that you are thirteen years old or older to join this site, or have your parent's consent. Are you under thirteen and still wish to join? Please have your parents read our <a href="/parents">Message for Parents and Teachers</a> and see what they have to say.</p>

              <h2>Behaviour</h2>
              <p>Any kind of disrespect or harassment in general is unwelcome here. Whether it be directed toward one of your peers or the game administration, through the <em>Forum</em>, <em>Chat Room</em> or through <em>PM</em> (Private Messages on the site). Out of character fights and quarrels will not be permitted on the boards. So if you have a problem with someone, please contact them outside of Shadowlack. Please read our <a href="/anti-harassment-policy">Anti-Harassment Policy</a> for more information.</p>

              <h2>Violence &amp; Language</h2>
              <p>Swearing is allowed to a certain extent in order to emphasize points within roleplaying. There are many other intelligent ways to express anger and surprise that do not involve spouting off obscenities. Posts that include extreme violence, gore or language must be marked with an appropriate Thread Rating. Please see the <a href="/rating">Universal RPG Rating</a> page for more details.</p>

              <h2>Accounts Per Person</h2>
              <p>You are allowed to have one account per person. However, you may create multiple characters on that account.</p>

              <h2>Character Naming Policy</h2>
              <p>Types of names that are not acceptable and will result in your character being deleted:</p>
              <ul>
                  <li>Names that are not properly capitalized, contain netspeak, chatspeak, strange symbols, or phrases. (bess, 1337 Dr4gon, Haywood Jablome, etc.)</li>
                  <li>Names that contain profanity, something religious, or may otherwise offend or insult other members.</li>
                  <li>Copyright or Trademarked names of products, services, characters, etc. (McDonalds, Crest, Harry Potter, Inu-Yasha, etc.)</li>
                  <li>Names of celebrities, or famous people, past or present.</li>
                  <li>Any other name that is deemed inappropriate by Shadowlack's Staff.</li>
              </ul>

              <h2>Powerplaying &amp; Invincibility</h2>
              <p>Also known as, God-Moding, Auto-Hitting, Emoding, &amp; Twinking. We'll have none of it! Your character can be killed, hurt, or even maimed badly for life. No character may be perfect or invincible. Try to roleplay as realistically as possible. You do not control the fate of other people's characters. Only you – and the game administration when it comes to extremes &#8211; can say what happens to your character. Meta-playing/Omniscience (your character having knowledge about another character that you as a roleplayer gained OOCly) is also not allowed.</p>

              <h2>Robots &amp; Cyborgs</h2>

              <p>You may not play or create a character that is a robot. This means that you may not play as a robotic character that is fully sentient, whether this be via artificial intelligence, or a machine that has been infused with a soul.</p>

              <p>Cyborg characters, eg, characters with mechanical limbs, prosthetics, and the like, are allowed to some extent. However, if it is felt that your character is too extreme or twinkish (invincible; flawless; cannot be taken out by a single shotgun blast to the chest), armed with projectile weapons, or more weaponry than you can shake a stick at, your character will be rejected. Cyborgs that are allegedly created by the Ramathian military, other militant organization or cyborgs whose sole purpose in life is to <em>destroy things</em> are not allowed.</p>

              <h2>Magic</h2>
              <p>Hell yes. Shadowlack is based upon a futuristic fantasy society, so of course magic is allowed. If you're not sure if your certain type of magic is acceptable, contact the game owner. The source of all magic on Shadowlack is Fronima. It has a very mysterious nature but can be tamed and channeled through determination. To learn more about the nature of magic on Shadowlack, please read the <a href="/wiki/Laws_of_Magic">Laws of Magic</a> page.</p>

              <h2>Time Traveling</h2>
              <p>Characters cannot time travel. There are no time machines, devices, etc.</p>

              <h2>Post Length</h2>
              <p>There is no posting minimum or maximum in regards to what length of your posts should be.</p>

              <h2>Post Format &amp; Timestamping</h2>
              <p>Please include the character's name(s) that you are roleplaying either in the subject of the post or at the very beginning of the body. All threads should include a <a href="/wiki/New_Player_Guide">Timestamp</a> as well. Timestamping tells when your post takes place during the Ramathian timeline.</p>
              <p>All posts should be written in <em>Third Person, Past Tense</em> (She jump<em>ed</em>).<br />
              <small>Writing in first person is also allowed, but is not recommended.</small></p>

              <table border="0" class="striped">
                  <thead>
                  <tr>
                      <th style="width: 180px; text-align: center;">Type</th>
                      <th style="text-align: center;">Indicators</th>
                  </tr>
                  </thead>
                  <tbody>

                  <tr>
                      <td style="text-align: center;"><strong>Spoken Speech</strong></td>
                      <td>
                          <p>Spoken speech should be distinguishable from action text. To indicate spoken speech, you may:</p>
                          <ul>
                              <li>“Put it into quotation marks.”</li>
                              <li><strong>Bold it.</strong></li>
                              <li>Highlight it with a <span class="highlight"><strong>different colour.</strong></span></li>
                          </ul>
                      </td>
                  </tr>
                  <tr>
                      <td style="text-align: center;"><strong>Personal Thoughts</strong></td>
                      <td><p><em>All thoughts should be written in italics.</em></p></td>
                  </tr>
                  <tr>
                      <td style="text-align: center;"><strong>Telepathy (Thoughtspeech)</strong></td>
                      <td>
                          <p>You may use just about any indicator in order to designate text as telepathy. Telepathy may also be expressed in italics as long as it is accompanied by opening and closing indicators.</p>
                          <ul>
                              <li>~ Fusce tempor, turpis at accumsan. ~</li>
                              <li>‹ Fusce tempor, turpis at accumsan. ›</li>
                              <li>&laquo; Fusce tempor, turpis at accumsan. &raquo;</li>
                          </ul>
                      </td>
                  </tr>
                  <tr>
                      <td style="text-align: center;"><strong>Actions</strong></td>
                      <td><p>All character actions should be written without the use of asterisks (*) or any other action indicators.</p></td>
                  </tr>
                  </tbody>
              </table>
              <p>Please refer to our <a href="/wiki/Roleplaying_Etiquette">Roleplaying Etiquette</a> for more information about posting In Character.</p>

              <h2>Copyright</h2>
              <p>If you really like one of the ideas or something else that you see here and wish to use it, please contact us. We would like to keep Shadowlack and all of it's related characters, ideas, and indicia to just this site. Those found breaking this rule will be dealt with.</p>

              <hr />

              <p>Failure to comply to these rules and regulations may result in <strong>a)</strong> a warning, <strong>b)</strong> temporary account freezing or <strong>c)</strong> permanent banishment from the game.</p>

              </article>
          </div>
        </div>
      </div>
      );
  }
}
