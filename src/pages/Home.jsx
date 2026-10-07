import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero
        eyebrow="Your everyday marketplace"
        title={"Everything you need,\ndelivered with care."}
        description="From a proper meal to the essentials at home, discover local favourites and get them right where you are."
        spices={" Good food, good mood"}
        inputPlaceholder="Enter your delivery address"
        buttonLabel="Explore nearby"
      />
    </>
  );
};

export default Home;
