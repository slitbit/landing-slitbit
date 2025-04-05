import { useEffect, useState } from "react";
import { FacebookIcon, GithubIcon, LinkedinIcon } from "./svgIcons.component";
import emailjs from "emailjs-com";
import { formatPhoneNumber } from "../../functions/util-functions.function";

export const ContactForm = () => {
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(
    "Gracias por tu mensaje, te contactaremos en breve"
  );
  const [success, setSuccess] = useState(false);
  const [enableButton, setEnableButton] = useState(true);

  const SendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.SERVICE_EMAIL || "",
        import.meta.env.TEMPLETE_EMAIL || "",
        {
          from_email: Email,
          from_name: Name,
          from_phone: formatPhoneNumber(Phone),
          message: Message,
        },
        import.meta.env.KEY_EMAIL || ""  
      )
      .then(() => {
        setEmail("");
        setMessage("");
        setName("");
        setPhone("");
        setSuccess(true);
        setEnableButton(true); 
      })
      .catch((error: any) => {
        console.error("Error al enviar el correo:", error);
        setSuccessMessage(
          "Error al enviar el correo. Por favor, inténtalo de nuevo."
        );
        setSuccess(true);
        setEnableButton(true);  
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  }, [success]);

  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({
    email: undefined,
    name: undefined,
    phone: undefined,
    message: undefined,
  });

  const formValidation = (e: React.FormEvent) => {
    setEnableButton(false); 
    const newErrors: { [key: string]: string | undefined } = {};
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (!Email.trim()) {
      newErrors.email = "El correo electrónico es requerido.";
    }
    if (!emailRegex.test(Email)) {
      newErrors.email = "El correo electrónico no es válido.";
    }

    if (!Name.trim()) {
      newErrors.name = "El nombre es requerido.";
    }

    if (!Phone.trim()) {
      newErrors.phone = "El telefono es requerido.";
    }
    if (!phoneRegex.test(Phone)) {
      newErrors.phone = "El telefono no es válido.";
    }
    if (!Message.trim()) {
      newErrors.message = "El mensaje es requerido.";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      SendEmail(e);
    } else {
      setEnableButton(true); 
    }
  };

  const validatePhone = (phoneNumber : string ) => {
    const numericPhone = phoneNumber.replace(/\D/g, ""); 
    if (numericPhone && !isNaN(Number(numericPhone))) {
      if(numericPhone.length > 10) return;
      setPhone(numericPhone);
    } else {
      setPhone("");
    }
     
  };

  const inputValidation = (input: string, type: string) => {
    if(type === "email" || type === "name"){
      if(input.length > 45) return;
      switch (type) {
        case "email":
          setEmail(input);
          break;
        case "name":
          setName(input);
      }
    }
    if(type === "message"){
      if(input.length > 275) return;
      setMessage(input);
    }
    
  };

  

  return (
    <div className="contact-us">
      <div className="contact-us-form">
        {success ? (
          <div className="contact-us-form-success-message">
            <h3>{successMessage}</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
          </div>
        ) : (
          <div className="contact-us-form-container">
            <p>Tu correo</p>
            <div className={errors.email ? "contact-us-input error" : "contact-us-input"}>
              <input
                type="text"
                value={Email}
                onChange={(e) => inputValidation(e.target.value, "email")}
              />
            </div>
            {errors.email && <p className="error-label">{errors.email}</p>}
            <div className="contact-us-data-container">
              <div style={{margin:0, padding: 0 }}>
              <p>Nombres</p>
              <input onChange={(e) => inputValidation(e.target.value, "name")} value={Name}
               type="text"
                 className={errors.name ? "contact-us-input error" : "contact-us-input"} style={{width:"95%"}}/>
                  {errors.name && <p className="error-label">{errors.name}</p>}
              </div>
              <div style={{margin:0, padding: 0 }}>
              <p>Numero de telefono</p>
            <input
              type="text"
              value={formatPhoneNumber(Phone)}
        
              onChange={(e) =>validatePhone(e.target.value)}
              className={errors.phone ? "contact-us-input error" : "contact-us-input"} style={{width:"95%"}}/>
 {errors.phone && <p className="error-label">{errors.phone}</p>}

              </div>
           
             </div> 
         


           
            <p>Tu mensaje</p>
            <textarea
              rows={4}
              value={Message}
              className={errors.message ? "contact-us-input error" : "contact-us-input"}
              onChange={(e) => inputValidation(e.target.value, "message")}
            ></textarea>
            {errors.message && <p className="error-label">{errors.message}</p>}
            <div className="contact-us-form-button">
              <button
                className="button"
                onClick={formValidation}
                disabled={!enableButton}
              >
                Enviar
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="contact-us-info">
        <h2>Contactanos</h2>
        <div>
        <h4>slitbit.software.solutions@gmail.com</h4>
        <h4>+52 998 355 0769</h4>
        </div>

        <h4>
          No esperes mas y contacanos para hacer tu cotizacion, puedes preguntar
          sin compromiso, pagina web, desarrollo de aplicaciones moviles... no
          importa nosotros te brindamos asesoria.
        </h4>
        <h3>Otra forma de contactarnos</h3>
        <div className="contact-us-info-socials">
          <a className="contact-us-info-socials-icon" href="https://www.linkedin.com/in/slitbit-software-solutions-56376734a/" target="_blank">
            <LinkedinIcon />
          </a>
          <a className="contact-us-info-socials-icon" href="https://www.facebook.com/profile.php?id=61572596259247" target="_blank">
            <FacebookIcon />
          </a>
          <a className="contact-us-info-socials-icon" href="https://github.com/slitbit" target="_blank">
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
