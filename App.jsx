import { useState, useEffect } from "react";

import "./App.css";
import FormComponent from "./components/FormComponent";
import ListComponent from "./components/ListComponent";
import { BotaoLimpar } from "./components/BotoesComponents";

function App() {
  const [texto, setTexto] = useState("");
  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function adicionarTarefa() {
    if (texto.trim() !== "") {
      const tarefaJaExiste = tarefas.find(
        (tarefa) => tarefa.texto.toLowerCase() === texto.trim().toLowerCase()
      );

      if (tarefaJaExiste) {
        alert("Essa tarefa já foi adicionada!");
        return;
      }

      const novaTarefa = {
        texto: texto.trim(),
        concluida: false,
      };

      setTarefas([...tarefas, novaTarefa]);
      setTexto("");
    }
  }

  function limparTarefas() {
    setTarefas([]);
  }

  function removerTarefa(indiceRemover) {
    const listaAtualizada = tarefas.filter(
      (_, indice) => indice !== indiceRemover
    );

    setTarefas(listaAtualizada);
  }

  function concluirTarefa(indiceSelecionado) {
    const listaAtualizada = tarefas.map((tarefa, indice) => {
      if (indice === indiceSelecionado) {
        return {
          ...tarefa,
          concluida: !tarefa.concluida,
        };
      }
      return tarefa;
    });

    setTarefas(listaAtualizada);
  }

  return (
    <div className="container">
      {/* Header estruturado dentro do App */}
      <header className="header">
        <h1>Lista de Tarefas</h1>
      </header>

      <p className="digitado">Você digitou: {texto}</p>

      {tarefas.length === 0 && (
        <p className="vazio">Nenhuma tarefa cadastrada</p>
      )}

      <FormComponent
        texto={texto}
        adicionarTarefa={adicionarTarefa}
        setTexto={setTexto}
      />

      <ListComponent
        tarefas={tarefas}
        concluirTarefa={concluirTarefa}
        removerTarefa={removerTarefa}
      />

      {/* Footer estruturado dentro do App */}
      <footer className="footer">
        <p className="digitando">Total de tarefas: {tarefas.length}</p>
      </footer>

      {tarefas.length > 0 && (
        <BotaoLimpar limparTarefas={limparTarefas} />
      )}
    </div>
  );
}

export default App;