interface Props{

name:string;

}

export default function Avatar({

name

}:Props){

return(

<div
className="avatar"
>

{

name
.charAt(0)
.toUpperCase()

}

</div>

);

}