# :construction: Todos os commits "Initial commit" foram feitos pela @Trybe :construction:

##🛑 Este projeto foi desenvolvido em grupo na conclusao do modulo de frontend. <br>
Devs:<br>
[Gabriel Scapim](https://github.com/gabrielscapim)<br>
[Gabrieli Santos](https://github.com/gabrielisantos-dev)<br>
[Iago Gois](https://github.com/dev-iago-gois)<br>
[Leonardo Lindo](https://github.com/leocaridade)<br>
[Lucca Mendes](https://github.com/TMendes-lucca)<br>
[Olivia Couto](https://github.com/oliiviacouto)<br>

[LINK DO APP](https://projeto-app-de-receitas-eta.vercel.app/)<br>
Para teste:<br>
e-mail: teste@teste.com<br>
senha: 123456Ab.<br>

<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você;
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->

## LISTAGEM DE REQUISITOS

Aqui está a lista de requisitos:

1. [ ] Desenvolva os testes unitários de maneira que a cobertura seja de, no mínimo, 90%

2. [x] Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login

3. [x] Desenvolva a tela de maneira que a pessoa consiga escrever seu email no input de email e sua senha no input de senha

4. [x] Desenvolva a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos

5. [x] Após a submissão do formulário, salve no localStorage o e-mail da pessoa usuária na chave `user`

6. [x] Redirecione a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do login

7. [x] Implemente o header de acordo com a necessidade de cada tela

8. [x] Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil

9. [x] Desenvolva o botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la

10. [x] Implemente os elementos da barra de busca respeitando os atributos descritos no protótipo

11. [x] Implemente 3 radio buttons na barra de busca: Ingredient, Name e First letter

12. [ ] Busque na API de comidas caso a pessoa esteja na página de comidas, e na API de bebidas caso esteja na de bebidas

13. [x] Redirecione para a tela de detalhes da receita caso apenas uma receita seja encontrada, com o ID da mesma na URL

14. [x] Caso a busca retorne mais de uma receita, renderize as 12 primeiras encontradas, exibindo a imagem e o nome de cada uma

15. [ ] Exiba um `alert` caso nenhuma receita seja encontrada

16. [x] Implemente o menu inferior posicionando-o de forma fixa e contendo 2 ícones: um para comidas e outro para bebidas

17. [x] Exiba o menu inferior apenas nas telas indicadas pelo protótipo

18. [x] Redirecione a pessoa usuária para a tela correta ao clicar em cada ícone no menu inferior

19. [x] Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card

20. [ ] Implemente os botões de categoria para serem utilizados como filtro

21. [x] Implemente o filtro das receitas por meio da API ao clicar no filtro de categoria

22. [x] Implemente o filtro como um toggle, o qual se for selecionado novamente, o app deve retornar as receitas sem nenhum filtro

23. [ ] Redirecione a pessoa usuária ao clicar no card para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL

24. [x] Realize uma request para a API passando o `id` da receita que deve estar disponível nos parâmetros da URL

25. [x] Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube incorporado e recomendações

26. [x] Implemente as recomendações. Para receitas de comida, a recomendação deverá ser bebida, já para as receitas de bebida a recomendação deverá ser comida

27. [x] Implemente os 6 cards de recomendação, mostrando apenas 2. O scroll é horizontal, similar a um `carousel`

28. [x] Desenvolva um botão de nome "Start Recipe" que deve ficar fixo na parte de baixo da tela o tempo todo

29. [x] Implemente a solução de forma que, caso a receita já tenha sido feita, o botão "Start Recipe" desapareça

30. [x] Implemente a solução de modo que, caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continue Recipe"

31. [x] Redirecione a pessoa usuária caso o botão "Start Recipe" seja clicado, a rota deve mudar para a tela de receita em progresso

32. [x] Implemente um botão de compartilhar e um de favoritar a receita

33. [x] Implemente a solução de forma que, ao clicar no botão de compartilhar, o link da receita dentro do app deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer

34. [x] Salve as receitas favoritas no `localStorage` na chave `favoriteRecipes`

35. [x] Implemente o ícone do coração (favorito) de modo que: deve vir preenchido caso a receita esteja favoritada e "despreenchido" caso contrário

36. [ ] Implemente a lógica no botão de favoritar. Caso seja clicado, o ícone do coração deve mudar seu estado atual, caso esteja preenchido deve mudar para "despreenchido" e vice-versa

37. [x] Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes com suas respectivas quantidades e instruções

38. [x] Desenvolva um checkbox para cada item da lista de ingredientes

39. [x] Implemente uma lógica que ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista

40. [x] Salve o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita

41. [x] Desenvolva a lógica de favoritar e compartilhar. A lógica da tela de detalhes de uma receita se aplica aqui

42. [x] Implemente a solução de modo que o botão de finalizar receita ("Finish Recipe") só pode estar habilitado quando todos os ingredientes estiverem _"checkados"_ (marcados)

43. [ ] Redirecione a pessoa usuária após clicar no botão de finalizar receita ("Finish Recipe"), para a página de receitas feitas, cuja rota deve ser `/done-recipes`

44. [x] Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo

45. [x] Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, nome, categoria, nacionalidade, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar

46. [x] Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar

47. [x] Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

48. [x] Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros

49. [x] Redirecione para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita

50. [x] Implemente os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas), respeitando os atributos descritos no protótipo

51. [x] Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, nome, categoria, nacionalidade, um botão de compartilhar e um de "desfavoritar"

52. [x] Desenvolva a tela de modo que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar"

53. [x] Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

54. [x] Desenvolva a solução de modo que o botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do `localStorage` e da tela

55. [x] Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros

56. [x] Redirecione a pessoa usuária ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita

57. [x] Implemente os elementos da tela de perfil respeitando os atributos descritos no protótipo

58. [x] Implemente a solução de maneira que o e-mail da pessoa usuária deve estar visível

59. [x] Implemente 3 botões: um de nome "Done Recipes", um de nome "Favorite Recipes" e um de nome "Logout"

60. [x] Redirecione a pessoa usuária que, ao clicar no botão de "Done Recipes", a rota deve mudar para a tela de receitas feitas

61. [x] Redirecione a pessoa usuária que, ao clicar no botão de "Favorite Recipes", a rota deve mudar para a tela de receitas favoritas

62. [x] Redirecione a pessoa usuária que ao clicar no botão de "Logout", o `localStorage` deve ser limpo e a rota deve mudar para a tela de login
