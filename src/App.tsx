
import './App.css'

function App() {
let celsius =100
let farenheit=0
let kelvin =0
  function convertFarenheit(valor){
    return (valor*9/5)+32

  }
  function convertKelvin(valor){
    return valor+273.15
  }

  return (
    <div>
    <h1>Conversiones de Temperatura</h1>
    <ol>
      <li>La temperatura en Grados Celcius es: {celsius}</li>
      <li>La temperatura en Farenheith es: {convertFarenheit(celsius)}</li>
      <li>La temperatura en Kelvin es: {convertKelvin(celsius)}</li>

    </ol>
    </div>


  )
}

export default App
