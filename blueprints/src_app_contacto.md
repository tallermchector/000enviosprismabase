# /contacto // ContactPage

## 1. MAIN TEXT CONTENT & COPYWRITING LABELS
- Hero Title: "CONTACTO COMERCIAL"
- Hero Description: "¿Listo para escalar tu negocio? Hablá con un asesor logístico y diseñemos un esquema tarifario a tu medida."
- Contact Info Title: "Envios DosRuedas"
- Contact Info Subtitle: "Mensajería y Delivery"
- Contact Info Phone: "223-660-2699"
- Contact Info Main CTA: "Contactar por WhatsApp"
- Contact Info Grid Titles: "Email", "Facebook", "Instagram"
- Contact Info Grid Descriptions: "Para consultas detalladas o corporativas.", "Síguenos para novedades y promociones.", "Mira nuestro día a día y ofertas visuales."
- Contact Info Grid CTAs: "Enviar Email", "Ir a Facebook", "Ir a Instagram"
- Form Title: "¿Tenés alguna consulta?"
- Form Subtitle: "Completá el formulario y te responderemos a la brevedad."
- Form Input Labels: "Nombre *", "Email *", "Mensaje *"
- Form Input Placeholders: "Tu nombre", "tu@email.com", "Contanos sobre tu consulta o necesidad de envío..."
- Form Submit Button: "Enviar Mensaje"
- Form Submit Loading: "Enviando..."
- Form Success Message Title: "¡Mensaje Enviado!"
- Hours Title: "Horarios de Atención"
- Hours Subtitle: "Estamos disponibles para atenderte en los siguientes horarios."
- Hours Card Title: "Horarios Regulares"
- Hours Schedule: "Lunes - Viernes" ("9:00 - 18:00"), "Sábados" ("10:00 - 15:00 "), "Domingos" ("Cerrado")
- Map Badge: "Ubicación"
- Map Title: "Nuestra Zona de Cobertura"
- Map Subtitle: "Operamos en toda la ciudad de Mar del Plata, listos para llegar a donde nos necesites."
- Map CTA: "Ver en OpenStreetMap"

## 2. INTERFACE ELEMENTS & CORE COMPONENTS TREE
- [Navigation Bar]: `OptimizedHeader`.
- [Hero Anchor]: `ContactHero` displaying title and description.
- [Data Terminal / Table]: `ContactInfo` displaying a main contact card with phone/WhatsApp and a grid of secondary contact methods.
- [Interactive Form Field]: `ContactForm` displaying name, email, and message inputs with a submit action.
- [Data Terminal / Table]: `BusinessHours` displaying a structured list of operational days and times.
- [Visual Section]: `ContactMap` displaying an embedded OpenStreetMap iframe and external link.
- [Social Proof Ticker]: `CarruselRedes` (from homnew).
- [Matrix Footer]: `Footer` (from homnew).

## 3. TRANSMISSION & FORWARDING GOALS
- "Contactar por WhatsApp" button opens a WhatsApp chat (`https://wa.me/5492236602699?text=Hola, me gustaría obtener información sobre sus servicios de envío.`) in a new tab.
- "Enviar Email" button initiates an email (`mailto:matiascejas@enviosdosruedas.com`).
- "Ir a Facebook" button opens `https://facebook.com/enviosdosruedas` in a new tab.
- "Ir a Instagram" button opens `https://instagram.com/enviosdosruedas` in a new tab.
- Form submission triggers `submitContactForm` action and displays a success toast/card upon successful API resolution.
- "Ver en OpenStreetMap" button opens `https://www.openstreetmap.org/search?query=Mar%20del%20Plata` in a new tab.
