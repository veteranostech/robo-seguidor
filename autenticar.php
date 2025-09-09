<?php
session_start();

// Usuário e senha fixos (substitua por banco de dados futuramente)
$usuario_correto = "admin";
$senha_correta = "1234";

// Verifica se os dados foram enviados via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = $_POST['usuario'] ?? '';
    $senha = $_POST['senha'] ?? '';

    // Validação simples
    if ($usuario === $usuario_correto && $senha === $senha_correta) {
        $_SESSION['usuario'] = $usuario; // Mantém consistência com protecao.php
        header("Location: painel.php");
        exit();
    } else {
        // Redireciona com mensagem de erro via GET
        header("Location: login.php?erro=1");
        exit();
    }
} else {
    // Acesso direto sem POST
    header("Location: login.php");
    exit();
}
?>