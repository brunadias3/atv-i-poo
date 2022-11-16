<p align="center">
<h1 align="center"> FATEC Profº Jessen Vidal, SJC - 3º Semestre ADS </h1>

<h2> 📑 Atividade 5 - Programação Orientada a Objeto </h2>
<p>
O objetivo final é criar uma aplicação web, na abordagem SPA, que atenda a todos os requisitos que o sistema 
precisa ter, para atender aos clientes da WB. Os requisitos foram descritos na atvi, a primeira atividade que 
deu origem a empresa de desenvolvimento de software. Busque os requisitos na documentação da atvi.
</p>
   
<div id='equipe'>
<h2> 🎓 Equipe de Desenvolvimento </h2>

|Integrantes da Equipe|Linkedin|Github|Avatar|
|:---------|:-------:|:------:|:------:|
|<strong>Bruna Dias</strong>|[Linkedin](https://www.linkedin.com/in/bruna-dias-977b611b9/) | [Github](https://github.com/brunadias3)|<img src = "imagens/bruna.jpg" width="90" height="90">|
|<strong>Everton Ricardo</strong>|[Linkedin](https://www.linkedin.com/in/everton-rocha-1a456b20b) | [Github](https://github.com/Evertonrwr)|<img src = "imagens/everton.jpg" width="90" height="90">|

  
<h2> ⛏️ Para executar a aplicação</h2>

É necessário instalar o <a href="https://dev.mysql.com/downloads/workbench/">MYSQL Workbench</a>.

Após a instalação:
- Clique na conexão "Local instance"
- Na aba <i>Server</i>, clique em <i>Data Import</i>
- Em seguida, clique no checkbox <i>Import from Self-Contained File</i>
- importe o arquivo wb.sql
- Em <i>Default Target Schema</i>, crie um novo schema chamado "wb".
- Clique na aba "Import Progress", e por fim "Start Import"
  
  Para executar a aplicação, certifique-se de ter instalado o NodeJs em seu computador:
- Faça o clone do repositório:

```
git clone https://github.com/brunadias3/atv-i-poo
```
- Na pasta raiz do projeto, digite:
```
git fetch

git checkout AtvV

```
- Agora instale as dependências do projeto:
```
cd front
npm install
cd ..
cd Backend
npm install
```
- Na pasta Backend/Conexao, no arquivo conexao.ts, mude a senha para a mesma senha que você cadastrou no seu Workbench para o usuário root, e em seguida, execute o seguinte comando para compilar:
```
npx tsc ou tsc
```
- Execute a aplicação pelo seguinte comando:
```
npm run dev
