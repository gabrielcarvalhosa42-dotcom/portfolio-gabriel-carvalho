# Pacote GitHub de Gabriel Carvalho de Sá

Este pacote contém **dois repositórios independentes**:

1. `gabrielcarvalhosa42-dotcom/`: README do perfil GitHub.
2. `portfolio-gabriel-carvalho/`: site do portfólio responsivo com foto, CREA-SP informado, projetos, documentos, PDF, busca de certificados e validação GitHub Actions.

## Publicar na conta GitHub

- Crie um repositório **público** chamado `gabrielcarvalhosa42-dotcom` e envie os arquivos da pasta de mesmo nome.
- Crie outro repositório **público** chamado `portfolio-gabriel-carvalho` e envie o conteúdo da pasta correspondente **na raiz**.
- No segundo repositório, abra `Settings > Pages > Build and deployment`, escolha `Deploy from a branch`, `main`, `/(root)`, e salve.
- O endereço **esperado após a implantação**, ainda não confirmado, será `https://gabrielcarvalhosa42-dotcom.github.io/portfolio-gabriel-carvalho/`.

## Cuidados antes de divulgar

- Os arquivos do Drive vinculados ao catálogo podem não estar compartilhados publicamente. Verifique permissão individual.
- O número **CREA-SP 5071107011** foi transcrito da imagem fornecida pelo titular, sem verificação cadastral oficial.
- O acervo de **144 registros** inclui documentos de diferentes tipos, não 144 certificações profissionais.
- Cursos, documentos de validade vencida e projetos ainda em evolução estão identificados sem afirmar conclusão indevida.
- A foto foi fornecida pelo usuário. Não a reutilize fora do contexto autorizado.
- Não publique segredos, credenciais, chaves, arquivos internos dos projetos NUVEXIS nem informações pessoais de terceiros.

## Rodar o site localmente

```bash
cd portfolio-gabriel-carvalho
python3 -m http.server 8000
```

Visite `http://localhost:8000`. O catálogo precisa de servidor HTTP por usar JavaScript `fetch`.
