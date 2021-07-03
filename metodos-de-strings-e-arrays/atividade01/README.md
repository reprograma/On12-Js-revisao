# Exercício 🏫

## Sistema de filtro de comentários

Assim como o YouTube exclui vídeos que falem `pandemia` ou `covid`, uma rede social precisa bloquear qualquer comentário que também possua uma dessas duas palavras.

Faça um sistema que verifique o texto de um comentário e caso exista qualquer uma das duas palavras citada anteriormente imprima: `Comentário bloqueado por conter palavras proibidas`, senão, imprima: `Comentário autorizado`.

Obs.: É necessário bloquear a palavra em qualquer formato (Maiúscula, Minúscula...).

Exemplo:

```javascript=
const comentario = "Esse COVID é muito perigoso!";
```

Para o exemplo acima o sistema deverá imprimir:

```
Comentário bloqueado por conter palavras proibidas
```

Faça o teste com outros exemplos.