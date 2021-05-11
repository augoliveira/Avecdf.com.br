import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            AVEC{"'"}Associação de Veículos de Comunicação
          </h2>
          <h5 className={classes.description}>
            especializando em Associações Comerciais, localizado na SRTVS, 110
            Asa Sul
            {"'"}
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="MISSÃO"
              description="A missão da Avec estende-se aocombate à pirataria, à defesa da propriedade privada dos meiosde comunicação dentro do regime dalivre e leal concorrência,dos valoressociais e éticos da família,da SoberaniaNacional e dos interesses superioresda Nação."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="OBJETIVO"
              description="Assegurar os seguintes princípios:a defesa e manutenção da liberdadede expressão, combater o fornecimentode serviços análogos ou similaresaos da radiodifusão aberta ou fechadapor quaisquer empresas que nãoestejam organizadas e credenciadasespecificamente para exercer serviçosde radiodifusão ou de comunicaçãosocial; incentivar pesquisa tecnológica;representar os associados em todosos foros parlamentares, civis ou judiciais."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="FUNDAÇÃO"
              description="Somos uma associação criadapara reunir os esforços e otrabalho de empresas de rádio,televisão e jornal e entidadesligadas à radiodifusão com ointuito de promover e defendera liberdade de comunicaçãoe informação."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
