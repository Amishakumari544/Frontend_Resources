import React from 'react';
import "./form.css";
import { useState } from "react";
import { Link , useParams} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
const AddForm = () => {
let [username,setUsername] = useState("");
let [email,setEmail]= useState("");
let [parameter,setPara]= useState(useParams().id);
let [id,setId]=useState("");
if(parameter && parameter.length>3){
	setId(id=parameter);		
	setPara(parameter="");
				const api= async ()=> {
					const response=await axios.get(`http://localhost:3006/contacts/${id}`);
					return  response.data;
					}
					api().then((value)=>{
					 setUsername(username=value.username);
					 setEmail(email=value.email);
					})
				}
      
		const onSubmit_fun = (e)=>{
			e.preventDefault();	
			  
				  let id_value=id?id:uuidv4();
				   const response={
					   id:id_value,
					   username:username,
					   email:email,
				   }
				   console.log(response);
				   setUsername(username="");
				   setEmail(email="");
				   if(id){
					setId(id="");
					   const api=async ()=>{await axios.put(`http://localhost:3006/contacts/${response.id}`,response);}
				       api();
				   }
				   else{
				   const api=async ()=>{await axios.post("http://localhost:3006/contacts",response);}
				   api();
				   }
		}
    return (
        <React.Fragment>
		<div className="button">
		<Link to="/"><button type="button"className="backbutton">Back Button</button></Link>
		</div>
        <form  id="form" className="form"onSubmit={onSubmit_fun}>
		<div className="form-control">
			<label htmlFor="username">Username</label>
			<input type="text" placeholder="kohinoor khan" id="username"autoComplete="off"
			value={username} name="username"
	         onChange={(e)=>setUsername(username=e.target.value)}/>
			<i className="fas fa-check-circle"></i>
			<i className="fas fa-exclamation-circle"></i>
			{/*user.errors.name && <smalll>{user.errors.name}</smalll>*/
			}
		</div>
		<div className="form-control">
			<label htmlFor="email">Email</label>
			<input type="email" placeholder="kohi1@gmail.com" id="email"autoComplete="off"
			value={email} name="email"
			onChange={(e)=>setEmail(email=e.target.value)}/>
			<i className="fas fa-check-circle"></i>
			<i className="fas fa-exclamation-circle"></i>
			{/*user.errors.email && <smalll>{user.errors.email}</smalll>*/
			}
		</div>
		<button className="submit_button">Submit</button>
	</form>            
    </React.Fragment> 
	);
}
export default AddForm
