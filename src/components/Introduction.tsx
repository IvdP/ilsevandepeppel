import m from 'mithril';
import "../styles/main.scss"

const Introduction: m.Component = {
  view: () => (
    <div id='introduction'>
      <div class='empty'></div>
      <div class='intro-image'>
        <img src='src\media\ilse-image.jpg' alt='ilse' />
      </div>
      <div class='intro-text'>
        <h1>Hi! Ik ben Ilse</h1>
        <h2>Studente webdevelopment aan de HAN</h2>
      </div>
      <div class='empty'></div>
    </div>
  ),
};

export default Introduction;