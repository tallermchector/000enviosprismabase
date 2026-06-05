# Informe de Modificación UI/UX - Envíos DosRuedas

Este informe detalla las recomendaciones de diseño y optimización para la plataforma **Envíos DosRuedas**, basadas en el marco de inteligencia **UI/UX Pro Max**.

## 1. Definición del Sistema de Diseño Propuesto

Para alinear la plataforma con los estándares modernos de logística y SaaS, se propone la siguiente estructura:

- **Patrón de Layout**: **Bento Grid + Immersive Hero**. El uso de rejillas tipo Bento permite organizar los servicios (Flex, Express, 3PL) de manera jerárquica y visualmente atractiva.
- **Estilo Visual**: **Glassmorphism Refinado**. Aprovechar el modo oscuro actual con tarjetas translúcidas, bordes sutiles y desenfoque de fondo (backdrop-blur) para profundidad.
- **Paleta de Colores**:
  - **Primario**: Azul Intenso (`#2563eb`) - Representa confianza y profesionalismo.
  - **Acento**: Amarillo Ámbar (`#fbbf24`) - Utilizado para CTAs y estados de alerta/velocidad.
  - **Superficies**: Slate 950 (`#020617`) para fondos y Slate 900 para tarjetas.
- **Tipografía**:
  - **Display/Headings**: `Orbitron` (actual) - Mantiene la estética tecnológica/futurista.
  - **Body**: Proponer el cambio de Roboto a `Inter` o `Geist Sans` para mejorar la legibilidad en densidades altas de datos (direcciones, cotizaciones).

---

## 2. Prioridades UX (Basado en SKILL.md)

### P1: Accesibilidad (CRÍTICO)

- **Contraste**: Asegurar que el texto secundario (Amarillo) sobre fondos oscuros mantenga un ratio de 4.5:1.
- **Aria-Labels**: Añadir etiquetas descriptivas a todos los botones que solo contienen iconos (ej. redes sociales en el Footer).
- **Jerarquía de Encabezados**: Verificar que no existan saltos en la secuencia H1 -> H6.

### P2: Interacción y Touch (CRÍTICO)

- **Tamaño de Target**: Todos los elementos interactivos en móvil (especialmente el `MobileMenu` y botones del Cotizador) deben tener un área mínima de **44x44px**.
- **Feedback de Prensa**: Implementar efectos de "ripple" o cambios de escala sutiles (0.95) en todos los elementos `Pressable` o `Button`.

### P3: Rendimiento (ALTO)

- **LCP Optimization**: Asegurar que el logo y la imagen principal del Hero tengan dimensiones explícitas y prioridad de carga para evitar Layout Shift (CLS < 0.1).
- **Skeleton Screens**: Implementar estados de carga (Skeleton) en el cotizador express mientras se calculan las rutas.

---

## 3. Matriz de Modificaciones Sugeridas

| Elemento | Estado Actual | Modificación Propuesta | Regla UI/UX Pro Max |
| :--- | :--- | :--- | :--- |
| **Navegación** | Estática | Añadir un indicador de estado activo con transición suave. | `nav-state-active` |
| **Servicios** | Lista estándar | Refactorizar a un layout de **Bento Grid** con tarjetas de diferentes tamaños. | `style-match` |
| **Cotizador** | Formulario lineal | Implementar **Progressive Disclosure** (Paso 1: Origen/Destino, Paso 2: Detalles). | `progressive-disclosure` |
| **Iconos** | Mezcla de estilos | Estandarizar todos los iconos a Lucide React con `stroke-width={1.5}`. | `icon-style-consistent` |
| **Animaciones** | Básicas | Estandarizar duraciones a 200-300ms con `ease-out`. | `duration-timing` |

---

## 4. Checklist de Validación Final

- [ ] ¿Los iconos son consistentes y vectoriales?
- [ ] ¿El contraste en modo oscuro es >= 4.5:1 para texto principal?
- [ ] ¿Se respetan las Safe Areas en dispositivos móviles (Notch/Dynamic Island)?
- [ ] ¿La tipografía mantiene una escala sistemática (12, 14, 16, 18, 24, 32)?
- [ ] ¿El feedback táctil es inmediato (<100ms)?

---

**Elaborado por**: Jules (Software Engineer)
**Referencia**: UI/UX Pro Max Intelligence Index
