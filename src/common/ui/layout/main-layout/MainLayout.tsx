import React, { FC, ReactNode } from "react";
import Loading from "../../components/loading";
import Footer from "./footer";
import Header from "./header";

import styles from "./MainLayout.module.scss";

interface Props {
  children: ReactNode;
  isOpen?: boolean;
}

const MainLayout: FC<Props> = (props: Props) => {
  const { children, isOpen = false } = props;

  return (
    <div className={styles.layout}>
      <Loading isOpen={isOpen} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
