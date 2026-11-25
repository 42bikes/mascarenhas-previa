# NOTES — prévia da Mascarenhas Rent a Car e Motos

Decisões de projeto e pendências da demonstração. O passo a passo do recon está
em `../DADOS-CLIENTE.md`.

## Estrutura (igual à prévia da Bahia Turismo)

```
index.html         página única: hero, frota, como funciona, condições, mapa, FAQ, CTA
proposta.html      apresentação comercial em stories, 10 telas
styles.css         identidade asfalto + âmbar + areia
i18n.js            motor de tradução (PT/EN/ES) e links de WhatsApp com mensagem pronta
main.js            menu mobile
assets/img/        fotos ilustrativas + capas de preview (og-site.jpg, og-proposta.jpg)
vercel.json        cleanUrls + atalho /p → /proposta
```

Publicação: estático, sem build. Na Vercel, `outputDirectory: "."` e o rewrite
`/p → /proposta` funcionam como na prévia da Bahia Turismo; no GitHub Pages o
atalho `/p` não existe (só `/proposta.html`). Para o preview no WhatsApp, os
`og:url` e `og:image` precisam virar absolutos com o domínio final.

## Identidade

O cliente não tem site nem manual de marca. A paleta saiu do que o próprio perfil
mostra: destaques nomeados por veículo ("Hilux 2021", "XRE 300C", "frota nova"),
tom de estrada e sol. Daí asfalto (`#17130F`), âmbar de sinalização (`#E39A1C`) e
areia (`#E0D2BC`), Archivo nos títulos e Inter no texto. É deliberadamente
diferente da Bahia Turismo (creme/teal/dourado) e da Voyara (laranja/petróleo).

## Regra de conteúdo: nada de dado fechado sem fonte

- Diária e caução não estão publicadas em nenhum canal. Todo card diz "diária sob
  consulta" e a conversa fecha valor, período e regras.
- Toyota Hilux e Honda XRE 300 aparecem como **modelos vistos no perfil**, com ano
  e disponibilidade remetidos ao WhatsApp. Não há versão, ano nem preço afirmados.
- Carro e scooter ficam como categoria, porque os modelos não estão publicados.
- A seção "Condições" existe por causa das avaliações: caução, combustível,
  franquia e CNH são o atrito real do negócio. Ela descreve o processo, não
  inventa valores de política.

## Proposta

`proposta.html` reaproveita o formato stories da apresentação da Bahia Turismo —
moldura de 480 px, barra de progresso, avançar/voltar, swipe, setas do teclado,
"ver tudo", escopos selecionáveis e modal final. 10 telas: capa, diagnóstico,
três mudanças, prévia ao vivo (iframe da home), bastidores, atendimento, temporada,
escopo, quem assina e prazo. Tema e conteúdo próprios.

## Tratamento das fotos do Google

- `scooter.jpg` foi reenquadrada para incluir o guidão inteiro (a primeira versão
  cortava o guidão).
- As placas/painéis de serviço na frente da loja ("ALUGUEL DE CARRO E MOTOS",
  "TRANSFER", "VIAGENS", "LOCAÇÃO DE VEÍCULOS" e os cartazes no vidro) estão
desfocados no hero e no card da scooter. A faixa da marca e o telefone no toldo
  foram mantidos, porque são a identidade da loja.
- Nenhuma placa de veículo legível aparece nas fotos usadas.
- Originais sem tratamento em `../_work/real/` (para refazer o recorte ou ajustar
  o desfoque sem baixar de novo).

## Pendências

1. Frota real (modelo, ano, unidades) e diárias por temporada.
2. Caução, seguro/franquia, formas de pagamento, limite de km, combustível.
3. Entrega em pousada/aeroporto e valores de transfer.
4. Fotos da loja e dos veículos (as atuais são geradas para a demo).
5. Domínio, absolutos de Open Graph e ficha no Google Meu Negócio.
6. Legendas do Instagram: a leitura anônima é bloqueada por login.
