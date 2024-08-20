import express, { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/", function (req: Request, res: Response) {
  res.send("Olá pessoal, tudo bem? Quero fazer mais uma mudança");
});

//Inserir usuários
app.post("/user", async function (req: Request, res: Response) {
  //Inserir um usuário ...
  try {
    const userdata = req.body;
    console.log(userdata);
    const newuser = await prisma.user.create({
      data: userdata,
    });

    console.log(newuser);

    res.json({
      status: 200,
      newuser: newuser,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: 500,
      message: error,
    });
  }
});

// Listar usuários
app.get("/users", async function (req: Request, res: Response) {
  const users = await prisma.user.findMany();

  res.json(users);
});

// Atualizar usuários

app.put("/user", async function () {});

// Deletar usuários

app.delete("/user", async function () {});

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});
