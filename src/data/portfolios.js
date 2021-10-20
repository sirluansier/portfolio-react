import funnyflix from '../img/portImages/funnyflix.jpg';
import instaclone from '../img/portImages/instaclone.jpg';
import radio from '../img/portImages/radio.jpg';
import todo from '../img/portImages/todo-app.jpg';
import snake from '../img/portImages/snake.jpg';
import gamefinder from '../img/portImages/gamefinder.jpg';
// import bootcampux from '../img/portImages/bootcampux.jpg';

const portfolios = [
  {
    id: 1,
    category: 'CSS',
    image: funnyflix,
    link1: 'https://github.com/sirluansier/funnyflix',
    link2: 'https://www.behance.net/gallery/125784713/Netflix-Clone',
    title: 'Funnyflix',
    text: 'Netflix clone focused on comedy. Created with only HTML and CSS.'
  },
  {
    id: 2,
    category: 'React JS',
    image: todo,
    link1: 'https://github.com/sirluansier/todo-app',
    link2: 'https://www.behance.net/sirluansier',
    title: 'To do App',
    text: 'To do App created with ReactJS'
  },
  {
    id: 3,
    category: 'Javascript',
    image: snake,
    link1: 'https://github.com/sirluansier/snake-game-js',
    link2: 'https://www.behance.net/sirluansier',
    title: 'How To Animate In Maya',
    text: 'Number one Animation Application'
  },
  {
    id: 4,
    category: 'Angular JS',
    image: gamefinder,
    link1: 'https://github.com/sirluansier/gamefinder',
    link2: 'https://www.behance.net/gallery/125945891/Game-Finder-Angular',
    title: 'Game Finder',
    text: 'Created with AngularJS consuming API RAWG Videogames'
  },
  //   {
  //     id: 5,
  //     category: 'Figma',
  //     image: bootcampux,
  //     link1: 'https://www.google.com',
  //     link2: 'https://www.google.com',
  //     title: 'High Fidelity Prototype',
  //     text: 'App prototype created with Figma at an UX Design Bootcamp'
  //   },
  {
    id: 5,
    category: 'React JS',
    image: radio,
    link1: 'https://github.com/sirluansier/webradio-i90vacao',
    link2: 'https://www.behance.net/gallery/128455061/WebRadio-I90VACAO',
    title: 'WebRadio SPA',
    text: 'Created using different technologies/libraries such as React Icons, Styled-Components and more...'
  },
  {
    id: 6,
    category: 'CSS',
    image: instaclone,
    link1: 'https://github.com/sirluansier/clone-login-instagram',
    link2: 'https://www.behance.net/gallery/125937953/Instagram-Login-Page',
    title: 'Instagram Login Page Clone',
    text: 'Created using HTML and CSS'
  }
];

export default portfolios;
