import '../css/default.css';
import '../css/app.css';

console.log('Hello World from your main file!');

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log('HMR');
  });
}
