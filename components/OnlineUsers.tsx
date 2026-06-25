interface Props{

count:number;

}

export default function OnlineUsers({

count

}:Props){

return(

<h2>

🟢

Online Users:

{count}

</h2>

);

}