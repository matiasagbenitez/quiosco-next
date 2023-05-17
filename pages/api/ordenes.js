import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
    const prisma = new PrismaClient();

    if (req.method === 'POST') {
        const orden = await prisma.orden.create({
            data: {
                pedido: req.body.pedido,
                total: req.body.total,
                nombre: req.body.nombre,
                fecha: req.body.fecha
            }
        });
        res.status(200).json(orden);
    }

    if (req.method === 'GET') {
        const ordenes = await prisma.orden.findMany({
            where: {
                estado: false
            }
        });
        res.status(200).json(ordenes);
    }
}