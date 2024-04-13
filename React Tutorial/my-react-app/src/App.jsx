import Header  from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx";
function App() {
  return(
    // Enclose Within fragments because return statements can only accept one component
<>  
    <Header></Header>
    <Food></Food>
    <Footer></Footer>
    </>
  );
}


export default App
