<?php
define('host', 'NOME DO HOST');
define('usuario', 'NOME DO USUARIO');
define('senha', 'SENHA DO BANCO DE DADOS');
define('db', 'BANCO DE DADOS');

$conexao = mysqli_connect (host, usuario, senha, db) or die ('Não foi possível conectar !');
?>