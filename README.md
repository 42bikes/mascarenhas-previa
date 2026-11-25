# Mascarenhas Rent a Car e Motos — prévia do site

Demonstração do novo site da **Mascarenhas Rent a Car e Motos**, locadora de
carros, motos e scooters em Itacaré/BA. Só HTML, CSS e JS — sem build e sem
dependências.

> **Isto é uma demonstração, não o site publicado.** A loja não tem site hoje: o
> link do Google é um `contate.me` que cai no WhatsApp.

## O que tem

- **Home completa**: hero com a fachada na Pedro Longo, 558, frota em quatro
  cards, como funciona, condições, mapa e FAQ.
- **Frota sem dado inventado**: Jeep Renegade, Toyota Hilux e Honda XRE 300
  aparecem como modelos vistos no perfil da loja; ano e disponibilidade vão para
  o WhatsApp. Diária sempre "sob consulta".
- **Condições por escrito**: caução, combustível, franquia e CNH na página — o
  atrito que as avaliações do Google apontam na devolução.
- **Três idiomas**: português, inglês e espanhol, com a escolha lembrada. Link
  direto por idioma: `?lang=en` (`pt`, `en`, `es`).
- **WhatsApp com contexto**: cada botão abre a conversa com o veículo escolhido.
- **Apresentação comercial**: `proposta.html`, em formato stories, com 10 telas.
  Publicada em `/proposta`, com atalho em `/p` (rewrite no `vercel.json`).
- **Preview no WhatsApp**: `assets/img/og-site.jpg` e `og-proposta.jpg` (1200×630).

**Repositório:** https://github.com/42bikes/mascarenhas-previa

## Rodar localmente

```bash
python -m http.server 4395 --bind 127.0.0.1
# http://127.0.0.1:4395/            home
# http://127.0.0.1:4395/proposta.html   apresentação
```

## Estrutura

```
index.html         página única (hero, frota, como funciona, condições, mapa, FAQ)
proposta.html      apresentação em stories (10 telas)
styles.css         identidade asfalto + âmbar + areia
i18n.js            PT/EN/ES e links de WhatsApp
main.js            menu mobile
vercel.json        cleanUrls + /p → /proposta
NOTES.md           decisões e pendências
assets/img/        fotos e capas de preview
```

## Publicar

Estático. Na Vercel, importar o repositório com `outputDirectory: "."` e o
rewrite `/p` já definidos. No GitHub Pages funciona com Source = `main` / `/`
(nesse caso o atalho `/p` não existe; só `/proposta.html`).

## Pendências antes de publicar de verdade

- **Fotos**: vieram do perfil da loja no Google Maps. Precisam da confirmação de
  uso do Fábio — ou dos arquivos originais, porque as do Google vêm com
  resolução limitada. Placas de sinalização da loja estão desfocadas no hero e no
  card da scooter.
- **Frota e diárias**: modelos, anos, unidades e valores por temporada.
- **Condições**: valor da caução, seguro/franquia, pagamento, limite de km.
- **Traduções**: feitas para a demonstração, sem revisão de falante nativo.
- **Open Graph**: `og:url` e `og:image` precisam ficar absolutos com o domínio.
