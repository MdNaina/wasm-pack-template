import './style.css'
import { add } from "{{ project-name }}"


const app = document.getElementById("app") as HTMLDivElement

function sum() {
  const a = document.querySelector<HTMLInputElement>("#a")?.valueAsNumber || 0;
  const b = document.querySelector<HTMLInputElement>("#b")?.valueAsNumber || 0;
  const res = add(a, b);
  // @ts-ignore
  document.querySelector<HTMLParagraphElement>("#result").innerHTML = `the sum of ${a} + ${b} = ${res}`;
}

app.innerHTML = `
 <div> 
    <input type="number" id="a" value="" />
    <input type="number" id="b" value="" />
    <button type="button" id="sum">Sum</button>
    <p id="result"></p>
 </div> 
`

const sumEl = document.querySelector<HTMLButtonElement>("#sum")
sumEl?.addEventListener("click", sum)

