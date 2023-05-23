import express from "express";
import {userController} from '../controllers/user.controller.js'
import {validateToken} from "../middlewares/accessToken.middleware.js";



export class  Routes   {

    routes(app =  express.application)  {
        app.get('/', (req, res) => {
            res.send(" hola mundo");
        }) ;

        app.post('/login', userController.login);

        app.route('/crear_productos').post([validateToken.validateJWT], userController.crearProductos);

        app.route('/encontrar_productos').get(userController.encontrarProductos);

        app.route('/actualizar_productos').patch([validateToken.validateJWT], userController.actualizarProductos);

        app.route('/eliminar_productos').post([validateToken.validateJWT], userController.eliminarProductos);

    }
}
