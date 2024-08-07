function ModalForm({ onClose }) {
	const handleSubmit = (event) => {
		event.preventDefault();

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
				setTimeout(onClose, 500);
				window.location.href =
					"https://drive.google.com/uc?export=download&id=1irqjdiN1pbgtDfNmdZvTs3hFclS0YyQO";
			}
		};
		xhr.send(new FormData(event.target));
	};

	return (
		<>
			<form
				id="registration-form"
				action="https://script.google.com/macros/s/AKfycbw7UUztXu5935Epcm8M9FCVaGBnMBNp7_hZxGVy76h-N2pnFrietqgVRtMiVcQyaE7Z/exec"
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
					<select id="country-code" name="country-code">
						<option value="+34">España (+34)</option>
						<option value="+1">EEUU (+1)</option>
						<option value="+52">México (+52)</option>
						<option value="+593">Ecuador (+593)</option>
						<option value="+594">Peru (+594)</option>
						<option value="+595">Chile (+595)</option>
						<option value="+505">Colombia (+505)</option>
						<option value="+57">Argentina (+57)</option>
					</select>
					<input type="tel" id="phone" name="Telefono" required />
				</div>
				<label className="consent">
					<input type="checkbox" id="consent" name="Consent" required />
					Me gustaría recibir comunicaciones y notificaciones electrónicas de
					Escuela de Libertad.
				</label>
				<div className="form-button">
					<button type="submit" id="submit-button" value="sumbit">
						Enviar
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
