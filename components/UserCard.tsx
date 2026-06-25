import Avatar from "./Avatar";

interface Props{

username:string;

}

export default function UserCard({

username

}:Props){

return(

<div
className="user-card"
>

<Avatar
name={username}
/>

<div>

<h4>

{username}

</h4>

<p>

🟢 Online

</p>

</div>

</div>

);

} 
 