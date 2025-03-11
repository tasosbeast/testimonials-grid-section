import "./App.css";
import Card from "./components/Card";
import cardData from "./data/cardData";

function App() {
  return (
    <main className="mx-auto w-[19.063rem] md:w-[40.438rem] xl:w-[69.625rem]">
      <div className="grid grid-cols-1 gap-9 md:grid-cols-2 xl:grid-cols-4">
        {cardData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </main>
  );
}

export default App;
