import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardContent, CardMedia, CardActionArea, Divider } from '@material-ui/core';
import Image from '../../assets/mylab-1500.png';

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 500,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    textAlign: "center"
  },
  blogText: {
    fontWeight: 500,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    textAlign: "center"
  },
  card: {
    maxWidth: "100%",
    textAlign: "justify",
  },
  media: {
    height: 240,
  },
  mediaLab: {
    height: 440,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  textMylab: {
    fontSize: "3em",
    textAlign: "center",
    padding: theme.spacing(5),
  },
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navegacao: {
    fontWeight: 'bold',
    color: "white",
    display: 'row',
    float: 'left',
    justifyContent: 'end',
    alignItems: 'end',
    textAlign: 'end',
  }
}));

function Servicos(props) {
  const classes = useStyles();

  return (
    <div className="">
      <Typography variant="h5" className={classes.blogText} >

      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.mediaLab}
                image={Image}
                title="Lab"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} container>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.textMylab} gutterBottom variant="h4" component="h2">
                MyLab
                <Divider />
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                O sistema de Apoio e Gerenciamento para Laboratórios (MyLab) - É uma solução tecnológica para proprietáritos e usuários de laboratórios de escolas, universidades e faculdades.
                Trata-se de uma aplicação capaz de fornecer eficiência no controle para reserva dos laboratórios, onde é possível selecionar datas, horários, e os laboratórios disponíveis para reservar, assim como visualizar o estado atual do laboratórios, como disponível, reservado, em manutenção, etc.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h4" className={classes.blogText} >

      </Typography>

    </div>
  )
}

export default class servicos extends Component {

  render() {

    return (
      <Servicos />
    )
  }
}
