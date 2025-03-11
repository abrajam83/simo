import { useState, useEffect} from 'react'
import { logo } from "../assets";

const Navbar = () => {

  const[isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

// Detectar cambio de tamaño de la ventana y cerrar el menú si se supera el tamaño del breakpoint.
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768 && isOpen) {
      setIsOpen(false); // Cerrar el menú si la pantalla es mayor a 768px
    }
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, [isOpen]); // Solo ejecuta el efecto si isOpen cambia

  return (
    <div className="w-full">
    <nav className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between font-regular  text-base text-grayDarkSimo py-7 bg-white px-12 md:px-52'>


          <img src={logo} alt="simo" className='w-[124px] h-[36px] z-10'/>

          <div className="flex flex-1 justify-end">

            <div className='hidden font-inter sm:flex mr-8 md:mr-16'>
              <div className="group">
                <a href="#">Nosotros</a>
                <div className="mx-2 group-hover:border-b group-hover:border-grayDarkSimo"></div>
              </div>
            </div>

            <div className='hidden font-inter sm:flex mr-8 md:mr-16'>
              <div className="group">
                <a href="#">Servicios</a>
                <div className="mx-2 group-hover:border-b group-hover:border-grayDarkSimo"></div>
              </div>
            </div>

            <div className='hidden  font-inter sm:flex mr-8 md:mr-16'>
              <div className="group">
                <a href="#">Estudios</a>
                <div className="mx-2 group-hover:border-b group-hover:border-grayDarkSimo"></div>
              </div>
            </div>

            <div className='hidden  font-inter sm:flex '>
              <div className="group">
                <a href="#">Contacto</a>
                <div className="mx-2 group-hover:border-b group-hover:border-grayDarkSimo"></div>
              </div>
            </div>
          </div>


{/* Menú desplegable que se muestra/oculta basado en el estado isOpen */}
<div id="menu" 
className={`absolute top-0 bottom-0 left-0 flex flex-col w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase  transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${isOpen ? 'bg-black/95' : 'bg-transparent'}`} style={{ zIndex: 40 }} >
  <a href="#" className="hover:text-slate-400">Nosotros</a>
  <a href="#" className="hover:text-slate-400">Servicios</a>
  <a href="#" className="hover:text-slate-400">Estudios</a>
  <a href="#" className="hover:text-slate-400">Contacto</a>
</div>

{/* Botón de hamburguesa */}
    <button id="menu-btn"
            type="button" 
            onClick={handleToggle}
            className={`z-50 block sm:hidden focus:outline-none hamburguer ${isOpen ? 'open' : ''} `}>
            <span className="span hamburguer-top"></span>
            <span className="span hamburguer-middle"></span>
            <span className="span hamburguer-bottom"></span>
    </button>

    

    </nav>
    </div>
  )
}

export default Navbar