export function BotaoAdicionar({ adicionarTarefa }) {
  return (
    <button onClick={adicionarTarefa}>
      Adicionar
    </button>
  );
}

export function BotaoLimpar({ limparTarefas }) {
  return (
    <button onClick={limparTarefas}>
      Limpar Tarefas
    </button>
  );
}