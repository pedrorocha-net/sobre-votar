import { useState } from "react";
import logo from "./assets/sobre-votarai-logo.png";
import openai1 from "./assets/openai-1.jpg";
import openai2 from "./assets/openai-2.jpg";
import openai3 from "./assets/openai-3.jpg";
import gemini from "./assets/gemini.jpg";
import flowiseai from "./assets/flowiseai.jpg";

function App() {
  const [userInput, setUserInput] = useState(""); // Estado p/ armazenar o valor do input
  const [responseData, setResponseData] = useState(null); // Estado p/ armazenar os dados da resposta da API

  const handleInputChange = (event) => {
    setUserInput(event.target.value); // Atualiza o estado com o valor inserido no input
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Sobre votar logo" />
        </header>

        <main>
          <p>
            Descubra todas as informações sobre as eleições de Portugal de 2024,
            com a nossa Inteligência Artificial.
          </p>

          <div className="input-search">
            <label htmlFor="user-question">Como posso ajudar?</label>
            <input
              id="user-question"
              type="text"
              placeholder="Digite sua pergunta..."
              value={userInput}
              onChange={handleInputChange} // Add evento de escuta para capturar a mudança no input
            />
            <button>Perguntar</button>
          </div>

          {/* Renderize os dados da RES da API */}
          {responseData && (
            <div className="api-response">
              <h2>Resposta da API:</h2>
              <pre>{JSON.stringify(responseData, null, 2)}</pre>
            </div>
          )}

          <div className="ai-logos">
            <img src={openai1} alt="" />
            <img src={openai2} alt="" />
            <img src={openai3} alt="" />
            <img src={gemini} alt="" />
            <img src={flowiseai} alt="" />
          </div>
        </main>

        <footer>
          <p>Sobre Votar.AI © 2024. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
