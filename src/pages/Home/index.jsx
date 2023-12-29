import { useRef, useState } from "react";
import { v4 } from "uuid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { AddButton, Container, Produto, Lixeira } from "./styled";
//react hooks
//useRef
//useState / estado => é uma vareavel que toda vez que troca de valor a tela irá recarregar os valores

function Home() {
  const inputRef = useRef();
  const [produtos, setProdutos] = useState([]);
  

  function AddProduto() {
    vazio()
    setProdutos([{ id: v4(),nome: inputRef.current.value }, ...produtos]);
    // spread operator ... ele adicona os novos elementos jutamente com os que ja estão presentes nop array
    // inputRef.current.value => informação retirada no objeto do console.
    inputRef.current.value = ""
  }

  function vazio (){
    if(inputRef.current.value === ""){
      preventDefault
    }
  }

  function deletar(id){
    setProdutos(produtos.filter(produto => produto.id !==id))
  }

  return (

    <Container>

      <h1>Lista de Compras</h1>

      <input placeholder="Adicionar Novo Produto" ref={inputRef} />

      <AddButton onClick={AddProduto}>
        Adicionar
      </AddButton>

      {produtos.map((produto) => (
        // map pega item por item para ser usado.
        <Produto key={produto.id}>

          <p>{produto.nome}</p>

          <Lixeira onClick={() => deletar(produto.id)}>

            <FontAwesomeIcon icon={faTrashCan}/>

          </Lixeira>

        </Produto>

      ))}

    </Container>
  );
}

export default Home;
