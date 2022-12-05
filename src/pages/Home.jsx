import {
  Header,
  Information,
  Banner,
  AddComment,
  Comments,
} from "../container";

import { Footer } from "../components";

const Home = () => {
  return (
    <div>
      <Header />
      <Information />
      <Banner />
      <AddComment />
      <Footer />
    </div>
  );
};

export default Home;
