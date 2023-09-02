"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
exports.OrderService = {
    createOrder: (orderData) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma_1.default.order.create({ data: orderData });
    }),
    getAllOrdersForRole: (role, userId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (role === 'admin') {
                // If the role is admin, return all orders
                return prisma_1.default.order.findMany();
            }
            else if (role === 'customer' && userId) {
                // If the role is customer, return orders specific to the customer
                return prisma_1.default.order.findMany({
                    where: { userId },
                });
            }
            else {
                throw new Error('Invalid role');
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }),
    getOrderById: (orderId) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma_1.default.order.findUnique({
            where: {
                id: orderId,
            },
        });
    }),
};
