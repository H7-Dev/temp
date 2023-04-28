> 1 / 1
> 
> Bom dia

1 / 1

Bom dia! Como posso ajudá-lo hoje?

> 1 / 1
> 
> Veja de forma breve o código: <?php require\_once("../model/banco.php"); class editarController { private $editar; private $livro; public function \_\_construct($id) { $this->editar = new Banco(); $this->livro = $this->editar->encontrarIDBaralho($id); // verifica se o formulário foi enviado if ($\_SERVER\['REQUEST\_METHOD'\] === 'POST' && isset($\_POST\['submit'\])) { $this->editarFormulario($\_POST); } } public function editarFormulario($dados) { $this->editar->atualizarBaralho($dados\['nome'\], $dados\['autor'\], $dados\['quantidade'\], $dados\['preco'\], $dados\['flag'\], $dados\['data'\], $dados\['id'\]); } public function \_\_get($coluna) { if (isset($this->livro\[$coluna\])) { return $this->livro\[$coluna\]; } return null; } } $id = filter\_input(INPUT\_GET, 'id'); $editar = new editarController($id); // echo "Nome do livro: " . $editar->nome . "<br>"; // echo "Autor do livro: " . $editar->autor . "<br>"; // echo "Quantidade em estoque: " . $editar->quantidade . "<br>"; // echo "Preço do livro: " . $editar->preco . "<br>"; // echo "Data de publicação: " . $editar->data . "<br>"; // echo "Flag do livro: " . $editar->flag . "<br>"; ?>

1 / 1

Este código é escrito em PHP e define a classe editarController que é responsável por receber um ID, pesquisar um livro com este ID e fornecer os dados do livro para serem exibidos em um formulário de edição.

A classe possui um método construtor que inicializa a conexão com o banco de dados e busca o livro com o ID fornecido. Se o formulário for enviado pelo método POST, o método editarFormulario é chamado para atualizar os dados do livro no banco de dados.

O método mágico \_\_get é definido para permitir o acesso aos dados do livro por meio de propriedades da classe, como $editar->nome, $editar->autor, etc.

O código também define uma variável $id que recebe o valor do parâmetro ID passado pela URL usando a função filter\_input. Em seguida, a classe editarController é instanciada com esse ID e os dados do livro são exibidos no formulário, mas a exibição é comentada.

> 1 / 1
> 
> Tente implemento ao método editarFormulario try { $this->editar->atualizarBaralho($nome, $autor, $quantidade, $preco, $flag, $data, $id); echo "<script>alert('O livro $nome foi atualizado com sucesso!');document.location='../view/index.php'</script>"; } catch (Exception $e) { echo "<script>alert('Erro ao gravar registro: " . $e->getMessage() . "');history.back()</script>"; }

1 / 1

O método editarFormulario poderia ser modificado para incluir uma estrutura try-catch para capturar possíveis exceções que possam ser lançadas durante a execução do método atualizarBaralho. Aqui está um exemplo de como isso pode ser feito:

php

```php
public function editarFormulario($dados) {
    $nome = $dados['nome'];
    $autor = $dados['autor'];
    $quantidade = $dados['quantidade'];
    $preco = $dados['preco'];
    $flag = $dados['flag'];
    $data = $dados['data'];
    $id = $dados['id'];
    
    try {
        $this->editar->atualizarBaralho($nome, $autor, $quantidade, $preco, $flag, $data, $id);
        echo "<script>alert('O livro $nome foi atualizado com sucesso!');document.location='../view/index.php'</script>";
    } catch (Exception $e) {
        echo "<script>alert('Erro ao gravar registro: " . $e->getMessage() . "');history.back()</script>";
    }
}
```

Neste exemplo, a estrutura try-catch envolve a chamada ao método atualizarBaralho e, se ocorrer uma exceção, uma mensagem de erro é exibida para o usuário. Se a atualização for bem-sucedida, uma mensagem de sucesso é exibida e o usuário é redirecionado para a página inicial. Observe que as variáveis ​​$nome, $autor, $quantidade, $preco, $flag, $data e $id são declaradas antes da chamada ao método atualizarBaralho para que possam ser usadas tanto na mensagem de sucesso quanto na mensagem de erro.