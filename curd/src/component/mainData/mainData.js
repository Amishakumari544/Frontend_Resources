import axios from "axios";
import * as React from 'react';
import {useState} from "react";
import Icon from "react-crud-icons";
import "./main.css";
import { Link } from "react-router-dom";
const MainData = ()=> {
	const[content,setContent ] = useState();
	if(content){}
	else{
	const api= async ()=> {
	const response=await axios.get("http://localhost:3006/contacts");
	return  response.data;
	}
	api().then((value)=>{
      setContent(value);
	})
}
const deleteItem=async (value)=>{
const id=value.id;
  const api=async ()=>{
        await axios.delete(`http://localhost:3006/contacts/${id}`);
		const response=await axios.get("http://localhost:3006/contacts");
		return  response.data;
  }
  api().then((value)=>{
      setContent(value);
  });
}
   return(
	<React.Fragment>
		<div className="button">
		<Link to="/add"><button className="addbutton">add button</button></Link>
		</div>
		<div className="main-box">
        <div className="content-box">
			<div>
				<span className="heading">Name</span>
			</div>
			<div>
				<span className="heading"> Email</span>
			</div>
			<div>
				<span className="heading">edit</span>
			</div>
			<div>
				<span className="heading">del</span>
			</div>
		</div>
		{ 
		content && content.map((value)=>{
		return(
			<div className="content-box"key={value.id}> 
		    <div className="username">
				<span>{value.username}</span>
			</div>
			<div className="email">
				<span>{value.email}</span>
			</div>
			<Link to={`/${value.id}`}>
				<div className="edit">
				<span>      
					<Icon
                            name = "edit"
                            theme = "light"
                            size = "tiny"
                    />
                </span>
			</div>
			</Link>
			<div className="delete"onClick={()=>deleteItem(value)}>
				<Icon       
				        name="delete"
                        theme = "light"
                        size = "tiny"
                        
                    />
			</div>
			</div>)
		})
}
</div>
</React.Fragment>
);
}
export default MainData;