import axios from "axios";
import { useFormik, yupToFormErrors } from "formik";
import * as yup from "yup";

import { Icon, Input } from "~/components";

const validationSchema = yup.object().shape({
  name: yup.string().required("Preencha seu nome"),
  username: yup.string().required("Nome de usuário obrigatório"),
  email: yup
    .string()
    .email("Informe um e-mail válido")
    .required("Informe seu e-mail"),
  password: yup.string().required("Digite uma senha"),
});

export const Signup = () => {
  const formik = useFormik({
    onSubmit: async (values) => {
      const res = await axios.post("http://localhost:3000/users", {
        data: values,
      });
    },
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema,
  });

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
          <h2 className="text-2xl font-bold">Crie sua conta</h2>
        </div>
        <form className="p-4 space-y-6" onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            name="name"
            label="Seu nome"
            placeholder="Digite seu nome"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name}
          />

          <Input
            type="text"
            name="username"
            label="Seu nome de usuário"
            placeholder="Digite um nome de usuário"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && formik.errors.username}
          />
          <Input
            type="text"
            name="email"
            label="Seu e-mail"
            placeholder="Digite seu e-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
          />

          <Input
            type="password"
            name="password"
            label="Sua senha"
            placeholder="Digite sua senha"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
          />

          <button
            type="submit"
            className="w-full text-center text-white bg-red-500 px-6 py-4 rounded-xl disabled:opacity-50"
            disabled={!formik.isValid}
          >
            Criar minha conta
          </button>
        </form>
      </main>
    </div>
  );
};
