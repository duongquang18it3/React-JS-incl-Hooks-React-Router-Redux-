import ExpenseItem from "./components/ExpenseItem";
function App() {
  /* const para = document.createElement("p");
  para.textContent = "This is also visible ";
  document.getElementById("root").append(para); */
  // this is regular js code
  return (
    <div>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <p> This is also visible !</p>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
