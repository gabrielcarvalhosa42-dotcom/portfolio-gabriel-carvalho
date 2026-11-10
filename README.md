# Portfólio de Gabriel Carvalho de Sá

Site estático e responsivo para apresentação profissional de **Gabriel Carvalho de Sá**, com foco em **Inteligência Artificial, infraestrutura, Cloud, DevOps e redes**.

## Conteúdo

- Apresentação profissional com foto fornecida pelo titular;
- CREA-SP `5071107011` (registro informado pelo titular; situação cadastral não consultada);
- Experiências recentes em **Inovanoc** e **Doctor Assistant.AI**;
- Projetos e arquiteturas da **NUVEXIS** (incluindo iniciativas em desenvolvimento);
- Formação acadêmica, competências técnicas e contato;
- Catálogo pesquisável de **144 registros documentais** (cursos, treinamentos, palestras, certificações e arquivos de acervo);
- PDF profissional de 20 páginas com links para documentos originais.

> Os 144 registros não significam 144 certificações profissionais. Documentos de fabricantes e de cursos estão identificados conforme a evidência disponível. Alguns documentos do Google Drive podem depender de permissão de acesso.

## Publicação com GitHub Pages

1. Crie um repositório público chamado **`portfolio-gabriel-carvalho`** na conta `gabrielcarvalhosa42-dotcom`.
2. Adicione o conteúdo desta pasta **na raiz do repositório**, preservando subpastas e nomes.
3. Vá em **Settings → Pages → Build and deployment**.
4. Selecione **Deploy from a branch**, branch **`main`**, pasta **`/ (root)`**, e salve.
5. Após o GitHub confirmar a implantação, o endereço previsto será: `https://gabrielcarvalhosa42-dotcom.github.io/portfolio-gabriel-carvalho/`.

Esse endereço é apenas o formato esperado, **não foi validado como site publicado**.

## Rodar localmente

```bash
python3 -m http.server 8000
```

Abra `http://localhost:8000` (não utilize `file://`, pois o catálogo é carregado por `fetch`).

## Arquivos

```text
index.html                       site e conteúdo
style.css                        identidade visual, responsividade, acessibilidade
script.js                        menu e busca/filtros do catálogo
assets/gabriel-retrato.webp      retrato original otimizado
assets/capa-compartilhamento.jpg capa social
assets/qr-portfolio.png          QR do portfólio Canva
assets/portfolio-gabriel-carvalho.pdf
assets/favicon.svg
data/certificados.json           registros do acervo
.github/workflows/check-site.yml checagem estrutural
```

## Manutenção

As informações textuais estão no `index.html`. Para acrescentar ou remover documentos, edite `data/certificados.json` mantendo a estrutura `{ "titulo": "...", "categoria": "...", "observacao": "...", "url": "..." }`.

## Privacidade e direitos

Este repositório é destinado a divulgação pública. Antes de publicá-lo, confira a visibilidade dos links do Google Drive e remova qualquer documento que não queira compartilhar. **Não inclua tokens, senhas, chaves de API ou dados sigilosos**.

O código é MIT. O uso do nome, retrato, certificados, portfólio e identidade profissional não é licenciado para reutilização por terceiros.

**Contato:** [LinkedIn](https://www.linkedin.com/in/gabriel-carvalho-a2b2aa83) · [Portfólio Canva](https://gabrielcarvalho.my.canva.site/)
