# /servicios/envios-express // EnviosExpressPage

## 1. MAIN TEXT CONTENT & COPYWRITING LABELS
- Hero Pre-Title: "DISPONIBLE EN MAR DEL PLATA"
- Hero Title: "ENVÍOS EXPRESS INMEDIATOS"
- Hero Description: "La solución premium para operaciones de alta criticidad horaria. Vos tenés el control total: elegí el rango exacto de entrega con certeza absoluta."
- Hero CTA 1: "COTIZÁ TU ENVÍO EXPRESS"
- Hero CTA 2: "HABLAR POR WHATSAPP"
- Content Badge: "SOLUCIONES PREMIUM"
- Content Title: "ENTREGAS RÁPIDAS Y EFICIENTES"
- Content Description: "Nuestro servicio Express ofrece cobertura total en Mar del Plata, llegando a barrios clave como Güemes, Chauvín, Los Troncos y la zona del Puerto con rapidez absoluta. Es la solución premium para alta criticidad horaria donde vos tenés el control total."
- Content Features: "Alta criticidad horaria", "Rango horario a elección", "Anticipación mínima" (with descriptions)
- Content Background Text: "ENVIOS", "DOS RUEDAS"
- Content CTA 1: "Cotizá tu Envío"
- Content CTA 2: "Chatear por WhatsApp" (from WhatsAppButton)
- Pricing Title: "TARIFAS 2026 ENVÍOS EXPRESS"
- Pricing Subtitle: "Consultá los precios actualizados para nuestro servicio premium con rango horario a elección."
- Pricing Tier Defaults: "Zona 1/2/3/4", "Radio céntrico/Periferia cercana/Zonas alejadas/Límites de ciudad"
- Pricing Special Badge: "COTIZACIÓN DINÁMICA"
- Pricing Special Title: "ZONA 5: $1.000 / KM"
- Pricing Special Desc: "Para envíos de larga distancia fuera del ejido urbano o una cotización precisa con mapa, utilizá nuestro cotizador inteligente de alta precisión."
- Pricing Special CTA: "IR AL COTIZADOR"
- Pricing Accordion Title: "Condiciones del Servicio Express"
- Pricing Accordion Items: "Tiempos y Tolerancia", "Recargos por Clima", "Bultos y Pesos", "Anticipación Requerida"
- Benefits Title: "¿POR QUÉ ELEGIR EXPRESS?"
- Benefits Subtitle: "Descubrí todas las ventajas de nuestro servicio premium de entregas rápidas."
- Benefits Features: "Alta criticidad horaria", "Anticipación mínima", "Certeza Absoluta", "Seguimiento en Tiempo Real", "Soporte Prioritario"
- Scenarios Title: "¿CUÁNDO NECESITAS EXPRESS?"
- Scenarios Subtitle: "Situaciones donde cada minuto cuenta y la rapidez es fundamental."
- Scenarios Items: "Documentos", "Salud", "Negocios", "Regalos" (with descriptions and examples)
- CTA Badge: "PRIORIDAD MÁXIMA"
- CTA Title: "¿LISTO PARA TU ENVÍO EXPRESS?"
- CTA Description: "No esperes más. Nuestro equipo está listo para manejar tu envío prioritario y garantizar que llegue a tiempo. ¡Cada minuto cuenta!"
- CTA Button 1: "COTIZAR AHORA"
- CTA Button 2: "WHATSAPP PRIORITARIO"

## 2. INTERFACE ELEMENTS & CORE COMPONENTS TREE
- [Navigation Bar]: `OptimizedHeader`.
- [Hero Anchor]: `ExpressHero` displaying title, description, and two CTA buttons. Uses a `RotatingCard` visual component.
- [Visual Section]: `ExpressContent` split-layout displaying text features and large background typography.
- [Data Terminal / Table]: `ExpressPricingRanges` grid of pricing tier cards. Contains a CTA card for `Zona 5` and an `Accordion` element for terms.
- [Matrix Footer]: `ExpressBenefits` grid of feature cards containing a central visual `UrgencyClock`.
- [Matrix Footer]: `UrgentScenarios` grid of use-case cards with lists.
- [Call to Action]: `ExpressCta` centered CTA block.
- [Social Proof Ticker]: `CarruselRedes` (from homnew).
- [Matrix Footer]: `Footer` (from homnew).

## 3. TRANSMISSION & FORWARDING GOALS
- Hero CTA "COTIZÁ TU ENVÍO EXPRESS" redirects to `/cotizar/express`.
- Hero CTA "HABLAR POR WHATSAPP" initiates a WhatsApp chat (`https://wa.me/5492236602699`).
- Content CTA "Cotizá tu Envío" redirects to `/cotizar/express`.
- Content CTA "Chatear por WhatsApp" initiates a WhatsApp chat (`https://wa.me/5492236602699`).
- Pricing Special CTA "IR AL COTIZADOR" redirects to `/cotizar/express`.
- Bottom CTA "COTIZAR AHORA" redirects to `/cotizar/express`.
- Bottom CTA "WHATSAPP PRIORITARIO" initiates a WhatsApp chat (`https://wa.me/5492236602699` with message "Necesito un envío express prioritario. ¿Pueden ayudarme?").
