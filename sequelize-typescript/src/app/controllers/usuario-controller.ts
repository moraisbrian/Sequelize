import { Request, Response } from 'express';
import { Usuario } from '../models/usuario';

export const usuarioController = {
    async adicionar(req: Request, res: Response) {
        const { nome, sobrenome, email } = req.body;
        const usuario = await Usuario.create({
            nome,
            sobrenome,
            email
        });
        res.status(201).json(usuario);
    }
}