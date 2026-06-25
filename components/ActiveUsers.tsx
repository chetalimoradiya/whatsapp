interface Props{

count:number;

}

export default function ActiveUsers({

count

}:Props){

return(

<div
className="active-users"
>

<h3>

🟢 Active Users

</h3>

<p>

{count}

Online

</p>

</div>

);

}