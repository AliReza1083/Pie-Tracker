import {
  Header,
  Information,
  Banner,
  AddComment,
  Comments,
} from "../container";

import { Footer } from "../components";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Header />
      <Information />
      <Banner />
      <AddComment />
      <Comments />
      <Footer />
    </motion.div>
  );
};

export default Home;
