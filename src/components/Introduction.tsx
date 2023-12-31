import m from 'mithril';
import "../styles/main.scss"
import { MithrilTsxComponent } from '../../node_modules/mithril-tsx-component/index';

export class Introduction extends MithrilTsxComponent<{}> {
  view() {
    return <div>
      <div id='introduction'>
        <div class='empty'></div>
        <div class='intro-image'>
          <img src='src\media\ilse-image.jpg' alt='ilse' />
        </div>
        <div class='intro-text'>
          <h1>Hi! Ik ben Ilse</h1>
          <h2>Student webdevelopment aan de HAN</h2>
        </div>
        <div class='empty'></div>
      </div>
      <div class='chev-down'>
        <a href='#about'>
          <i class="fa fa-chevron-down" aria-hidden="true" />
        </a>
      </div>
    </div>
  }
}