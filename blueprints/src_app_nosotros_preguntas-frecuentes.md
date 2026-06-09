# /nosotros/preguntas-frecuentes // FaqPage

## 1. MAIN TEXT CONTENT & COPYWRITING LABELS
- Hero Title: "Preguntas Frecuentes"
- Hero Description: "Todo lo que necesitás saber sobre nuestra operativa, tarifas y SLAs de entrega. Transparencia total."
- Category Tabs: "Servicios Generales", "Precios y Pagos", "Proceso de Envío"
- Category Content Displayed (Servicios): "¿Qué tipo de envíos realizan?" ("Transportamos en moto..."), "¿Cuáles son las zonas de cobertura? ¿Cubren toda la ciudad/región?" ("Cubrimos todo Mar del Plata..."), "¿Realizan entregas a Contrareembolso?" ("Sí, el efectivo cobrado..."), "¿Cómo realizo el seguimiento de mi envío?" ("Centralizamos la gestión vía WhatsApp..."), "¿Cuáles son los límites de carga?" ("Operamos con una flota exclusiva..."), "¿Cómo puedo solicitar un servicio de mensajería?" ("Comunícate por mensaje de WhatsApp..."), "¿Cuáles son sus horarios de atención/servicio?" ("Nuestro horario de atención..."), "¿Trabajan con empresas o solo con particulares?" ("Atendemos empresas, emprendedores y particulares."), "¿Qué los diferencia de otros servicios de mensajería en moto?" ("Trabajamos con estándares de excelencia...")
- Category Content Displayed (Precios): "¿Cómo calculan el costo del envío?", "¿Cuáles son las formas de pago que aceptan?", "¿Emiten factura?", "¿Ofrecen descuentos para emprendedores o clientes masivos?" (and their answers)
- Category Content Displayed (Proceso): "¿Qué información necesito proporcionar para solicitar un envío?", "¿Puedo modificar la dirección de entrega una vez que el envío está en curso?", "¿Qué sucede si el destinatario no está presente o rechaza el producto?" (and their answers)
- CTA Title: "¿No encontraste lo que buscabas?"
- CTA Description: "Nuestro equipo está listo para ayudarte con cualquier consulta específica sobre nuestros servicios."
- CTA Button 1: "Hablá por WhatsApp"
- CTA Button 2: "Contacto Directo"

## 2. INTERFACE ELEMENTS & CORE COMPONENTS TREE
- [Navigation Bar]: `OptimizedHeader`.
- [Hero Anchor]: `FaqHero` displaying title and description.
- [Data Terminal / Table]: `FaqCategories` displaying tabs (`Button`) to switch context and an accordion list (`FaqItem`) displaying questions and answers.
- [Call to Action]: `FaqContactCta` displaying a central card block with two CTA buttons.
- [Social Proof Ticker]: `CarruselRedes` (from homnew).
- [Matrix Footer]: `Footer` (from homnew).

## 3. TRANSMISSION & FORWARDING GOALS
- Accordion Items (`FaqItem`) toggle visibility of answers.
- Category Tabs update the currently rendered list of `FaqItem`s.
- CTA Button "Hablá por WhatsApp" opens a WhatsApp chat (`https://wa.me/5492236602699?text=Hola, tengo una consulta que no encontré en las FAQ`) in a new tab.
- CTA Button "Contacto Directo" redirects to `/contacto`.
