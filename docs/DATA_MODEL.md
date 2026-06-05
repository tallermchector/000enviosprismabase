# Data Model

Based on the application code and the database configuration, the system uses the following schema.

## Entities

### `User`

Standard system user, typically used for administrative or general authentication.

- `id`: String (CUID), Primary Key
- `email`: String, Unique
- `name`: String (Optional)
- `createdAt`: DateTime
- `updatedAt`: DateTime

### `Client`

A registered customer who can place orders.

- `id`: Int, Primary Key
- `name`: String
- `lastName`: String (Optional)
- `phone`: String, Unique (Optional)
- `email`: String, Unique (Optional)
- `address`: String
- `addressLat`: Decimal (Optional)
- `addressLng`: Decimal (Optional)
- `isActive`: Boolean (Default: `true`)
- `createdAt`: DateTime
- `updatedAt`: DateTime

### `Order`

Represents a shipping request.

- `id`: Int, Primary Key
- `clientId`: Int (Optional), Foreign Key to `Client`
- `repartidorId`: Int (Optional), Foreign Key to `Repartidor`
- `serviceType`: Enum (`EXPRESS`, `LOW_COST`, `PUNTO_DE_RETIRO`)
- `status`: Enum (`PENDIENTE`, `EN_CURSO`, `ENTREGADO`, `CANCELADO`) (Default: `PENDIENTE`)
- `originFullName`: String
- `originPhone`: String
- `originAddress`: String
- `originLat`: Decimal (Optional)
- `originLng`: Decimal (Optional)
- `pickupStreetAddress`: String (Optional)
- `destinationContactName`: String
- `destinationContactPhone`: String
- `destinationContactEmail`: String (Optional)
- `destinationAddress`: String
- `destinationLat`: Decimal (Optional)
- `destinationLng`: Decimal (Optional)
- `deliveryAddress`: String (Optional)
- `deliveryNotes`: String (Optional)
- `pickupDate`: DateTime (Optional)
- `pickupTimeFrom`: String (Optional)
- `pickupTimeTo`: String (Optional)
- `deliveryDate`: DateTime (Optional)
- `deliveryTimeFrom`: String (Optional)
- `deliveryTimeTo`: String (Optional)
- `distanceText`: String (Optional)
- `durationText`: String (Optional)
- `quotedPrice`: Decimal (Optional)
- `shippingCost`: Decimal (Optional)
- `totalCost`: Decimal (Optional)
- `clientNameAtOrder`: String (Optional)
- `clientPhoneAtOrder`: String (Optional)
- `createdAt`: DateTime
- `updatedAt`: DateTime
- `pickupDateTime`: DateTime (Optional)
- `deliveryDateTime`: DateTime (Optional)

### `Repartidor`

Delivery personnel authorized to manage and perform deliveries.

- `id`: Int, Primary Key
- `name`: String
- `phone`: String, Unique
- `vehicleType`: String
- `licensePlate`: String, Unique
- `isActive`: Boolean (Default: `true`)
- `createdAt`: DateTime
- `updatedAt`: DateTime

### `Etiqueta`

Represents a shipping label generated for an order, containing details for delivery and assignment.

- `id`: Int, Primary Key
- `orderNumber`: String (Optional), Unique
- `tipoEnvio`: Enum (`EXPRESS`, `LOW_COST`, `PUNTO_DE_RETIRO`)
- `remitenteNombre`: String
- `remitenteDireccion`: String
- `remitenteNotas`: String (Optional)
- `destinatarioNombre`: String
- `destinatarioDireccion`: String
- `destinatarioTelefono`: String
- `montoACobrar`: Decimal (Optional)
- `destinatarioNotas`: String (Optional)
- `status`: Enum (`PENDIENTE`, `IMPRESA`, `EN_CAMINO`, `ENTREGADA`, `NO_ENTREGADA`) (Default: `PENDIENTE`)
- `repartidorId`: Int (Optional), Foreign Key to `Repartidor`
- `deliveryStartTime`: String (Optional)
- `deliveryEndTime`: String (Optional)
- `createdAt`: DateTime
- `updatedAt`: DateTime

### `PriceRange`

Configurable pricing rules based on distance and service type.

- `id`: Int, Primary Key
- `serviceType`: Enum (`EXPRESS`, `LOW_COST`, `PUNTO_DE_RETIRO`)
- `distanciaMinKm`: Decimal
- `distanciaMaxKm`: Decimal
- `precioRango`: Decimal
- `isActive`: Boolean (Default: `true`)
- `createdAt`: DateTime
- `updatedAt`: DateTime

### `SocialPost`

Tracks aggregated platform posts and comments for promotional/social feedback.

- `id`: Int, Primary Key
- `platform`: Enum (`facebook`, `instagram`, `whatsapp`)
- `userName`: String (Default: `"Envios DosRuedas"`)
- `userAvatar`: String (Optional)
- `userUrl`: String (Optional)
- `content`: String
- `postUrl`: String, Unique
- `imageUrl`: String (Optional)
- `imageHint`: String (Optional)
- `likes`: Int (Optional)
- `comments`: Int (Optional)
- `shares`: Int (Optional)
- `timestamp`: DateTime

---

## Relationships

- **Client 1:N Order**: A client can have multiple orders. An order optionally belongs to a client.
- **Repartidor 1:N Order**: A repartidor can be assigned to multiple orders.
- **Repartidor 1:N Etiqueta**: A repartidor can be assigned to multiple shipping labels (etiquetas).
