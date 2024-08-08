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
					<select id="country-code" name="country-code">
						<option value="+34">España (+34)</option>
						<option value="+54">Argentina (+54)</option>
						<option value="+32">Bélgica (+32)</option>
						<option value="+56">Chile (+56)</option>
						<option value="+57">Colombia (+57)</option>
						<option value="+593">Ecuador (+593)</option>
						<option value="+33">Francia (+33)</option>
						<option value="+49">Alemania (+49)</option>
						<option value="+39">Italia (+39)</option>
						<option value="+52">México (+52)</option>
						<option value="+31">Países Bajos (+31)</option>
						<option value="+51">Perú (+51)</option>
						<option value="+351">Portugal (+351)</option>
						<option value="+44">Reino Unido (+44)</option>
						<option value="+1">EEUU (+1)</option>
						<option value="+58">Venezuela (+58)</option>
						<option value="+1">Canadá (+1)</option>
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
						Descargar PDF
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
