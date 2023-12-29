import { useRef, useState } from "react";
import { v4 } from "uuid";

//react hooks
//useRef
//useState / estado => é uma vareavel que toda vez que troca de valor a tela irá recarregar os valores

function Home() {
  const inputRef = useRef();
  const [produtos, setProdutos] = useState([]);

  function AddProduto() {
    console.log(v4());
    setProdutos([{ id: v4(),nome: inputRef.current.value }, ...produtos]);
    // spread operator ... ele adicona os novos elementos jutamente com os que ja estão presentes nop array
    // inputRef.current.value => informação retirada no objeto do console.
  }

  return (
    <div>
      <h1>Lista de Compras</h1>
      <input placeholder="Produto" ref={inputRef} />
      <button onClick={AddProduto}>Adicionar</button>

      {produtos.map((produto) => (
        // map pega item por item para ser usado.
        <div key={produto.id}>{produto.nome}</div>
      ))}
    </div>
  );
}

export default Home;
