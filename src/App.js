import React from "react";
import Bitcoin from "./News/Bitcoin"
import Apple from "./News/Apple"

export default function App() 
{
  // let [value, setValue] = useState("");

  // let value
  // async function data(){
  //   let resp=await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=e5c579761d6e46c98fc217bcec91924a");
  //   let rest= await resp.json();
  //   console.log(rest);
  //   console.log(rest.articles[0].content);
  // }
  // data();
  return <div> <Bitcoin/>
  <Apple/>
   </div>;
}
