# /servicios/enviosflex // EnviosFlexPage

## 1. MAIN TEXT CONTENT & COPYWRITING LABELS
- Hero Pre-Title: "BENEFICIO EMPRENDEDORES"
- Hero Title: "ENVÍOS FLEX MERCADOLIBRE: POTENCIÁ TU REPUTACIÓN"
- Hero Description: "Somos expertos en la logística de MercadoLibre. Optimizamos tus entregas Same-Day para que tu medidor siempre esté en verde y vos solo te enfoques en vender."
- Hero CTA 1: "ACTIVAR ENVÍOS FLEX"
- Hero CTA 2: "CONTACTAR ASESOR FLEX"
- Content Badge: "MERCADOLIBRE EXPERTS"
- Content Title: "DOMINÁ TUS VENTAS CON ENVÍOS FLEX"
- Content Description: "Somos el aliado estratégico para vendedores de MercadoLibre con Cobertura MDP total. Optimizamos tus Envíos Same-Day Mar del Plata para que vos solo te preocupes por vender más."
- Content Features: "Reputación Garantizada", "Corte 15:00 hs", "Seguimiento App" (with descriptions)
- Content Background Text: "FLEX", "SAME-DAY"
- Benefits Title: "BENEFICIOS PARA VENDEDORES"
- Benefits Subtitle: "La solución definitiva para llevar tu tienda de MercadoLibre al siguiente nivel de competitividad."
- Benefits Thermometer Labels: "Reputación", "MercadoLíder Platinum"
- Benefits Features: "Corte 15:00 hs", "Reputación Intacta", "Devoluciones sin cargo", "Cobertura MDP", "App de Control", "Choferes Calificados"
- Pricing Title: "NIVELES Y TARIFAS FLEX"
- Pricing Subtitle: "Escalá tu negocio con MercadoLibre Flex. A mayor volumen, mejores beneficios y tarifas para tus envíos."
- Pricing Tier 1: "Nivel 1", "Tarifa Clásica", "1 a 4 envíos diarios", "Crecimiento"
- Pricing Tier 2: "Nivel 2", "Tarifa Híbrida", "+5 envíos diarios", "Pro"
- Pricing Tier 3: "Nivel 3", "$4.500", "Grandes Cuentas (+10)", "Elite"
- Pricing Weather Badge: "BENEFICIO CLIMA"
- Pricing Weather Title: "RECARGO POR LLUVIA: SOLO 30%"
- Pricing Weather Desc: "Para nuestros clientes Flex, el recargo por días de lluvia es reducido. Minimizamos el impacto en tus costos operativos."
- Pricing Weather CTA: "MÁS INFORMACIÓN FLEX"
- Workflow Title: "LOGÍSTICA SIN FRICCIONES"
- Workflow Subtitle: "Integramos tu flujo de ventas con nuestra red de distribución en tiempo real."
- Workflow Steps: "1. Vendes", "2. Retiramos", "3. Entregamos", "4. Calificas" (with descriptions)
- Requirements Title: "¿QUÉ NECESITAS?"
- Requirements Subtitle: "Requisitos mínimos para empezar a ofrecer envíos Same-Day hoy mismo."
- Requirements Items: "Cuenta MercadoLibre", "Ubicación", "Horario de Corte", "Suscripción" (with descriptions)
- CTA Badge: "IMPULSA TU REPUTACIÓN"
- CTA Title: "¿LISTO PARA VENDER MÁS CON ENVÍOS FLEX?"
- CTA Description: "No pierdas más ventas por tiempos de entrega largos. Implementa Same-Day hoy mismo con los expertos en MercadoLibre."
- CTA Button 1: "EMPEZAR AHORA"
- CTA Button 2: "CONTACTAR ASESOR"

## 2. INTERFACE ELEMENTS & CORE COMPONENTS TREE
- [Navigation Bar]: `OptimizedHeader`.
- [Hero Anchor]: `EnviosFlexHero` displaying title, description, and two CTA buttons.
- [Visual Section]: `EnviosFlexContent` split-layout displaying text features and large background typography.
- [Social Proof Ticker]: `ReputationThermometer` inside `MercadoLibreBenefits`, displaying a visual reputation gauge.
- [Matrix Footer]: `MercadoLibreBenefits` grid of feature cards.
- [Data Terminal / Table]: `FlexPricingRanges` grid of pricing tier cards and a bottom weather-benefit card.
- [Visual Section]: `HowItWorks` displaying a 4-step linear flow with icons.
- [Data Terminal / Table]: `Requirements` displaying 4 prerequisite cards.
- [Call to Action]: `EnviosFlexCta` centered CTA block.
- [Social Proof Ticker]: `CarruselRedes` (from homnew).
- [Matrix Footer]: `Footer` (from homnew).

## 3. TRANSMISSION & FORWARDING GOALS
- Hero CTA "ACTIVAR ENVÍOS FLEX" redirects to `/cotizar/lowcost`.
- Hero CTA "CONTACTAR ASESOR FLEX" redirects to WhatsApp (`https://wa.me/5492236602699`).
- Pricing Weather CTA "MÁS INFORMACIÓN FLEX" initiates a WhatsApp chat (`https://wa.me/5492236602699` with message "Hola, necesito cotizar un Envío Flex de más de 13 km.").
- Bottom CTA "EMPEZAR AHORA" redirects to `/cotizar/lowcost`.
- Bottom CTA "CONTACTAR ASESOR" initiates a WhatsApp chat (`https://wa.me/5492236602699` with message "Hola, soy vendedor de MercadoLibre y quiero implementar Envíos Flex.").
