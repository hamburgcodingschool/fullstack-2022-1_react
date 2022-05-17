import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Item from "./components/item/Item"

function App() {
  return (
    <div className="App">

      <Header />
      <p>Hello React</p>

      <Footer />
      <Item 
        title="Main title"
        date="16 May"
        image="https://i.picsum.photos/id/41/536/354.jpg?hmac=SNa6JiCX91Lasg9CmojSqY-0UodD5LhxVgPF4RuVheY"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      />

      <Item 
        title="Main title 2"
        date="16 May"
        image="https://i.picsum.photos/id/41/536/354.jpg?hmac=SNa6JiCX91Lasg9CmojSqY-0UodD5LhxVgPF4RuVheY"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      />

      <Item 
        title="Main title 3 "
        date="16 May"
        image="https://i.picsum.photos/id/41/536/354.jpg?hmac=SNa6JiCX91Lasg9CmojSqY-0UodD5LhxVgPF4RuVheY"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      />

    </div>
  );
}

export default App;
