import { Order } from "@prisma/client";
import { OrderCreateInput } from "./order.type";
import prisma from "../../../shared/prisma";
  
  export const OrderService = {
    createOrder: async (orderData: OrderCreateInput): Promise<Order> => {
      return prisma.order.create({ data: orderData });
    },
  
    getAllOrdersForRole: async (role: string, userId?: string) => {
        try {
          if (role === 'admin') {
            // If the role is admin, return all orders
            return prisma.order.findMany();
          } else if (role === 'customer' && userId) {
            // If the role is customer, return orders specific to the customer
            return prisma.order.findMany({
              where: { userId },
            });
          } else {
            throw new Error('Invalid role');
          }
        } catch (error: any) {
          throw new Error(error.message);
        }
      },
  
    getOrderById: async (orderId: string): Promise<Order | null> => {
      return prisma.order.findUnique({
        where: {
          id: orderId,
        },
      });
    },
  };
  