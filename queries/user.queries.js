 import {UserModel} from "../models/user.model.js"
 import {HabilidadesModel} from "../models/habilidades.model.js";
 import {EducacionModel} from "../models/educacion.model.js";
 import {ExperienciaModel} from "../models/experiencia.model.js";
 import {ProductoModel} from "../models/producto.model.js";


 class UserQueries {

    async perfil( user ){
         try    {
             const query  = await UserModel.create(user) ;
             if (query) {
                 return {ok: true, data: query};
              }
         }catch (e) {
                console.log(' error  al ejecutar query',e );
                return {ok: false, data: null  }
         }
     }

     //CRUD PERFIL

     async registro(user){
         try    {
             const query  = await UserModel.create(user) ;
             if (query) {
                 return {ok: true, data: query};
             }
         }catch (e) {
             console.log(' error  al ejecutar query',e );
             return {ok: false, data: null  }
         }
     }

     async encontrarPerfil(condition = {}){
         try {
             const query = await UserModel.findOne({ where: condition});
             if(query) {
                 return { ok: true, data: query };
             }
         } catch (e) {
             console.log('Error al ejecutar query', e);
             return { ok: false, data: null };
         }
     }

     async actualizarPerfil(condition = {}){
         try {
             const query = await UserModel.update({
                 nombre: condition.nombre,
                 apellido: condition.apellido,
                 telefono: condition.telefono,
                 correo: condition.correo,
                 nacimiento: condition.nacimiento,
                 genero: condition.genero,
                 nacionalidad: condition.nacionalidad,
                 ocupacion: condition.ocupacion,
                 descripcion: condition.descripcion,
                 pais: condition.pais,
                 estado: condition.estado,
                 ciudad: condition.ciudad
             },{ where: {
                     id: condition.id,
                 }});
             if(query) {
                 return { ok: true, data: query };
             }
         } catch (e) {
             console.log('Error al ejecutar query', e);
             return { ok: false, data: null };
         }
     }


     // CRUD DE HABILIDADES
     async crearProductos( user ){
         try    {
             const query  = await ProductoModel.create(user) ;
             if (query) {
                 return {ok: true, data: query};
             }
         }catch (e) {
             console.log(' error  al ejecutar query',e );
             return {ok: false, data: null  }
         }
     }

     async encontrarProductos(condition = {}){
         try {
             const query = await ProductoModel.findAll({ where: condition});
             if(query) {
                 return { ok: true, data: query };
             }
         } catch (e) {
             console.log('Error al ejecutar query', e);
             return { ok: false, data: null };
         }
     }

     async actualizarProductos(condition = {}){
         try {
             const query = await ProductoModel.update({
                 nombre: condition.nombre,
                 precio: condition.precio,
                 expiracion: condition.expiracion,
                 notas: condition.notas,
                 stock: condition.stock,
                 activo: condition.activo,
                 img: condition.img
             },{ where: {
                     id: condition.id,
                 }});
             if(query) {
                 return { ok: true, data: query };
             }
         } catch (e) {
             console.log('Error al ejecutar query', e);
             return { ok: false, data: null };
         }
     }

     async eliminarProductos(condition = {}){
         try {
             const query = await ProductoModel.destroy({ where: condition});
             if(query) {
                 return { ok: true, data: query };
             }
         } catch (e) {
             console.log('Error al ejecutar query', e);
             return { ok: false, data: null };
         }
     }

     async findOne(condition = {}){
         try {
             const query = await UserModel.findOne({ where: condition});
             if(query) {
                 return { ok: true, data: query };
             }
         } catch (e) {
             console.log('Error al ejecutar query', e);
             return { ok: false, data: null };
         }
     }
 }

 export const userQueries = new UserQueries();
