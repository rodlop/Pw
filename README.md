# API NestJS - Pedidos (Firebase)

Projeto mínimo em NestJS que expõe CRUD para `pedidos` usando Firestore (Firebase) como base de dados.

API

- `POST /pedidos` - cria um pedido
- `GET /pedidos` - lista pedidos
- `GET /pedidos/:id` - obtém pedido
- `PATCH /pedidos/:id` - atualiza pedido
- `DELETE /pedidos/:id` - remove pedido
- `GET /api` - Swagger UI (OpenAPI)


curl -X POST http://localhost:3000/pedidos -H "Content-Type: application/json" -d '{"customerName":"João","items":[{"productId":"p1","quantity":2,"price":10}],"total":20}'

