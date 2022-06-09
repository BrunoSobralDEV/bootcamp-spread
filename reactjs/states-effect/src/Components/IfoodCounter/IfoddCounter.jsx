import { useEffect, useState, useContext } from "react"
import { ThemeContext } from "../../Theme";
import '../IfoodCounter/IfoodCounter.css'

export default function IfoddCounter() {
  const [value, setValue] = useState(1);
  const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");

  useEffect(() => {
    
  }, [])

  function down() {
    if (value <=1) {
      // mudar o css
      setButtonStyle('counter-button-minus-desactive')
    }
    if (value > 0) {
      setValue(value-1)  
    }
  }

  function up() {
    setValue(value+1)  
    setButtonStyle('counter-button-minus-active')
  }

  const theme = useContext(ThemeContext)

  return (
    <div className="countex-wrapper">
      <button 
        onClick={down} 
        className={buttonStyle}
      >
        -
      </button>

      <p>{value}</p>

      <button onClick={up} className="counter-button-plus-active">
        +
      </button>

      <button 
        style={{ background: theme.background, color: theme.color, marginLeft: '25px' }} 
        id=""
      >
        12,00
      </button>
    </div>
  )
}
