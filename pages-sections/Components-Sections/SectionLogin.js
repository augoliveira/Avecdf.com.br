import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/loginStyle.js";
import location from "assets/img/location.png";
import mobile from "assets/img/mobile.png";

const useStyles = makeStyles(styles);

export default function SectionLogin() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={8} md={6}>
            <Card plain>
              <h1 className={classes.Title}>Entre em contato</h1>
              <CardBody>
              <div class="info">
              <h3 class="info-title">
              <img src={location} alt="..." className="icon"/>
              <i className={classes.icon} /> Brasília -DF
              </h3>
              <h4>SBS Quadra 02 Bloco Q Edifício João S. Saad 15/1503 | Brasília/DF</h4>
              </div>
              <div class="info">
              <h3 class="info-title">
              <img src={mobile} alt="..." className="icon"/>
              <i className={classes.icon} /> Atendimento
              </h3>
              <h4>(61) 3321-0075</h4>
              
              </div>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <form className={classes.form}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Contate-nos</h4>
                  <div className={classes.socialLine}>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className={classes.socialIcons + " fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className={classes.socialIcons + " fab fa-facebook"} />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i
                        className={
                          classes.socialIcons + " fab fa-google-plus-g"
                        }
                      />
                    </Button>
                  </div>
                </CardHeader>
                <p className={classes.divider}>Fale um pouco sobre você</p>
                <CardBody>
                  <CustomInput
                    labelText="Nome..."
                    id="first"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <CustomInput
                    labelText="Email..."
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "email",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <CustomInput
                    labelText="Assunto"
                    id="pass"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "Assunto",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputIconsColor}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                      ),
                      autoComplete: "off",
                    }}
                  />
                  <CustomInput labelText="Mensagem..." id="first"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button simple color="primary" size="lg">
                    Enviar mensagem
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
