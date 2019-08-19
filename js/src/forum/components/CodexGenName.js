import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/helpers/listItems';
import SelectDropdown from 'flarum/common/components/SelectDropdown';
import Button from 'flarum/common/components/Button';

export default class CodexGenName extends Page {
  init() {
    super.init();
  }

  view() {

    app.history.push('codex/random-name-generator', 'Random Name Generator');
    app.setTitle('Random Name Generator');
    $('meta[name=description]').attr('content', 'Feel like leaving your character\'s first or last name up to a bit of chance?');

    const nameList = this.generateNames(15);

    return (
      <div className="Pages">
        {IndexPage.prototype.hero()}
        <div className="Pages-container container">
          <div className="sideNavContainer">
            <nav className="IndexPage-nav sideNav" config=  {IndexPage.prototype.affixSidebar}>
            </nav>
            <article className="IndexPage-results sideNavOffset">

              <h1>Random Name Generator</h1>

              <p>Create a new set of randomly generated names that are suitable for Shadowlack.</p>

              <ol>
                {listItems(nameList)}
              </ol>

            </article>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Generate a Shadowlack-appropriate random name
   *
   * @param {number} [numNames=10]
   * @returns
   * @memberof CodexGenName
   */
  generateNames(numNames = 10) {
    console.log('hi');
    const prefixArray = ['Aana', 'Aes', 'And', 'Ara', 'Ari', 'Aro', 'Ata', 'Ate', 'Ati', 'Ae', 'Ai', 'Ay', 'Ao', 'Au', 'Ban', 'Be', 'Bea', 'Bel', 'Beo', 'Bre', 'Bri', 'Bo', 'Be', 'Ba', 'By', 'Bi', 'Bu', 'Cas', 'Cal', 'Ces', 'Ce', 'Cin', 'Ces', 'Ci', 'Cre', 'Cro', 'Cay', 'Cim', 'Cyt', 'Cal', 'Can', 'Cano', 'Caul', 'Ca', 'Ci', 'Cy', 'Co', 'Cu', 'Dun', 'Der', 'Dar', 'Dal', 'Deo', 'Dae', 'De', 'Did', 'Dyo', 'Dur', 'Da', 'Di', 'De', 'Do', 'Du', 'Dzy', 'Et', 'Ele', 'Eme', 'Ef', 'Ebo', 'Eki', 'Ela', 'Eas', 'Ea', 'Ei', 'Ey', 'Eu', 'Far', 'Fra', 'Fe', 'Fea', 'Fal', 'Fan', 'Fen', 'Fry', 'Fly', 'For', 'Fo', 'Fym', 'Fi', 'Fo', 'Fu', 'Fa', 'Gi', 'Gir', 'Gal', 'Gen', 'Gri', 'Gra', 'Gur', 'Gon', 'Gyg', 'Gem', 'Gim', 'Ge', 'Ga', 'Gy', 'Go', 'Gu', 'Hi', 'Hyt', 'Ho', 'Hel', 'Hyl', 'Hen', 'Hyr', 'Hom', 'Hay', 'Hur', 'He', 'Ha', 'Hy', 'Hu', 'Isy', 'Ina', 'Ira', 'Imp', 'Ila', 'Ita', 'Iso', 'Ir', 'Ia', 'Ie', 'Iy', 'Io', 'Iu', 'Ii', 'Jal', 'Jes', 'Joc', 'Ja', 'Jot', 'Jen', 'Jur', 'Jyl', 'Ji', 'Je', 'Jo', 'Jy', 'Kal', 'Kar', 'Kyl', 'Kry', 'Kim', 'Ky', 'Ki', 'Kan', 'Kor', 'Ken', 'Kyr', 'Ke', 'Ka', 'Ko', 'Lan', 'Li', 'Lis', 'Lia', 'Lam', 'Lan', 'Lor', 'Lic', 'Lin', 'Lar', 'Le', 'Ly', 'Li', 'Lo', 'Lu', 'Me', 'Ma', 'Mo', 'Mi', 'My', 'Mar', 'Meth', 'Mel', 'Mal', 'Mars', 'Myc', 'Mir', 'Mua', 'Mech', 'Ne', 'Ni', 'Na', 'Ny', 'No', 'Nor', 'Neo', 'Naru', 'Nay', 'Nel', 'Nem', 'Nu', 'Nat', 'Oa', 'Ou', 'Ol', 'Ome', 'Orl', 'Oro', 'Oth', 'Om', 'Os', 'Oja', 'Oni', 'Per', 'Pal', 'Pa', 'Pe', 'Pi', 'Po', 'Pu', 'Py', 'Pip', 'Pan', 'Pyr', 'Ple', 'Que', 'Qua', 'Qui', 'Quo', 'Qu', 'Re', 'Ra', 'Ri', 'Ro', 'RuRy', 'Ral', 'Ryth', 'Ram', 'Rez', 'Reg', 'Ragn', 'Ryn', 'Rya', 'Rel', 'Rim', 'Sa', 'Se', 'Si', 'So', 'Su', 'Sy', 'Sest', 'Sal', 'Sh', 'Shim', 'Shin', 'Sek', 'Sty', 'Sta', 'Sz', 'Sor', 'Sol', 'Sam', 'Scy', 'Sw', 'Sv', 'Sm', 'Ta', 'Te', 'Ti', 'To', 'Tu', 'Ter', 'Tre', 'Th', 'Than', 'Tyr', 'Til', 'Tel', 'Tek', 'Tus', 'Ts', 'Tri', 'Tys', 'Ten', 'Teg', 'Uva', 'Uri', 'Ual', 'Ula', 'Uo', 'Ua', 'Ue', 'Uy', 'Uly', 'Ura', 'Utu', 'Ur', 'Um', 'Un', 'Val', 'Va', 'Ve', 'Vo', 'Vy', 'Vi', 'Vit', 'Vr', 'Vor', 'Vla', 'Ves', 'Vir', 'We', 'Wo', 'Wy', 'Wys', 'Wis', 'War', 'Way', 'Wen', 'We', 'Wi', 'Wa', 'Xa', 'Xe', 'Xi', 'Xo', 'Xy', 'Xu', 'Xan', 'Xit', 'Ye', 'Ya', 'Yi', 'Yo', 'Yu', 'Yur', 'Yd', 'Ysa', 'Yel', 'Yan', 'Yygr', 'Ze', 'Za', 'Zi', 'Zo', 'Zu', 'Zy', 'Zan', 'Zor', 'Zag', 'Zai', 'Zro'];

    const suffixArray = ['rok', 'al', 'e', 'ii', 'ia', 'uin', 'ar', 'or', 'ir', 'ly', 'end', 'am', 'yam', 'arn', 'r', 's', 't', 'fel', 'rs', 'm', 'em', 'am', 'om', 'ard', 'lis', 'tine', 'dine', 'oa', 'um', 'ar', 'en', 'ord', 'orm', 'fin', 'red', 'kel', 'in', 'im', 'is', 'mis', 'al', 'gal', 'gol', 'gen', 'gim', 'or', 'ln', 'lm', 'elm', 'del', 'dal', 'thor', 'tor', 'lor', 'gor', 'ulie', 'ol', 'zin', 'zyn', 'lop'];

    const nameList = [];

    for (let i = 0; i < numNames; i++) {
      var randPrefix = prefixArray[Math.floor(Math.random() * prefixArray.length)];
      var randSuffix = suffixArray[Math.floor(Math.random() * suffixArray.length)];

      nameList.push(randPrefix + randSuffix);
    }

    return nameList;
  }

}
