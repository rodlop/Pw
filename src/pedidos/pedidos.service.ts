import { Injectable, NotFoundException } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidosService {
  private collection;

  constructor(private readonly firebase: FirebaseService) {
    this.collection = this.firebase.db.collection('pedidos');
  }

  async create(createPedidoDto: CreatePedidoDto) {
    const data = {
      ...createPedidoDto,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const ref = await this.collection.add(data);
    return { id: ref.id, ...data };
  }

  async findAll() {
    const snapshot = await this.collection.get();
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  }

  async findOne(id: string) {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) throw new NotFoundException('Pedido não encontrado');
    return { id: doc.id, ...doc.data() };
  }

  async update(id: string, updatePedidoDto: UpdatePedidoDto) {
    const docRef = this.collection.doc(id);
    const doc = await docRef.get();
    if (!doc.exists) throw new NotFoundException('Pedido não encontrado');
    const data = { ...updatePedidoDto, updatedAt: new Date().toISOString() };
    await docRef.update(data);
    const updated = await docRef.get();
    return { id: updated.id, ...updated.data() };
  }

  async remove(id: string) {
    const docRef = this.collection.doc(id);
    const doc = await docRef.get();
    if (!doc.exists) throw new NotFoundException('Pedido não encontrado');
    await docRef.delete();
    return { id };
  }
}
