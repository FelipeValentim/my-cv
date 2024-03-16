import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css";
import GoogleMap from "./GoogleMap";
import { Toast } from "./SnackBar";

const Contact = () => {
  const sendMail = (e) => {
    e.preventDefault();

    Toast("Envio não implementado");
  };

  return (
    <div className="contact fade">
      <h1>Contate-me</h1>
      <div className="communication">
        <div>
          <FontAwesomeIcon icon={faLocation} />

          <h2>Endereço</h2>
          <p>Rio de Janeiro, RJ, Brasil</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <h2>Email</h2>
          <p>felipevalentimdasilva@gmail.com</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          <h2>Telefone</h2>
          <p>(21) 99785-6492</p>
        </div>
      </div>
      <div className="report">
        <form className="form">
          <div className="full-name">
            <input placeholder="Nome" />
            <input placeholder="Sobrenome" />
          </div>
          <input placeholder="Email" />
          <textarea placeholder="Sua mensagem" rows={10} />
          <button onClick={sendMail}>Enviar</button>
        </form>
        <div className="map">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;
