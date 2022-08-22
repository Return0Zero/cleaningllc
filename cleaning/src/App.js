import './App.css';
import Navbar from './containers/navbar/navbar';
import Header from './containers/header/header';
import Add from './containers/add/add';
import About from './containers/about/about';
import Services from './containers/services/services';
import SecondAdd from './containers/second-add/second-add';
import ServiceAreas from './containers/service-areas/service-areas';
import Contact from './containers/contact/contact';
import Form from './components/form/form'
import Footer from './containers/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Add></Add>
      <About></About>
      <Services></Services>
      <SecondAdd></SecondAdd>
      <ServiceAreas></ServiceAreas>
      <Contact></Contact>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}

export default App;
