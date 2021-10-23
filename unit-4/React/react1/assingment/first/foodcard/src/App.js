import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        img="https://media.istockphoto.com/photos/oven-baked-pepperoni-pizza-picture-id1181651561?k=20&m=1181651561&s=612x612&w=0&h=iDsz2My1q-kWdouyPBCXL6Up6iInM_J-9X1cKAh1OVA="
        title="Pepperoni Pizza"
        description="Pepperoni is a meat mixture of beef and pork that has been cured and seasoned with paprika and chili powder. It's a loved American food staple and most commonly used to make pepperoni pizza."
        detail="256cl"
        temp="53.6C"
        price="$23.90"
        originalprice="$24.90"
      ></Card>
      <Card
        img="https://static.toiimg.com/thumb/71330969.cms?width=1200&height=900"
        title="Tortellini"
        description="Tortellini, a ring-shaped Italian pasta stuffed with cheese or meat that is most traditionally served in broth (en brodo), though other sauces—including those made from tomato, mushroom, or meat—are also popular."
        detail="256cl"
        temp="53.6C"
        price="$23.90"
        originalprice="$24.90"
      ></Card>
      <Card
        img="https://veenaazmanov.com/wp-content/uploads/2012/06/Fresh-Strawberry-Cake-with-Swiss-Meringue-Buttercream1.jpg"
        title="Strawberry Cake"
        description="Angel food cake is made with only the egg whites, not the yolks. The beaten egg whites act as a leavening agent, and there is no added shortening in the recipe. This makes Angel food cake a delicious no-fat dessert."
        detail="256cl"
        temp="53.6C"
        price="$23.90"
        originalprice="$24.90"
      ></Card>
    </div>
  );
}

export default App;
