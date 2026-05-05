/*
EJERCICIO 5
• Define un tipo literal para roles de usuario, por ejemplo: type Rol =
'admin' | 'editor' | 'viewer';.
• Usa Record<Rol, boolean> para crear un tipo Permisos.
• Declara una variable permisosUsuario de tipo Permisos y asígnale
valores booleanos para cada rol.
• Muestra por consola cómo acceder a uno de los permisos.
*/

type Rol = 'admin' | 'editor' | 'viewer';
type Permisos = Record<Rol, boolean>;
let permisosUsuario: Permisos = {
admin: true,
editor: false,
viewer: false
};

console.log(permisosUsuario.admin); 
console.log(permisosUsuario.editor); 
console.log(permisosUsuario.viewer); 