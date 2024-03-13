import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Empresa.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/equipo">Equipo</Link></li>
        <li><Link to="/contacto">Contáctanos</Link></li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <h1>Bienvenido a la Empresa XYZ</h1>
      <p>Somos líderes en desarrollo de software.</p>
    </header>
  );
}

function Servicios() {
  const servicios = ['Desarrollo web', 'Desarrollo móvil', 'Consultoría tecnológica'];

  return (
    <section>
      <h2>Nuestros Servicios</h2>
      <ul>
        {servicios.map((servicio, index) => (
          <li key={index}>{servicio}</li>
        ))}
      </ul>
    </section>
  );
}

function Equipo() {
  const equipo = [
    { 
      nombre: 'Fabricio Rendon',
      rol: 'Desarrollador Frontend',
      perfil: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lorem eros.',
      imagen: 'https://via.placeholder.com/150', // URL de la imagen del desarrollador
      linkedin: 'https://www.linkedin.com/in/johndoe',
      whatsapp: '123456789',
      correo: 'john.doe@example.com',
      telefono: '123-456-7890'
    },
    { 
      nombre: 'Javier Ali Tejerina',
      rol: 'Desarrollador de Frontend',
      perfil: 'Vivamus nec velit ac ipsum aliquet venenatis nec vel magna.',
      imagen: 'https://via.placeholder.com/150', // URL de la imagen del desarrollador
      linkedin: 'https://www.linkedin.com/in/janesmith',
      whatsapp: '987654321',
      correo: 'jane.smith@example.com',
      telefono: '987-654-3210'
    },
    { 
      nombre: 'Sergio',
      rol: 'Desarrollador Backend',
      perfil: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      imagen: 'https://via.placeholder.com/150', // URL de la imagen del desarrollador
      linkedin: 'https://www.linkedin.com/in/davidbrown',
      whatsapp: '456789123',
      correo: 'david.brown@example.com',
      telefono: '456-789-1230'
    },
    { 
      nombre: 'Wilson',
      rol: 'Desarrollador Backend',
      perfil: 'Integer vulputate, nisl sed tempus vulputate, ligula turpis consequat magna, id auctor lorem libero at nunc.',
      imagen: 'https://via.placeholder.com/150', // URL de la imagen del desarrollador
      linkedin: 'https://www.linkedin.com/in/mariagarcia',
      whatsapp: '789123456',
      correo: 'maria.garcia@example.com',
      telefono: '789-123-4560'
    }
  ];

  return (
    <section>
      <h2>Nuestro Equipo</h2>
      <div className="equipo">
        {equipo.map((miembro, index) => (
          <div className="miembro" key={index}>
            <img src={miembro.imagen} alt={miembro.nombre} />
            <h3>{miembro.nombre}</h3>
            <p>{miembro.rol}</p>
            <p>{miembro.perfil}</p>
            <div className="contacto">
              <p>WhatsApp: {miembro.whatsapp}</p>
              <p>Correo electrónico: {miembro.correo}</p>
              <p>Teléfono: {miembro.telefono}</p>
              <div className="redes-sociales">
                <a href={miembro.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  
}
function Contacto() {
  return (
    <section>
      <h2>Contáctanos</h2>
      <div className="contacto-info">
        <img src="/imag/logo.jpg" alt="Logo de la Empresa XYZ" />
        <div className="info">
          <p><strong>Nombre de la Empresa:</strong> Empresa XYZ</p>
          <p><strong>Número de teléfono:</strong> 123-456-7890</p>
          <p><strong>Dirección:</strong> Dirección de la Empresa XYZ</p>
          <p><strong>WhatsApp:</strong> 123456789</p>
          <p><strong>Correo electrónico:</strong> info@empresa.xyz</p>
          <p><strong>Facebook:</strong> <a href="https://www.facebook.com/empresa.xyz" target="_blank" rel="noopener noreferrer">Empresa XYZ</a></p>
        </div>
      </div>
    </section>
  );
}


function Empresa() {
  return (
    <div className="empresa">
      <Router>
        <Navbar />
        <Header />
        <div className="contenido">
          <Routes>
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default Empresa;
