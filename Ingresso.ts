import { Pec } from './ProgramaEntradaCinema';
class Ingresso extends Pec {
  public Filme: string;
  private Valor: boolean;
  private Quantidade: boolean;

  setFilme(Filme: string): void {
    if (Filme == comedia) {
      this.Filme = Filme;
    }
  }
  getFilme() {
    return this.Filme;
  }
  setValor(Valor:boolean){
    if(Valor == >=0){
      return false;
    }else{
      return true;
    }
  }
  getValor(){
    return this.Valor;
  }
  setQuantidade(Quantidade:boolean){
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
