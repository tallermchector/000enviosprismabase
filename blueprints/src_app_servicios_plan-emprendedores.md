# /servicios/plan-emprendedores // EntrepreneurPlanPage

## 1. MAIN TEXT CONTENT & COPYWRITING LABELS
- Hero Pre-Title: "E-COMMERCE 3PL"
- Hero Title: "ALMACENAMIENTO Y FULFILLMENT PARA PyMEs"
- Hero Description: "Solución integral de almacenamiento y fulfillment para PyMEs en Mar del Plata. Contamos con depósitos propios en la ciudad para garantizar el mejor servicio 3PL."
- Hero CTA 1: "SOLICITAR PLAN CORPORATIVO"
- Hero CTA 2: "AGENDAR ASESORÍA 3PL"
- Plan Info Badge: "SOLUCIONES CORPORATIVAS"
- Plan Info Title: "LOGÍSTICA 3PL PARA EMPRENDEDORES"
- Plan Info Description: "Somos más que una empresa de envíos; nos convertimos en tu departamento de logística. Delegá el almacenamiento y la distribución en expertos y enfocate en hacer crecer tu negocio."
- Plan Info Features: "Soluciones 3PL", "Fulfillment", "Cuentas Corrientes" (with descriptions)
- Plan Info Background Text: "CORE", "BUSINESS"
- Benefits Metrics: "99.8%" ("Entregas Efectivas"), "+150" ("Clientes Corporativos"), "100%" ("SLA Cumplido")
- Benefits Title: "BENEFICIOS PARA NEGOCIOS"
- Benefits Subtitle: "Potenciamos tu capacidad operativa con soluciones logísticas de clase mundial."
- Benefits Features: "Partner Logístico Especializado", "Cuentas Corrientes", "Límites Claros y Seguros", "Almacenaje Seguro", "Reportes Detallados", "Asesor Dedicado"
- Pricing Title: "PLANES 3PL Y SOLUCIONES E-COMMERCE"
- Pricing Subtitle: "Elegí el plan que mejor se adapte al volumen de tu negocio. Desde almacenamiento hasta ruteo masivo."
- Pricing Tier 1: "3PL Fulfillment", "$6.000", "Tarifa Plana Same Day", "Plan E-Commerce"
- Pricing Tier 2: "Plan 24HS", "$3.800", "Next Day (Retiro hoy)", "Plan Escala"
- Pricing Tier 3: "Cta. Cte. Flexible", "Híbrido", "LowCost + Beneficios Express", "Plan Corporativo"
- CTA Badge: "SOCIO LOGÍSTICO"
- CTA Title: "¿LISTO PARA ESCALAR TU E-COMMERCE?"
- CTA Description: "Olvídate de los paquetes y concéntrate en tu producto. Nosotros nos encargamos de toda la cadena de distribución."
- CTA Button 1: "SOLICITAR PLAN"
- CTA Button 2: "HABLAR CON UN ASESOR"

## 2. INTERFACE ELEMENTS & CORE COMPONENTS TREE
- [Navigation Bar]: `OptimizedHeader`.
- [Hero Anchor]: `EntrepreneurHero` displaying title, description, and two CTA buttons.
- [Visual Section]: `PlanInformation` split-layout displaying text features and large background typography.
- [Social Proof Ticker]: `SuccessMetrics` inside `EntrepreneurBenefits`, displaying high-level stats.
- [Matrix Footer]: `EntrepreneurBenefits` grid of feature cards.
- [Data Terminal / Table]: `EntrepreneurPricingRanges` grid of pricing tier cards.
- [Call to Action]: `EntrepreneurCta` centered CTA block.
- [Social Proof Ticker]: `CarruselRedes` (from homnew).
- [Matrix Footer]: `Footer` (from homnew).

## 3. TRANSMISSION & FORWARDING GOALS
- Hero CTA "SOLICITAR PLAN CORPORATIVO" redirects to `/contacto`.
- Hero CTA "AGENDAR ASESORÍA 3PL" redirects to WhatsApp (`https://wa.me/5492236602699`).
- Bottom CTA "SOLICITAR PLAN" redirects to `/contacto`.
- Bottom CTA "HABLAR CON UN ASESOR" initiates a phone call (`tel:+5492236602699`).
