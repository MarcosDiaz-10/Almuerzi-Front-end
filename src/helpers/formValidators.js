export const formRegisterValidators = {
    name: [
        (value) => {
            if( value.length < 2 ) return false;
            return true;
        }, 'El nombre de usuario debe ser de más de dos caracteres'
    ],
    email: [
        (value) => {
            if( value.length < 4 ) return false;
            if ( !value.includes('@') ) return false;
            return true;
        },'El correo debe de tener una @ y ser mayor de dos caracteres'
    ],
    password: [
        (value) => {
            if( value.length < 8 ) return false;
            return true;
        }, 'La contraseña debe tener más de 8 caracteres'
    ]
};

export const formLoginValidators = {

    email: [
        (value) => {
            if( value.length < 4 ) return false;
            if ( !value.includes('@') ) return false;
            return true;
        },'El correo debe de tener una @ y ser mayor de dos caracteres'
    ],
    password: [
        (value) => {
            if( value.length < 8 ) return false;
            return true;
        }, 'La contraseña debe tener más de 8 caracteres'
    ]
};



