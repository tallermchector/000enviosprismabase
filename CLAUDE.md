# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 1. Idioma y Comunicación
- **Idioma Mandatorio:** Todas las respuestas, explicaciones, sugerencias, comentarios de código y mensajes de commit deben ser estrictamente en **español**.
- **Estilo:** Directo, técnico, conciso y sin rodeos innecesarios.

## 2. Información del Proyecto
- **Descripción:** Sistema de gestión de envíos y logística.
- **Tecnologías Principales:** Node.js, Next.js, Prisma ORM, PostgreSQL, Tailwind CSS, Leaflet API, TypeScript.
- **Arquitectura:** Aplicación web basada en Next.js (App Router), con separación de lógica en `src/lib` y componentes reutilizables en `src/components`.

## 3. Comandos Frecuentes de Desarrollo
Claude Code tiene autorización para ejecutar los siguientes comandos según sea necesario:

### Instalación y Configuración
- Instalar dependencias: `pnpm install`
- Inicializar base de datos: `pnpm prisma generate && pnpm prisma db push`

### Ejecución y Desarrollo
- Iniciar entorno local: `pnpm run dev`
- Construir producción: `pnpm run build`

### Pruebas (Testing)
- Ejecutar suite de pruebas: `pnpm exec playwright test`
- Ejecutar una prueba específica: `pnpm exec playwright test path/to/file.spec.ts`

### Calidad de Código
- Linter / Formateo: `pnpm run lint`

## 4. Estilo y Reglas de Codificación
- **Comentarios:** Todos los comentarios dentro del código nuevo o modificado deben escribirse en **español**.
- **Nombrado (Naming):** camelCase para variables/funciones, PascalCase para componentes y clases.
- **Manejo de Errores:** Siempre capturar errores de forma explícita (`try/catch`) y registrar logs descriptivos.
- **Tipado:** TypeScript estricto.
- **Base de Datos:** Toda modificación en `prisma/schema.prisma` requiere ejecutar `npx prisma generate` y una migración correspondiente.

## 5. Arquitectura del Proyecto
- `src/app/`: Rutas de la aplicación (Next.js App Router).
- `src/components/`: Componentes React organizados por funcionalidad (ej. `calculator`, `maps`, `express`).
- `src/lib/`: Lógica compartida, clientes de Prisma (`src/lib/prisma.ts`), integraciones de mapas (`src/lib/maps/`) y servicios sociales.
- `prisma/`: Esquema de base de datos y migraciones.

## 6. Restricciones y Seguridad
- **Dependencias:** Prohibido instalar nuevos paquetes o librerías de terceros sin solicitar aprobación explícita del usuario.
- **Credenciales:** Nunca incluyas ni guardes tokens, contraseñas o llaves API (`.env`) en el código. Usa variables de entorno.
- **Refactorización:** No alteres lógica existente en archivos ajenos al problema actual a menos que afecte directamente al rendimiento o seguridad.
