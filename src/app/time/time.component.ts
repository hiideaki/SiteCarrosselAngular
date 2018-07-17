import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  membros = [

        ['andreneves.jpg', 'André Neves', 'Hardware', 'Estudante de engenhara elétrica, 4º ano, membro da equipe de Hardware.'],

        ['daniloweber.jpg', 'Danilo Weber', 'Software e Gestão', 'Danilo é aluno do quarto ano de Ciência da Computação, está a 3 anos no time e é levemente perturbado por documentação de código. Atualmente atuando como Coordenador Geral da equipe e como Co-Coordenador da área de Software do Carrossel Caipira, tem como objetivos no Carrossel tornar o time uma referência na modalidade VSSS (Very Small Size Soccer) assim como aumentar a visibilidade e participação da equipe no ambiente universitário.'],

        ['izabelepizzo.jpg', 'Izabele Pizzo', 'Pesquisa', 'Estudante do terceiro ano de Arquitetura e Urbanismo pela Unesp de Bauru, participante da equipe de pesquisa e atuante nas áreas de projetos de design, modelagem e movelaria. '],

        ['jorgevicente.png', 'Jorge Vicente', 'Pesquisa', 'Estudante de Licenciatura em Matemática, preocupado com a qualidade no ensino e aprendizagem dos alunos nas áreas de matemática, física, eletrônica, informática, mecânica e correlatas.\nHobbista e entusiasta por tecnologias físicas, virtuais, analógicas e digitais.\nParticipante na área de pesquisa, em constante empenho pelo crescimento do time seja pela imagem e divulgação do mesmo, seja pela qualidade e variedade dos projetos pesquisados e desenvolvidos por todos.\nCriador e produtor de conteúdo para os canais <a href="https://www.youtube.com/user/mamatetemamatica" target="_blank" class="profileReference">Matemática Descomplicada</a> e <a href="https://www.youtube.com/meunomeejorgevicente" target="_blank" class="profileReference">Canal JV</a> na plataforma de vídeos youtube.com.'],

        ['marcelohideaki.jpg', 'Marcelo Hideaki', 'Pesquisa', 'Marcelo está no terceiro ano do curso de Ciência da Computação e participa na equipe de pesquisa.'],

        ['marcelonunez.jpg', 'Marcelo Nuñez', 'Software', 'Estudante do curso de Bacharelado em Ciências da Computação, está atualmente no 3° ano do curso. Como membro da área de software, procura ajudar com o que sabe o desenvolvimento do software, e está sempre disposto a aprender coisas novas para o time.'],

        ['matheusviana.jpg', 'Matheus Viana', 'Hardware', 'Estudante do 4º de engenharia elétrica, membro da equipe de hardware.'],

        ['paulomaia.jpeg', 'Paulo Maia', 'Pesquisa', 'Estudante de ciência da computação, integra a equipe de pesquisa do Carrossel, trabalhando especificamente na programação de microcontroladores.'],

        ['rafaeltakagi.jpg', 'Rafael Takagi', 'Software', 'Estudante do terceiro ano do curso de Ciência da Computação, procura sempre poder aprender e passar conhecimentos ao atuar no time de Software. Atualmente está trabalhando na produção de estratégias de jogo para os robôs.'],

        ['rodrigobueno.jpeg', 'Rodrigo Bueno', 'Software', 'Rodrigo Bueno Rodrigues é aluno do Curso de Ciências da Computação na Unesp/Bauru. Atualmente coordenando a área de software, busca levar a equipe a um novo patamar com o uso de novos métodos e técnicas para adquirir o título nacional na categoria Very Small Size de futebol de robôs.'],

        ['thiagomochetti.jpg', 'Thiago Mochetti', 'Hardware', 'Thiago é técnico em eletrônica pelo CTI e cursa Engenharia Elétrica na UNESP. Apaixonado pelo mundo acadêmico, dá aulas desde pequeno e é ele mesmo aluno do tempo. É o integrante mais jovem do time, e faz uso disso para motivar a galera.']
    ];
  
  n = this.membros.length;
  currentIndex = 0;
  pessoa = this.membros[0];
    
  constructor() { }

  ngOnInit() {
  }
  
  horizontalScrollIntoView(i) {
      var parWid = document.querySelector('div.displayTime').clientWidth;
      var unitWid = document.getElementById(i).clientWidth;
      var scrolledLeft = document.querySelector('div.displayTime').scrollLeft + parWid / 2;
      var offsetLeft = document.getElementById(i).offsetLeft
      var dir = scrolledLeft > offsetLeft ? -1 : 1;
      var qtFrames = 50;
      var inc = Math.abs(offsetLeft - scrolledLeft + unitWid / 2) / qtFrames;
      var tempo = 0;
      
      var incremento = function() {
          document.querySelector('div.displayTime').scrollLeft = scrolledLeft - parWid / 2 + inc * dir * tempo;
          tempo++;
          if(tempo < qtFrames) {
            setTimeout(incremento, 1);
          }
      }   
      incremento();
  }    
    
 
      
  onMemberClick(i) {
      this.horizontalScrollIntoView('membro' + i);
      this.currentIndex = i;
      this.pessoa = this.membros[i];
  }
    
  scrollBackward() {
      if(this.currentIndex > 0) {
          this.currentIndex--;
          this.horizontalScrollIntoView('membro' + this.currentIndex);
          this.pessoa = this.membros[this.currentIndex];
      }
  }
    
  scrollForward() {

      if(this.currentIndex < this.n - 1) {
          this.currentIndex++;
          this.horizontalScrollIntoView('membro' + this.currentIndex);
          this.pessoa = this.membros[this.currentIndex];
      }
  }
    
  windowResize() {
      var aux = this;
      setTimeout(function() {
          aux.horizontalScrollIntoView('membro' + aux.currentIndex);
      }, 400);
      
  }
}
