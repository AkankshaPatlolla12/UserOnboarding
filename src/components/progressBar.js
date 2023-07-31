import '../assets/css/progress-bar.css';

function ProgressBar({step}) {
  return (
    <ul id="progressbar">
        <li className={step > 0 ? 'active' : ''}></li>
        <li className={step > 1 ? 'active' : ''}></li>
        <li className={step > 2 ? 'active' : ''}></li>
        <li className={step > 3 ? 'active' : ''}></li>
    </ul>
  );
}

export default ProgressBar;
