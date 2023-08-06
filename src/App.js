import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header"
import About from './components/about/About';
import Services from './components/services/Services';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';
import { Container  } from 'react-bootstrap';
import Video from './components/video/Video';

function App() {
  const service = [
     {subhead: "BMW", head: 'Digital\nShowroom', desc: "#AGMC #BMW #Mini #E-commerce #oOrjit", image: "bmw",},
     {subhead: "Delmonte", head: "Delivered \nFresh",  desc: "#Delmonte #E-commerce #oOrjit", image: "delmonte",},
     {subhead: "NMC", head: "Healthcare \nDigitized", desc: "#NMC #Healthcare #ollco", image: "nmc",},
     {subhead: "Excellence Driving", head: "Learn Driving.\nThe Digital\nWay.", desc: "#Business Application #ERP #oOrjit #Odoo",image: "driving",}
];

const faqItems = [
  {title:"Possible to integrate existing DMS or CRM to Innovazia’s digital showroom platform?",
  content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
 },
  {title:"Do you provide dealership CRM as well? ", 
  content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},
]

  return (
    <div className="App">
<Header />
<About />
<Services data={service} />
<Faq faqItems={faqItems}/>
<Container>
  <Video />
  <Footer />
</Container>

    </div>
  );
}

export default App;
