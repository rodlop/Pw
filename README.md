# API NestJS - Pedidos (Firebase)

Projeto mínimo em NestJS que expõe CRUD para `pedidos` usando Firestore (Firebase) como base de dados.

Setup rápido

- Adicione as credenciais do Firebase (service account JSON):
  - Configure `FIREBASE_SERVICE_ACCOUNT` com o caminho para o ficheiro JSON, ou
  - Configure `FIREBASE_CREDENTIALS` com o conteúdo JSON do service account (stringificadas).

- Instale dependências:

```bash
npm install
```

- Iniciar em desenvolvimento:

```bash
npm run start:dev
```

API

- `POST /pedidos` - cria um pedido
- `GET /pedidos` - lista pedidos
- `GET /pedidos/:id` - obtém pedido
- `PATCH /pedidos/:id` - atualiza pedido
- `DELETE /pedidos/:id` - remove pedido
- `GET /api` - Swagger UI (OpenAPI)


Exemplo de `curl`:

```bash
curl -X POST http://localhost:3000/pedidos -H "Content-Type: application/json" -d '{"customerName":"João","items":[{"productId":"p1","quantity":2,"price":10}],"total":20}'
```

Notas

- Não adicionar service account ao repositório. Use variáveis de ambiente ou um ficheiro local ignorado por `.gitignore`.
- Se preferir usar credenciais de aplicação (ADC) do ambiente, não é necessário passar nada.
# Pw
