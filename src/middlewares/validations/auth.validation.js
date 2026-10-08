// * ARCHIVO A COMPLETAR
import { body } from "express-validator";
import { UserModel, ProfileModel } from "../../models/index.js";

export const registerValidation = [
  // TODO: 1. Validar username: obligatorio, entre 3 y 20 caracteres y único (UserModel).
    body("username")
    .trim()
    .notEmpty()
    .withMessage("El nombre no debe estar vacio")
    .isLength({ min: 3, max: 20 })
    .withMessage("El nombre debe tener entre 3 y 20 caracteres")
    .unique
    .withMessage("El nombre solo puede contener letras y espacios"),
  // TODO: 2. Validar email: obligatorio, con formato válido y único.
    body("email")
    .trim()
    .notEmpty()
    .withMessage("El email no debe estar vacio")
    .isEmail()
    .withMessage("El email debe tener un formato correcto")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/)
    .withMessage("El nombre solo puede contener letras y espacios"),
  // TODO: 3. Validar password: obligatoria, con mínimo de 8 caracteres.
    body("password")
    .trim()
    .notEmpty()
    .withMessage("la password no debe estar vacio")
    .isLength({ min: 8})
    .withMessage("la password debe tener 8 caracteres"),
  // TODO: 4. Validar role: opcional y limitado a los roles permitidos.
    body("role")
    .optional()
    .matches()
    .withMessage("solo puede tener los roles")
  // TODO: 5. Validar profile.employee_number: obligatorio y único (ProfileModel).
  
  // TODO: 6. Validar profile.first_name y profile.last_name como obligatorios, y profile.phone como opcional.
  // ? Las unicidades requieren una validación personalizada asíncrona.
];

export const loginValidation = [
  // TODO: 7. Validar email: obligatorio y con formato válido.
  // TODO: 8. Validar password: obligatoria.
];
