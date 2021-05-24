# Projeto PI5
Repositório criado para o desenvolvimento de um crud de biblioteca.

# Como executar o Front end

1° Passo fazer um clone da branch master utilizando o link https://github.com/marinaldoj/Projeto-PI5 <br>
2° Passo utilizar o comando npm install ou o yarn para baixar todas as dependencias usadas no projeto <br>
3° Passo iniciar a aplicação usando o npm start ou yarn start, aguardar pois irá abrir automaticamente no seu browser<br>

# Como executar o Back end

1° Criar um arquivo na pasta Database com nome "database.sqlite" <br>
2° Configurar o caminho no .env da aplicação "DB_DATABASE=" com o caminho do arquivo sqlite <br>
3° Rodar o comando "php artisan migrate:refresh"
3° Rodar o comando "php artisan serve"