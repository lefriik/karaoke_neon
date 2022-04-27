import Formulario from "./Formulario"
import Alerta from "./Alerta"
import Letra from "./Letra"
import useLetras from "../hooks/useLetras"

const AppLetras = () => {

  const { alerta, letra, cargando } = useLetras()

  return (
    <>
        <header>
           Letras de Canciones
        </header>

        <Formulario />

        <main>
            { alerta ? <Alerta>{alerta}</Alerta> : 
              letra ? <Letra /> : 
              cargando ? <p className="text-center">Cargando...</p> :
              <p className="text-center"> Busca Letras de tus artistas favoritos </p> 
            }
        </main>
    
    
    </>
  )
}

export default AppLetras