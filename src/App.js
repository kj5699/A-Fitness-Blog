import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutUs from './containers/AboutUs/AboutUs';
import ContactUs from './containers/Contact/Contact';
import Home from './containers/Home/Home';
import Post from './containers/Post/Post';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      
        <Route path='/about-us' exact component={AboutUs} />
        <Route path='/contact-us' exact component={ContactUs} />
        <Route path='/post/:postid' exact component={Post} /> 
        <Route path='/' exact component={Home} />
      <Footer />
      
      
      
    </div>
  );
}

export default App;
