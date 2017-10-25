import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/user';
import { Empresa } from 'app/model/empresa';
import { EmpresaService } from 'app/services/empresa.service';
import { UsuarioService } from 'app/services/usuario.service';

@Component({
  selector: 'base-web-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public user: User;
  public empresas: Empresa[];

  constructor(private empresaService: EmpresaService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.user = new User();
    const selectEmp = new Empresa(0, 'Selecciona Empresa');

    this.empresaService.getEmpresas().subscribe(
      (empresas: any[]) => this.empresas = empresas,
      (error) => console.log(error)
    );

    this.user.belongs = selectEmp;

  }

  onSubmit(formValue: any) {
console.log(this.empresas);

    console.log(JSON.stringify(this.user));

    this.usuarioService.addUsuario(this.user);
  }

}
