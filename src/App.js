import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Image from './assets/lab.png'
import { Box, Container, Grid, Card, CardMedia, CardActionArea, CardContent, CardActions, Divider } from '@material-ui/core';
import Footer from './footer';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://media-exp1.licdn.com/dms/image/C4E16AQFyL14FnPKs5w/profile-displaybackgroundimage-shrink_350_1400/0/1629848461767?e=1636588800&v=beta&t=k8C_rS-Z_8qYPvknft-pOKZpmFl3gNXdgf7opjSt62w')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]:{
      height: 300,
      fontSize: "3em"
    }
  },
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
    paddingBottom: theme.spacing(6),
    paddingTop: theme.spacing(6),
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
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h5" color="primary" >
            DevCompilers
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>Dev Compilers</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h3" className={classes.blogTitle} >
          Inovação, Crescimento e Resultado
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                  title="Innovation"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Inovação
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Exploramos sempre novas ideias com o objetivo de oferecer para nossos clientes o melhor que a tecnologia pode nos proporcionar.
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions className={classes.cardActions}>
              </CardActions> */}
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                  title="Business Growth"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Crescimento
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Processo resultante do trabalho bem desenvolvido por nossos colaboradores que se empenham ao máximo para fornecer a solução ideal para nossos clientes.
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions className={classes.cardActions}>
              </CardActions> */}
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=702&q=80"
                  title="Result"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Resultado
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Efeito de nossas ações. Finalização de um problema. A cada problema que finalizamos, produzimos soluções satisfatórias.
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions className={classes.cardActions}>
              </CardActions> */}
            </Card>
          </Grid>
        </Grid>
        <Typography variant="h3" className={classes.blogText} >
          Nosso principal serviço
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.mediaLab}
                  // image="https://coderhamilton.github.io/DevCompilers/assets/lab.png"
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
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box pt={5}>
          <Footer />
        </Box>
      </Container>
    </div>
  );
}

export default App;
