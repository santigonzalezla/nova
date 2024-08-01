import React, { useRef, useState } from "react";
import './css/contact.css';

const ContactForm: React.FC = () =>
{
    const form = useRef<HTMLFormElement | null>(null);
    const [showBanner, setShowBanner] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        project_description: "",
        contact_preference: selectedOption,
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) =>
    {
        setFormData(prevFormData =>
        {
            const {name, value} = e.target;

            return {
                ...prevFormData,
                [name]: value,
            }
        })
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) =>
    {
        e.preventDefault();

        try
        {
            const res = await fetch('/api/sendEmail.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    from: 'delivered@resend.dev',
                    to: 'delivered@resend.dev',
                    subject: 'Hello World',
                    html: '<strong>It works!</strong>',
                    text: 'It works!',
                }),
            });

            const data = await res.json();
            console.log(data);
        }
        catch (e)
        {
            console.error(e);
        }

        setFormData({
            full_name: "",
            email: "",
            phone: "",
            service: "",
            budget: "",
            project_description: "",
            contact_preference: selectedOption,
        });
        setSelectedOption('');
        setShowBanner(true);
        setTimeout(() => {
            setShowBanner(false);
        }, 10000);


    };

    const handleSelectChange = (e: { target: { value: React.SetStateAction<string>; }; }) =>
    {
        setSelectedOption(e.target.value);
    }

    return (
        <form className="contact-right-form" ref={form} onSubmit={handleSubmit}>
            <div className="contact-right-form-info">
                <div className="form-input">
                    <label>Nombre Completo:</label>
                    <input
                        type="text"
                        placeholder={"Nombre"}
                        name={"full_name"}
                        value={formData.full_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-input">
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder={"Correo electrónico"}
                        name={"email"}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-input">
                    <label>Teléfono:</label>
                    <input
                        className="number-form"
                        type="number"
                        placeholder={"Número de teléfono"}
                        name={"phone"}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="contact-right-form-details">
                <div className="form-input">
                    <label>Servicio en el que estás interesado:</label>
                    <input
                        type="text"
                        placeholder={"ej. Landing Page, E-commerce, etc."}
                        name={"service"}
                        value={formData.service}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-input">
                    <label>Presupuesto aproximado:</label>
                    <input
                        className="number-form"
                        type="number"
                        placeholder={"ej. 5.000.000 - 7.000.000"}
                        name={"budget"}
                        value={formData.budget}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="form-input">
                <label>Cuentanos de ti y lo que quieres hacer con tu proyecto:</label>
                <textarea
                    placeholder={"Danos más información sobre tu idea para estar preparados y darte las mejores opciones."}
                    name={"project_description"}
                    value={formData.project_description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-input">
                <label>¿Cómo quieres que te contactemos?</label>
                <select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    name={"contact_preference"}
                    required
                >
                    <option>Escoge una opción de contacto</option>
                    <option value="zoom">Quiero agendar una llamada por zoom</option>
                    <option value="telegram">Quiero ser contactado via Telegram</option>
                    <option value="whatsapp">Quiero ser contactado via WhatsApp</option>
                    <option value="email">Quiero ser contactado via Email</option>
                </select>
            </div>
            <button>Enviar solicitud de contacto</button>
        </form>
    );
}

export default ContactForm;