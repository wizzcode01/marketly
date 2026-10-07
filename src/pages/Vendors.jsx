import Card from "../components/Card";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Hero from "../components/Hero";

const Vendors = () => {
  const cards = [
    {
      title: "Smoky jollof & grills",
      desc: "Rich, familiar flavours made fresh by the neighbourhood kitchen.",
      vendor: "Buka by Ayo",
      category: "Restaurant",
      rating: "4.9",
      deliveryTime: "20-30 min",
      accent: "#f8c85b",
      image:
        "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Fresh market basket",
      desc: "Seasonal fruit, vegetables and pantry staples picked with care.",
      vendor: "Market Square",
      category: "Local market",
      rating: "4.8",
      deliveryTime: "25-35 min",
      accent: "#c6e6d3",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Everyday essentials",
      desc: "Thoughtful picks for home, work and everything in between.",
      vendor: "Daily Mart",
      category: "Shop",
      rating: "4.7",
      deliveryTime: "15-25 min",
      accent: "#f8c85b",
      image:
        "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Coffee, pastry & more",
      desc: "Small-batch coffee and buttery bakes for your unhurried moments.",
      vendor: "Sunday Morning",
      category: "Cafe",
      rating: "4.9",
      deliveryTime: "20-30 min",
      accent: "#f6d28c",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Wellness made easy",
      desc: "Health and personal-care essentials from verified local pharmacies.",
      vendor: "Welllife Pharmacy",
      category: "Pharmacy",
      rating: "4.8",
      deliveryTime: "20-35 min",
      accent: "#c6e6d3",
      image:
        "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Good food, simply",
      desc: "Bright bowls and comforting favourites for lunch or dinner.",
      vendor: "The Green Table",
      category: "Restaurant",
      rating: "4.9",
      deliveryTime: "25-40 min",
      accent: "#f8c85b",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    },
  ];

  const faqs = [
    {
      question: "How do I find vendors near me?",
      answer:
        "Enter your delivery address in the app to see the restaurants, shops and essential stores available around you.",
    },
    {
      question: "Can I order from more than one vendor?",
      answer:
        "Each order is prepared by one vendor, so you can enjoy a smooth checkout and clear delivery updates from start to finish.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order is confirmed, the app gives you live updates from preparation through to delivery at your door.",
    },
    {
      question: "What can I order?",
      answer:
        "Discover meals, groceries, pharmacy items and other everyday essentials from trusted businesses in your area.",
    },
  ];

  return (
    <main className="bg-[#f8f8f3] font-['Plus_Jakarta_Sans']">
      <Hero
        title={"Good things,\nclose to you."}
        description="Explore standout restaurants, shops and everyday essentials from vendors in your area."
        buttonLabel="Browse vendors"
        largeText
        startSelling="sell on marketly"
        login="login"
      />

      <section
        id="services"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#008f5b]">
              Explore vendors
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.06em] text-[#123d2d] sm:text-5xl">
              Something good for every day.
            </h1>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#648074] sm:text-right">
            Handpicked places, local favourites and the essentials that make
            your day flow better.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </section>

      <div className="mx-auto flex flex-col justify-center items-center max-w-6xl px-5 sm:px-8 lg:px-10">
        <h1 className="text-6xl font-bold">Get Started, Download the app.</h1>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#download-google"
            className="flex items-center gap-2.5 rounded-xl bg-white px-8 py-4.5 text-[#075b40] transition hover:-translate-y-0.5 hover:bg-[#f8c85b]"
          >
            <img
              src="https://img.icons8.com/color/96/google-play.png"
              alt=""
              className="size-10"
            />
            <span className="text-left leading-tight">
              <span className="block text-[12px] font-semibold">
                Download on
              </span>
              <span className="block text-lg font-extrabold">Google Play</span>
            </span>
          </a>
          <a
            href="#download-apple"
            className="flex items-center gap-2.5 rounded-xl bg-white px-8 py-4.5 text-[#075b40] transition hover:-translate-y-0.5 hover:bg-[#f8c85b]"
          >
            <img
              src="https://img.icons8.com/ios-filled/100/005c3b/mac-os.png"
              alt=""
              className="size-10"
            />
            <span className="text-left leading-tight">
              <span className="block text-[12px] font-semibold">
                Download on the
              </span>
              <span className="block text-lg font-extrabold">App Store</span>
            </span>
          </a>
        </div>
      </div>

      <FaqSection items={faqs} />

      <div className="bg-[#090b0a] pb-0 pt-1 lg:pt-4">
        <GetStarted
          eyebrow="Download the app"
          title="Place your order in seconds."
          description="Find great vendors, choose what you love and follow every order all the way to your doorstep."
          image="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=85"
          imageAlt="Person using a mobile phone"
        />
        <Footer />
      </div>
    </main>
  );
};

export default Vendors;
