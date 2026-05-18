# Guia de Resoluções de Imagens — AI Photo Mastery

Todas as imagens devem ser otimizadas para web. Use ferramentas como TinyPNG, ImageOptim ou Cloudinary para comprimir.

---

## 1. HERO SECTION — Presença Visual Premium

**Arquivo:** `src/components/Hero.tsx` (linha ~77)
**Uso Atual:** 
```html
<img src="https://i.ibb.co/WvTzs3ZJ/Hero.png" alt="Presença visual premium" />
```

**Posicionamento:** Coluna direita (desktop apenas)
**Aspect Ratio:** 3:4 (retrato)
**Resoluções Ideais:**

| Breakpoint | Largura | Altura | Recomendação |
|-----------|---------|--------|--------------|
| Mobile | Não exibe | — | — |
| Tablet | Não exibe | — | — |
| Desktop (lg) | 400px | 533px | **800px × 1066px** (2x para retina) |
| Desktop XL (xl) | 450px | 600px | **900px × 1200px** (2x para retina) |

**Especificações:**
- **Formato:** JPG (85-90% quality) ou WebP
- **Tamanho máximo arquivo:** 150-200KB
- **Proporção:** Retrato (3:4)
- **Estilo:** Foto profissional masculina, iluminação premium, editorial
- **Características:**
  - Iluminação cinematográfica
  - Composição editorial
  - Presença visual forte
  - Sofisticação visual
  - Espaço negativo de ±20% no topo/base
  - Bem definido/nítido

**Dica de Upload:**
```
Criar 2 versões:
- hero-desktop.jpg (800×1066px)
- hero-desktop-xl.jpg (900×1200px)
Ou usar uma versão maior e deixar o navegador redimensionar
```

---

## 2. MODERN DATING SECTION — Editorial Visual

**Arquivo:** `src/components/ModernDating.tsx` (linha ~47)
**Uso Atual:**
```html
<img src="https://images.pexels.com/photos/2379005/..." alt="Presença digital moderna" />
```

**Posicionamento:** Coluna direita (lado a lado com texto)
**Aspect Ratio:** 4:5 (retrato)
**Resoluções Ideais:**

| Breakpoint | Largura | Altura | Recomendação |
|-----------|---------|--------|--------------|
| Mobile | Não exibe | — | — |
| Tablet (md) | 300px | 375px | **600px × 750px** |
| Desktop (lg) | 380px | 475px | **760px × 950px** (2x) |
| Desktop XL | 400px | 500px | **800px × 1000px** (2x) |

**Especificações:**
- **Formato:** JPG (85-90% quality) ou WebP
- **Tamanho máximo arquivo:** 120-150KB
- **Proporção:** Retrato 4:5
- **Estilo:** Foto editorial masculina moderna
- **Características:**
  - Retrato inteiro ou 3/4
  - Ambiente premium/sofisticado
  - Roupas bem ajustadas, presença visual forte
  - Iluminação natural ou profissional
  - Expressão neutra/confiante

---

## 3. INVISIBLE COST SECTION — Before/After Comparativo

**Arquivo:** `src/components/InvisibleCost.tsx` (linhas ~26, ~50)
**Uso Atual:**
```html
<!-- Antes (lado esquerdo) -->
<img src="https://images.pexels.com/photos/3965545/..." alt="Antes" />

<!-- Depois (lado direito) -->
<img src="https://images.pexels.com/photos/1516680/..." alt="Depois" />
```

**Posicionamento:** Duas colunas lado a lado (antes/depois)
**Aspect Ratio:** 3:4 (retrato)
**Resoluções Ideais:**

| Breakpoint | Largura c/ | Altura | Recomendação |
|-----------|-----------|--------|--------------|
| Mobile | 150px (cada) | 200px | **300px × 400px** |
| Tablet (md) | 180px (cada) | 240px | **360px × 480px** |
| Desktop (lg) | 220px (cada) | 293px | **440px × 586px** (2x) |
| Desktop XL | 240px (cada) | 320px | **480px × 640px** (2x) |

**Especificações (AMBAS as imagens):**
- **Formato:** JPG (85% quality) ou WebP
- **Tamanho máximo arquivo:** 80-100KB por imagem
- **Proporção:** 3:4 (retrato quadrado-ish)
- **Estilo:** Retratos masculinos em poses naturais

**Imagem "Antes":**
- Foto genérica, sem direção visual
- Iluminação plana
- Expressão comum
- Roupas simples/anônimas
- Fundo neutro

**Imagem "Depois":**
- Foto sofisticada, direcionada
- Iluminação profissional
- Expressão confiante/intencional
- Roupas premium/bem ajustadas
- Fundo premium ou ambiente melhor

---

## 4. ETHICS SECTION — Editorial Premium

**Arquivo:** `src/components/Ethics.tsx` (linha ~35)
**Uso Atual:**
```html
<img src="https://images.pexels.com/photos/1681010/..." alt="Estética masculina moderna" />
```

**Posicionamento:** Coluna esquerda (lado a lado com texto)
**Aspect Ratio:** 4:5 (retrato)
**Resoluções Ideais:**

| Breakpoint | Largura | Altura | Recomendação |
|-----------|---------|--------|--------------|
| Mobile | Não exibe | — | — |
| Tablet (md) | 300px | 375px | **600px × 750px** |
| Desktop (lg) | 380px | 475px | **760px × 950px** (2x) |
| Desktop XL | 400px | 500px | **800px × 1000px** (2x) |

**Especificações:**
- **Formato:** JPG (85-90% quality) ou WebP
- **Tamanho máximo arquivo:** 120-150KB
- **Proporção:** Retrato 4:5
- **Estilo:** Foto editorial masculina sofisticada
- **Características:**
  - Iluminação cinematográfica
  - Composição profissional
  - Ambiente premium (escritório, estúdio, luxo silencioso)
  - Roupas Premium (terno, camiseta premium, etc)
  - Presença visual intencional

---

## 5. TRANSFORMATIONS SECTION — Grid 2×2 Before/After

**Arquivo:** `src/components/Transformations.tsx` (linhas ~3-20)
**Uso Atual:**
```typescript
const transformations = [
  {
    label: 'Invisível → Magnético',
    before: 'https://images.pexels.com/...',
    after: 'https://images.pexels.com/...',
  },
  // 4 pares no total (8 imagens)
];
```

**Posicionamento:** Grid 2 colunas (1 linha = 1 transformação = 2 imagens)
**Aspect Ratio:** 1:1 (quadrado)
**Resoluções Ideais:**

| Breakpoint | Tamanho por img | Recomendação |
|-----------|----------------|--------------|
| Mobile | 160px × 160px | **320px × 320px** |
| Tablet (sm) | 200px × 200px | **400px × 400px** |
| Desktop (md) | 280px × 280px | **560px × 560px** (2x) |
| Desktop (lg) | 320px × 320px | **640px × 640px** (2x) |

**Especificações (ambas as imagens do par):**
- **Formato:** JPG (80-85% quality) ou WebP
- **Tamanho máximo arquivo:** 60-80KB por imagem
- **Proporção:** Quadrado 1:1
- **Estilo:** Retratos tipo avatar/profile

**Imagem de Antes:**
- Genérica, comum, sem presença
- Iluminação fraca
- Roupas anônimas

**Imagem de Depois:**
- Sofisticada, intencional, presente forte
- Iluminação profissional
- Roupas premium

**Dica:** As 4 transformações devem contar histórias visuais diferentes:
1. Invisível → Magnético
2. Genérico → Premium
3. Comum → Intencional
4. Fraco → Sofisticado

---

## 6. PROOFS/EXAMPLES SECTION — Galeria Editorial

**Arquivo:** `src/components/Proofs.tsx` (linhas ~3-30)
**Uso Atual:**
```typescript
const proofImages = [
  { src: '...', desc: 'Posicionamento visual mais forte' },
  // 6 imagens no total
];
```

**Posicionamento:** Masonry grid responsivo (2-3 colunas)
**Aspect Ratio:** Variável (alguns 2:3, alguns 3:4)
**Resoluções Ideais:**

| Tipo | Aspect Ratio | Largura | Altura | Recomendação |
|------|-------------|---------|--------|--------------|
| Retrato curto | 2:3 | 200px | 300px | **400px × 600px** |
| Retrato longo | 3:4 | 200px | 267px | **400px × 533px** |
| Vertical maior | 3:4 | 220px | 293px | **440px × 586px** |

**Especificações Gerais:**
- **Formato:** JPG (80-85% quality) ou WebP
- **Tamanho máximo arquivo:** 70-100KB por imagem
- **Proporção:** Mista (2:3 e 3:4)
- **Estilo:** Editorial premium masculino
- **Características:**
  - Todos devem mostrar alta qualidade perceptiva
  - Variedade de ambientes (indoor, outdoor, estúdio)
  - Diferentes tipos corporais/estilos
  - Iluminação profissional consistente
  - Roupas premium e bem ajustadas

**Distribuição das 6 imagens:**
```
Mobile (1 coluna):     Todas stackadas
Tablet (2 colunas):    Alternadas
Desktop (3 colunas):   Grid uniforme
```

---

## 7. OFFER SECTION — Branding/Credibilidade (Opcional)

**Arquivo:** `src/components/Offer.tsx`
**Sugestão:** Adicionar uma imagem de exemplo/mockup

**Aspect Ratio:** 16:9 ou 4:3
**Resoluções Ideais:**

| Breakpoint | Largura | Altura | Recomendação |
|-----------|---------|--------|--------------|
| Mobile | 280px | 157px (16:9) | **560px × 315px** |
| Desktop | 500px | 281px (16:9) | **1000px × 562px** (2x) |

**Especificações:**
- **Formato:** JPG ou WebP
- **Tamanho máximo arquivo:** 100-150KB
- **Estilo:** Mockup do sistema, dashboard, ou exemplo

---

## RESUMO — Tabela Rápida

| Seção | Aspect Ratio | Mobile | Tablet | Desktop | XL |
|-------|-------------|--------|--------|---------|-----|
| Hero | 3:4 | — | — | **800×1066** | **900×1200** |
| ModernDating | 4:5 | — | **600×750** | **760×950** | **800×1000** |
| InvisibleCost (each) | 3:4 | **300×400** | **360×480** | **440×586** | **480×640** |
| Ethics | 4:5 | — | **600×750** | **760×950** | **800×1000** |
| Transformations (each) | 1:1 | **320×320** | **400×400** | **560×560** | **640×640** |
| Proofs (variável) | 2:3 / 3:4 | **400×600** | **400×533** | **440×586** | — |

---

## COMO FAZER UPLOAD

### Opção 1: Usar Pexels (Recomendado para Demo)
- Vá para https://www.pexels.com
- Procure por: "professional male portrait", "handsome man", "business man"
- Copie o URL da imagem em alta resolução
- Substitua o URL no componente

### Opção 2: Usar ImgBB (Para Imagens Customizadas)
```
1. Vá para https://imgbb.com
2. Upload da imagem (max 12MB)
3. Copie o link direto (não o HTML embed)
4. Substitua em src=""
```

### Opção 3: Arquivo Local (Seu Servidor)
```
1. Colocar imagem em /public/
2. Referir como: src="/nome-imagem.jpg"
Exemplo: src="/hero-custom.jpg"
```

### Opção 4: Cloudinary (Melhor Qualidade + Otimização)
```
1. Registre em https://cloudinary.com (free tier)
2. Upload da imagem
3. Use URL com transformações automáticas
Exemplo: 
https://res.cloudinary.com/seu-usuario/image/upload/w_800,h_1066,c_fill/seu-arquivo.jpg
```

---

## DICAS DE OTIMIZAÇÃO

### Compressão Recomendada
- **TinyPNG:** https://tinypng.com (JPG/PNG, até 20MB)
- **Squoosh:** https://squoosh.app (WebP + JPG)
- **ImageOptim:** App para Mac

### Formatos Recomendados
- **JPG:** Fotos realistas (85-90% quality)
- **WebP:** Melhor compressão (suporte moderno)
- **PNG:** Apenas se tiver transparência

### Tamanho Máximo de Arquivo
- Mobile: 60-100KB
- Tablet: 80-150KB
- Desktop: 150-200KB

### Alt Text (Acessibilidade)
Sempre adicione descrições significativas:
```html
alt="Homem em terno cinza, presença visual sofisticada, iluminação profissional"
```

---

## CHECKSUM DE QUALIDADE

Antes de fazer upload, verifique:

- [ ] Imagem tem resolução adequada (não menor que recomendado)
- [ ] Arquivo comprimido (< 200KB)
- [ ] Formato JPG (85-90%) ou WebP
- [ ] Aspect ratio correto
- [ ] Imagem nítida e bem iluminada
- [ ] Sem marca d'água visível
- [ ] Estética consistente com brand (masculino, editorial, premium)
- [ ] Alt text descritivo adicionado
- [ ] URL testado antes de commitar

---

## LINKS DOS COMPONENTES

| Componente | Arquivo | Linha | Variável |
|-----------|---------|-------|----------|
| Hero | Hero.tsx | 77 | `src="URL"` |
| ModernDating | ModernDating.tsx | 47 | `src="URL"` |
| InvisibleCost | InvisibleCost.tsx | 26, 50 | `src="URL"` (2x) |
| Ethics | Ethics.tsx | 35 | `src="URL"` |
| Transformations | Transformations.tsx | 3-20 | `before:`, `after:` (8x) |
| Proofs | Proofs.tsx | 3-30 | `src:` (6x) |

---

## EXEMPLO DE SUBSTITUIÇÃO

**Antes:**
```typescript
{
  label: 'Invisível → Magnético',
  before: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=400',
  after: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400',
}
```

**Depois (com suas imagens):**
```typescript
{
  label: 'Invisível → Magnético',
  before: 'https://res.cloudinary.com/seu-usuario/image/upload/w_440,h_586/before-1.jpg',
  after: 'https://res.cloudinary.com/seu-usuario/image/upload/w_440,h_586/after-1.jpg',
}
```

---

**Última atualização:** 2026-05-17  
**Versão:** 1.0
