interface Props {

online:boolean;

time:string;

}

export default function LastSeen({

online,

time

}:Props){

return(

<p
className="last-seen"
>

{

online

?

"🟢 Online"

:

`Last seen ${time}`

}

</p>

);

}