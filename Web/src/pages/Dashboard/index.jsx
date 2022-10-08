import { Fragment } from "react";
import { Icon, Card, DateSelect } from "~/components";

export const Dashboard = () => (
  <Fragment>
    <header className="bg-red-500 text-white ">
      <div className="cointainer max-w-3xl p-4 flex justify-between p-4">
        <img src="/imgs/logo-fundo-vermelho.svg" className="w-28 md:w-40" />
        <a href="/profile">
          <Icon name="profile" className="w-10" />
        </a>
      </div>
    </header>

    <main className="space-y-6">
      <section id="header" className="bg-red-500 text-white">
        <div className="cointainer max-w-3xl space-y-2 p-4">
          <span className="">Olá Luana</span>
          <h3 className="text-3xl font-bold">Qual é o seu palpite?</h3>
        </div>
      </section>
  
      <section id="content" className="p-4 cointainer max-w-3xl space-y-4">
        <DateSelect />

        <div className="max-w-3xl space-y-4">
          <Card
            timeA={{ slug: "sui" }}
            timeB={{ slug: "cam" }}
            match={{ time: "7:00" }}
          />
          <Card
            timeA={{ slug: "uru" }}
            timeB={{ slug: "cor" }}
            match={{ time: "7:00" }}
          />
          <Card
            timeA={{ slug: "por" }}
            timeB={{ slug: "gan" }}
            match={{ time: "7:00" }}
          />
          <Card
            timeA={{ slug: "sui" }}
            timeB={{ slug: "cam" }}
            match={{ time: "7:00" }}
          />
          <Card
            timeA={{ slug: "sui" }}
            timeB={{ slug: "cam" }}
            match={{ time: "7:00" }}
          />
          <Card
            timeA={{ slug: "sui" }}
            timeB={{ slug: "cam" }}
            match={{ time: "7:00" }}
          />
        </div>
      </section>
    </main>
  </Fragment>
);
