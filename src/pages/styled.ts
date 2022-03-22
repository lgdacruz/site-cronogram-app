import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 200px;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    margin: 0;
    a {
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto;
      border-radius: 10px;
      width: 45%;
      height: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      background-color: #000;
      color: #fff;
      padding: 5px;
    }
  }
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`
export const ContainerPink = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  .asteristico {
    font-size: 0.7rem;
    text-align: right;
  }
`
export const ContainerImageTitle = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Title = styled.h2`
  line-height: 1.2;
  font-size: 1.8rem;
  text-align: center;
  font-style: oblique;
  border-top: 3px solid #999;
  transform: rotate(-10deg);
  color: #555;
  max-width: 350px;
`
export const TitleGoods = styled.h1`
  text-align: center;
  padding: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #444;
`
export const ContainerGoods = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  div {
    min-width: 350px;
    min-height: 100px;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(216, 197, 217, 0.5);
    border-radius: 20px;
    :hover {
      box-shadow: inset 0 0 1em #999, 0 0 1em #b5193b;
      .up {
        font-size: 2.2rem;
      }
    }
  }
  .up {
    padding: 0 2rem;
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
  }
  .down {
    padding: 0 2rem;
    margin: 0;
    font-size: 1.8rem;
    font-weight: 500;
    color: #222;
  }
`
export const ContainerDonwload = styled.div`
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    display: flex;
    width: 45%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    background-color: #000;
    padding: 5px;
    p {
      color: #fff;
      margin: 0 0 0 10px;
      font-size: 12px;
      .store {
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
`
export const ContainerOpinios = styled.div`
  min-height: 100vh;
`
export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0 0 0;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const ContainerNeeds = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  @media (max-width: 600px) {
    margin: 80px 0 0 0;
  }
  .aspas {
    font-size: 60px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #b5193b;
  }
  .wash {
    color: #f75b00;
    font-weight: 800;
  }
  .cream {
    color: #00730b;
    font-weight: 800;
  }
  .diamound {
    color: #356663;
    font-weight: 800;
  }
  .gold {
    color: #8c8418;
    font-weight: 800;
  }

  .ask {
    line-height: 25px;
    font-size: 20px;
    font-weight: 600;
    font-style: italic;
    text-align: center;
  }
  ul {
    border: 2px dashed #b5193b;
    border-radius: 20px;
    li {
      padding: 10px;
      p {
        font-size: 24px;
      }
    }
  }
`
export const ContainerPlans = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 550;
  background-color: #d4bcc2;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const ContainerPlansRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem;
  width: 800px;
  min-height: 50px;
  border-bottom: 2px solid rgba(210, 210, 210, 0.7);
  @media (max-width: 900px) {
    width: 700px;
  }
  @media (max-width: 750px) {
    width: 300px;
  }
  .item {
    width: 30%;
    flex-wrap: wrap;
    padding: 0 2px;
  }
  .field {
    width: 23%;
    text-align: center;
    margin: 0 5px;
  }
`
export const ContainerCost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  min-height: 50vh;
  margin: 50px 0;
  max-width: 90%;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  .image {
    opacity: 0.5;
    border-radius: 20px;
    flex: 1;
  }
  div {
    flex: 3;
    margin-left: 20px;
    .askcost {
      text-align: center;
      font-size: 26px;
      font-weight: 600;
      text-decoration: underline;
      flex-wrap: wrap;
    }
    ul {
      list-style: none;
      li {
        display: flex;
        align-items: center;
        flex-direction: row;
        margin: 30px 0;
        background-color: #d9d9d9;
        padding: 5px;
        height: 70px;
        width: 100%;
        border-radius: 20px;
        @media (max-width: 650px) {
          height: 100px;
        }
        :hover {
          box-shadow: 0 0 1em #000;
        }
        p {
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 0 20px;
          :hover {
            cursor: default;
          }
        }
      }
    }
  }
`
