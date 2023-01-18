import Header from './components/Header'
import NavContainer from './components/NavContainer'
import AnnouncementBar from './components/AnnouncementBar'
import Hero from './components/Hero'
import CollectionsTab from './components/CollectionsTab'
import ProductGallery from './components/ProductGallery'


function App() {
  return (
    <div className="App">
      <Header/>
      <NavContainer/>
      <AnnouncementBar/>
      <Hero/>
      <CollectionsTab/>
      <ProductGallery/>
    </div>
  );
}

export default App;
