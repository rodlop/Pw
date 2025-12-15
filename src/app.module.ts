import { Module } from '@nestjs/common';
import { PedidosModule } from './pedidos/pedidos.module';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [FirebaseModule, PedidosModule],
})
export class AppModule {}
