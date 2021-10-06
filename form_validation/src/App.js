import React from "react"
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css'
import "./App.css"

export default function App() {
	const { register, handleSubmit, formState: { errors } } = useForm()
	// Submitted data will be printed to Console if all the validations pass successfully
	const onSubmit = data => console.log(data)
	
	// Messages
	const required = "This field is required"
	const maxLength = "Your input exceed maximum length"
	
	// Error Component
	const errorMessage = error =>	<div className="invalid-feedback">{error}</div>

	return (
		<header>
			<div className="card w-50 bg-dark text-center p-4">
				<h2 className="mb-4 text-white">Registration</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="row">
						<div className="col-12 col-md-6">
							<div className="input-group mb-4">
								<input className="form-control" type="text" placeholder="Username" name="Username" {...register("Username", { required: true, maxLength: 20, pattern: /^[a-z0-9_-]{1,20}$/i })} />
								{errors.Username && errors.Username.type === "required" && errorMessage(required)}
								{errors.Username && errors.Username.type === "maxLength" && errorMessage(maxLength)}
							</div>		
						</div>
						<div className="col-12 col-md-6">
							<div className="input-group mb-4">
								<input className="form-control" type="password" placeholder="Password" name="Password" {...register("Password", { required: true })} />
								{errors.Password && errors.Password.type === "required" && errorMessage(required)}
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-md-6">
							<div className="input-group mb-4">
								<input className="form-control" type="text" placeholder="First Name" name="FirstName" {...register("FirstName", { required: true, maxLength: 50 })} />
								{errors.FirstName && errors.FirstName.type === "required" && errorMessage(required)}
								{errors.FirstName && errors.FirstName.type === "maxLength" && errorMessage(maxLength)}
							</div>	
						</div>
						<div className="col-12 col-md-6">
							<div className="input-group mb-4">
								<input className="form-control" type="text" placeholder="Last Name" name="LastName" {...register("LastName", { required: true, maxLength: 50 })} />
								{errors.LastName && errors.LastName.type === "required" && errorMessage(required)}
								{errors.LastName && errors.LastName.type === "maxLength" && errorMessage(maxLength)}
							</div>	
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-md-6">
							<div className="input-group mb-4">
								<input  className="form-control" type="tel" placeholder="Mobile number" name="MobileNumber" {...register("MobileNumber", { required: true, maxLength: 10 })} />
								{errors.MobileNumber && errors.MobileNumber.type !== "maxLength" && errorMessage("10 digit Mobile Number required")}
							</div>	
						</div>
						<div className="col-12 col-md-6">
							<div className="input-group mb-4">
								<input className="form-control" type="datetime" placeholder="Date of Birth" name="DateofBirth" {...register("DateOfBirth", { required: true, pattern: /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/i })} />
								{errors.DateOfBirth && errorMessage("Format: DD/MM/YYYY")}
							</div>	
						</div>
					</div>
					<div className="input-group mb-4">
						<input className="form-control" type="email" placeholder="Email" name="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
						{errors.Email && errors.Email.type === "required" && errorMessage(required)}
					</div>
					<div className="input-group mb-4">
						<input className="form-control" type="url" placeholder="Github Profile URL" name="Github" {...register("Github", { pattern: /^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/ })} />
							{errors.Github && errorMessage("Please enter a valid Github Profile URL")}
					</div>
					<div className="input-group mb-4">
						<textarea className="form-control" name="About" placeholder="About Me" {...register("About")} />
					</div>
					<div className="mb-3 fs-5">
						<div className="form-check form-check-inline">
							<input className="form-check-input" type="radio" name="Gender" value="Male" id="Male" {...register("Gender", { required: true })} />
							<label className="text-white" htmlFor="Male">Male</label>
						</div>
						<div className="form-check form-check-inline">
							<input className="form-check-input" type="radio" name="Gender" value="Female" id="Female" {...register("Gender", { required: true })} />
							<label className="text-white" htmlFor="Female">Female</label>
						</div>
						<div className="form-check form-check-inline">
							<input className="form-check-input" type="radio" name="Gender" value="Non-binary" id="Non-binary" {...register("Gender", { required: true })} />
							<label className="text-white" htmlFor="Non-binary">Non-binary</label>
						</div>
						{errors.Gender && errorMessage("Please select a Gender")}
					</div>
					<button className="btn btn-primary" type="submit">Submit</button>
				</form>
			</div>
		</header>
	)
}
