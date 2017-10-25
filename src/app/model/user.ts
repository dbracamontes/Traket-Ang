import {Empresa} from './empresa';
import {CredencialesUsuario} from './credenciales_usuario';

export class User {

    public id: number;
    public nombre: string;
    public apellidoPaterno: string;
    public apellidoMaterno: string;
    public telefono: number;
    public ext: number;
    public email: string;
    public belongs: Empresa;
    public credencialesUsuario: CredencialesUsuario;


    constructor() {
        this.belongs = new Empresa();
        this.credencialesUsuario = new CredencialesUsuario();
    }

    /*constructor(id: number, firstName: string, lastName: string,
        email: string, creationDate: Date) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.creationDate;
    }*/

}
