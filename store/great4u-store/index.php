<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.css">
    <link rel="icon" href="assets/icong4u.png">
    <title> Great4U Login </title>
</head>
    <header id="top">
        <h1> <a id="title" href="home.html"> Great4U</a></h1>
    </header>
    <nav id="navegacao">
        <div id="links">
            <div id="sessao-frete">
                <h4> <img id="img-pin" src="assets/marker.svg"> <a href="frete.html" id="calcular"> Calcular Frete </a></h4>
            </div>
            <div id="sessao-carrinho">
                <a id="carrinho" href="cart.html"> <img id="img-cart" src="assets/shopping-cart.svg"></a> 
            </div>
                <img src="assets/user.svg" id="usericon">
                <h4 id="links_op"> Olá, faça seu <a href="login.html"> Login</a> ou <br> crie seu <a href="signup.html">Cadastro</a> </h4>
        </div>
    </nav>
<body>
    <br>
    <h1> FAZER LOGIN </h1>
    <div class="content">
        <form action="conexao.php" method="post">
        <section class="funcionalidades">
        <div class="container">
            <div class="form-group">
                <label for="username"> <strong>Usuário</strong></label> 
                <input type="text" class="section-control" name="usuario" placeholder="Nome, E-mail, CPF">
            </div>
        <br>
            <div class="form-group">
                <label for="password"> <strong>Senha</strong></label>
                <input type="password" class="section-control" name="senha" placeholder="******">
            </div>
        <br>
            <div class="form-group">
                <p id="fgtpassword"> <small><ins>Esqueceu a sua senha?</ins></small> </p>
            </div>
        <br>
            <div class="form-group">
                <input type="submit" class="section-control" id="submit" value="Enviar">
            </div>
        </div>
        </section>
        </form>
    </div>
     <footer>
            <p>&copy; CGR</p>
        </footer>
</body>
<script src="login.js"></script>
</html>