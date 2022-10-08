import { Icon, Input } from "~/components";

export const Login = () => {
  return (
    <div>
      <header className=" border-b border-red-300">
        <div className="container max-w-xl p-4 flex justify-center">
          <img src="/imgs/logo-fundo-branco.svg" className="w-32 md:w-40" />
        </div>
      </header>

      <main className="container max-w-xl p-4">
        <div className="p-4 flex space-x-4 items-center">
          <a href="/">
            <Icon name="back" className="h-6" />
          </a>
          <h2 className="text-2xl font-bold">Entre na sua conta</h2>
        </div>
        <form className="p-4 space-y-6">
          <Input
            type="text"
            name="email"
            label="Seu e-mail"
            placeholder="Digite seu e-mail"
          />

          <Input
            type="password"
            name="password"
            label="Sua senha"
            placeholder="Digite sua senha"
          />

          <a href="/dashboard" className="block w-full text-center text-white bg-red-500  px-6 py-4 rounded-xl">
            Entrar
          </a>
        </form>
      </main>
    </div>
  );
};
