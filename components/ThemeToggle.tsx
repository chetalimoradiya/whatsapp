"use client";

interface Props {

dark:boolean;

setDark:
React.Dispatch<
React.SetStateAction<boolean>
>;

}

export default function ThemeToggle({

dark,

setDark

}:Props){

return(

<button

onClick={()=>{

setDark(
!dark
);

}}

>

{

dark

?

"☀️"

:

"🌙"

}

</button>

);

}