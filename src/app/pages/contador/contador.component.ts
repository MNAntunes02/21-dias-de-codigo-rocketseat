import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  numContador: any = '00:00:00';
  hh : number = 0;
  mm : number = 0;
  ss : number = 0;
  tempo: number = 1000;//Quantos milésimos valem 1 segundo?
  cron: any = 0;
  format : string = '';
  IsStart : boolean = false;
  botaoSelecionado = "";

  constructor() { }

  ngOnInit(): void {
  }

  maisContador(): void{
    this.numContador++;
  }

  menosContador(): void{
    this.numContador--;
  }

  //Inicia o temporizador
  start(): void {
    if (!this.IsStart) {
      this.IsStart = true;
      this.cron = setInterval(() => { this.timer(); }, this.tempo);
    }
    this.botaoSelecionado = "start"
  }

  //Para o temporizador mas não limpa as variáveis
  pause() {
    this.IsStart = false;
    clearInterval(this.cron);
    this.botaoSelecionado = "pause"
  }

  //Para o temporizador e limpa as variáveis
  stop() {
    this.IsStart = false;
    clearInterval(this.cron);
    this.hh = 0;
    this.mm = 0;
    this.ss = 0;

    this.numContador = '00:00:00';

    this.botaoSelecionado = "stop"
  }

  //Faz a contagem do tempo e exibição
  timer() {
    
    this.ss++; //Incrementa +1 na variável ss

    if (this.ss == 60) { //Verifica se deu 59 segundos
        this.ss = 0; //Volta os segundos para 0
        this.mm++; //Adiciona +1 na variável mm

        if (this.mm == 60) { //Verifica se deu 59 minutos
            this.mm = 0;//Volta os minutos para 0
            this.hh++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    this.format = (this.hh < 10 ? '0' + this.hh : this.hh) + ':' + (this.mm < 10 ? '0' + this.mm : this.mm) + ':' + (this.ss < 10 ? '0' + this.ss : this.ss);

    //Insere o valor tratado no elemento counter
    this.numContador = this.format;

    //Retorna o valor tratado
    return this.format;
  }

}
