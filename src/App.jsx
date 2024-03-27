import './App.scss';

import Head from './components/Head/Head';
import Top from './components/Top/Top';
import Advantages from './components/Advantages/Advantages';
import Diagnostics from './components/Diagnostics/Diagnostics';
import Cost from './components/Cost/Cost';
import Team from './components/Team/Team';
import Grade from './components/Grade/Grade';
import FAQ from './components/FAQ/FAQ';
import CallTechician from './components/CallTechician/CallTechician';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className="wrapper">
        <Head />
        <Top />
        <Advantages />
        <Diagnostics />
        <Cost />
        <Team />
        <Grade />
        <FAQ />
        <CallTechician />
        <Footer />
      </div>
    </>
  )
}

export default App
