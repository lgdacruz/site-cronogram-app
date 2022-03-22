import React from 'react'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { GiFullPizza } from 'react-icons/gi'
import { IoTicketOutline } from 'react-icons/io5'
import { BiHappyBeaming, BiHappyHeartEyes } from 'react-icons/bi'
import { FaGooglePlay } from 'react-icons/fa'

import {
  Container,
  ContainerCost,
  ContainerGoods,
  ContainerImageTitle,
  ContainerNeeds,
  ContainerPink,
  ContainerPlans,
  ContainerPlansRow,
  ContainerDonwload,
  Footer,
  Header,
  Main,
  Title,
  TitleGoods,
} from './styled'
import logoNoBack from '../assets/logo-noback.png'
import appImage from '../assets/app-image.png'
import usingApp from '../assets/using-app.png'

const Home = () => {
  return (
    <Container>
      <head>
        <title>Cronograma com você</title>
        <meta
          name="description"
          content="Aplicativo mobile que gera cronograma personalizado"
        />
        <link rel="icon" href="/logo-noback.png" />
      </head>

      <Header>
        <img src={logoNoBack} width={100} height={100} />
        <div className="container">
          {/* <a href="https://play.google.com/store/apps/details?id=cronograma.with.you" >
            <AiFillApple size={30} color='#fff'/>
              <p>App Store</p>
            </a> */}
          <a href="https://play.google.com/store/apps/details?id=cronograma.with.you">
            <FaGooglePlay size={25} color="#fff" />
            <p>Play Store</p>
          </a>
        </div>
      </Header>

      <Main>
        <ContainerPink>
          <TitleGoods>
            Todos os cuidados para o seu cabelo em um só lugar!
          </TitleGoods>
          <ContainerGoods>
            <div>
              <p className="up">Interface</p>
              <p className="down">Simples</p>
            </div>
            <div>
              <p className="up">Notificações</p>
              <p className="down">Nas etapas</p>
            </div>
            <div>
              <p className="up">+15</p>
              <p className="down">Cronogramas*</p>
            </div>
            <div>
              <p className="up">+50</p>
              <p className="down">Conteúdos*</p>
            </div>
            <div>
              <p className="up">Linha do tempo</p>
              <p className="down">Com fotos*</p>
            </div>
            <div>
              <p className="up">Histórico</p>
              <p className="down">De Cronogramas*</p>
            </div>
          </ContainerGoods>

          <ContainerImageTitle>
            <img src={appImage} width={250} height={400} alt="app screen" />
            <Title>
              Se o seu objetivo é o cabelo dos sonhos, chegou no lugar certo!
            </Title>
          </ContainerImageTitle>
          <p className="asteristico">* De acordo com a tabela Premium</p>
        </ContainerPink>

        <ContainerDonwload>
          <h3>Baixe agora e comece os cuidados!</h3>
          <div>
            {/* <a href="https://play.google.com/store/apps/details?id=cronograma.with.you" >
          <AiFillApple size={30} color='#fff'/>
            <p>Disponível na <br/><span className='store'>App Store</span></p>
          </a> */}
            <a href="https://play.google.com/store/apps/details?id=cronograma.with.you">
              <FaGooglePlay size={30} color="#fff" />
              <p>
                Disponível na <br />
                <span className="store">Play Store</span>
              </p>
            </a>
          </div>
        </ContainerDonwload>

        <ContainerNeeds>
          <p className="ask">
            <span className="aspas">&quot;</span>Qual o mínimo para cuidar do
            meu cabelo com o aplicativo Cronograma com você ?
            <span className="aspas">&quot;</span>
          </p>
          <ul>
            <li>
              <p>
                <span className="wash">Shampoo</span> para lavar o cabelo
              </p>
            </li>
            <li>
              <p>
                <span className="cream">Máscaras</span> capilares para as etapas
              </p>
            </li>
            <li>
              <p>
                Caso você não tenha conhecimento sobre os cuidados capilares, um
                plano <span className="diamound">Diamound</span> ou{' '}
                <span className="gold">Gold</span> é muito importante
              </p>
            </li>
          </ul>
        </ContainerNeeds>

        <ContainerPlans>
          <ContainerPlansRow>
            <p className="item">Versões pagas no app</p>
            <p className="field">
              Diamound
              <br />
              R$25,00
            </p>
            <p className="field">
              Gold
              <br />
              R$15,00
            </p>
            <p className="field">
              Free
              <br />
              R$0,00
            </p>
          </ContainerPlansRow>

          <ContainerPlansRow>
            <p className="item">Cronograma capilar</p>
            <p className="field">
              <AiOutlineCheck color="green" size={25} />
            </p>
            <p className="field">
              <AiOutlineCheck color="green" size={25} />
            </p>
            <p className="field">
              <AiOutlineCheck color="green" size={25} />
            </p>
          </ContainerPlansRow>

          <ContainerPlansRow>
            <p className="item">Notificações com dicas básicas</p>
            <p className="field">
              <AiOutlineCheck color="green" size={25} />
            </p>
            <p className="field">
              <AiOutlineCheck color="green" size={25} />
            </p>
            <p className="field">
              <AiOutlineCheck color="green" size={25} />
            </p>
          </ContainerPlansRow>

          <ContainerPlansRow>
            <p className="item">
              Cronograma capilar <u>personalizado</u>
            </p>
            <p className="field">
              <AiOutlineCheck color="green" size={25} />
            </p>
            <p className="field">
              <AiOutlineCheck color="green" size={25} />
            </p>
            <p className="field">
              <AiOutlineClose color="red" size={25} />
            </p>
          </ContainerPlansRow>

          <ContainerPlansRow>
            <p className="item">Histórico de cronogramas</p>
            <p className="field">
              <AiOutlineCheck color="green" size={25} />
            </p>
            <p className="field">
              <AiOutlineCheck color="green" size={25} />
            </p>
            <p className="field">
              <AiOutlineClose color="red" size={25} />
            </p>
          </ContainerPlansRow>
          <ContainerPlansRow>
            <p className="item">Linha do tempo com foto</p>
            <p className="field">
              <AiOutlineCheck color="green" size={25} />
            </p>
            <p className="field">
              <AiOutlineCheck color="green" size={25} />
            </p>
            <p className="field">
              <AiOutlineClose color="red" size={25} />
            </p>
          </ContainerPlansRow>
          <ContainerPlansRow>
            <p className="item">Conteúdos básicos</p>
            <p className="field">
              <AiOutlineCheck color="green" size={25} />
            </p>
            <p className="field">
              <AiOutlineCheck color="green" size={25} />
            </p>
            <p className="field">
              <AiOutlineClose color="red" size={25} />
            </p>
          </ContainerPlansRow>
          <ContainerPlansRow>
            <p className="item">Conteúdos avançados</p>
            <p className="field">
              <AiOutlineCheck color="green" size={25} />
            </p>
            <p className="field">
              <AiOutlineClose color="red" size={25} />
            </p>
            <p className="field">
              <AiOutlineClose color="red" size={25} />
            </p>
          </ContainerPlansRow>
          <ContainerPlansRow>
            <p className="item">Conteúdos personalizados</p>
            <p className="field">
              <AiOutlineCheck color="green" size={25} />
            </p>
            <p className="field">
              <AiOutlineClose color="red" size={25} />
            </p>
            <p className="field">
              <AiOutlineClose color="red" size={25} />
            </p>
          </ContainerPlansRow>
          <ContainerPlansRow>
            <p className="item">Dicas de acordo com as suas necessidades</p>
            <p className="field">
              <AiOutlineCheck color="green" size={25} />
            </p>
            <p className="field">
              <AiOutlineClose color="red" size={25} />
            </p>
            <p className="field">
              <AiOutlineClose color="red" size={25} />
            </p>
          </ContainerPlansRow>
        </ContainerPlans>

        <ContainerCost>
          <img
            src={usingApp}
            width={250}
            height={250}
            className="image"
            alt="Using app"
          />

          <div>
            <p className="askcost">
              Quanto custa o cabelo dos sonhos comparado a coisas do dia a dia?
            </p>
            <ul>
              <li>
                <GiFullPizza size={55} color="#d14949" />
                <p>Uma pizza - R$ 50,00</p>
              </li>
              <li>
                <IoTicketOutline size={55} color="#0300b0" />
                <p>Ingresso de cinema - R$ 25,00</p>
              </li>
              <li>
                <BiHappyBeaming size={55} color="#b06100" />
                <p className="hairdream">Cabelo dos sonhos - R$ 15,00/mês</p>
              </li>
              <li>
                <BiHappyHeartEyes size={55} color="#00c8ff" />
                <p className="hairdream">
                  Cabelo dos sonhos com dicas personalizadas - R$ 25,00/mês
                </p>
              </li>
            </ul>
          </div>
        </ContainerCost>

        <ContainerDonwload>
          <h3>Baixe agora e comece os cuidados!</h3>
          <div>
            {/* <a href="https://play.google.com/store/apps/details?id=cronograma.with.you" >
          <AiFillApple size={30} color='#fff'/>
            <p>Disponível na <br/><span className='store'>App Store</span></p>
          </a> */}
            <a href="https://play.google.com/store/apps/details?id=cronograma.with.you">
              <FaGooglePlay size={30} color="#fff" />
              <p>
                Disponível na <br />
                <span className="store">Play Store</span>
              </p>
            </a>
          </div>
        </ContainerDonwload>
      </Main>

      <Footer>
        <a href="/">
          <img
            src={logoNoBack}
            alt="Cronograma com você Logo"
            width={30}
            height={30}
          />
        </a>
      </Footer>
    </Container>
  )
}

export default Home
