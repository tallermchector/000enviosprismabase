# /cotizar/express // CotizarExpressPage

## 1. MAIN TEXT CONTENT & COPYWRITING LABELS
- Hero Pre-Title: "Cotizador Express"
- Hero Title: "Cotizador de Envíos Express"
- Hero Description: "Calcula el costo de tu envío prioritario al instante. Alta precisión y elección de rango horario."
- Hero CTA: "Más Sobre Envíos Express"
- Input Label: "Dirección de Origen"
- Input Placeholder: "Ej: Av. Colón 1234"
- Input Label: "Dirección de Destino"
- Input Placeholder: "Ej: Juan B. Justo 5678"
- Button Label: "Calcular Cotización"
- Loading Label: "Calculando..."
- Quote Card Title: "Cotización Express"
- Quote Card Description: "Valores estimados basados en la ruta más óptima."
- Quote Label: "Distancia"
- Quote Label: "Tiempo Estimado"
- Quote Label: "Total Estimado"
- Error Text: "La distancia excede los rangos estándar o no pudo ser calculada. Por favor, contactanos para una cotización personalizada."
- Quote Action 1: "Confirmar Envío"
- Quote Action 2: "Volver a cotizar"
- Map Features Title: "Beneficios de Nuestro Cotizador"
- Map Features Subtitle: "Nuestra herramienta de cotización con mapa integrado te ofrece transparencia y control sobre tus envíos."
- Map Features Items: "Visualización en Mapa", "Cálculo Preciso", "Confirmación Fácil"
- Pricing Info Badge: "Transparencia de Precios"
- Pricing Info Title: "¿Cómo Calculamos el Precio?"
- Pricing Info Subtitle: "Nuestros precios se basan en la distancia. Queremos que siempre sepas qué estás pagando."
- Pricing Info Items: "Basado en la Distancia", "Tiempo Estimado (Informativo)"
- Pricing Info Footer Text: "Para distancias muy largas o fuera de cobertura habitual, el cotizador podría indicar \"Consultar\". En estos casos, te invitamos a contactarnos para una cotización personalizada."
- Tips Title: "Consejos para una Cotización Exitosa"
- Tips Subtitle: "Sigue estas recomendaciones para obtener la cotización más precisa y facilitar tu envío."
- Tips Items: "Direcciones Precisas", "Verifica en el Mapa", "Datos de Contacto Claros"
- Contact Title: "¿Dudas o Envíos Especiales?"
- Contact Subtitle: "Si tu envío excede nuestros rangos estándar, necesitas múltiples paradas, o tienes alguna consulta específica, no dudes en contactarnos."
- Contact Button 1: "Formulario de Contacto"
- Contact Button 2: "Llámanos: 223-660-2699"

## 2. INTERFACE ELEMENTS & CORE COMPONENTS TREE
- [Navigation Bar]: `OptimizedHeader`.
- [Hero Anchor]: `CalculatorHero` displaying title, description, and secondary CTA.
- [Interactive Form Field]: `ExpressCalculator` displaying a dynamic form with auto-complete inputs (`AddressAutocomplete`) and transitioning to a `RouteMap` and results card upon submission.
- [Data Terminal / Table]: `MapFeatures` displaying a grid of benefit cards.
- [Data Terminal / Table]: `PricingInfo` displaying two explanatory cards and an informational footer.
- [Data Terminal / Table]: `CalculatorTips` displaying a grid of recommendation cards.
- [Call to Action]: `CalculatorContact` displaying a central card block with two CTA buttons.
- [Social Proof Ticker]: `CarruselRedes` (from homnew).
- [Matrix Footer]: `Footer` (from homnew).

## 3. TRANSMISSION & FORWARDING GOALS
- Hero CTA "Más Sobre Envíos Express" redirects to `/servicios/envios-express`.
- "Calcular Cotización" simulates/fetches the route distance and transitions the view to display the `RouteMap` and calculated quote.
- "Confirmar Envío" handles the confirmation flow.
- "Volver a cotizar" resets the form view to step 1.
- Contact CTA "Formulario de Contacto" redirects to `/contacto`.
- Contact CTA "Llámanos: 223-660-2699" initiates a phone call (`tel:+542236602699`).
