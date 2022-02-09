import ExpenseItem from "./components/ExpenseItem";
function App() {
  /* const para = document.createElement("p");
  para.textContent = "This is also visible ";
  document.getElementById("root").append(para); */
  // this is regular js code
  return (
    <div>
      <h3> Let's get started !</h3>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
