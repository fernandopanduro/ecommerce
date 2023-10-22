import prismadb from "@/lib/prismadb";

export const getTotalRevenue = async (storeId: string) => {
  const paidOrders = await prismadb.order.findMany({
    where: {
      storeId,
      isPaid: true,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  const totalRevenue = paidOrders.reduce((total, order) => {
    const ordertotal = order.orderItems.reduce((orderSum, item) => {
      return orderSum + item.product.price;
    }, 0);
    return total + ordertotal;
  }, 0);
  return totalRevenue;
};
