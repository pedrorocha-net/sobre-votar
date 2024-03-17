import React, { useState } from "react";
import query from "./api/query.js";

function App() {
  const [userInput, setUserInput] = useState(""); // Estado p/ armazenar o valor do input

  const handleInputChange = (event) => {
    setUserInput(event.target.value); // Atualiza o estado com o valor inserido no input
  };

  const handleSubmit = async () => {
    try {
      // Envia REQ c/ os dados do input para a API e aguarda a RES
      const response = await query({ prompt: userInput });
      console.log(response); // Exibe a RES no console
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src="../assets/logo-sv.png" alt="Sobre votar logo"/>
        </header>
        <h1>Sobre Votar AI</h1>
        <p>
          Descubra todas as informações sobre a votação nas eleições de Portugal
          em 2024, com a nossa Inteligência Artificial.
        </p>

        <div class="input-search">
          <label for="user-question">Digite sua pergunta</label>
          <input
            id="user-question"
            type="text"
            placeholder="Digite sua pergunta"
            value={userInput}
            onChange={handleInputChange} // Add evento de escuta para capturar a mudança no input
          />
          <button onClick={handleSubmit}>Enviar</button>
        </div>

        <div className="ai-logos">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

        <footer>
          <p>Sobre Votar © 2024. All Rights Reserved.</p>
          <img src="" alt="" />
        </footer>
      </div>
    </>
  );
}

export default App;
