import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";



import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import SectionLogin2 from "pages-sections/Components-Sections/SectionLogin2.js";
import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);
import logo from "assets/img/logo.png";
export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="AVEC DF"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
        
      />
      
      <Parallax filter responsive image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Associação</h1>
              <h4>dos Veiculos de Comunicação do Distrito Federal(AVEC)</h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Fale conosco
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <ProductSection />
        </div>
      </div>
      <div className={classNames(classes.main)}>
      <SectionLogin2 />
        
      </div>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <TeamSection />
          </div>
          <div className={classNames(classes.main)}>
          <SectionLogin />
        </div>
      </div>

      <Footer />
    </div>
  );
}

