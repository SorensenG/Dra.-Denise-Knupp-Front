# Landing Page - Dra. Denise Knupp

Landing page estática em HTML, CSS e JavaScript puro para o projeto de extensão Site Para Todos.

## Estrutura

- `index.html`: conteúdo da página, SEO local, links e dados estruturados.
- `style.css`: identidade visual roxa/dourada, responsividade e componentes.
- `script.js`: menu mobile, FAQ acessível, rolagem suave, animações e eventos de conversão.
- `privacidade.html`: política de privacidade e transparência.
- `creditos.html`: créditos e licenças das imagens ilustrativas.
- `robots.txt` e `sitemap.xml`: indexação e descoberta pelo Google.
- `vercel.json`: URLs limpas e cabeçalhos de segurança.

## Identidade visual

A página segue o padrão visual do Instagram da Dra. Denise:

- fundo roxo em degradê;
- textos brancos;
- caixas em roxo escuro;
- detalhes dourados;
- monograma textual `dk` como placeholder da logo oficial.

Principais cores no CSS:

- roxo escuro: `#201028`, `#301830`, `#402040`;
- lilás: `#A08098`, `#C0A0C0`, `#F0E8F0`;
- dourado: `#D8A870`, `#E0B080`, `#F0C098`;
- WhatsApp: `#25D366`.

## Como editar conteúdo

Edite o arquivo `index.html`.

Campos mais importantes:

- telefone/WhatsApp: procure por `5519997876346`;
- endereço: procure por `Rua Sergipe, 15`;
- CRO: procure por `CRO/SP 144.215`;
- Instagram: procure por `dradeniseknupp`;
- tratamentos: seção com `id="tratamentos"`;
- FAQ: seção com `id="duvidas"`.

Depois de alterar telefone, endereço ou links, teste todos os botões.

## Como testar localmente

Opção simples:

1. Abra `index.html` no navegador.

Opção recomendada:

```bash
python3 -m http.server 8080
```

Depois acesse:

```text
http://127.0.0.1:8080
```

## Como publicar na Vercel

1. Envie a pasta para um repositório GitHub.
2. Entre na Vercel e importe o repositório.
3. Use configuração de projeto estático, sem build command.
4. Confirme que a raiz do projeto contém `index.html`.
5. Abra o preview e teste mobile, WhatsApp, Instagram e mapa.

## Cuidados éticos e LGPD

- Não publicar fotos de pacientes sem autorização formal.
- Não usar antes/depois sem validação ética e autorização.
- Não prometer resultado.
- Não divulgar preços ou promoções.
- Não oferecer diagnóstico online.
- Não coletar dados sensíveis por formulário no site.
- Manter dúvidas clínicas direcionadas para avaliação presencial.

## Validação realizada

- WhatsApp, Instagram, identidade visual e tratamentos principais confrontados com os canais oficiais da profissional.
- Endereço complementado com sala e CEP a partir dos cadastros públicos da clínica.
- Conteúdo clínico redigido sem promessa de resultado e com indicação de avaliação individual.
- Indexação, compartilhamento social, privacidade, acessibilidade e segurança preparados para produção.

## Itens que dependem da cliente

- Fornecer a versão vetorial da logomarca oficial, caso exista.
- Confirmar formação, cursos e especializações que possam ser divulgados.
- Confirmar dias e horários fixos, estacionamento e acessibilidade.
- Informar o domínio próprio quando for adquirido.
- Confirmar autorização final de uso da foto profissional.


## Assets adicionados nesta versão

- `dra-denise-portrait-original.jpg`, `dra-denise-portrait-transparent.png` e `dra-denise-portrait.webp`: foto enviada para uso no hero; a versão atual do WebP usa fundo transparente. Confirmar autorização final da cliente antes da publicação.
- `treatment-implant.webp`: derivada de Wikimedia Commons, `Dental implants (Unsplash).jpg`, Peter Kasprzyk, CC0.
- `treatment-prosthesis.webp`: derivada de Wikimedia Commons, `Dental prosthesis.jpg`, Trohimenko YS, CC BY-SA 4.0.
- `treatment-aesthetic.webp`: derivada de Wikimedia Commons, `Dental mirror.jpg`, Rachmaninoff, CC BY-SA 4.0.
- `treatment-general.webp`: derivada de Wikimedia Commons, `Dental setup for implants.jpg`, Coronation Dental Specialty Group/Ian Furst, CC BY-SA 3.0.
- `treatment-bruxism.webp`: derivada de Wikimedia Commons, `Hard splint mouthguard (4203068291).jpg`, CC BY-SA 2.0.
- `treatment-evaluation.webp`: derivada de Wikimedia Commons, `Dentalmirror.jpg`, Simplicius/Dozenist, CC BY-SA/GFDL.

As imagens foram otimizadas e recortadas para uso local no site. Evite substituir por fotos de pacientes sem autorização expressa e por escrito.
