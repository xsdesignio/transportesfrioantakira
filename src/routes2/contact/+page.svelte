<script>
	import Callout from '$lib/components/Callout.svelte'

    import { base } from '$app/paths';

	function handleSubmit(event) {
		event.preventDefault(); // Prevent the form from submitting normally

		const form = event.target;
		const formData = new FormData(form);

		// Convert the form data into a JSON object
		const jsonData = {};

		formData.forEach((value, key) => {
		jsonData[key] = value;
		});

		// Send the JSON data to the specified Cloud Function using fetch or XMLHttpRequest
		const cloudFunctionUrl =
		"https://europe-southwest1-river-direction-395118.cloudfunctions.net/form-redirect-to-email";
		fetch(cloudFunctionUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(jsonData),
		})
		.then((response) => {
			if (response.ok) {
			alert("El formulario ha sido enviado correctamente. Te responderemos lo antes posible.");
				window.location.pathname = base +'/';
			} else {
				throw new Error("Error sending form data");
			}
		})
		.catch((error) => {
			console.log(error)
			alert("Ha ocurrido un error enviando el formulario. Por favor, inténtelo de nuevo.")
		});
	}

</script>


<svelte:head>
	<title>Contact</title>
</svelte:head>


<h1>Contact</h1>

Tell us what you are interested in, and we'll contact you at the speef of light.

<Callout>All data is required</Callout>

<form on:submit|preventDefault={handleSubmit}>
	<div class="form-section">
		<label for="name">Name</label>
		<input type="text" id="name" placeholder="First name" />
	</div>
	
	<div class="form-section">
		<label for="email">Email</label>
		<input type="email" id="email" placeholder="Email address" />
	</div>

	<div class="form-section">
		<label for="email">Phone Number</label>
		<input type="phone" id="phone" placeholder="Your phone number" />
	</div>

	<div class="form-section">
		<label for="message">Message</label>
		<input type="text" id="email" placeholder="Your message" />
	</div>


	<input type="submit" value="Send">
</form>


<!-- 
	<fieldset>
		<legend>
			Interest in?
		</legend>

		<div>
			<input type="radio" name="s" id="s1" value="s1">
			<label for="s1">Option 1</label>
		</div>
		<div>
			<input type="radio" name="s" id="s2" value="s2">
			<label for="s2">Option 2</label>
		</div>
		<div>
			<input type="radio" name="s" id="s3" value="s3">
			<label for="s3">Option 3</label>
		</div>
	</fieldset>

	<div class="form-section">
		<input type="checkbox" id="c1" >
		<label for="c1">Sign me up for something!</label>
	</div>
 -->