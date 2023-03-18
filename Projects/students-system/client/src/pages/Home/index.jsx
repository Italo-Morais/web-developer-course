import { Container } from "./styled";

export function Home() {
  return (
    <div className="Home">
      <Container>
        <h1>Home</h1>
        <img
          src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          ipsum ut, corrupti hic est velit placeat alias explicabo ab rerum
          officia. Voluptates quibusdam quia pariatur repellendus mollitia,
          consectetur sequi placeat.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          sequi cupiditate sit ab magnam velit facere consequatur maiores,
          commodi quas minima vero quae, blanditiis quod. Nemo cum praesentium
          eaque vel.
        </p>
      </Container>
    </div>
  );
}
