// * ARCHIVO A COMPLETAR
import { body } from "express-validator";
import {
  ProjectModel,
  TechnologyModel,
  UserModel,
} from "../../models/index.js";

export const createProjectValidation = [
  // TODO: 1. Validar code: obligatorio y único (ProjectModel).
   body("code")
    .notEmpty()
    .withMessage("El code no debe estar vacio"),
  // TODO: 2. Validar name y description como obligatorios. 
    body("name")
    .notEmpty()
    .withMessage("El name no debe estar vacio"),
     body("description")
    .notEmpty()
    .withMessage("la description no debe estar vacio"),
    
  // TODO: 3. Validar status: opcional y limitado a los estados permitidos.
    body("status")
    .optional()
    .isIn(["planning", "in_progress", "paused", "finish"])
    .withMessage("El status debe ser alguna de las opciones"),
  // TODO: 4. Validar start_date como fecha válida y budget como número positivo, ambos obligatorios. 
   body("start_date")
    .isIn()
    .withMessage("El start_date debe ser una fecha valida")
    .notEmpty()
    .withMessage("debe estar"),
      body("budget")
    .isIn()
    .withMessage("El budget debe ser un numero positivo")
    .notEmpty()
    .withMessage("debe estar")
  // TODO: 5. Validar leader_id: debe existir y pertenecer a un usuario activo (UserModel).
  .custom(async (leader_id) => {
    const usuario = await buscarUsuario(id);
    if (!usuario) {
        throw new Error("El usuario no existe");
    }
    return true;
})

  // TODO: 6. Validar technologies: lista de ids que existan (TechnologyModel).
  // ? Un usuario eliminado lógicamente no puede ser líder: comprobar que la búsqueda lo deje afuera.
];

export const updateProjectValidation = [
  // TODO: 7. Validar code como opcional y único, excluyendo el propio proyecto que se edita.
   body("code")
    .optional(),
  // TODO: 8. Validar name y description como opcionales y no vacíos.
   body("name")
    .optional()
    .notEmpty()
    .withMessage("no pude ser vacio"),
  // TODO: 9. Validar status, start_date y budget como opcionales, con las mismas reglas que al crear.
   body("status")
    .optional()
    .isIn(["planning", "in_progress", "paused", "finish"])
    .withMessage("El status debe ser alguna de las opciones"),

     body("start_date")
    .isIn()
    .withMessage("El start_date debe ser una fecha valida")
    .notEmpty()
    .withMessage("debe estar"),
      body("budget")
    .isIn()
    .withMessage("El budget debe ser un numero positivo")
    .notEmpty()
    .withMessage("debe estar"),
  // TODO: 10. Validar leader_id como opcional, existente y de un usuario activo.
   body("leader_id")
    .optional()
    .notEmpty()
    .withMessage("no debe ser vacio"),
  // TODO: 11. Validar technologies como opcional, con ids que existan.
  // ? Para saber qué proyecto se edita, el id se obtiene de los parámetros de la ruta (req.params).
];
