import bg from "./assets/bg.jpg"
import CurrentBox from "./components/CurrentBox"

function App() {

  return (
    <div style={{ backgroundImage: `url(${bg})`}} className=" w-full h-screen bg-cover bg-center flex justify-center items-center" >
    <CurrentBox/>
    </div>
  )
}

export default App
