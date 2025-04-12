
function enviarAWhatsApp(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;
  const texto = `Hola, soy ${nombre} (%0AEmail: ${correo}) y quiero contratar un grupo para: %0A${mensaje}`;
  window.open(`https://wa.me/573001112233?text=${texto}`, "_blank");
  return false;
}

let actual = 0;
setInterval(() => {
  const testimonios = document.querySelectorAll(".testimonio");
  testimonios[actual].classList.remove("activo");
  actual = (actual + 1) % testimonios.length;
  testimonios[actual].classList.add("activo");
}, 4000);

function cambiarIdioma(idioma) {
  if (idioma === 'en') {
    document.getElementById("titulo").textContent = "Feel the rhythm of Vallenato!";
    document.getElementById("subtitulo").textContent = "Hire authentic vallenato talent for your event";
    document.getElementById("galeria").textContent = "Band Gallery";
    document.getElementById("videoTitulo").textContent = "Watch the Vallenato energy!";
    document.getElementById("testimoniosTitulo").textContent = "What our clients say";
    document.getElementById("pagoTitulo").textContent = "Book your party now";
    document.getElementById("contactoTitulo").textContent = "Get a quote now!";
  } else {
    document.getElementById("titulo").textContent = "¡Vive el sabor de la parranda!";
    document.getElementById("subtitulo").textContent = "Contrata talento vallenato auténtico para tu evento";
    document.getElementById("galeria").textContent = "Galería de Agrupaciones";
    document.getElementById("videoTitulo").textContent = "¡Mira cómo suena la fiesta!";
    document.getElementById("testimoniosTitulo").textContent = "Lo que dicen nuestros clientes";
    document.getElementById("pagoTitulo").textContent = "Reserva tu parranda";
    document.getElementById("contactoTitulo").textContent = "¡Cotiza tu evento ya!";
  }
}

paypal.Buttons({
  style: {
    color: 'gold',
    shape: 'pill',
    label: 'pay',
    height: 40
  },
  createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{
        description: "Reserva grupo vallenato",
        amount: {
          value: '50.00'
        }
      }]
    });
  },
  onApprove: function(data, actions) {
    return actions.order.capture().then(function(details) {
      alert('¡Gracias por tu pago, ' + details.payer.name.given_name + '!');
    });
  }
}).render('#paypal-button-container');
