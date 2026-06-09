# /nosotros/nuestras-redes // SocialNetworksPage

## 1. MAIN TEXT CONTENT & COPYWRITING LABELS
- Hero Title: "Comunidad DosRuedas"
- Hero Description: "Conectate con nuestra red logística. Seguí nuestro día a día, novedades y casos de éxito corporativo en Mar del Plata."
- Connect Title: "¡Seguí el Movimiento!"
- Connect Description: "Unite a nuestra comunidad para acceder a beneficios exclusivos y estar al tanto de todo."
- Network Title (Facebook): "Facebook"
- Network Follower Count (Facebook): "2.5K+"
- Network Description (Facebook): "Seguinos en Facebook para ofertas exclusivas y actualizaciones diarias de nuestros servicios en Mar del Plata."
- Network CTA (Facebook): "Seguinos en Facebook"
- Network Title (Instagram): "Instagram"
- Network Follower Count (Instagram): "3.2K+"
- Network Description (Instagram): "Mirá nuestro día a día en Instagram, fotos de entregas y promociones especiales diseñadas para vos."
- Network CTA (Instagram): "Seguinos en Instagram"
- Network Title (WhatsApp): "WhatsApp"
- Network Follower Count (WhatsApp): "Atención 24/7"
- Network Description (WhatsApp): "Atención directa por WhatsApp. Canal personalizado para cotizaciones y pedidos inmediatos."
- Network CTA (WhatsApp): "Hablá con nosotros"
- Feed Title: "Publicaciones Recientes"
- Feed Description: "Lo que está pasando ahora mismo en nuestras redes sociales oficiales."
- Feed Fallback Text: "Mantenete atento a nuestras próximas publicaciones."
- Feed WhatsApp Post CTA: "Iniciar Chat Web"
- Feed Post Footer CTA: "Ver Original"
- Feed Main CTA: "Seguir todas nuestras cuentas →"
- Benefits Title: "Beneficios de Formar Parte"
- Benefits Subtitle: "Descubrí por qué cientos de marplatenses ya nos siguen en nuestras redes."
- Benefits Features: "Ofertas Exclusivas", "Actualizaciones", "Comunidad Activa", "Soporte Ágil"
- Newsletter Title: "Newsletter Exclusivo"
- Newsletter Description: "Recibí promociones relámpago, noticias del sector y actualizaciones directamente en tu bandeja de entrada."
- Newsletter Input Placeholder: "Escribí tu correo electrónico..."
- Newsletter CTA: "Unirme Ahora"
- Newsletter Loading State: "Procesando..."
- Newsletter Success Title: "¡Bienvenido a la Comunidad!"
- Newsletter Success Description: "Te suscribiste correctamente. Pronto recibirás nuestras mejores novedades."
- Newsletter Footer Text: "Garantizamos la privacidad de tus datos. Podés darte de baja con un solo clic en cualquier momento."

## 2. INTERFACE ELEMENTS & CORE COMPONENTS TREE
- [Navigation Bar]: `OptimizedHeader`.
- [Hero Anchor]: `SocialHero` displaying title and description.
- [Data Terminal / Table]: `SocialConnect` displaying a grid of social network cards with descriptions and primary external CTAs.
- [Social Proof Ticker]: `SocialFeed` displaying an asymmetrical grid of recent posts fetched dynamically, including interactive elements like "Likes", "Comments" and links to original posts.
- [Matrix Footer]: `SocialBenefits` grid of feature cards detailing community perks.
- [Interactive Form Field]: `NewsletterSignup` displaying an email input, submit button, and dynamic success state.
- [Social Proof Ticker]: `CarruselRedes` (from homnew).
- [Matrix Footer]: `Footer` (from homnew).

## 3. TRANSMISSION & FORWARDING GOALS
- "Seguinos en Facebook" button opens `https://facebook.com/enviosdosruedas` in a new tab.
- "Seguinos en Instagram" button opens `https://instagram.com/enviosdosruedas` in a new tab.
- "Hablá con nosotros" button opens a WhatsApp chat (`https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web.`) in a new tab.
- Feed Post user names and "Ver Original" link to the specific social media post URL.
- Feed WhatsApp Post "Iniciar Chat Web" links to the corresponding WhatsApp URL.
- Submitting the Newsletter form displays a success message temporarily.
