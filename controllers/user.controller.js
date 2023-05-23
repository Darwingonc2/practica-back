import {request , response} from "express";
import {userQueries} from "../queries/user.queries.js";
import {Payload} from "../helpers/payload.js";
import {Telegraf} from "telegraf";
import bcrypt from "bcrypt";


class UserController {

    static payload = new Payload()

    //CRUD PERFILES

    async login(req, res){
        const body = req.body;
        const query = await userQueries.findOne({
            correo: body.correo,
            password: body.password
        });

        if(query && query.ok){
            try {
                const token = UserController.payload.createToken(query.data);
                return res.status(200).send({
                    ok: true,
                    token: token,
                    data: query.data
                });
            } catch (e){
                return res.status(200).send({
                    ok: false,
                    data: null
                });
            }

        } else {
            return res.status(200).send({
                ok: false,
                data: null
            });
        }
    }

    async registros (req, res){
        const body = req.body;
        /*body.password = await bcrypt.hash(body.password, 8);*/
        const query =   await userQueries.registro(body);
        if(query.ok){
            try {
                const token = UserController.payload.createToken(query.data);
                return res.status(200).send({
                    ok: true,
                    token: token,
                    data: query.data
                });
            } catch (e){
                return res.status(200).send({
                    ok: false,
                    data: null
                });
            }

        } else {
            return res.status(200).send({
                ok: false,
                data: null
            });
        }
    }

    // CRUD DE HABILIDADES

    async crearProductos (req, response){
        const body = req.body;
        const query =   await userQueries.crearProductos(body) ;
        if ( query.ok) {
            return response.status(200).json({ok: true,  data: query.data});
        }else {
            return   response.status(403).json({ok: false, message: 'error al crear la habilidad'});
        }
    }

    async encontrarProductos (req, res){
        const body = req.body;
        const query = await userQueries.encontrarProductos({
        });
        if (query.ok) {
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    async actualizarProductos(req,res) {
        const body = req.body;
        console.log(body)
        const query = await userQueries.actualizarProductos({
            id: body.id,
            nombre: body.nombre,
            precio: body.precio,
            expiracion: body.expiracion,
            notas: body.notas,
            stock: body.stock,
            activo: body.activo,
            img: body.img
        });
        if(query.ok){
            return res.status(200).json({ok: true, data: query.data});
        }else{
            return res.status(403).json({ok: false, message: 'No found'});
        }
    }

    async eliminarProductos (req, res){
        const body = req.body;
        const query = await userQueries.eliminarProductos({
            id: body.id,
        });

        console.log('query result', query)
        if (query && query.ok) {
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

}

export const userController = new UserController();


