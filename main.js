// ---------- MODO CLARO/OSCURO ----------
const body = document.body;
const btn = document.getElementById('modo-toggle');

const modoGuardado = localStorage.getItem('modo');
if (modoGuardado === 'oscuro') {
  body.classList.add('dark-mode');
  btn.textContent = '🌞';
} else {
  btn.textContent = '🌙';
}

function toggleModo() {
  body.classList.toggle('dark-mode');
  const esOscuro = body.classList.contains('dark-mode');
  btn.textContent = esOscuro ? '🌞' : '🌙';
  localStorage.setItem('modo', esOscuro ? 'oscuro' : 'claro');
}

// ---------- CERRAR MENÚ AL HACER CLIC EN ENLACE ----------
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('active');
  });
});



function closeSidebar() {
  sidebar.classList.remove('active');
  toggle.classList.remove('active');
  document.removeEventListener('click', outsideClickHandler);
}

function outsideClickHandler(e) {
  if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
    closeSidebar();
  }
}

// Cierra el sidebar al hacer clic en un enlace
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', closeSidebar);
});

document.addEventListener("DOMContentLoaded", () => {
  // ---------- MODO CLARO/OSCURO ----------
  const body = document.body;
  const btn = document.getElementById('modo-toggle');
  const modoGuardado = localStorage.getItem('modo');
  if (modoGuardado === 'oscuro') {
    body.classList.add('dark-mode');
    if (btn) btn.textContent = '🌞';
  } else {
    if (btn) btn.textContent = '🌙';
  }

  if (btn) {
    btn.onclick = () => {
      body.classList.toggle('dark-mode');
      const esOscuro = body.classList.contains('dark-mode');
      btn.textContent = esOscuro ? '🌞' : '🌙';
      localStorage.setItem('modo', esOscuro ? 'oscuro' : 'claro');
    };
  }

  // ---------- BOTÓN HAMBURGUESA Y SIDEBAR ----------
  const hamburger = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  let isPointerInsideSidebar = false;

  if (sidebar) {
    // Detecta si el mouse está sobre el sidebar (PC)
    sidebar.addEventListener('mouseenter', () => {
      isPointerInsideSidebar = true;
    });
    sidebar.addEventListener('mouseleave', () => {
      isPointerInsideSidebar = false;
    });

    // Detecta si el dedo está tocando el sidebar (móvil)
    sidebar.addEventListener('touchstart', () => {
      isPointerInsideSidebar = true;
    });
    sidebar.addEventListener('touchend', () => {
      isPointerInsideSidebar = false;
    });

    // Detecta scroll en el documento
    window.addEventListener('scroll', () => {
      if (!isPointerInsideSidebar && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
      }
    });
  }

  if (hamburger && sidebar) {
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
    document.querySelectorAll('.sidebar a').forEach(link => {
      link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }

  // ---------- FORMULARIO DE CONTACTO ----------
  const formulario = document.getElementById("formulario");
  const mensaje = document.getElementById("mensaje");
  if (formulario && mensaje) {
    formulario.addEventListener("submit", function(e) {
      e.preventDefault();
      fetch(formulario.action, {
        method: "POST",
        body: new FormData(formulario),
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
          mensaje.style.display = 'block';
          mensaje.textContent = '¡Mensaje enviado con éxito!';
          setTimeout(() => {
            mensaje.style.display = 'none';
            formulario.reset();
          }, 2000);
        } else {
          mensaje.style.display = 'block';
          mensaje.textContent = 'Hubo un error al enviar el mensaje.';
        }
      })
      .catch(error => {
        mensaje.style.display = 'block';
        mensaje.textContent = 'Ocurrió un problema: ' + error.message;
      });
    });
  }
});

// ---------- ANIMACIÓN DE CARGA ----------
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none';
  }
});

// Suponiendo que tu sidebar tiene id="sidebar"
const sidebar = document.getElementById('sidebar');

let isPointerInsideSidebar = false;

// Detecta si el mouse está sobre el sidebar
sidebar.addEventListener('mouseenter', () => {
  isPointerInsideSidebar = true;
});
sidebar.addEventListener('mouseleave', () => {
  isPointerInsideSidebar = false;
});

// Detecta scroll en el documento
window.addEventListener('scroll', () => {
  if (!isPointerInsideSidebar) {
    // Cierra el sidebar (ajusta según tu lógica)
    sidebar.classList.remove('open');
  }
});