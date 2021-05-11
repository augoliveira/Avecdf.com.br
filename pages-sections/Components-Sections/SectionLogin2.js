import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'
// @material-ui/icons
import People from '@material-ui/icons/People'
import Email from '@material-ui/icons/Email'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardBody from 'components/Card/CardBody.js'
import CardFooter from 'components/Card/CardFooter.js'
import Button from 'components/CustomButtons/Button.js'
import CustomInput from 'components/CustomInput/CustomInput.js'

import styles from 'assets/jss/nextjs-material-kit/pages/componentsSections/loginStyle2.js'

const useStyles = makeStyles(styles)
import antena from 'assets/img/antena.png'

export default function SectionLogin2() {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <h1 className={classes.Title}>SOBRE A AVEC</h1>
              <CardBody>
                <h4>
                  A Associação dos Veículos de Comunicação do Distrito Federal
                  (Avec)é uma entidade sem fins lucrativos, com sede em
                  Brasília/DF,e atuação em todo o Distrito Federal e Entorno.
                  Reúne empresas de rádio,televisão e jornal para a promoção e a
                  defesa igualitária dos seus ideais einteresses, mormente os
                  relativos à liberdade de comunicação, de informação,de criação
                  artística, de expressão do pensamento, de independênciae
                  liberdade jornalística.
                </h4>
              </CardBody>
            </Card>
          </GridItem >
          <CardBody>
          <div class="info">
            <h3 class="info-title">
              <img src={antena} alt="..." className="icon" />
              <i className={classes.icon} />
            </h3>
          </div>
          </CardBody>
        </GridContainer>
      </div>
    </div>
  )
}
