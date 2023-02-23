import { Pec } from './ProgramaEntradaCinema';
class Ingresso extends Pec {
  public Filme: string;
  private Valor: number = 0;
  private Quantidade: number = 0;

  setFilme(Filme: string): void {
    if (Filme == comedia) {
      this.Filme = Filme;
    }
  }
  getFilme() {
    return this.Filme;
  }
  setValor(Valor:number):void{
    if(Valor == >=0){
      return false;
    }else{
      return true;
    }
  }
  getValor(){
    return this.Valor;
  }
  setQuantidade(Quantidade:number):void{
    if(Quantidade == >=0){
      return false;
    }else{
      return true;
    }
  }
  getQuantidade(){
    return this.Quantidade;
  }
}
