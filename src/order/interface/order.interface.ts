import { OrderStatus } from "../enum/order.status";


export interface Order {
  cpf: string;
  creditCardNumero: string;
  nome: string;
  produto: string;
  preco: String;
  identificador: string;
  status_pedido: OrderStatus;
}