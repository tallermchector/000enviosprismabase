# /servicios/envios-lowcost // EnviosLowCostPage

## 1. MAIN TEXT CONTENT & COPYWRITING LABELS
- Hero Pre-Title: "TARIFA OPTIMIZADA"
- Hero Title: "ENVÍOS LOWCOST: MÁXIMA RENTABILIDAD"
- Hero Description: "Variabilizá tus costos logísticos con nuestro servicio de ruteo masivo inteligente. La mejor tarifa de Mar del Plata sin sacrificar seguridad."
- Hero CTA 1: "COTIZAR ENVÍO LOWCOST"
- Hero CTA 2: "VER TARIFAS OPTIMIZADAS"
- Content Badge: "MÁXIMA RENTABILIDAD"
- Content Title: "ENVÍOS LOWCOST: MÁXIMA EFICIENCIA"
- Content Description: "Nuestro servicio LowCost está diseñado para el ruteo diario masivo. Optimizamos nuestras rutas para ofrecer la tarifa más competitiva, garantizando la entrega en el día para pedidos ingresados antes del horario de corte."
- Content Features: "Eficiencia en Ruteo", "Corte y Entrega", "Tarifa Económica" (with descriptions)
- Content Background Text: "ENVIOS", "LOWCOST"
- Content CTA: "Cotizá tu Envío Low Cost"
- Pricing Title: "TARIFAS 2026 ENVÍOS LOWCOST"
- Pricing Subtitle: "Eficiencia en ruteo masivo. Garantizamos entregas antes de las 19:00 hs para pedidos antes de las 13:00 hs."
- Pricing Tier Defaults: "Zona 1/2/3/4", "Radio céntrico/Periferia cercana/Zonas alejadas/Límites de ciudad"
- Pricing Special Badge: "COTIZACIÓN ESPECIAL"
- Pricing Special Title: "ZONA 5: $700 / KM"
- Pricing Special Desc: "Para envíos de larga distancia fuera del ejido urbano masivo, ofrecemos la tarifa más competitiva por kilómetro."
- Pricing Special CTA: "CONSULTAR POR WHATSAPP"
- Benefits Title: "BENEFICIOS LOWCOST"
- Benefits Subtitle: "La combinación perfecta entre economía y eficiencia logística para tu negocio."
- Benefits Features: "Eficiencia en Ruteo", "Corte y Entrega (SLA)", "Economía y Escala", "Cobertura Total", "Menos Operatividad", "Ideal Emprendedores"
- Workflow Title: "¿CÓMO FUNCIONA?"
- Workflow Subtitle: "Un proceso simple y transparente diseñado para maximizar tu productividad."
- Workflow Steps: "1. Despacho", "2. Recolección", "3. Ruteo", "4. Entrega"
- CTA Badge: "ECONOMÍA Y ESCALA"
- CTA Title: "¿LISTO PARA BAJAR TUS COSTOS LOGÍSTICOS?"
- CTA Description: "Empieza hoy mismo a enviar de forma inteligente. Súmate a la flota con mayor eficiencia de Mar del Plata."
- CTA Button 1: "COTIZAR ENVÍO"
- CTA Button 2: "CONTACTAR ASESOR"

## 2. INTERFACE ELEMENTS & CORE COMPONENTS TREE
- [Navigation Bar]: `OptimizedHeader`.
- [Hero Anchor]: `LowcostHero` displaying title, description, and two CTA buttons.
- [Visual Section]: `LowcostContent` split-layout displaying text features and large background typography.
- [Data Terminal / Table]: `PricingComparison` grid of pricing tier cards and a bottom special-quote card.
- [Matrix Footer]: `LowcostBenefits` grid of feature cards.
- [Visual Section]: `HowLowcostWorks` displaying a 4-step linear flow with icons.
- [Call to Action]: `LowcostCta` centered CTA block.
- [Social Proof Ticker]: `CarruselRedes` (from homnew).
- [Matrix Footer]: `Footer` (from homnew).

## 3. TRANSMISSION & FORWARDING GOALS
- Hero CTA "COTIZAR ENVÍO LOWCOST" redirects to `/cotizar/lowcost`.
- Hero CTA "VER TARIFAS OPTIMIZADAS" anchors to `#pricing-comparison`.
- Content CTA "Cotizá tu Envío Low Cost" redirects to `/cotizar/lowcost`.
- Pricing Special CTA "CONSULTAR POR WHATSAPP" initiates a WhatsApp chat (`https://wa.me/5492236602699` with message "Hola, necesito cotizar un envío Low Cost de más de 13 km.").
- Bottom CTA "COTIZAR ENVÍO" redirects to `/cotizar/lowcost`.
- Bottom CTA "CONTACTAR ASESOR" initiates a phone call (`tel:+5492236602699`).
