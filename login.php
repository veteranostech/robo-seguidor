<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>Área de Login</h1>
    <nav>
      <ul>
        <li><a href="index.html">Início</a></li>
        <li><a href="projeto.html">Projeto</a></li>
        <li><a href="equipe.html">Equipe</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="login.php" class="active">Login</a></li>
        <li><a href="painel.html">Painel</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="login-form">
      <h2>Faça seu login</h2>
      <?php
if (isset($_GET['erro'])) {
    echo "<p style='color:red;'>Usuário ou senha incorretos.</p>";
}
?>
      <form action="autenticar.php" method="post">
        <label for="usuario">Usuário:</label>
        <input type="text" id="usuario" name="usuario" required />

        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha" required />

        <button type="submit">Entrar</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 - Equipe Veteranos Tech</p>
  </footer>
</body>
</html>