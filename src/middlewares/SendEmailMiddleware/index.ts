import { Request, Response, NextFunction } from 'express';
import nodemailer from 'nodemailer';

export default async function SendEmailMiddleware(
  password: string, receiverEmail: string
) {
  if (!process.env.TRANSPORTER_HOST || !process.env.TRANSPORTER_PORT || !process.env.TRANSPORTER_PORT || !process.env.TRANSPORTER_PORT || !process.env.TRANSPORTER_PASSWORD) {
    return new Error('invalid transporter');
  }

  const transporter = nodemailer.createTransport({
    host: process.env.TRANSPORTER_HOST,
    port: Number(process.env.TRANSPORTER_PORT),
    auth: {
      user: process.env.TRANSPORTER_EMAIL,
      pass: process.env.TRANSPORTER_PASSWORD
    }
  });

  await transporter.sendMail({
    from: `"iCER Mail" <${process.env.TRANSPORTER_EMAIL}>`,
    to: receiverEmail,
    subject: 'iCER - Cadastro',
    text: 'Cadastro realizado com sucesso!',
    html: `<div><h1>Seu cadastro na plataforma iCer foi realizado!</h1><h3>Sua senha de acesso é: ${password}</h3><span>Recomendamos que ao realizar o primeiro acesso, vá na opção "Redefinir senha".</span></div>`,
  }).then((response) => {
    return true;
  }).catch((err) => {
    return false;
  });
}
