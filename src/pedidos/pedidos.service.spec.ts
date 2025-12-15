import { PedidosService } from './pedidos.service';

const mockCollection = () => {
  const data = new Map();
  return {
    add: async (d: any) => {
      const id = `id-${Math.random().toString(36).slice(2, 8)}`;
      data.set(id, d);
      return { id };
    },
    get: async () => ({ docs: Array.from(data.entries()).map(([id, d]) => ({ id, data: () => d })) }),
    doc: (id: string) => ({
      get: async () => ({ exists: data.has(id), id, data: () => data.get(id) }),
      update: async (d: any) => data.set(id, { ...data.get(id), ...d }),
      delete: async () => data.delete(id),
    }),
  };
};

const mockFirebaseService = () => ({ db: { collection: () => mockCollection() } });

describe('PedidosService (unit)', () => {
  it('should create and retrieve pedidos', async () => {
    // Arrange
    const firebase = mockFirebaseService();
    const svc = new PedidosService(firebase as any);

    // Act
    const created = await svc.create({ customerName: 'A', items: [], total: 0 } as any);
    const all = await svc.findAll();

    // Assert
    expect(created).toHaveProperty('id');
    expect(all.length).toBeGreaterThan(0);
  });
});
