import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/helpers/listItems';

export default class PrivacyPage extends Page {
  init() {
    super.init();
  }

  view() {

    app.history.push('privacy', 'Privacy Policy');
    app.setTitle('Privacy Policy');

    return (
      <div className="Pages">
        {IndexPage.prototype.hero()}
        <div className="Pages-container container">
          <div className="sideNavContainer">
            <nav className="IndexPage-nav sideNav" config={IndexPage.prototype.affixSidebar}>
              <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
            </nav>
            <article className="Pages-content IndexPage-results sideNavOffset">

              <h1>Privacy Policy</h1>
              <p>Shadowlack is a free, non-commercial, web site committed to providing an entertaining atmosphere recommended for persons aged thirteen and above.</p>

              <h2>The Information We Collect</h2>

              <ul>
                <li>Username</li>
                <li>Email Address</li>
                <li>Birth Date</li>
              </ul>

              <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.</p>
              <ul>
                <li>Internet Protocol (IP) address</li>
                <li>Geographical location</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referral source</li>
                <li>Length of visit, page views, website navigation and any other related browsing activity</li>
              </ul>

              <p>We collect Device Information using the following technologies:</p>
              <ul>
                <li><b>Cookies</b> are data files that are placed on your device or computer and often include an anonymous unique identifier.</li>
                <li><b>Log files</b> track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
                <li><b>Web beacons</b>, “tags,” and “pixels” are electronic files used to record information about how you browse the Site.</li>
              </ul>

              <h2>Information Usage</h2>
              <p>Shadowlack uses the information we collect for the following reasons:</p>
              <ul>
                <li>To honour our contractual commitments to you</li>
                <li>To log you into Shadowlack</li>
                <li>Providing a safe and enjoyable user experience</li>
                <li>Know the screen names (giving out of your “full real name” is discouraged) of our members to create a friendly atmosphere.</li>
                <li>Confirmation of email address for account validity, security alerts, and relevant user-specified communications</li>
                <li>Customer service</li>
                <li>Improving and optimizing Shadowlack's design, user experience, and placement of features</li>
                <li>Legal compliance</li>
              </ul>

              <h3>Data Processing</h3>
              <p>We are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States. The majority of your data is processed and kept in Canada. 🍁</p>

              <h2>Minors</h2>
              <p>Shadowlack is intended for users age 13 and over. We do not knowingly collect personal information from children under the age of 13. We are compliant with the <a href="http://www.coppa.org/comply.htm" rel="nofollow">Children's Online Privacy Protection Act</a> and the <a href="http://www.the-cma.org/?WCE=C=47|K=225849#11" rel="nofollow">Canadian Marketing Agency</a>. If we learn that we are engaged in that processing with such users, we will halt such processing and will take reasonable measures to promptly remove applicable information from our records.</p>

              <h2>Links to Other Sites</h2>
              <p>Shadowlack is not responsible for the content of external internet sites and privacy of any information which you provide whilst visiting such sites. You are advised to read the privacy policy of external sites before disclosing any personal information.</p>

              <h2>Your Data Rights and Choices</h2>

              <p>When using the Shadowlack site, you may choose to limit public viewing of applicable personal information through the settings located in the Privacy section of your account.</p>

              <p>Shadowlack will not sell, distribute or lease your personal information to third parties unless we have your explicit permission or are required by law to do so.</p>

              <p>You have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>

              <h3>Data Retention and Your Right to be Forgotten</h3>
              <p>We generally retain personal data for so long as it may be relevant to the purposes identified herein, or until you ask us to delete this information. To dispose of personal data, we may anonymize it, delete it or take other appropriate steps. Data may persist in copies made for backup and business continuity purposes for additional time.</p>

              <h2>Our cookie usage 🍪</h2>
              <p>This site uses cookies for numerous things, including:</p>
              <ul>
                <li>Registration and maintaining your preferences. This includes ensuring that you can stay logged in and keeping the site in the language or appearance that you requested.</li>
                <li>Analytics. This allows us to determine how people are using the site and improve it.</li>
                <li>Advertising cookies (possibly third-party). If this site displays advertising, cookies may be set by the advertisers to determine who has viewed an ad or similar things. These cookies may be set by third parties, in which case this site has no ability to read or write these cookies.</li>
              </ul>

              <h3>Standard cookies we set</h3>
              <p>
                These are the main cookies we set during normal operation of the Site:
              </p>
              <ul>
                <li>
                  <strong>flarum_session</strong>
                  <ul>
                    <li>Stores the current ID of your session.</li>
                  </ul>
                </li>
              </ul>

              <h2>Security</h2>
              <p>While we do our best and take reasonable steps to protect your personal information, we cannot guarantee the security of any information that you transmit to us and you are solely responsible for maintaining the secrecy of any passwords or other account information.</p>

              <h2>Changes to this Privacy Policy</h2>
              <p>We reserve the right to update or modify this Privacy Policy at any time and from time to time without prior notice. Please review this policy periodically, and especially before you provide any information.</p>

              <h3>Contact</h3>

              <p>If you have any site questions, please feel free to contact us.</p>

              <p><b>The Graders, Shadowlack Administration</b><br/>
              <a href="mailto:graders@shadowlack.com">graders@shadowlack.com</a></p>

              <p>Please read our <a href="/legal">Terms and Conditions</a> for more information regarding the use of this Site.</p>

              </article>
          </div>
        </div>
      </div>
      );
  }
}
