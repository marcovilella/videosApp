import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IListaFilmes } from '../models/IFilmeAPI.models';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  lingua = 'pt-BR';
  regiao = 'BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=2896795d7d5bdf8445f3f9dc6fa32877';

  constructor(
    private http: HttpClient,
    public toastController: ToastController,
    ) { }

  buscarFilmes(busca: string): Observable<IListaFilmes>{
    const url = `${this.apiURL}search/movi e${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;
    console.log(url);
    return this.http.get<IListaFilmes>(url);
  }
  async exibirErro() {
    const toast = await this.toastController.create({
      message: 'Erro ao fazer busca.',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
