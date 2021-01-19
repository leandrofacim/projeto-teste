import React, { useEffect, useState } from "react";
import api from "./api";
import { Link, Route } from "react-router-dom";
import "./styles.css";
import logo from "../src/assets/img/download.jpg";
import Header from "./components/Header";
import Banner from "./components/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {

  return (
    <div className="page">
      <Header />
      <section>
        <article>
          <h1 className="title-default">
            Não se preocupe com a parte juridica de sua empresa
          </h1>
          <div className="content-text">
            <p className="text-default">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
            </p>
          </div>
        </article>
        <article>
          <form action="" className="form-login">
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <button type="submit">Acessar</button>
            <Link type="submit">Criar conta</Link>
          </form>
        </article>
      </section>
      <div className="cotacao">
        <h1>Principais Cotações</h1>
      </div>
      <section className="section-1">

        <div className="item title text-conversao">
          <h1>Conversor de Moedas</h1>
          <p>
            Para saber a cortação da moeda desejada basta
          </p>
          <p>
            clicar na bandeira e
            selecionar o páis desejado
          </p>
        </div>

        <div className="item form form-conversao">
          <form action="">
            <div>
              <label htmlFor=""><b>De:</b> Real</label>
              <input type="text" name="" id="" />
            </div>
            <div>
              <label htmlFor=""><b>Para: Dolar</b></label>
              <input type="text" name="" id="" />
            </div>
            <div>
              <label htmlFor=""><b>Moeda Turismo</b></label>
              <input type="radio" name="" id="" />
            </div>
            <div>
              <label htmlFor=""><b>Moeda comercial</b></label>
              <input type="radio" name="" id="" />
            </div>
          </form>
        </div>
        <div className="item img">
          <img src={logo} alt="" />
        </div>
      </section>
      <div className="servicos">
        <div>
          <h1>Serviços</h1>
        </div>
        <div>
          <button>Operações</button>
          <button>Orientação Técnica</button>
          <button>Assesoria</button>
        </div>
      </div>
      <section className="content-servicos">
        <article>
          <h1 className="title-default">
            A Dascam é autorizada <br />
            pelo Banco Central
          </h1>
          <h3>para operações de câmbio</h3>
          <div className="content-text">
            <p className="text-default">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
            </p>
          </div>
        </article>

        <Banner />

      </section>
    </div>
  );
};

export default App;
