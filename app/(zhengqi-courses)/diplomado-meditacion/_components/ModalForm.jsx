"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function ModalForm({ onClose, pdfLink }) {
	const [buttonText, setButtonText] = useState("Descargar PDF");
	const [phone, setPhone] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		setButtonText("Descargando...");

		// Obtiene el modal y el mensaje
		// const modalMessage = document.getElementById("modalMessage");

		// Muestra que se está enviando el formulario
		// modalMessage.textContent = "Submitting form...";

		// Realiza la petición AJAX para enviar el formulario
		let xhr = new XMLHttpRequest();
		xhr.open("POST", event.target.action);
		xhr.onreadystatechange = function () {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				if (xhr.status === 200) {
					// let response = xhr.responseText;
					// modalMessage.textContent = response; // Muestra la respuesta en el modal
					document.getElementById("registration-form").reset();
				} else {
					// Respuesta de error
					modalMessage.textContent = "Error: Something went wrong.";
				}
				setTimeout(onClose, 800);
				window.location.href = pdfLink;
			}
		};
		xhr.send(new FormData(event.target));
	};

	return (
		<>
			<form
				id="registration-form"
				action="https://script.google.com/macros/s/AKfycbwCQJzutkCwM5Mbo8ScF5eiQDhbQExnh6szHlN3bjFmPckY8a52TkJvVHZjYfY2Y1td/exec"
				method="POST"
				onSubmit={handleSubmit}
			>
				<div className="form-group">
					<label htmlFor="name">Nombre:</label>
					<input
						placeholder="Nombre"
						type="text"
						id="name"
						name="Nombre"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Correo:</label>
					<input
						placeholder="correo@ejemplo.com"
						type="email"
						id="email"
						name="Email"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="phone">Teléfono:</label>
					<PhoneInput
						country={"es"}
						value={phone}
						onChange={setPhone}
						inputProps={{
							name: "Telefono",
							required: true,
							autoFocus: true,
						}}
					/>
				</div>
				<label className="consent">
					<input type="checkbox" id="consent" name="Consent" />
					Me gustaría recibir comunicaciones y notificaciones electrónicas de
					Escuela de Libertad.
				</label>
				<div className="form-button">
					<button type="submit" id="submit-button" value="sumbit">
						{buttonText}
					</button>
				</div>
			</form>
			<div id="myModal" className="modal">
				<div className="modal-content">
					<span className="close" onClick={onClose}>
						&times;
					</span>
					<p id="modalMessage"></p>
				</div>
			</div>
		</>
	);
}

export default ModalForm;
