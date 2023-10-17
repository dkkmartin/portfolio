import './index.css';
import './scripts/motion'
import './scripts/anime'

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}