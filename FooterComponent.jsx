function FooterComponent({ totalTarefas }) {
  return (
    <footer className="footer">
      <p className="digitando">Total de tarefas: {totalTarefas}</p>
    </footer>
  );
}

export default FooterComponent;