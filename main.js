import './style.css'
import breakingbadlogo from './logo.png'
import { BreakingbadApp } from './src/breakingbad/breakingbad-app';

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${breakingbadlogo}" class="logo vanilla" alt="JavaScript logo" />
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">
      
    </div>
  </div>
`;

const element = document.querySelector('.card');
BreakingbadApp(element);