import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRaised,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>NOTÍCIAS</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                70 Anos da TV Brasileira
                <br />
                <small className={classes.smallTitle}>AVISOS</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  No dia 18 de setembro de 1950, Assis Chateaubriand – fundador
                  da TV Tupi -, dava o sinal verde para a primeira transmissão
                  audiovisual aberta da história do Brasil. Hoje, 70 anos depois
                  desse grande marco
                  <a href="#pablo"> SAIBA MAIS </a>
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Nota de Repúdio
                <br />
                <small className={classes.smallTitle}>AVISOS</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  As associações que representam os radiodifusores, Abert e
                  Abratel, publicaram em conjunto uma “nota de repúdio” contra a
                  que consideram “inadmissível” medida cautelar da Anatel que
                  proibiu a Fox de oferecer programação linear diretamente ao
                  <a href="#pablo"> SAIBA MAIS</a>
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                AIR propõe criação de organizações de defesa da liberdade
                publicitária
                <br />
                <small className={classes.smallTitle}>AVISOS</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  O valor da publicidade na liberdade de expressão foi destacado
                  pelo presidente do CONAR (Conselho de Autorregulamentação
                  Publicitária), João Luiz Faria Netto, durante reunião do
                  Conselho Diretor da AIR (Associação Internacional de
                  Radiodifusão), na quarta-feira <a href="#pablo">SAIBA MAIS</a>{" "}
                  
                </p>
              </CardBody>
              
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
