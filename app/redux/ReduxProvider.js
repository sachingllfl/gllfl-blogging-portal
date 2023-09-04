"use client";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import Header from "@/app/components/Header";
import SideActions from "@/app/components/SideActions";
import Footer from "@/app/components/Footer";

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <Header />
      <SideActions />
      {children}
      <Footer />
    </Provider>
  );
};
export default ReduxProvider;
